import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const stats: Stat[] = [
  { value: 99.98, suffix: "%", label: "Uptime SLA delivered", decimals: 2 },
  { value: 15000, suffix: "+", label: "Security alerts triaged / yr" },
  { value: 45, suffix: " min", label: "Median incident resolution" },
  { value: 98, suffix: "%", label: "Client retention rate" },
];

const Counter = ({ stat }: { stat: Stat }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(stat.value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  const formatted = stat.decimals
    ? display.toFixed(stat.decimals)
    : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className="font-display text-4xl font-bold md:text-5xl">
      <span className="text-gradient-brand">
        {formatted}
        {stat.suffix}
      </span>
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="relative border-y border-border/60 bg-card/40 py-20">
      <div className="pointer-events-none absolute inset-0 bg-brand-deep/5 blur-3xl" />
      <div className="container relative z-10 grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <Counter stat={stat} />
            <span className="max-w-[180px] text-sm text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
