import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/content";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  type LucideIcon,
  Users,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  clipboard: ClipboardList,
  badge: BadgeCheck,
  check: CheckCircle2,
};

/**
 * Why Choose Us — four premium cards with large icons, hover interaction
 * and clean spacing. Content comes verbatim from content.ts.
 */
export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-background py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Trusted Partner for Your Trade and Compliance"
          description="We combine deep regulatory expertise with a client-first approach to deliver reliable, end-to-end support."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] ?? CheckCircle2;
            return (
              <Reveal key={item.title} delay={index * 90}>
                <article
                  data-ocid={`why_choose_us.card.${index + 1}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-subtle transition-smooth hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elevated"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-8 w-8" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
