import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  download?: boolean;
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-[#246BFE] to-[#00A8C8] text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-[#246BFE]",
    secondary:
      "border border-slate-300/80 bg-white/84 text-slate-950 shadow-sm backdrop-blur hover:border-[#246BFE]/50 hover:bg-blue-50 focus-visible:outline-[#246BFE]",
    light:
      "border border-white/20 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur hover:bg-white/16 focus-visible:outline-white",
  };

  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-0 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
