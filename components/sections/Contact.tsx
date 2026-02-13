"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { homepageProfile } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactHighlights = [
  {
    label: "Email",
    value: homepageProfile.contact.email,
    detail: "Drop a message anytime.",
    icon: Mail,
  },
  {
    label: "Location",
    value: homepageProfile.contact.location,
    detail: "Available for remote work.",
    icon: MapPin,
  },
  {
    label: "Response",
    value: homepageProfile.contact.responseWindow,
    detail: "I prioritize clear and prompt communication.",
    icon: Clock,
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (_values: ContactFormValues) => {
    setIsSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1100);
    });

    toast.success("Message sent. I will get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="scroll-mt-28 pb-2">
      <div className="section-panel rise-in">
        <div className="section-panel-header">
          <p className="label-mono text-muted-foreground">Contact</p>
          <h2 className="display-title mt-2 text-3xl sm:text-4xl">
            Let&apos;s ship your next product.
          </h2>
        </div>

        <div className="section-panel-body grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-xl border border-border/80 bg-secondary/45 p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Share your scope, timeline, and current product stage. I can help
              with UI refactors, architecture decisions, and delivery from idea to launch.
            </p>

            <div className="mt-6 space-y-3">
              {contactHighlights.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <article
                    key={item.label}
                    className="rounded-lg border border-border/80 bg-background/70 p-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary/60 text-muted-foreground">
                        <ItemIcon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="label-mono text-muted-foreground">{item.label}</p>
                        <p className="mt-1 text-sm font-semibold">{item.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>

          <div className="rounded-xl border border-border/80 bg-background/70 p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project or collaboration topic" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me what you are building and where you need help."
                          className="min-h-[140px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
