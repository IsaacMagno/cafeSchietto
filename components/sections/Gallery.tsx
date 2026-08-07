import GalleryClient from "@/components/sections/GalleryClient";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import { catalogToFallbackProducts } from "@/lib/product-catalog";

const PRODUCTS = catalogToFallbackProducts();

export default function Gallery() {
  return (
    <section
      id="cardapio"
      data-snap
      className="relative overflow-hidden bg-caffe-dark py-24 sm:py-28 lg:py-36"
    >
      <div
        className="hero-grain pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />

      {/* Brilho dourado sutil no topo da seção */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-caffe-gold/50 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caffe-gold/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSectionHeader
          tag="O que oferecemos"
          title="Nosso Cardápio"
          tagClassName="font-body text-xs font-light uppercase tracking-[0.3em] text-caffe-gold"
          titleClassName="mt-4 font-display text-4xl font-bold text-caffe-cream sm:text-5xl"
        />

        <div className="mt-10 sm:mt-14">
          <GalleryClient products={PRODUCTS} limit={8} />
        </div>
      </div>
    </section>
  );
}
