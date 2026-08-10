"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MenuCategoryFilterBar from "@/components/cardapio/MenuCategoryFilter";
import {
  MENU_CATEGORY_FILTERS,
  MENU_CATEGORY_LABELS,
  type MenuCategoryFilter,
} from "@/lib/menu-categories";
import type { MenuItem } from "@/types/menu";

const ITEMS_PER_PAGE = 9;

interface MenuClientProps {
  items: MenuItem[];
  initialCategory?: MenuCategoryFilter;
}

function MenuCard({ item }: { item: MenuItem }) {
  const hasImage = Boolean(item.image);

  return (
    <article className="group cursor-pointer overflow-hidden rounded-lg border border-caffe-latte/50 bg-white shadow-md shadow-caffe-espresso/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-caffe-mocha/20">
        {hasImage ? (
          <Image
            src={item.image!}
            alt={`Foto de ${item.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
            <span className="text-4xl" role="img" aria-hidden>
              ☕
            </span>
            <span className="font-body text-xs font-light uppercase tracking-widest text-caffe-mocha/70">
              {MENU_CATEGORY_LABELS[item.category]}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-tight text-caffe-espresso">
            {item.name}
          </h3>
          <span className="shrink-0 font-body text-sm font-bold text-caffe-gold">
            {item.price}
          </span>
        </div>
        <p className="mt-2 font-body text-sm leading-relaxed text-caffe-mocha">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function MenuPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      aria-label="Paginação do cardápio"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm border border-caffe-latte px-4 py-2 font-body text-sm text-caffe-mocha transition-colors hover:border-caffe-gold hover:text-caffe-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-caffe-latte disabled:hover:text-caffe-mocha"
      >
        <ChevronLeft size={18} strokeWidth={1.5} aria-hidden />
        Anterior
      </button>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Ir para página ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-sm px-2 font-body text-sm transition-colors ${
              page === currentPage
                ? "bg-caffe-gold font-semibold text-caffe-dark"
                : "border border-caffe-latte text-caffe-mocha hover:border-caffe-gold hover:text-caffe-gold"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm border border-caffe-latte px-4 py-2 font-body text-sm text-caffe-mocha transition-colors hover:border-caffe-gold hover:text-caffe-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-caffe-latte disabled:hover:text-caffe-mocha"
      >
        Próxima
        <ChevronRight size={18} strokeWidth={1.5} aria-hidden />
      </button>
    </nav>
  );
}

export default function MenuClient({
  items,
  initialCategory = "all",
}: MenuClientProps) {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategoryFilter>(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
  );

  // Clampa durante o render em vez de usar efeito (evita render em cascata)
  const safePage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, safePage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category: MenuCategoryFilter) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const activeLabel = MENU_CATEGORY_FILTERS.find(
    (f) => f.value === activeCategory
  )?.label;

  const rangeStart =
    filteredItems.length === 0 ? 0 : (safePage - 1) * ITEMS_PER_PAGE + 1;
  const rangeEnd = Math.min(safePage * ITEMS_PER_PAGE, filteredItems.length);

  return (
    <>
      <MenuCategoryFilterBar
        active={activeCategory}
        onChange={handleCategoryChange}
      />

      <p className="mt-6 text-center font-body text-sm text-caffe-mocha">
        {filteredItems.length === 0 ? (
          "Nenhum item encontrado"
        ) : (
          <>
            Exibindo{" "}
            <span className="font-semibold text-caffe-espresso">
              {rangeStart}–{rangeEnd}
            </span>{" "}
            de{" "}
            <span className="font-semibold text-caffe-espresso">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "item" : "itens"}
            {activeCategory !== "all" && activeLabel && (
              <>
                {" "}
                em{" "}
                <span className="font-semibold text-caffe-espresso">
                  {activeLabel}
                </span>
              </>
            )}
          </>
        )}
      </p>

      {filteredItems.length > 0 ? (
        <>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <MenuPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p className="mt-12 text-center font-body text-caffe-mocha">
          Nenhum item nesta categoria.
        </p>
      )}
    </>
  );
}
