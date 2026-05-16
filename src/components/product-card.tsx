import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="premium-card group rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative flex aspect-[1.55] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-cyan-50/60 p-6">
          <div className="absolute inset-0 micro-grid opacity-60" aria-hidden="true" />
          <div className="absolute inset-x-8 bottom-8 h-10 rounded-full bg-blue-950/10 blur-2xl transition duration-500 group-hover:bg-blue-500/16" aria-hidden="true" />
          <Image
            src={product.image}
            alt={`${product.name} RF plasma generator`}
            width={900}
            height={580}
            sizes="(min-width: 1024px) 31vw, (min-width: 768px) 45vw, 92vw"
            className="relative h-full w-full object-contain drop-shadow-2xl transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#246BFE]">
                {product.power} / {product.frequency}
              </p>
            </div>
            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-[#246BFE]">
              13.56 MHz
            </span>
          </div>
          <p className="mt-4 min-h-16 text-sm leading-7 text-slate-600">
            {product.type}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#246BFE] transition duration-300 group-hover:translate-x-1">
            View {product.name}
            <ArrowRight size={16} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
}
