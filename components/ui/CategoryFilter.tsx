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
            className={`rounded-sm px-4 py-2.5 font-body text-sm tracking-wide transition-all duration-300 sm:px-5 ${
              isActive
                ? "bg-caffe-gold font-semibold text-caffe-dark shadow-md shadow-caffe-gold/20"
                : "border border-caffe-latte text-caffe-latte hover:border-caffe-gold hover:text-caffe-gold"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
