import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { type FormEvent, useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPin,
    label: "Office",
    value: site.address,
    href: undefined,
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.service) next.service = "Please select a service of interest.";
    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <section id="contact" className="bg-background">
      {/* CTA banner — dark charcoal zone */}
      <div className="bg-[#0F172A]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 lg:py-24">
          <Reveal className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                Let&apos;s Work Together
              </span>
              <h2 className="font-display text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {site.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                {site.ctaSubtitle}
              </p>
            </div>
            <a
              href="#contact-form"
              data-ocid="contact.cta_button"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-display text-sm font-semibold text-accent-foreground shadow-elevated transition-smooth hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              Get in Touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Contact split layout — light zone */}
      <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Contact Us"
          title="We're Here to Help"
          description="Reach out to our expert consultants for guidance on DGFT, customs, GST and company compliance. We respond promptly to every inquiry."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact information — left */}
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="glass h-full rounded-2xl border border-border p-8 shadow-subtle sm:p-10">
              <h3 className="font-display text-xl font-bold text-foreground">
                Contact Details
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Prefer to reach us directly? Use any of the channels below and
                our team will get back to you.
              </p>

              <ul className="mt-8 space-y-6">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          data-ocid={`contact.${item.label.toLowerCase()}_link`}
                          className="group block rounded-lg transition-smooth hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex items-start gap-4 border-t border-border pt-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Working Hours
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                    Monday – Saturday, 9:30 AM – 6:30 PM
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Inquiry form — right */}
          <Reveal className="lg:col-span-7" delay={160}>
            <div
              id="contact-form"
              className="glass h-full rounded-2xl border border-border p-8 shadow-subtle sm:p-10"
            >
              {submitted ? (
                <output
                  data-ocid="contact.success_state"
                  className="flex h-full flex-col items-center justify-center py-12 text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-success/10 text-success">
                    <CheckCircle2 className="size-9" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                    Thank You!
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Your inquiry has been received. Our team will contact you
                    shortly to discuss how Best EXIM Services can support your
                    business.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-8"
                    data-ocid="contact.send_another_button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </Button>
                </output>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Send Us an Inquiry
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Fill in the form below and our consultants will get back to
                    you with a tailored response.
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        data-ocid="contact.name_input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        className="h-11"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          data-ocid="contact.name_error"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        data-ocid="contact.email_input"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className="h-11"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          data-ocid="contact.email_error"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        data-ocid="contact.phone_input"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "contact-phone-error" : undefined
                        }
                        className="h-11"
                      />
                      {errors.phone && (
                        <p
                          id="contact-phone-error"
                          data-ocid="contact.phone_error"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-service">
                        Service of Interest
                      </Label>
                      <Select
                        value={form.service}
                        onValueChange={(value) => update("service", value)}
                      >
                        <SelectTrigger
                          id="contact-service"
                          data-ocid="contact.service_select"
                          className={cn(
                            "h-11 w-full",
                            errors.service && "border-destructive",
                          )}
                          aria-invalid={!!errors.service}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem
                              key={service.title}
                              value={service.title}
                            >
                              {service.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p
                          data-ocid="contact.service_error"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="contact-message">Your Message</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        data-ocid="contact.message_input"
                        placeholder="Tell us about your requirements…"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "contact-message-error" : undefined
                        }
                        className="min-h-32"
                      />
                      {errors.message && (
                        <p
                          id="contact-message-error"
                          data-ocid="contact.message_error"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    data-ocid="contact.submit_button"
                    className="mt-8 w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
