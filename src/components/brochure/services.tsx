import {
  CloudCog,
  HelpCircle,
  KeyRound,
  MonitorSmartphone,
  ShieldCheck,
  ServerCog,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Managed IT Support",
    description:
      "Fully-managed IT operations, proactive maintenance, patching, and monitoring across every endpoint and server in your environment.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Next-gen endpoint protection, SIEM, phishing defense, and vulnerability management that keeps your data safe around the clock.",
  },
  {
    icon: CloudCog,
    title: "Cloud & Infrastructure",
    description:
      "Architect, migrate, and optimize your cloud footprint on AWS, Azure, and Google Cloud — right-sized to your budget.",
  },
  {
    icon: HelpCircle,
    title: "24/7 Help Desk",
    description:
      "A responsive service desk your team actually loves, with SLA-backed response times and senior engineers on every ticket.",
  },
  {
    icon: ServerCog,
    title: "Backup & Disaster Recovery",
    description:
      "Immutable backups, tested recovery plans, and rapid failover so downtime never becomes a business crisis.",
  },
  {
    icon: KeyRound,
    title: "Compliance & Identity",
    description:
      "SOC 2, HIPAA, and GDPR readiness with centralized identity, access controls, and audit-ready reporting.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete IT, Under One Roof"
          description="Every service your business needs to run on secure, reliable technology — delivered by a single accountable partner."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-glow/40 hover:shadow-[0_18px_50px_-20px_hsl(var(--brand-glow)/0.35)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-glow/10 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-glow/25 bg-brand-glow/10 text-brand-glow transition-colors group-hover:bg-brand-glow/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
