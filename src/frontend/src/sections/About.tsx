import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

/**
 * Welcome / company introduction section. Split layout: text on one side
 * (exact welcome heading, tagline and full introduction paragraph), a 3D
 * abstract illustration on the other.
 */
export function About() {
  return (
    <section id="about" className="bg-card py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left — 3D abstract illustration */}
        <Reveal className="order-2 lg:order-1">
          <AboutVisual />
        </Reveal>

        {/* Right — copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              About Us
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {site.welcomeHeading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-lg font-medium text-accent">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {site.heroSubheading}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["DGFT", "Customs", "GST", "Subsidies"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Premium CSS/SVG 3D abstract illustration: layered glass panels, a globe,
 * gold geometric accents and connected trade nodes.
 */
function AboutVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/15 via-transparent to-primary/10 blur-2xl" />

      {/* Wireframe globe */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-primary/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <title>Wireframe globe</title>
        <circle cx="200" cy="200" r="150" strokeDasharray="4 6" />
        <ellipse cx="200" cy="200" rx="150" ry="60" opacity="0.6" />
        <ellipse cx="200" cy="200" rx="60" ry="150" opacity="0.4" />
        <path d="M50 200h300M200 50v300" opacity="0.35" />
      </svg>

      {/* Connected trade nodes */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-accent/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <title>Connected trade nodes</title>
        <path d="M110 130 L210 95 L300 160 L210 300 L110 130 Z" opacity="0.6" />
        <path d="M110 130 L300 160 L210 300" opacity="0.35" />
      </svg>

      {/* Central globe */}
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-float">
        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-elevated">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <svg
            viewBox="0 0 176 176"
            className="absolute inset-0 h-full w-full text-white/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <title>Globe meridians</title>
            <ellipse cx="88" cy="88" rx="88" ry="36" />
            <ellipse cx="88" cy="88" rx="36" ry="88" />
            <path d="M0 88h176M88 0v176" />
          </svg>
          <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_2px_oklch(0.62_0.12_80/0.7)]" />
        </div>
      </div>

      {/* Glass panel — top right */}
      <div className="absolute right-[6%] top-[12%] h-28 w-28 animate-float [animation-delay:1.5s]">
        <div className="glass h-full w-full rounded-2xl border border-white/60 shadow-elevated" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent" />
        <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-accent" />
      </div>

      {/* Gold geometric accent — bottom left */}
      <div className="absolute bottom-[10%] left-[8%] h-20 w-20 -rotate-12 animate-float [animation-delay:2.1s]">
        <div className="gradient-primary h-full w-full rounded-xl shadow-elevated" />
        <div className="absolute inset-0 rounded-xl border border-white/30" />
      </div>

      {/* Small document card — top left */}
      <div className="absolute left-[10%] top-[24%] h-16 w-20 animate-float [animation-delay:0.9s]">
        <div className="glass h-full w-full rounded-lg border border-white/60 p-2 shadow-elevated">
          <div className="h-1 w-3/4 rounded bg-primary/30" />
          <div className="mt-1.5 h-1 w-full rounded bg-primary/15" />
          <div className="mt-1 h-1 w-5/6 rounded bg-primary/15" />
          <div className="mt-1 h-1 w-2/3 rounded bg-primary/15" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>

      {/* Gold ring accent */}
      <div className="absolute right-[28%] top-[6%] h-10 w-10 rounded-full border-2 border-accent/60" />
    </div>
  );
}
