"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";

export function ProductFamilyCarousel({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || products.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % products.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [playing, products.length]);

  if (products.length === 0) {
    return null;
  }

  const product = products[active];

  function goTo(index: number) {
    setActive((index + products.length) % products.length);
  }

  return (
    <div className="premium-card relative mt-12 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 micro-grid opacity-35" aria-hidden="true" />
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/85 to-cyan-50/70 p-5 sm:min-h-[520px] lg:min-h-[620px]">
          <div
            className="absolute inset-x-10 bottom-16 h-16 rounded-full bg-blue-950/12 blur-3xl"
            aria-hidden="true"
          />
          {products.map((item, index) => (
            <Image
              key={item.slug}
              src={item.image}
              alt={`${item.name} RF plasma generator`}
              width={1300}
              height={860}
              priority={index === 0}
              sizes="(min-width: 1024px) 54vw, 100vw"
              className={`absolute inset-0 m-auto h-full w-full object-contain p-4 drop-shadow-2xl transition duration-700 ease-out sm:p-8 ${
                active === index
                  ? "scale-[1.18] opacity-100"
                  : "scale-[1.08] opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#246BFE]">
              {product.frequency} RF generator
            </p>
            <h3 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              {product.name}
            </h3>
            <p className="mt-3 text-lg font-semibold text-[#246BFE]">
              {product.power} / {product.frequency}
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              {product.type}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Metric value={product.power} label="Forward power" />
              <Metric value={product.frequency} label="Frequency" />
              <Metric value="Pulsed RF" label="Generator type" />
            </div>
          </div>

          <div className="mt-10">
            <div className="grid gap-3 sm:grid-cols-3">
              {products.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  aria-pressed={active === index}
                  onClick={() => goTo(index)}
                  className={`group rounded-2xl border bg-white/72 p-3 text-left shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 ${
                    active === index ? "border-[#246BFE] ring-2 ring-blue-100" : "border-slate-200/80"
                  }`}
                >
                  <div className="relative aspect-[1.45] overflow-hidden rounded-xl bg-gradient-to-br from-white to-blue-50">
                    <Image
                      src={item.image}
                      alt=""
                      width={420}
                      height={280}
                      sizes="160px"
                      className="h-full w-full scale-[1.25] object-contain p-2 drop-shadow-xl transition duration-300 group-hover:scale-[1.32]"
                    />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-950">{item.name}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#246BFE] to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE]"
              >
                View {product.name}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <div className="flex items-center gap-2">
                <CarouselButton label="Previous product" onClick={() => goTo(active - 1)}>
                  <ChevronLeft size={18} aria-hidden="true" />
                </CarouselButton>
                <CarouselButton
                  label={playing ? "Pause product carousel" : "Play product carousel"}
                  onClick={() => setPlaying((value) => !value)}
                >
                  {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
                </CarouselButton>
                <CarouselButton label="Next product" onClick={() => goTo(active + 1)}>
                  <ChevronRight size={18} aria-hidden="true" />
                </CarouselButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric-tile rounded-2xl p-4">
      <p className="text-xl font-semibold text-slate-950">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
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
