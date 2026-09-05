import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/**
 * Reusable section title with an eyebrow label, large heading and optional
 * description. Gold accents used sparingly on the eyebrow and underline.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn("max-w-3xl", centered && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-accent" : "text-accent",
          )}
        >
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
          {centered && (
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
          )}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
