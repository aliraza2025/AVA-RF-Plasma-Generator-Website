"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/assets";

type ProductGalleryProps = {
  images: readonly ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const current = images[selected] ?? images[0];

  return (
    <div className="grid gap-4">
      <div className="relative flex aspect-[1.45] items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/10">
        <div className="absolute inset-0 micro-grid opacity-45" aria-hidden="true" />
        {current ? (
          <Image
            src={current.src}
            alt={`${productName} ${current.label.toLowerCase()}`}
            width={1300}
            height={860}
            priority
            loading="eager"
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="relative h-full w-full object-contain"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm font-semibold text-slate-500">
            Image pending
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${image.label}`}
            type="button"
            aria-label={`Show ${productName} ${image.label.toLowerCase()}`}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
            className={`relative aspect-[1.45] overflow-hidden rounded-lg border bg-white p-2 transition hover:border-[#246BFE] ${
              selected === index
                ? "border-[#246BFE] ring-2 ring-blue-100"
                : "border-slate-200"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              width={360}
              height={240}
              sizes="160px"
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
