import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail, Send } from "lucide-react";

type IconSize = "sm" | "md" | "lg";

type SocialIconsProps = {
  className?: string;
  size?: IconSize;
};

const iconClassBySize: Record<IconSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const buttonClassBySize: Record<IconSize, string> = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.9 1H22l-6.76 7.73L23 23h-6.41l-5.02-6.59L5.8 23H2.7l7.23-8.26L1 1h6.56l4.54 5.97L18.9 1zm-1.09 20.13h1.72L6.63 2.77H4.79l13.02 18.36z" />
  </svg>
);

const socialItems = [
  {
    href: socialLinks.github,
    label: "GitHub",
    icon: Github,
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: socialLinks.twitter,
    label: "X / Twitter",
    icon: XIcon,
  },
  {
    href: socialLinks.telegram,
    label: "Telegram",
    icon: Send,
  },
  {
    href: `mailto:${socialLinks.email}`,
    label: "Email",
    icon: Mail,
  },
];

export function SocialIcons({ className, size = "md" }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={item.label}
            title={item.label}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent",
              buttonClassBySize[size]
            )}
          >
            <Icon className={iconClassBySize[size]} />
            <span className="sr-only">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
