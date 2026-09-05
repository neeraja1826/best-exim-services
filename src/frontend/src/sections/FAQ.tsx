import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is an IEC (Import Export Code)?",
    answer:
      "An Import Export Code (IEC) is a 10-digit unique number issued by the DGFT that is mandatory for any business in India to import or export goods and services. We handle the complete IEC application, modification and renewal process on your behalf.",
  },
  {
    question: "What is EPCG and how does it benefit exporters?",
    answer:
      "The Export Promotion Capital Goods (EPCG) scheme allows exporters to import capital goods at a concessional customs duty, subject to fulfilling a specified export obligation. We guide you through eligibility, application and compliance to maximise the benefit.",
  },
  {
    question: "How long does DGFT processing usually take?",
    answer:
      "Processing times vary by scheme and application completeness. Simple applications such as IEC can be processed within a few working days, while more complex authorisations may take longer. We prepare accurate, complete submissions to avoid delays and keep your approvals on track.",
  },
  {
    question: "What documents are needed for customs clearance?",
    answer:
      "Typical documents include the commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and the relevant DGFT authorisation or licence. We help you assemble the correct documentation for your specific shipment and destination.",
  },
  {
    question: "What is RoDTEP and who is eligible?",
    answer:
      "RoDTEP (Remission of Duties and Taxes on Exported Products) refunds embedded duties and taxes on exported products that were not otherwise exempted or remitted. Eligibility depends on the product and destination. We assess your eligibility and manage the claim process.",
  },
  {
    question: "Do you assist with company compliance and registration?",
    answer:
      "Yes. Beyond export-import documentation, we support company registration, statutory compliance and ongoing regulatory obligations, so your business remains fully compliant while you focus on growth.",
  },
];

/**
 * FAQ section — accessible accordion with keyboard navigation and ARIA
 * attributes covering common EXIM / DGFT questions.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-secondary/40 py-20 lg:py-28"
      data-ocid="faq.section"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to the questions we hear most often about export-import compliance, DGFT schemes and documentation."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <Reveal key={faq.question} delay={index * 60}>
                <div
                  data-ocid={`faq.item.${index + 1}`}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card transition-smooth",
                    isOpen
                      ? "border-accent/40 shadow-elevated"
                      : "border-border shadow-subtle hover:border-accent/30",
                  )}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                      data-ocid={`faq.toggle.${index + 1}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <section
                    id={panelId}
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </section>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
