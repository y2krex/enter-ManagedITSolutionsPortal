import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";

const faqs = [
  {
    question: "How quickly can you take over our IT?",
    answer:
      "Most clients are fully onboarded within 2–4 weeks. We start with a free audit, prioritize critical fixes, and roll out monitoring, security, and backups in phases so there's zero disruption to your team.",
  },
  {
    question: "Do you work with our existing vendors and software?",
    answer:
      "Yes. We integrate with the tools you already use — Microsoft 365, Google Workspace, AWS, Azure, your line-of-business apps — and manage vendor relationships so you have a single point of contact.",
  },
  {
    question: "Is there a long-term contract lock-in?",
    answer:
      "All plans are month-to-month after an initial 3-month onboarding period. We earn your business every month with results — not by trapping you in a contract.",
  },
  {
    question: "What happens if we have an emergency at 3 AM?",
    answer:
      "Our NOC and help desk operate 24/7/365. Critical issues trigger automated escalation to senior engineers, and emergency response times are backed by our SLAs.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "We enforce least-privilege access, encryption at rest and in transit, immutable backups, and continuous vulnerability scanning. Our controls are aligned to SOC 2 and support HIPAA and GDPR requirements.",
  },
  {
    question: "Can you help us move to the cloud?",
    answer:
      "Absolutely — cloud strategy, migration, and optimization are core services. We'll assess your workloads, right-size your infrastructure, and move you without business interruption.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative border-y border-border/60 bg-card/40 py-24 md:py-32"
    >
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered"
          description="Everything you need to know about partnering with Cloud.Lab."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="rounded-xl border bg-card/60 px-5 transition-colors hover:border-brand-glow/25"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
