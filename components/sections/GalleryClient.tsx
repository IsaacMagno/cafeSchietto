"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
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
    <article className="group relative h-full overflow-hidden rounded-xl border border-caffe-latte/15 bg-gradient-to-b from-caffe-espresso/90 to-caffe-dark/90 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-caffe-gold/40 hover:shadow-xl hover:shadow-caffe-dark/60">
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasImage ? (
          <Image
            src={product.image_url}
            alt={`Foto do produto ${product.name}`}
            fill
            className="object-cover transition-transform duration-[1.1s] ease-premium group-hover:scale-[1.07]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-caffe-mocha/60 p-4">
            <span className="text-5xl" role="img" aria-hidden>
              ☕
            </span>
            <span className="font-body text-xs font-light uppercase tracking-widest text-caffe-latte/80">
              {CATEGORY_LABELS[product.category]}
            </span>
          </div>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-caffe-dark/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="relative p-5 sm:p-6">
        <span
          className="absolute left-5 top-0 h-px w-10 bg-caffe-gold/60 transition-all duration-500 ease-premium group-hover:w-16 group-hover:bg-caffe-gold sm:left-6"
          aria-hidden
        />
        <p className="font-body text-[0.65rem] font-light uppercase tracking-[0.22em] text-caffe-gold/80">
          {CATEGORY_LABELS[product.category]}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-caffe-cream">
          {product.name}
        </h3>
        <p className="mt-2 font-body text-sm font-light leading-relaxed text-caffe-latte">
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
        {filteredProducts.map((product, index) => (
          <AnimatedReveal key={product.id} delay={(index % 4) * 100}>
            <ProductCard product={product} />
          </AnimatedReveal>
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
          className="group inline-flex items-center gap-3 rounded-sm border border-caffe-gold/50 px-8 py-3.5 font-body text-xs font-light uppercase tracking-[0.2em] text-caffe-gold transition-all duration-500 ease-premium hover:border-caffe-gold hover:bg-caffe-gold hover:text-caffe-dark"
        >
          Ver cardápio completo
          <span
            className="transition-transform duration-500 ease-premium group-hover:translate-x-1.5"
            aria-hidden
          >
            →
          </span>
        </Link>
      </div>
    </>
  );
}
