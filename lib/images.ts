import { PRODUCT_CATALOG } from "./product-catalog";
import type { Product } from "@/types";

/** Imagens estáticas em public/images */
export const SITE_IMAGES = {
  ambiente: {
    hero: "/images/ambiente1.jpg",
    about: "/images/ambiente2.jpg",
    og: "/images/ambiente1.jpg",
  },
} as const;

/** Fotos de produtos por nome (cardápio / Supabase) */
export const PRODUCT_IMAGE_BY_NAME: Record<string, string> =
  Object.fromEntries(
    PRODUCT_CATALOG.map((p) => [p.name, p.image_url])
  );

const PRODUCT_IMAGE_POOL = PRODUCT_CATALOG.map((p) => p.image_url);

export function resolveProductImageUrl(
  name: string,
  existingUrl?: string | null,
  fallbackIndex = 0
): string {
  const trimmed = existingUrl?.trim();
  if (trimmed && !trimmed.includes("your_")) {
    return trimmed.startsWith("/") || trimmed.startsWith("http")
      ? trimmed
      : `/${trimmed.replace(/^\//, "")}`;
  }

  return (
    PRODUCT_IMAGE_BY_NAME[name] ??
    PRODUCT_IMAGE_POOL[fallbackIndex % PRODUCT_IMAGE_POOL.length]
  );
}

export function enrichProductsWithImages(products: Product[]): Product[] {
  return products.map((product, index) => ({
    ...product,
    image_url: resolveProductImageUrl(
      product.name,
      product.image_url,
      index
    ),
  }));
}
