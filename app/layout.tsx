import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import AdAttribution from "@/components/analytics/AdAttribution";
import CookieConsent from "@/components/analytics/CookieConsent";
import Header from "@/components/layout/Header";
import { SITE_IMAGES } from "@/lib/images";
import { MOTION_BOOT_SCRIPT } from "@/lib/motion";
import { SITE_URL } from "@/lib/social";
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

const TITLE = "Caffè Schiètto | Cafeteria em Pedreira, SP";
const DESCRIPTION =
  "Cafeteria no centro de Pedreira, SP, desde 2016: espresso tirado na hora, cappuccinos, chocolates, bolos, doces e lanches. Reserve sua mesa ou encomende pelo WhatsApp.";
const OG_IMAGE = {
  url: SITE_IMAGES.ambiente.og,
  width: 1200,
  height: 630,
  alt: "Caffè Schiètto — cafeteria em Pedreira, SP",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Caffè Schiètto",
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_BR",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
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
        {/* ?movimento=completo liga todas as animações antes da primeira pintura */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
        <Header />
        {children}
        {/* Origem do anúncio (utm) nas mensagens de WhatsApp; não usa cookies */}
        <AdAttribution />
        {/* Aviso de cookies + Clarity e Pixel da Meta (só carregam após o aceite) */}
        <CookieConsent />
      </body>
    </html>
  );
}
