import type { Metadata } from "next";
import {
  Caveat,
  Funnel_Display,
  Funnel_Sans,
  JetBrains_Mono,
} from "next/font/google";

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

export const metadata: Metadata = {
  title: "SouJunior Apoia.se",
  description: "Landing page do SouJunior Apoia.se",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${funnelDisplay.variable} ${funnelSans.variable} ${jetBrainsMono.variable} ${caveat.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
