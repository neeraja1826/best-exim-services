import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navItems, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Transparent navigation over the hero that transitions to a white glass
 * (blur) navigation after scrolling. Includes active-state highlighting and
 * a mobile sticky navigation with a hamburger menu.
 */
export function Navbar() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 24;
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Track the active section while scrolling.
  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const onScroll = () => {
      const offset = 140;
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = `#${id}`;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "glass border-b border-border/70 shadow-subtle"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:px-8"
      >
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 border-0 bg-transparent p-0"
          aria-label={`${site.name} — home`}
        >
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl font-display text-lg font-extrabold text-white transition-smooth",
              scrolled
                ? "gradient-primary shadow-elevated"
                : "gradient-primary",
            )}
            aria-hidden="true"
          >
            B
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-lg font-bold tracking-tight transition-smooth",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              Best EXIM
            </span>
            <span
              className={cn(
                "text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-smooth",
                scrolled ? "text-accent" : "text-accent",
              )}
            >
              Services
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  data-ocid={`nav.link.${item.label.toLowerCase()}`}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-smooth",
                    scrolled
                      ? isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent transition-smooth",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-smooth hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            data-ocid="nav.contact_button"
            className="gradient-primary rounded-full border-0 px-5 py-2.5 text-sm font-semibold text-white shadow-elevated transition-smooth hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          data-ocid="nav.menu_button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl transition-smooth lg:hidden",
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10",
          )}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "glass border-t border-border/70 lg:hidden",
          menuOpen
            ? "max-h-[calc(100vh-5rem)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0",
        )}
      >
        <ul className="space-y-1 px-6 py-6">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  data-ocid={`nav.mobile.link.${item.label.toLowerCase()}`}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-smooth",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="h-2 w-2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
          <li className="pt-3">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              data-ocid="nav.mobile.contact_button"
              className="gradient-primary flex items-center justify-center gap-2 rounded-full border-0 px-5 py-3.5 text-base font-semibold text-white shadow-elevated"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
