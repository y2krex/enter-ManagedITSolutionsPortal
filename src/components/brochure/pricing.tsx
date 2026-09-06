import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

const plans = [
  {
    name: "Essential",
    price: 99,
    per: "per user / month",
    description: "Foundational managed IT for small teams.",
    features: [
      "24/7 remote monitoring",
      "Help desk support (business hours)",
      "Patch & update management",
      "Antivirus / endpoint protection",
      "Monthly health report",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: 149,
    per: "per user / month",
    description: "Proactive security and support for scaling companies.",
    features: [
      "Everything in Essential",
      "24/7 help desk & NOC",
      "Advanced threat detection",
      "Backup & disaster recovery",
      "Cloud infrastructure management",
      "Quarterly strategy review",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 249,
    per: "per user / month",
    description: "Full compliance and white-glove service.",
    features: [
      "Everything in Growth",
      "Dedicated account engineer",
      "SOC 2 / HIPAA / GDPR compliance",
      "Custom security operations",
      "Unlimited onboarding & training",
      "99.99% uptime SLA",
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Flat-Rate Pricing"
          description="No hidden fees, no surprise invoices. One predictable monthly cost covers your entire IT stack."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-8 transition-all duration-300",
                plan.highlighted
                  ? "glow-soft border-brand-glow/50 bg-gradient-to-b from-brand-glow/15 to-card/80 lg:-my-4 lg:py-12"
                  : "border-border bg-card/60 hover:border-brand-glow/25",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-glow to-brand-deep px-4 py-1 text-xs font-semibold text-primary-foreground">
                  <Zap className="h-3.5 w-3.5" /> Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="pb-1.5 text-sm text-muted-foreground">
                  {plan.per}
                </span>
              </div>
              <Button
                asChild
                className="mt-8 w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                <a href="#contact">Get Started</a>
              </Button>
              <ul className="mt-8 flex flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        plan.highlighted
                          ? "bg-brand-glow/20 text-brand-glow"
                          : "bg-secondary text-foreground",
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
