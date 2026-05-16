import type { Metadata } from "next";
import { ArrowRight, Download, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/buttons";
import { ProductCard } from "@/components/product-card";
import { ProductSpinViewer } from "@/components/product-spin-viewer";
import { Reveal } from "@/components/reveal";
import { SectionIntro, TechnicalBand } from "@/components/section";
import { assuranceCards } from "@/lib/site";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name} ${product.power} RF Plasma Generator`,
    description: product.short,
    openGraph: {
      title: `${product.name} RF Plasma Generator`,
      description: product.short,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 micro-grid opacity-55" aria-hidden="true" />
        <div className="absolute right-[-10rem] top-12 h-96 w-96 rounded-full bg-blue-500/12 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#246BFE] shadow-sm backdrop-blur">
              RF plasma generator
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-5 text-xl font-semibold text-slate-800">
              {product.powerDetail} / {product.frequency}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {product.short}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={product.datasheet} download>
                Download Datasheet
                <Download size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Sales
                <Mail size={17} aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ProductSpinViewer images={product.gallery} productName={product.name} />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="premium-card sticky top-28 rounded-3xl p-6">
              <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#246BFE]">
                Overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {product.type}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {product.overview}
              </p>
              <div className="mt-6 grid gap-3">
                {product.stats.map((stat) => (
                  <div
                    key={stat}
                    className="metric-tile rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800"
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <section className="premium-card rounded-3xl p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Key highlights
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section className="premium-card rounded-3xl">
                <div className="border-b border-slate-200 p-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    Technical specifications
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Specifications subject to change without notice.
                  </p>
                </div>
                <dl className="divide-y divide-slate-200">
                  {product.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-2 px-6 py-4 sm:grid-cols-[220px_1fr]"
                    >
                      <dt className="text-sm font-semibold text-slate-950">
                        {spec.label}
                      </dt>
                      <dd className="text-sm leading-6 text-slate-600">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>
          </div>
        </div>
      </section>

      <TechnicalBand>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Need help selecting the right AVA generator?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Align power level, pulsing behavior, regulation strategy, and
              interface requirements with your plasma process.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Talk to an Expert
                <ArrowRight size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={product.datasheet} variant="light" download>
                Download Datasheet
                <Download size={17} aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {assuranceCards.map((feature, index) => {
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Related products"
              title="Compare adjacent power platforms."
              body="Review the other AVA generators in the 13.56 MHz family."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {relatedProducts.map((related, index) => (
              <Reveal key={related.slug} delay={index * 0.08}>
                <ProductCard product={related} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
