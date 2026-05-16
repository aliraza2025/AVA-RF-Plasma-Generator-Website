import type { Metadata } from "next";
import { Cpu, ExternalLink, Lightbulb, ShieldCheck, Target, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/buttons";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section";
import { contactInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AVA, Analogic's RF plasma generator brand for semiconductor manufacturing.",
};

const values = [
  {
    title: "Precision",
    body: "High-precision pulsing and process regulation for repeatable plasma control.",
    icon: Target,
  },
  {
    title: "Reliability",
    body: "Power delivery experience from demanding medical systems applied to semiconductor manufacturing.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    body: "Auto frequency tuning, advanced pulsing, and configurable interfaces for modern fabs.",
    icon: Lightbulb,
  },
  {
    title: "Service",
    body: "Depot repair capability supported by controlled components and production-aligned processes.",
    icon: Wrench,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 micro-grid opacity-50" aria-hidden="true" />
        <div
          className="absolute right-[-12%] top-16 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="About AVA"
              title="A focused RF plasma generator brand from Analogic."
              body="AVA is an Analogic brand serving the Power and Motion Control segment with RF plasma generators for semiconductor manufacturing. The product family supports advanced semiconductor plasma applications requiring precision, reliability, and process control."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="premium-card rounded-3xl p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#246BFE] to-cyan-400 text-white shadow-lg shadow-blue-500/20">
                <Cpu size={30} aria-hidden="true" />
              </div>
              <p className="mt-6 text-xl leading-9 text-slate-800">
                Analogic designs, develops, and manufactures world-class power
                amplifiers. AVA brings over 40 years of designing and perfecting
                power delivery for the medical industry into the semiconductor
                market.
              </p>
              <a
                href={contactInfo.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-[#246BFE] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
              >
                Visit Analogic.com
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Vision and values"
              title="Technical values for demanding process environments."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.06}>
                  <article className="premium-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#246BFE] to-cyan-400 text-white shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-105">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-slate-950">
                      {value.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {value.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Service and repair support"
              title="Repair capability built around production-quality processes."
              body="Analogic provides depot repair services for its power amplifiers from global facilities. The repair team uses the same high-quality components and processes as the production line to support reliable repairs."
            />
            <div className="mt-8">
              <ButtonLink href="/contact">Contact service support</ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <address className="premium-card rounded-3xl p-7 not-italic">
              <h2 className="text-xl font-semibold text-slate-950">
                Contact information
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p>{contactInfo.phone}</p>
                <p>
                  <a
                    href={contactInfo.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#246BFE] hover:text-slate-950"
                  >
                    {contactInfo.website}
                  </a>
                </p>
                <p>{contactInfo.address}</p>
              </div>
            </address>
          </Reveal>
        </div>
      </section>
    </>
  );
}
