import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ClipboardCheck,
  FileSignature,
  Handshake,
  type LucideIcon,
  Search,
  Send,
} from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: ProcessStep[] = [
  {
    title: "Consultation",
    description:
      "We begin with a detailed discussion to understand your business, trade profile and compliance requirements.",
    icon: Search,
  },
  {
    title: "Documentation",
    description:
      "Our experts prepare and organise every required document with precision, ensuring nothing is overlooked.",
    icon: FileSignature,
  },
  {
    title: "Filing & Compliance",
    description:
      "We file your applications and manage regulatory submissions, tracking each case through to approval.",
    icon: ClipboardCheck,
  },
  {
    title: "Approval & Follow-up",
    description:
      "We secure your approvals and provide ongoing support, keeping your compliance current and worry-free.",
    icon: Send,
  },
  {
    title: "Ongoing Partnership",
    description:
      "A dedicated relationship that grows with your business, offering continuous guidance as regulations evolve.",
    icon: Handshake,
  },
];

/**
 * Process section — dark charcoal separator converted into a premium timeline
 * with glass cards, icons, connector lines and minimal animation.
 */
export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0F172A] py-20 sm:py-28"
    >
      {/* subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="How We Work"
          title="A Seamless, Transparent Process"
          description="A clear, structured journey from first consultation to long-term compliance — so you always know where you stand."
        />

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 120}
                className="relative"
              >
                <div className="glass-dark group relative flex h-full flex-col rounded-2xl border border-white/10 p-6 transition-smooth hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-elevated">
                  <div className="relative z-10 mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-[#0F172A] text-accent transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
