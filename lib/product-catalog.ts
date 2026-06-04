import type { Product } from "@/types";

/**
 * Cardápio alinhado às fotos em public/images.
 * Cada produto corresponde a um arquivo produtoN.
 */
export const PRODUCT_CATALOG: Omit<Product, "id" | "created_at">[] = [
  {
    name: "Cappuccino",
    description:
      "Café latte na xícara personalizada do Schiètto, com latte art em formato de coração.",
    category: "cafe",
    image_url: "/images/produto1.webp",
  },
  {
    name: "Torta Salgada",
    description:
      "Fatia generosa de torta salgada (frango ou palmito) com salada de folhas, tomate e batata palha.",
    category: "salgado",
    image_url: "/images/produto2.webp",
  },
  {
    name: "Chá Gelado com Pão de Queijo",
    description:
      "Chá gelado refrescante (mate com limão) acompanhado de pão de queijo prensado na chapa.",
    category: "bebida_fria",
    image_url: "/images/produto3.webp",
  },
  {
    name: "Brigadeiro Gourmet",
    description:
      "Brigadeiros artesanais: chocolate com creme ou doce de leite e sabores claros como churros ou castanhas.",
    category: "sobremesa",
    image_url: "/images/produto4.webp",
  },
  {
    name: "Sanduíche Natural",
    description:
      "Lanche natural no pão de forma com queijo, salame e alface — leve e saboroso.",
    category: "salgado",
    image_url: "/images/produto5.webp",
  },
  {
    name: "Bolo Recheado",
    description:
      "Bolos recheados na caixinha: chocolate com raspas, leite ninho com damasco e coco com chocolate (prestígio).",
    category: "sobremesa",
    image_url: "/images/produto6.webp",
  },
  {
    name: "Tostex",
    description:
      "Misto quente clássico de presunto e queijo com orégano, cortado ao meio e servido quentinho.",
    category: "salgado",
    image_url: "/images/produto7.webp",
  },
  {
    name: "Sanduíche para Viagem",
    description:
      "Sanduíche natural embalado para viagem, com frios, alface, tomate e cenoura ralada.",
    category: "salgado",
    image_url: "/images/produto8.jpg",
  },
  {
    name: "Bolo Caseiro",
    description:
      "Bolo caseiro com furo no meio, calda cremosa e pedaços de castanhas, nozes ou amendoim.",
    category: "sobremesa",
    image_url: "/images/produto9.webp",
  },
];

export function catalogToFallbackProducts(): Product[] {
  return PRODUCT_CATALOG.map((item, index) => ({
    ...item,
    id: String(index + 1),
    created_at: "",
  }));
}
