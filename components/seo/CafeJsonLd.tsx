import { SITE_IMAGES } from "@/lib/images";
import { MAPS_URL } from "@/lib/maps";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/social";

/**
 * Dados estruturados (schema.org) do café para o Google: endereço, telefone,
 * horários, cardápio e perfis. Ajuda nas buscas locais ("café em Pedreira") e
 * no painel do Maps. Mantenha os horários em sincronia com Location.tsx e
 * OpenNow.tsx. Feriados (8h30 às 18h, como no fim de semana) não cabem no
 * formato `dayOfWeek`, por isso aparecem só nas páginas.
 */
const data = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${SITE_URL}/#cafe`,
  name: "Caffè Schiètto",
  description:
    "Cafeteria no centro de Pedreira, SP, desde 2016: espresso tirado na hora, cappuccinos, chocolates, bolos, doces artesanais e lanches.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${SITE_IMAGES.ambiente.og}`,
  logo: `${SITE_URL}/apple-icon.png`,
  telephone: "+55-19-3893-7377",
  servesCuisine: ["Café", "Doces", "Lanches"],
  priceRange: "$$",
  menu: `${SITE_URL}/cardapio`,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Primo Frazato, 30",
    addressLocality: "Pedreira",
    addressRegion: "SP",
    postalCode: "13920-000",
    addressCountry: "BR",
  },
  hasMap: MAPS_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  sameAs: [SOCIAL_LINKS.instagram.href, SOCIAL_LINKS.facebook.href],
};

export default function CafeJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
