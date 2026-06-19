export type MenuCategory =
  | "cafes_chocolates"
  | "bebidas_geladas"
  | "coffee_drinks"
  | "brunch_combos"
  | "salgados"
  | "saladas"
  | "sobremesas"
  | "bebidas"
  | "cervejas";

export type MenuCategoryFilter = MenuCategory | "all";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  section: string;
  image?: string;
}
