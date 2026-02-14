import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";
import { homepageProfile } from "@/lib/data";

export function Footer() {
  const currentYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());

  return (
    <footer className="py-10">
      <div className="site-shell">
        <div className="section-panel">
          <div className="section-panel-body flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-mono text-muted-foreground">Build with intent</p>
              <h2 className="display-title mt-2 text-2xl sm:text-3xl">
                Let&apos;s build software that moves the business.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Open to freelance software engineering collaborations, product roles, and thoughtful
                technical partnerships.
              </p>
              <Link
                href={`mailto:${homepageProfile.contact.email}`}
                className="mt-3 inline-flex text-sm font-medium text-accent hover:underline"
              >
                {homepageProfile.contact.email}
              </Link>
            </div>

            <div className="flex flex-col items-start gap-4 sm:items-end">
              <SocialIcons size="sm" />
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                &copy; <span suppressHydrationWarning>{currentYear}</span> Dy Minea
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
