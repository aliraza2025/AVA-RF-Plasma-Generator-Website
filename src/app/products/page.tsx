import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/buttons";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Compare AVA 1213, AVA 3013, and AVA 6013 RF plasma generators for semiconductor manufacturing.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 micro-grid opacity-50" aria-hidden="true" />
        <div className="absolute right-[-10rem] top-10 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Product family"
              title="RF plasma generators for precision semiconductor processing."
              body="The AVA 13.56 MHz family spans compact, mid-power, and high-power platforms with pulsing, auto frequency tuning, and process regulation capabilities."
            >
              <div className="mt-8">
                <ButtonLink href="/contact">
                  Request product guidance
                  <ArrowRight size={17} aria-hidden="true" />
                </ButtonLink>
              </div>
            </SectionIntro>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="premium-card mt-14 rounded-3xl">
              <div className="border-b border-slate-200 p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Platform comparison
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Specifications subject to change without notice.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-50/80 text-xs uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Power
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Frequency
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Positioning
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Datasheet
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {products.map((product) => (
                      <tr key={product.slug} className="transition hover:bg-blue-50/50">
                        <th scope="row" className="px-6 py-5 font-semibold text-slate-950">
                          {product.name}
                        </th>
                        <td className="px-6 py-5 text-slate-700">{product.powerDetail}</td>
                        <td className="px-6 py-5 text-slate-700">{product.frequency}</td>
                        <td className="max-w-xl px-6 py-5 text-slate-600">{product.short}</td>
                        <td className="px-6 py-5">
                          <a
                            href={product.datasheet}
                            download
                            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-[#246BFE] transition hover:border-blue-200 hover:bg-blue-50"
                          >
                            PDF
                            <Download size={15} aria-hidden="true" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
