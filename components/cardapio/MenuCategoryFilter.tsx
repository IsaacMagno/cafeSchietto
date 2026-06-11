"use client";

import {
  MENU_CATEGORY_FILTERS,
  type MenuCategoryFilter,
} from "@/lib/menu-categories";

interface MenuCategoryFilterProps {
  active: MenuCategoryFilter;
  onChange: (category: MenuCategoryFilter) => void;
}

export default function MenuCategoryFilterBar({
  active,
  onChange,
}: MenuCategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 px-1 sm:gap-3"
      role="group"
      aria-label="Filtrar cardápio por categoria"
    >
      {MENU_CATEGORY_FILTERS.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            aria-label={`Filtrar por ${filter.label}`}
            aria-pressed={isActive}
            className={`rounded-sm px-3 py-2 font-body text-xs tracking-wide transition-all duration-300 sm:px-4 sm:text-sm ${
              isActive
                ? "bg-caffe-gold font-semibold text-caffe-dark shadow-md shadow-caffe-gold/20"
                : "border border-caffe-latte text-caffe-mocha hover:border-caffe-gold hover:text-caffe-gold"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
