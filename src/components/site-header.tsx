"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AvaLogo } from "@/components/logo";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/78 shadow-sm shadow-slate-950/5 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-4">
          <AvaLogo priority />
        </div>

        <div className="hidden items-center gap-1 rounded-2xl border border-slate-200/80 bg-white/70 p-1 shadow-sm backdrop-blur lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 ${
                  active
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-700 hover:bg-blue-50 hover:text-[#246BFE]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-950/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE] active:translate-y-0"
          >
            Request Information
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white/94 px-5 py-5 shadow-xl backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-[#246BFE]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#246BFE] to-[#00A8C8] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
            >
              Request Information
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
