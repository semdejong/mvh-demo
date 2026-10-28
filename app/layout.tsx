import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import SiteFrame from "@/components/site/SiteFrame";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

const martian = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian",
});

export const metadata: Metadata = {
  title: {
    default: "Matrijzen & Vormenbouw Haaksbergen",
    template: "%s — Matrijzen & Vormenbouw Haaksbergen",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.emblem } : undefined,
};

export const viewport: Viewport = {
  themeColor: content.colors.primary,
  width: "device-width",
  initialScale: 1,
};

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={content.seo.lang} style={themeVars} className={`${archivo.variable} ${martian.variable} h-full antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="min-h-full flex flex-col">
        <a className="skip" href="#inhoud">
          Naar inhoud
        </a>
        <SiteFrame>{children}</SiteFrame>
        <SleadsBadge />
      </body>
    </html>
  );
}
