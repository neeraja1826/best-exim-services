import {
  footerQuickLinks,
  footerServices,
  site,
  socialLinks,
} from "@/lib/content";
import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
} as const;

/**
 * Modern multi-column footer with company information, services, quick links,
 * contact details, social icons and copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white" data-ocid="footer">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3">
              <span className="gradient-primary flex h-11 w-11 items-center justify-center rounded-xl font-display text-lg font-extrabold text-white">
                B
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">
                  Best EXIM
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-accent">
                  Services
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {site.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-ocid={`footer.social.${social.label.toLowerCase()}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-smooth hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid={`footer.service.${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                    className="text-sm text-white/70 transition-smooth hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid={`footer.link.${link.label.toLowerCase()}`}
                    className="text-sm text-white/70 transition-smooth hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  data-ocid="footer.phone"
                  className="flex items-start gap-3 text-sm text-white/70 transition-smooth hover:text-accent"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  data-ocid="footer.email"
                  className="flex items-start gap-3 text-sm text-white/70 transition-smooth hover:text-accent"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-smooth hover:text-white"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
