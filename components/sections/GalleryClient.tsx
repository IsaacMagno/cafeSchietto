"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryFilter from "@/components/ui/CategoryFilter";
import { ROUTES } from "@/lib/routes";
import { CATEGORY_LABELS, type FilterCategory } from "@/lib/categories";
import type { Product } from "@/types";

interface GalleryClientProps {
  products: Product[];
  /** Limite de itens exibidos (ex.: 8 para grid 4×2 simétrico na home). */
  limit?: number;
}

function ProductCard({ product }: { product: Product }) {
  const hasImage = Boolean(product.image_url?.trim());

  return (
    <article className="group overflow-hidden rounded-lg border border-caffe-mocha/40 bg-caffe-espresso/80 shadow-lg shadow-caffe-dark/30 transition-all duration-300 hover:-translate-y-1 hover:border-caffe-latte/50 hover:shadow-xl hover:shadow-caffe-dark/50">
      <div className="relative aspect-[4/3] overflow-hidden bg-caffe-mocha">
        {hasImage ? (
          <Image
            src={product.image_url}
            alt={`Foto do produto ${product.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
            <span className="text-5xl" role="img" aria-hidden>
              ☕
            </span>
            <span className="font-body text-xs font-light uppercase tracking-widest text-caffe-latte/80">
              {CATEGORY_LABELS[product.category]}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-caffe-cream">
          {product.name}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-caffe-latte">
          {product.description}
        </p>
      </div>
    </article>
  );
}

export default function GalleryClient({ products, limit }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredProducts = useMemo(() => {
    const filtered =
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [products, activeCategory, limit]);

  return (
    <>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-12 text-center font-body text-caffe-latte">
          Nenhum item nesta categoria no momento.
        </p>
      )}

      <div className="mt-16 text-center">
        <Link
          href={ROUTES.cardapioCompleto}
          aria-label="Ver cardápio completo"
          className="group inline-flex items-center gap-2 font-body text-base text-caffe-gold underline decoration-caffe-gold/50 underline-offset-4 transition-colors hover:text-caffe-latte hover:decoration-caffe-latte sm:text-lg"
        >
          Ver cardápio completo
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </>
  );
}
