import { Activity, BadgeCheck, Headset, Wallet } from "lucide-react";
import { SectionHeading } from "./section-heading";

const reasons = [
  {
    icon: Activity,
    title: "Proactive, Not Reactive",
    description:
      "Our NOC monitors your environment 24/7 and resolves 80% of issues before you ever notice them.",
  },
  {
    icon: Headset,
    title: "Senior Engineers Only",
    description:
      "No script-flipping tier-1 queues. Every ticket reaches a certified engineer who knows your stack.",
  },
  {
    icon: Wallet,
    title: "Flat-Rate Pricing",
    description:
      "Predictable monthly costs with no surprise invoices. Hardware, licenses, and labor included.",
  },
  {
    icon: BadgeCheck,
    title: "SOC 2 Type II Aligned",
    description:
      "Audit-ready security controls and a documented process that stands up to the strictest compliance review.",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative border-y border-border/60 bg-card/40 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Cloud.Lab"
              title="The Partner Your Business Can Rely On"
              description="We measure our success by your uptime, your security posture, and your team's ability to get work done. Here's what makes us different."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex flex-col gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-glow/25 bg-brand-glow/10 text-brand-glow">
                    <reason.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="glow-soft glass-panel relative z-10 rounded-2xl p-8">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Network Health
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-foreground">
                    All systems nominal
                  </p>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Patch coverage", value: 100 },
                  { label: "Backup success", value: 99 },
                  { label: "Threats blocked", value: 96 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-mono text-foreground">
                        {row.value}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-glow to-brand-deep"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-0 rounded-3xl bg-brand-glow/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
