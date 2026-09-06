import { ClipboardCheck, Rocket, Settings, Waypoints } from "lucide-react";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free IT Audit",
    description:
      "We assess your infrastructure, security posture, and pain points — then deliver a roadmap with no obligations.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Plan & Onboard",
    description:
      "We map your environment, migrate critical systems, and roll out monitoring, backups, and security controls.",
  },
  {
    icon: Waypoints,
    step: "03",
    title: "Go-Live",
    description:
      "Your team gets a single dashboard, a dedicated support channel, and a documented IT strategy they can trust.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Continuous Improvement",
    description:
      "Quarterly strategy reviews, proactive patching, and monthly reporting keep your IT ahead of your growth.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Onboarded in Weeks, Not Months"
          description="A proven, low-friction path from first call to fully-managed IT."
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-glow/40 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="relative flex flex-col">
                <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-brand-glow/30 bg-card shadow-[0_0_30px_-10px_hsl(var(--brand-glow)/0.5)]">
                  <item.icon className="h-7 w-7 text-brand-glow" />
                  <span className="absolute -right-2 -top-2 rounded-md bg-brand-deep px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
