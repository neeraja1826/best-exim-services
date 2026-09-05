import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dgftServices, services } from "@/lib/content";
import {
  Award,
  Building2,
  Check,
  FileText,
  Globe,
  Landmark,
  type LucideIcon,
  Shield,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  shield: Shield,
  landmark: Landmark,
  award: Award,
  file: FileText,
  building: Building2,
};

/**
 * Services section — premium card grid of the six core services with large
 * icons, hover elevation and an expandable DGFT detail list.
 */
export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive EXIM & Compliance Solutions"
          description="From DGFT authorisations to customs, GST and company compliance, we deliver end-to-end support under one roof."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const isDgft = service.title === "DGFT Services";
            return (
              <Reveal key={service.title} delay={index * 80}>
                <article
                  data-ocid={`services.card.${index + 1}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-subtle transition-smooth hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elevated"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-accent transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon
                      className="h-8 w-8"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {isDgft ? (
                    <Accordion
                      type="single"
                      collapsible
                      className="mt-5 w-full"
                    >
                      <AccordionItem value="dgft-list" className="border-0">
                        <AccordionTrigger
                          data-ocid="services.dgft.expand"
                          className="justify-start gap-2 py-0 text-sm font-semibold text-accent hover:no-underline"
                        >
                          View all DGFT services
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <ul className="space-y-2.5">
                            {dgftServices.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-foreground"
                              >
                                <Check
                                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                                  strokeWidth={2.5}
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more
                    </span>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
