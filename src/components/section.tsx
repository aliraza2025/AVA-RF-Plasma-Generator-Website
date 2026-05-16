import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  children,
}: SectionIntroProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#246BFE]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
          {body}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function TechnicalBand({ children }: { children: ReactNode }) {
  return (
    <section className="technical-shell relative overflow-hidden py-20 text-white md:py-28">
      <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden="true" />
      <div className="sheen-line absolute inset-x-0 top-0 h-px" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
