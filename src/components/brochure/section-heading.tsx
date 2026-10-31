import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-glow/30 bg-brand-glow/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-glow">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-glow" />
        {eyebrow}
      </span>
      {title && (
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[42px]">
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
