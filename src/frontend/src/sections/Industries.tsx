import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Cog,
  Cpu,
  Factory,
  FlaskConical,
  Gem,
  type LucideIcon,
  Pill,
  Shirt,
  Wheat,
} from "lucide-react";

interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
}

const industries: Industry[] = [
  {
    title: "Manufacturing",
    description:
      "End-to-end export documentation and incentive support for manufacturers scaling into global markets.",
    icon: Factory,
  },
  {
    title: "Textiles & Apparel",
    description:
      "Specialised guidance on RoSCTL, duty drawback and compliance for textile and garment exporters.",
    icon: Shirt,
  },
  {
    title: "Pharmaceuticals",
    description:
      "Regulatory and DGFT support for pharma exporters navigating complex licensing and documentation.",
    icon: Pill,
  },
  {
    title: "Agriculture & Food Processing",
    description:
      "Assistance with certificates of origin, subsidies and export compliance for agri and food products.",
    icon: Wheat,
  },
  {
    title: "Engineering Goods",
    description:
      "Customs classification, EPCG and advance authorisation support for engineering and capital goods.",
    icon: Cog,
  },
  {
    title: "Chemicals",
    description:
      "Expert handling of import monitoring, licensing and duty structures for the chemical sector.",
    icon: FlaskConical,
  },
  {
    title: "IT & Electronics",
    description:
      "Streamlined export documentation and incentive claims for IT hardware and electronics firms.",
    icon: Cpu,
  },
  {
    title: "Gems & Jewellery",
    description:
      "Dedicated support for import-export codes, duty structures and compliance in the gems and jewellery trade.",
    icon: Gem,
  },
];

/**
 * Industries section — dark charcoal separator zone presenting the sectors
 * served by the consultancy in a premium card grid with gold line-art icons.
 */
export function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#0F172A] py-20 lg:py-28"
      data-ocid="industries.section"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Industries We Serve"
          title="Trusted Across Diverse Export Sectors"
          description="From manufacturing to gems and jewellery, we bring deep domain expertise to every industry we support — helping businesses navigate export-import compliance with confidence."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal
                key={industry.title}
                delay={(index % 4) * 80}
                className="h-full"
              >
                <article
                  data-ocid={`industries.card.${index + 1}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-smooth group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                    {industry.description}
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
