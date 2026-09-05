import { statistics } from "@/lib/content";
import { useEffect, useRef, useState } from "react";

/**
 * Dark charcoal separator section with animated number counters.
 * Counters animate on scroll via IntersectionObserver, with gold accents
 * on the key numbers. Respects prefers-reduced-motion.
 */
export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#0F172A] py-20 lg:py-24"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]"
      />

      <div
        ref={ref}
        className="relative mx-auto grid w-full max-w-[1320px] grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10"
      >
        {statistics.map((stat, index) => (
          <div
            key={stat.label}
            data-ocid={`stats.item.${index + 1}`}
            className="flex flex-col items-center text-center"
          >
            <div className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl lg:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} start={inView} />
            </div>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface CounterProps {
  value: number;
  suffix: string;
  start: boolean;
}

/**
 * Smoothly counts from 0 to `value` once `start` becomes true.
 * Uses requestAnimationFrame and respects prefers-reduced-motion.
 */
function Counter({ value, suffix, start }: CounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic for a smooth, premium feel
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
