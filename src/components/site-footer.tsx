import Link from "next/link";
import { AnalogicLogo, AvaLogo } from "@/components/logo";
import { contactInfo, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <AvaLogo framed />
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Reliable RF Power Delivery for Semiconductor Manufacturing.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Navigation
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Contact
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <p>{contactInfo.phone}</p>
            <p>
              <a href={contactInfo.websiteUrl} className="transition hover:text-white">
                {contactInfo.website}
              </a>
            </p>
            <p>{contactInfo.address}</p>
          </div>
        </address>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AVA.</p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <p>Power and Motion Control</p>
            <AnalogicLogo variant="transparent" className="h-8 w-32" />
            <span className="sr-only">Analogic Corporation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
