import type { Feature } from "@/lib/site";

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <article className="premium-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#246BFE] ring-1 ring-blue-100 transition duration-300 group-hover:scale-105">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.body}</p>
    </article>
  );
}
