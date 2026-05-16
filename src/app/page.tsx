import { ArrowRight, Cpu, Gauge, Radio, Settings2 } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/buttons";
import { ProductFamilyCarousel } from "@/components/product-family-carousel";
import { ProcessControlCarousel } from "@/components/process-control-carousel";
import { HeroReveal, Reveal } from "@/components/reveal";
import { SectionIntro, TechnicalBand } from "@/components/section";
import { Waveform } from "@/components/waveform";
import { products } from "@/lib/products";
import { trustCards } from "@/lib/site";

const heroProduct = products.find((product) => product.slug === "ava-6013") ?? products[0];

const statChips = [
  "13.56 MHz platform",
  "Up to 6 kW forward power",
  "Auto frequency tuning",
  "Standard & Advanced configurations",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 micro-grid opacity-60" aria-hidden="true" />
        <div className="absolute left-[-10rem] top-10 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" aria-hidden="true" />
        <div className="absolute right-[-12rem] top-24 h-96 w-96 rounded-full bg-cyan-400/14 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f9fc] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:py-28">
          <div>
            <HeroReveal>
              <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#246BFE] shadow-sm backdrop-blur">
                Power and Motion Control
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-tight text-slate-950 md:text-7xl">
                Advanced RF Plasma Generators for Semiconductor Manufacturing
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                AVA delivers high-precision pulsed RF power, fast auto frequency
                tuning, and reliable process control for next-generation plasma
                applications.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.12} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products">
                Explore Products
                <ArrowRight size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Sales
              </ButtonLink>
            </HeroReveal>

            <HeroReveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
              {statChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200/80 bg-white/78 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </HeroReveal>
          </div>

          <HeroReveal delay={0.18}>
            <div className="relative">
              <div className="absolute inset-6 rounded-[2rem] bg-[#246BFE]/14 blur-3xl" aria-hidden="true" />
              <div className="premium-card relative rounded-[2rem] p-5">
                <div className="absolute inset-0 micro-grid opacity-45" aria-hidden="true" />
                <Image
                  src={heroProduct.image}
                  alt={`${heroProduct.name} RF plasma generator`}
                  width={1300}
                  height={860}
                  priority
                  loading="eager"
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="relative aspect-[1.42] w-full object-contain"
                />
                <div className="relative mt-4 grid grid-cols-3 gap-3 border-t border-slate-200 pt-4">
                  {[
                    ["6 kW", "forward power"],
                    ["13.56", "MHz"],
                    ["<1 ms", "auto tuning"],
                  ].map(([value, label]) => (
                    <div key={label} className="metric-tile rounded-2xl p-3">
                      <p className="text-xl font-semibold text-slate-950">{value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HeroReveal>
        </div>
      </section>

      <section id="products" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Featured products"
              title="A focused 13.56 MHz RF generator family."
              body="Choose the AVA platform that matches your forward power requirements, pulsing profile, and process-control needs."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ProductFamilyCarousel products={products} />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="technical-shell relative overflow-hidden rounded-[2rem] border border-white/10 p-7 text-white shadow-2xl shadow-blue-950/20">
              <div className="absolute inset-0 circuit-grid opacity-35" aria-hidden="true" />
              <Waveform />
              <div className="relative mt-10 grid gap-4">
                {[
                  ["Precision pulsing", Cpu],
                  ["Auto frequency tuning", Radio],
                  ["Load regulation", Gauge],
                  ["Advanced configurations", Settings2],
                ].map(([label, Icon]) => {
                  const FeatureIcon = Icon as typeof Cpu;
                  return (
                    <div
                      key={label as string}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/7 p-4 shadow-sm backdrop-blur"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#246BFE] to-[#00A8C8]">
                        <FeatureIcon size={20} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold">{label as string}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionIntro
              eyebrow="About AVA"
              title="Analogic power-delivery experience, focused on semiconductor RF."
              body="AVA is Analogic's RF plasma generator brand for semiconductor manufacturing. Analogic designs, develops, and manufactures world-class RF power amplifiers for various configurations and brings high-precision pulsing to semiconductor manufacturing."
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              The AVA product family applies Analogic&apos;s 40+ years of power
              delivery expertise from the medical industry to the growing
              semiconductor market, where precision, uptime, and process
              repeatability are essential.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Technology"
              title="Built for advanced process control."
              body="AVA generators combine precision pulsing, frequency agility, and serviceable power delivery hardware for demanding plasma applications."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ProcessControlCarousel />
          </Reveal>
        </div>
      </section>

      <TechnicalBand>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              Trusted for demanding semiconductor plasma processes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Credibility without invented testimonials.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              AVA messaging stays grounded in the supplied product materials:
              technical assurance, process stability, and Analogic service
              capability.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {trustCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.07}>
                  <article className="dark-glass-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                    <Icon className="text-blue-300" size={24} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </TechnicalBand>
    </>
  );
}
