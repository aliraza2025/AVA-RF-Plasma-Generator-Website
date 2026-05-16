import { ButtonLink } from "@/components/buttons";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246BFE]">
          Not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
          This page is not available.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          Return to the AVA product family or contact Analogic for product
          support.
        </p>
        <div className="mt-8">
          <ButtonLink href="/products">View products</ButtonLink>
        </div>
      </div>
    </section>
  );
}
