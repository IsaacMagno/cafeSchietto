import type { Product } from "@/types";

export type ProductCategory = Product["category"];
export type FilterCategory = ProductCategory | "all";

export const CATEGORY_FILTERS: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "cafe", label: "Cafés" },
  { value: "bebida_fria", label: "Bebidas Frias" },
  { value: "sobremesa", label: "Sobremesas" },
  { value: "salgado", label: "Salgados" },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  cafe: "Café",
  bebida_fria: "Bebida Fria",
  sobremesa: "Sobremesa",
  salgado: "Salgado",
};

export const CATEGORY_BADGE_STYLES: Record<ProductCategory, string> = {
  cafe: "bg-caffe-gold/90 text-caffe-dark",
  bebida_fria: "bg-slate-500/90 text-slate-100",
  sobremesa: "bg-rose-400/90 text-rose-950",
  salgado: "bg-orange-700/90 text-orange-50",
};
