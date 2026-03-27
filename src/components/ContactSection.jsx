import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { contactDetails, initialFormData } from "../data/siteContent";
import {
  createWhatsAppLink,
  defaultWhatsAppMessage,
} from "../utils/whatsapp";
import SectionHeading from "./SectionHeading";

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.phone || !formData.requirement) {
      setFormStatus("Please fill in your name, phone number, and requirement.");
      return;
    }

    const enquiryHref = createWhatsAppLink([
      `New enquiry from ${formData.name} | ABHINAV TRADERS website`,
      `Phone: ${formData.phone}`,
      `City: ${formData.city || "Not provided"}`,
      `Requirement: ${formData.requirement}`,
      "",
      "Message:",
      formData.message || "No additional message",
    ]);

    window.open(enquiryHref, "_blank", "noopener,noreferrer");
    setFormStatus(
      "WhatsApp opened with your enquiry details ready to send to ABHINAV TRADERS.",
    );
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact & Enquiry"
          title="Make it effortless for customers to connect with ABHINAV TRADERS."
          description="Visitors can call, chat on WhatsApp, or open the location from the same page."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-steel p-6 text-white shadow-glow sm:p-8">
            <h3 className="font-display text-3xl font-bold">Business Details</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              A clear, premium contact area builds confidence and helps serious
              buyers reach out without delay.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const href =
                  detail.label === "WhatsApp"
                    ? defaultWhatsAppMessage()
                    : detail.href;
                const isExternal = href?.startsWith("http");

                return (
                  <div
                    key={detail.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-sand text-ink">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          {detail.label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                            className="mt-2 block break-words text-base font-semibold text-white transition hover:text-sand"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-2 break-words text-base font-semibold text-white">
                            {detail.value}
                          </p>
                        )}
                        {detail.secondaryHref && (
                          <a
                            href={detail.secondaryHref}
                            className="mt-1 block text-sm text-white/62 transition hover:text-sand"
                          >
                            {detail.secondaryValue}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+919569555234"
                className="inline-flex items-center justify-center rounded-full bg-sand px-5 py-3 text-sm font-bold text-ink transition hover:bg-amber"
              >
                Call Now
              </a>
              <a
                href={defaultWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-sand hover:text-sand"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-ink/8 bg-white p-6 shadow-[0_24px_70px_rgba(14,20,32,0.08)] sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber">
                  Quick Enquiry Form
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold text-ink">
                  Let buyers contact you in minutes.
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-6 text-slate">
                Submitting the form opens WhatsApp chat pre-filled to
                +91 95695 55234.
              </p>
            </div>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-amber focus:bg-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-amber focus:bg-white"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">
                    City / Area
                  </span>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Where is the requirement?"
                    className="w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-amber focus:bg-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">
                    Requirement
                  </span>
                  <input
                    type="text"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    placeholder="Bulk order / dealer query / project need"
                    className="w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-amber focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Share quantity, timeline, or any additional details"
                  className="w-full rounded-3xl border border-ink/10 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-amber focus:bg-white"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-steel"
                >
                  Submit Enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <p className="text-sm leading-6 text-slate">
                  Prefer direct contact? Call{" "}
                  <a href="tel:+919569555234" className="font-semibold text-amber">
                    9569555234
                  </a>
                </p>
              </div>

              {formStatus && (
                <div className="rounded-2xl border border-amber/20 bg-sand/10 px-4 py-3 text-sm font-medium text-ink">
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
