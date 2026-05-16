import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

type LogoProps = {
  href?: string;
  className?: string;
  framed?: boolean;
  priority?: boolean;
};

export function AvaLogo({
  href = "/",
  className = "",
  framed = false,
  priority = false,
}: LogoProps) {
  const logo = (
    <span
      className={`relative block h-11 w-32 overflow-hidden ${
        framed ? "rounded-lg bg-white shadow-sm ring-1 ring-slate-200" : ""
      } ${className}`}
    >
      <Image
        src={assets.logos.whiteBackgroundLogo}
        alt="AVA logo"
        width={160}
        height={160}
        priority={priority}
        sizes="128px"
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </span>
  );

  if (!href) {
    return logo;
  }

  return (
    <Link href={href} aria-label="AVA home" className="inline-flex">
      {logo}
    </Link>
  );
}

type AnalogicLogoProps = {
  className?: string;
  framed?: boolean;
  priority?: boolean;
  variant?: "transparent" | "white";
};

export function AnalogicLogo({
  className = "",
  framed = false,
  priority = false,
  variant = "transparent",
}: AnalogicLogoProps) {
  const src =
    variant === "white"
      ? assets.logos.analogicWhiteBackgroundLogo
      : assets.logos.analogicTransparentLogo;

  return (
    <span
      className={`relative inline-flex h-7 w-32 items-center overflow-hidden ${
        framed ? "rounded-md bg-white p-1 shadow-sm ring-1 ring-slate-200" : ""
      } ${className}`}
    >
      <Image
        src={src}
        alt="Analogic logo"
        width={220}
        height={99}
        priority={priority}
        sizes="128px"
        className="h-full w-full object-contain"
      />
    </span>
  );
}
