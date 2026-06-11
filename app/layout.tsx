import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import { SITE_IMAGES } from "@/lib/images";
import "./globals.css";

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const fontBody = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
});

const siteUrl = "https://caffeschietto.com.br";

export const metadata: Metadata = {
  title: "Caffè Schiètto | Cafeteria Gourmet em Pedreira SP",
  description:
    "Desde 2016 proporcionando momentos únicos em Pedreira/SP. Cafeteria especializada com bebidas, sobremesas e muito aconchego no coração da cidade.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Caffè Schiètto | Cafeteria Gourmet em Pedreira SP",
    description:
      "Desde 2016 proporcionando momentos únicos em Pedreira/SP. Cafeteria especializada com bebidas, sobremesas e muito aconchego no coração da cidade.",
    locale: "pt_BR",
    images: [
      {
        url: `${siteUrl}${SITE_IMAGES.ambiente.og}`,
        width: 1200,
        height: 630,
        alt: "Caffè Schiètto — Cafeteria Gourmet em Pedreira",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
