import { Link } from "react-router-dom";
import { CloudCog, Linkedin, Twitter, Youtube } from "lucide-react";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Managed IT Support", href: "/#services" },
      { label: "Cybersecurity", href: "/#services" },
      { label: "Cloud & Infrastructure", href: "/#services" },
      { label: "Backup & DR", href: "/#services" },
      { label: "Compliance", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Cloud.Lab", href: "/#why-us" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Managed Services", href: "/#managed-services" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free IT Audit", href: "/contact" },
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
            <Link to="/" className="flex items-center gap-2.5">
              <span className="glow-primary flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-glow to-brand-deep text-primary-foreground">
                <CloudCog className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Cloud<span className="text-brand-glow">.Lab</span>
              </span>
            </Link>
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
                    {link.href === "#" ? (
                      <a
                        href="#"
                        className="cursor-default text-sm text-muted-foreground opacity-70"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-brand-glow"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-14 border-t border-border/60 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cloud.Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
