import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Cpu,
  Gauge,
  Radio,
  RefreshCw,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const contactInfo = {
  phone: "+1-978-326-4000",
  website: "www.analogic.com",
  websiteUrl: "https://www.analogic.com/",
  address: "9 Northeastern Boulevard, Salem, NH 03079, USA",
};

export type Feature = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const technologyBenefits: Feature[] = [
  {
    title: "High-precision pulsing",
    body: "Two-level pulsing across the family, with advanced models supporting multi-level programmable arbitrary waveforms.",
    icon: Waves,
  },
  {
    title: "Auto frequency tuning",
    body: "Fast frequency agility helps maintain stable RF delivery into dynamic plasma loads.",
    icon: RefreshCw,
  },
  {
    title: "Forward and load regulation",
    body: "Regulate forward power, load power, and process signals such as DC bias where supported.",
    icon: Gauge,
  },
  {
    title: "Process control inputs",
    body: "External voltage and DC bias regulation support advanced process control workflows.",
    icon: SlidersHorizontal,
  },
  {
    title: "Advanced platform support",
    body: "Advanced models include support for CEX, HALO, fast auto tuning, smoke detection, and optional water flow sensing.",
    icon: Cpu,
  },
  {
    title: "Service-ready reliability",
    body: "Analogic supports depot repair using production-grade components and controlled repair processes.",
    icon: Wrench,
  },
];

export const trustCards: Feature[] = [
  {
    title: "Designed for process stability",
    body: "RF delivery, pulsing, and regulation features are engineered for demanding plasma process control.",
    icon: ShieldCheck,
  },
  {
    title: "Built for semiconductor plasma applications",
    body: "A focused 13.56 MHz platform serving plasma generator and RF power amplifier requirements.",
    icon: Radio,
  },
  {
    title: "Supported by Analogic service capabilities",
    body: "Power delivery knowledge from medical technology is applied to manufacturing and service support.",
    icon: BadgeCheck,
  },
];

export const assuranceCards: Feature[] = [
  {
    title: "Precision process control",
    body: "Forward, load, and process regulation options help maintain repeatable power delivery.",
    icon: Activity,
  },
  {
    title: "Fast frequency agility",
    body: "Auto frequency tuning supports plasma stability when load conditions move quickly.",
    icon: Zap,
  },
  {
    title: "Analogic power-delivery expertise",
    body: "Built on decades of high-reliability power delivery experience in demanding medical systems.",
    icon: Settings2,
  },
];
