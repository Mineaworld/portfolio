"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { homeNavigation } from "@/lib/data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<HomeHref>("#home");

  const sectionIds = useMemo(
    () => homeNavigation.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) {
          return;
        }

        setActiveHref(`#${visible.target.id}` as HomeHref);
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.05, 0.1, 0.2, 0.35],
      }
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: HomeHref
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveHref(href);
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-shell">
        <div
          className={cn(
            "mt-2 rounded-2xl border px-3 py-2 transition-all duration-300 sm:px-4",
            isScrolled
              ? "border-border/95 bg-background/88 shadow-[0_12px_24px_hsl(var(--foreground)/0.08)] backdrop-blur"
              : "border-border/80 bg-background/74 backdrop-blur-sm"
          )}
        >
          <div className="flex h-10 items-center gap-3">
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "#home")}
              className="line-clamp-1 font-mono text-sm font-semibold tracking-[0.08em] text-foreground"
            >
              DY MINEA
            </a>

            <div className="flex-1" />

            <nav className="hidden items-center gap-1 md:flex">
              {homeNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(event, item.href as HomeHref)
                  }
                  className={cn(
                    "rounded-full px-3 py-1.5 font-mono text-xs tracking-[0.09em] transition-colors",
                    activeHref === item.href
                      ? "bg-accent/12 text-accent"
                      : "text-foreground hover:text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background text-foreground md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div className="mt-2 border-t border-border/80 pt-2 md:hidden">
              <nav className="grid gap-1 pb-1">
                {homeNavigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavClick(event, item.href as HomeHref)
                    }
                    className={cn(
                      "rounded-lg px-3 py-2 font-mono text-xs tracking-[0.09em] transition-colors",
                      activeHref === item.href
                        ? "bg-accent/12 text-accent"
                        : "text-foreground hover:bg-muted/65 hover:text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

type HomeHref = (typeof homeNavigation)[number]["href"];
