"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";

const slides = [
  {
    eyebrow: "Plasma stability",
    title: "Precision RF delivery for repeatable wafer processes.",
    body: "AVA generators support high-precision pulsing and regulated RF power delivery for semiconductor plasma applications where process repeatability matters.",
    image: assets.visuals.processControlCleanroom,
    alt: "Semiconductor wafer process chamber with RF waveform monitoring visuals",
    metrics: ["13.56 MHz platform", "Forward/load regulation", "Process stability"],
    points: ["High-precision pulsed RF power", "Stable delivery into plasma loads"],
  },
  {
    eyebrow: "Frequency agility",
    title: "Fast auto tuning for dynamic plasma conditions.",
    body: "Auto frequency tuning helps maintain stable RF delivery as plasma load conditions shift, supporting advanced process control workflows.",
    image: assets.visuals.processControlPlasma,
    alt: "Clean semiconductor plasma process chamber with blue diagnostic displays",
    metrics: ["Auto frequency tuning", "Dynamic load response", "Advanced models"],
    points: ["Tuning response under 1 ms on advanced models", "Supports demanding process windows"],
  },
  {
    eyebrow: "Service-ready reliability",
    title: "Built for uptime, repairability, and controlled support.",
    body: "AVA applies Analogic power-delivery experience to RF generator platforms with serviceable hardware, depot repair capability, and production-aligned repair processes.",
    image: assets.visuals.processControlService,
    alt: "Clean industrial electronics service bench with RF power electronics and test instruments",
    metrics: ["Depot repair", "CEX/HALO support", "Water/air cooling"],
    points: ["Production-grade repair components", "Designed for demanding fab environments"],
  },
] as const;

export function ProcessControlCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [playing]);

  const slide = slides[active];

  function goTo(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  return (
    <div className="premium-card relative mt-12 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 micro-grid opacity-35" aria-hidden="true" />
      <div className="grid min-h-[620px] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[340px] overflow-hidden bg-slate-100 lg:min-h-[620px]">
          {slides.map((item, index) => (
            <Image
              key={item.image}
              src={item.image}
              alt={item.alt}
              width={1536}
              height={864}
              priority={index === 0}
              sizes="(min-width: 1024px) 54vw, 100vw"
              className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
                active === index ? "scale-100 opacity-[0.65]" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-white/5 lg:bg-gradient-to-t lg:from-slate-950/58 lg:via-white/8 lg:to-white/20" />
          <div className="absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-3">
            {slide.metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-white/18 bg-white/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-sm backdrop-blur"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#246BFE]">
              {slide.eyebrow}
            </p>
            <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
              {slide.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              {slide.body}
            </p>

            <div className="mt-8 grid gap-3">
              {slide.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/75 p-4 shadow-sm backdrop-blur"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#246BFE] shadow-[0_0_0_6px_rgba(36,107,254,0.10)]" />
                  <span className="text-sm font-semibold text-slate-800">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2" aria-label="Process control slides">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  type="button"
                  aria-label={`Show ${item.eyebrow} slide`}
                  aria-pressed={active === index}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE] ${
                    active === index ? "w-9 bg-[#246BFE]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <CarouselButton label="Previous slide" onClick={() => goTo(active - 1)}>
                <ChevronLeft size={18} aria-hidden="true" />
              </CarouselButton>
              <CarouselButton
                label={playing ? "Pause carousel" : "Play carousel"}
                onClick={() => setPlaying((value) => !value)}
              >
                {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
              </CarouselButton>
              <CarouselButton label="Next slide" onClick={() => goTo(active + 1)}>
                <ChevronRight size={18} aria-hidden="true" />
              </CarouselButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE] active:translate-y-0"
    >
      {children}
    </button>
  );
}
