import type { Metadata } from "next";
import {
  Caveat,
  Funnel_Display,
  Funnel_Sans,
  JetBrains_Mono,
} from "next/font/google";

import { SITE } from "@/lib/site-config";

import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const funnelSans = Funnel_Sans({
  variable: "--sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--hand",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteDescription =
  "Landing page do SouJunior Apoia.se — conheça o impacto social da comunidade e apoie a próxima geração de talentos em tecnologia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SouJunior Apoia.se — Apoie a próxima geração de tech",
    template: "%s | SouJunior",
  },
  description: siteDescription,
  keywords: [
    "SouJunior",
    "Apoia.se",
    "doação",
    "tecnologia",
    "comunidade tech",
    "ONG",
    "impacto social",
    "formação em tecnologia",
  ],
  authors: [{ name: "SouJunior" }],
  creator: "SouJunior",
  publisher: "SouJunior",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: "SouJunior Apoia.se",
    title: "SouJunior Apoia.se — Apoie a próxima geração de tech",
    description: siteDescription,
    images: [
      {
        url: "/OG-image.png",
        width: 1734,
        height: 907,
        alt: "SouJunior Apoia.se",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SouJunior Apoia.se — Apoie a próxima geração de tech",
    description: siteDescription,
    images: ["/OG-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${funnelDisplay.variable} ${funnelSans.variable} ${jetBrainsMono.variable} ${caveat.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
