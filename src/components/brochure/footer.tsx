import { CloudCog, Linkedin, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Managed IT Support", href: "#services" },
      { label: "Cybersecurity", href: "#services" },
      { label: "Cloud & Infrastructure", href: "#services" },
      { label: "Backup & DR", href: "#services" },
      { label: "Compliance", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Cloud.Lab", href: "#why-us" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free IT Audit", href: "#contact" },
      { label: "Security Guide", href: "#" },
      { label: "Status Page", href: "#" },
      { label: "Client Login", href: "#" },
    ],
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter / X" },
  { icon: Youtube, label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-glow/50 to-transparent" />
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="glow-primary flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-glow to-brand-deep text-primary-foreground">
                <CloudCog className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Cloud<span className="text-brand-glow">.Lab</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your technology, expertly managed. Proactive IT operations,
              hardened security, and 24/7 support for modern businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:border-brand-glow/40 hover:text-brand-glow"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm text-muted-foreground transition-colors hover:text-brand-glow",
                        link.href === "#" && "cursor-default opacity-70 hover:text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR"].map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cloud.Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
