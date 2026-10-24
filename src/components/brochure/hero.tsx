import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-glow/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-brand-deep/15 blur-[120px]" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <ShieldCheck className="h-4 w-4 text-brand-glow" />
          All systems operational · 99.98% uptime
        </div>

        <h1
          className="animate-fade-up mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          Cloud.Managed.
          <br />
          <span className="text-gradient-brand">Services</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          Cloud.Lab is a managed IT services provider delivering proactive
          monitoring, hardened cybersecurity, and 24/7 support — so your team
          can focus on your business, not your infrastructure.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <Button asChild size="lg" className="glow-soft text-base">
            <a href="#contact">
              Get a Free IT Audit <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <a href="#services">
              <PlayCircle className="h-5 w-5" /> Explore Services
            </a>
          </Button>
        </div>

        {/* Trust strip */}
        <div
          className="animate-fade-up mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
          style={{ animationDelay: "480ms" }}
        >
          {[
            { value: "500+", label: "Endpoints monitored" },
            { value: "120+", label: "Businesses supported" },
            { value: "24/7", label: "Help desk & NOC" },
            { value: "< 15 min", label: "Avg. response time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-card/80 px-4 py-6 backdrop-blur"
            >
              <span className="font-display text-2xl font-bold text-brand-glow">
                {stat.value}
              </span>
              <span className="text-center text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
