import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

/**
 * Full-viewport hero. Left: exact heading, description and CTAs.
 * Right: a premium CSS/SVG 3D business illustration (global trade,
 * digital documentation, logistics, compliance, finance, connected world).
 * Background: very subtle animated grid with soft glowing particles.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Subtle animated grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.24_0.025_260/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.24_0.025_260/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />
      {/* Soft glowing particles */}
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-accent/40 blur-[1px] animate-pulse-soft" />
        <span className="absolute left-[38%] top-[68%] h-1.5 w-1.5 rounded-full bg-accent/30 blur-[1px] animate-pulse-soft [animation-delay:1.2s]" />
        <span className="absolute right-[30%] top-[18%] h-2.5 w-2.5 rounded-full bg-accent/30 blur-[1px] animate-pulse-soft [animation-delay:2.1s]" />
        <span className="absolute right-[14%] top-[55%] h-1.5 w-1.5 rounded-full bg-accent/40 blur-[1px] animate-pulse-soft [animation-delay:0.6s]" />
        <span className="absolute left-[55%] top-[30%] h-1 w-1 rounded-full bg-accent/40 blur-[1px] animate-pulse-soft [animation-delay:1.7s]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Left — copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              Best EXIM Services
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Expert DGFT Services for{" "}
              <span className="text-accent">Hassle-Free</span> Compliance and
              Approvals
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {site.heroSubheading}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                data-ocid="hero.learn_more_button"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-subtle transition-smooth hover:-translate-y-0.5 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Learn More
              </a>
              <a
                href="#contact"
                data-ocid="hero.contact_button"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-smooth hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — 3D business illustration */}
        <Reveal delay={200} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Premium CSS/SVG 3D abstract business illustration: glass cubes, a globe,
 * a wireframe world map, gold geometric accents and connected nodes.
 */
function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[560px]"
    >
      {/* Soft radial glow behind the composition */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/15 via-transparent to-primary/10 blur-2xl" />

      {/* Wireframe world map */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-primary/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <title>Wireframe world map</title>
        <circle cx="200" cy="200" r="150" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="110" strokeDasharray="2 5" opacity="0.7" />
        <ellipse cx="200" cy="200" rx="150" ry="62" opacity="0.6" />
        <ellipse cx="200" cy="200" rx="62" ry="150" opacity="0.4" />
        <path d="M50 200h300M200 50v300" opacity="0.35" />
      </svg>

      {/* Connected nodes */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-accent/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <title>Connected trade nodes</title>
        <path d="M120 120 L200 90 L280 150 L200 300 L120 120 Z" opacity="0.6" />
        <path d="M120 120 L280 150 L200 300" opacity="0.35" />
      </svg>

      {/* Globe */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-float">
        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-elevated">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <svg
            viewBox="0 0 160 160"
            className="absolute inset-0 h-full w-full text-white/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <title>Globe meridians</title>
            <ellipse cx="80" cy="80" rx="80" ry="34" />
            <ellipse cx="80" cy="80" rx="34" ry="80" />
            <path d="M0 80h160M80 0v160" />
          </svg>
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_oklch(0.62_0.12_80/0.7)]" />
        </div>
      </div>

      {/* Glass cube — top left */}
      <div className="absolute left-[6%] top-[10%] h-24 w-24 animate-float [animation-delay:1.4s]">
        <div className="glass h-full w-full rounded-2xl border border-white/60 shadow-elevated" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent" />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
      </div>

      {/* Glass cube — bottom right */}
      <div className="absolute bottom-[8%] right-[8%] h-28 w-28 animate-float [animation-delay:2.2s]">
        <div className="glass-dark h-full w-full rounded-2xl border border-white/10 shadow-elevated" />
        <span className="absolute left-3 top-3 h-2 w-2 rounded-full bg-accent/80" />
      </div>

      {/* Gold geometric accent — top right */}
      <div className="absolute right-[4%] top-[24%] h-16 w-16 rotate-12 animate-float [animation-delay:0.8s]">
        <div className="gradient-primary h-full w-full rounded-xl shadow-elevated" />
        <div className="absolute inset-0 rounded-xl border border-white/30" />
      </div>

      {/* Small floating document card */}
      <div className="absolute bottom-[16%] left-[10%] h-16 w-20 animate-float [animation-delay:1.8s]">
        <div className="glass h-full w-full rounded-lg border border-white/60 p-2 shadow-elevated">
          <div className="h-1 w-3/4 rounded bg-primary/30" />
          <div className="mt-1.5 h-1 w-full rounded bg-primary/15" />
          <div className="mt-1 h-1 w-5/6 rounded bg-primary/15" />
          <div className="mt-1 h-1 w-2/3 rounded bg-primary/15" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>

      {/* Gold ring accent */}
      <div className="absolute left-[30%] top-[6%] h-10 w-10 rounded-full border-2 border-accent/60" />
    </div>
  );
}
