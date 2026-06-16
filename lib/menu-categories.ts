import type { MenuCategory, MenuCategoryFilter } from "@/types/menu";

export const MENU_CATEGORY_FILTERS: {
  value: MenuCategoryFilter;
  label: string;
}[] = [
  { value: "all", label: "Todos" },
  { value: "cafes_chocolates", label: "Cafés & Chocolates" },
  { value: "bebidas_geladas", label: "Bebidas Geladas" },
  { value: "coffee_drinks", label: "Coffee Drinks" },
  { value: "brunch_combos", label: "Brunch & Combos" },
  { value: "salgados", label: "Salgados" },
  { value: "saladas", label: "Saladas" },
  { value: "saudaveis", label: "Fitness" },
  { value: "sobremesas", label: "Sobremesas" },
  { value: "bebidas", label: "Bebidas" },
  { value: "cervejas", label: "Cervejas" },
];

export const MENU_CATEGORY_LABELS: Record<MenuCategory, string> = {
  cafes_chocolates: "Cafés & Chocolates",
  bebidas_geladas: "Bebidas Geladas",
  coffee_drinks: "Coffee Drinks",
  brunch_combos: "Brunch & Combos",
  salgados: "Salgados",
  saladas: "Saladas",
  saudaveis: "Fitness",
  sobremesas: "Sobremesas",
  bebidas: "Bebidas",
  cervejas: "Cervejas",
};

export const MENU_CATEGORY_BADGE: Record<MenuCategory, string> = {
  cafes_chocolates: "bg-caffe-gold/90 text-caffe-dark",
  bebidas_geladas: "bg-slate-500/90 text-slate-100",
  coffee_drinks: "bg-amber-700/90 text-amber-50",
  brunch_combos: "bg-orange-600/90 text-orange-50",
  salgados: "bg-orange-700/90 text-orange-50",
  saladas: "bg-emerald-600/90 text-emerald-50",
  saudaveis: "bg-lime-600/90 text-lime-950",
  sobremesas: "bg-rose-400/90 text-rose-950",
  bebidas: "bg-sky-600/90 text-sky-50",
  cervejas: "bg-yellow-600/90 text-yellow-950",
};

export type { MenuCategoryFilter };

export function parseMenuCategoryFilter(
  value?: string | null
): MenuCategoryFilter {
  if (!value) return "all";
  const match = MENU_CATEGORY_FILTERS.find((filter) => filter.value === value);
  return match?.value ?? "all";
}
