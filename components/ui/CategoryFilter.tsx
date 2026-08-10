"use client";

import {
  CATEGORY_FILTERS,
  type FilterCategory,
} from "@/lib/categories";

interface CategoryFilterProps {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 px-1 sm:gap-3"
      role="group"
      aria-label="Filtrar produtos por categoria"
    >
      {CATEGORY_FILTERS.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            aria-label={`Filtrar por ${filter.label}`}
            aria-pressed={isActive}
            className={`cursor-pointer rounded-full px-5 py-2.5 font-body text-xs uppercase tracking-[0.14em] transition-all duration-500 ease-premium sm:px-6 ${
              isActive
                ? "bg-caffe-gold font-semibold text-caffe-dark shadow-md shadow-caffe-gold/25"
                : "border border-caffe-latte/40 font-light text-caffe-latte hover:border-caffe-gold/70 hover:text-caffe-gold"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
