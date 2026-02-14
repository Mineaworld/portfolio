import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactRequestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(5).max(140),
  message: z.string().trim().min(10).max(4000),
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

declare global {
  // Persist in-memory counters across module reloads in dev.
  var __contactRequestCounts__: Map<string, { count: number; resetAt: number }> | undefined;
}

const requestCounts =
  globalThis.__contactRequestCounts__ ??
  new Map<string, { count: number; resetAt: number }>();

globalThis.__contactRequestCounts__ = requestCounts;

const getRateLimitKey = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown-ip";
  const userAgent = request.headers.get("user-agent") ?? "unknown-agent";
  return `${ip}:${userAgent.slice(0, 120)}`;
};

const isRateLimited = (key: string) => {
  const now = Date.now();
  const current = requestCounts.get(key);

  if (!current || current.resetAt <= now) {
    requestCounts.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  current.count += 1;
  requestCounts.set(key, current);
  return false;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getEnv = () => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return null;
  }

  return { apiKey, to, from };
};

export async function POST(request: NextRequest) {
  const rateLimitKey = getRateLimitKey(request);

  if (isRateLimited(rateLimitKey)) {
    return NextResponse.json(
      {
        ok: false,
        code: "RATE_LIMITED",
        message: "Too many requests. Please try again in a minute.",
      },
      { status: 429 }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_JSON",
        message: "Invalid request body.",
      },
      { status: 400 }
    );
  }

  const parsed = contactRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Please review the form fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const env = getEnv();
  if (!env) {
    return NextResponse.json(
      {
        ok: false,
        code: "CONTACT_NOT_CONFIGURED",
        message: "Contact form is not configured yet.",
      },
      { status: 500 }
    );
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(env.apiKey);

  try {
    const { error } = await resend.emails.send({
      from: env.from,
      to: env.to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "DELIVERY_FAILED",
        message: "Message could not be sent right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}
