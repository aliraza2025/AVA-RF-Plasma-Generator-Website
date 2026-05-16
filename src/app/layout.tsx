import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.analogic.com"),
  title: {
    default: "AVA RF Plasma Generators | Analogic Power and Motion Control",
    template: "%s | AVA RF Plasma Generators",
  },
  description:
    "AVA, an Analogic brand, delivers RF plasma generators and RF power amplifiers for semiconductor manufacturing.",
  keywords: [
    "AVA",
    "Analogic",
    "RF plasma generator",
    "RF power amplifier",
    "semiconductor manufacturing",
    "13.56 MHz",
    "precision pulsing",
  ],
  openGraph: {
    title: "AVA RF Plasma Generators",
    description:
      "Reliable RF power delivery for semiconductor manufacturing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
