import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SouJunior Apoia.se",
  description: "Landing page do SouJunior Apoia.se",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
