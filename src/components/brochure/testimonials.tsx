import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./section-heading";

const testimonials = [
  {
    quote:
      "Cloud.Lab cut our IT spend by 30% and our downtime basically disappeared. Their team feels like an extension of our own.",
    name: "Sarah Mitchell",
    role: "COO, Meridian Logistics",
  },
  {
    quote:
      "They found a vulnerability our previous provider missed for years. The security posture review alone was worth the switch.",
    name: "David Okafor",
    role: "CTO, Northbridge Financial",
  },
  {
    quote:
      "Migrating to the cloud felt daunting — until Cloud.Lab handled every step. Zero business interruption during go-live.",
    name: "Priya Raghavan",
    role: "Founder, Lumen Health",
  },
  {
    quote:
      "Our team never waits for IT anymore. The help desk resolves tickets in minutes, and the reporting keeps leadership informed.",
    name: "James Whitfield",
    role: "Operations Director, Arcstone Retail",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative border-y border-border/60 bg-card/40 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-glow/50 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by Businesses Like Yours"
        />

        <div className="relative mt-14 px-2 md:px-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="flex h-full flex-col justify-between rounded-xl border border-border bg-card/70 p-7 transition-colors hover:border-brand-glow/30">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <Quote className="h-8 w-8 text-brand-glow/60" />
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-brand-glow text-brand-glow"
                            />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-sm leading-relaxed text-foreground/90">
                        “{item.quote}”
                      </blockquote>
                    </div>
                    <figcaption className="mt-6 border-t border-border pt-4">
                      <p className="font-display text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.role}
                      </p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
