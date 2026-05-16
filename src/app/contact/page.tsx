import type { Metadata } from "next";
import { Globe2, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section";
import { contactInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AVA and Analogic for RF plasma generator product information, sales, service, or repair support.",
};

const interests = [
  "AVA 1213",
  "AVA 3013",
  "AVA 6013",
  "Service / Repair",
  "General Inquiry",
];

const inquiryEmail = "tnaeem@analogic";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 micro-grid opacity-50" aria-hidden="true" />
        <div
          className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Contact"
              title="Talk with AVA about RF power delivery."
              body="Use the form for product information, selection guidance, service, repair, or general inquiries."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form
              action={`mailto:${inquiryEmail}?subject=AVA%20Website%20Inquiry`}
              method="post"
              encType="text/plain"
              className="premium-card rounded-3xl p-6 md:p-8"
            >
              <input type="hidden" name="recipient" value={inquiryEmail} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" id="first-name" autoComplete="given-name" />
                <Field label="Last name" id="last-name" autoComplete="family-name" />
                <Field label="Company" id="company" autoComplete="organization" />
                <Field label="Email" id="email" type="email" autoComplete="email" />
                <Field label="Phone" id="phone" type="tel" autoComplete="tel" />
                <div>
                  <label
                    htmlFor="product-interest"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Product interest
                  </label>
                  <select
                    id="product-interest"
                    name="product-interest"
                    className="mt-2 min-h-12 w-full rounded-xl border border-slate-300/80 bg-white/80 px-3 text-sm text-slate-950 outline-none shadow-sm transition focus:border-[#246BFE] focus:ring-4 focus:ring-blue-100"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {interests.map((interest) => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-slate-300/80 bg-white/80 px-3 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-[#246BFE] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#246BFE] to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE] active:translate-y-0"
              >
                Send Inquiry
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-5">
              <div className="premium-card rounded-3xl p-7">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Contact details
                </h2>
                <div className="mt-6 space-y-5">
                  <ContactLine icon={Phone} label="Phone" value={contactInfo.phone} />
                  <ContactLine
                    icon={Globe2}
                    label="Website"
                    value={contactInfo.website}
                    href={contactInfo.websiteUrl}
                  />
                  <ContactLine icon={MapPin} label="Address" value={contactInfo.address} />
                </div>
              </div>

              <div className="premium-card overflow-hidden rounded-3xl p-0">
                <iframe
                  title="Analogic office map"
                  src="https://www.google.com/maps?q=9%20Northeastern%20Boulevard%2C%20Salem%2C%20NH%2003079%2C%20USA&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="border-t border-slate-200/80 bg-white/80 p-5 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246BFE]">
                    Salem, New Hampshire
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  autoComplete,
}: {
  label: string;
  id: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        className="mt-2 min-h-12 w-full rounded-xl border border-slate-300/80 bg-white/80 px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-[#246BFE] focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#246BFE] to-cyan-400 text-white shadow-lg shadow-blue-500/20">
        <Icon size={20} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-sm font-semibold text-slate-900 transition hover:text-[#246BFE]"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">{value}</p>
        )}
      </div>
    </div>
  );
}
