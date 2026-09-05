import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/content";
import { Quote, Star } from "lucide-react";

/**
 * Testimonials section — light zone featuring client quotes verbatim from
 * the content module in premium cards with gold accents.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-background py-20 lg:py-28"
      data-ocid="testimonials.section"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          description="Real feedback from the businesses we help navigate export-import compliance, approvals and documentation every day."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 100}
              className="h-full"
            >
              <figure
                data-ocid={`testimonials.card.${index + 1}`}
                className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-subtle transition-smooth hover:-translate-y-1 hover:shadow-elevated"
              >
                <Quote
                  className="absolute right-7 top-7 h-9 w-9 text-accent/20"
                  aria-hidden="true"
                />

                <div
                  className="flex items-center gap-1 text-accent"
                  aria-label="5 out of 5 stars"
                >
                  <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
                </div>

                <blockquote className="mt-5 flex-1">
                  <p className="text-base leading-relaxed text-foreground">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-border pt-6">
                  <span
                    className="gradient-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white"
                    aria-hidden="true"
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-display text-base font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
