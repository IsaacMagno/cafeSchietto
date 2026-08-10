import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden bg-caffe-espresso">
      <div className="animate-hero-zoom absolute inset-0">
        <Image
          src={SITE_IMAGES.ambiente.hero}
          alt="Ambiente acolhedor do Caffè Schiètto em Pedreira"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-caffe-dark/85 via-caffe-espresso/70 to-caffe-dark/95"
        aria-hidden
      />

      <div
        className="hero-grain pointer-events-none absolute inset-0 z-[1] opacity-50"
        aria-hidden
      />

      {/* Vinheta lateral sutil para foco central */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_40%,rgba(26,15,7,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <p className="animate-fade-in-up-delay-200 mb-6 flex items-center gap-3 font-body text-[0.7rem] font-light uppercase tracking-[0.35em] text-caffe-latte sm:mb-8 sm:text-xs">
          <span className="hidden h-px w-10 bg-caffe-gold/60 sm:block" aria-hidden />
          Pedreira, SP · Desde 2016
          <span className="hidden h-px w-10 bg-caffe-gold/60 sm:block" aria-hidden />
        </p>

        <h1 className="animate-fade-in-up-delay-500 w-full max-w-full break-words font-display leading-none">
          <span className="block text-4xl font-medium italic text-caffe-cream sm:text-6xl md:text-7xl">
            Caffè
          </span>
          <span className="mt-1 block text-5xl font-black tracking-tight text-caffe-gold sm:text-7xl md:text-8xl">
            Schiètto
          </span>
        </h1>

        <div
          className="animate-line-grow my-8 h-px w-24 origin-center bg-gradient-to-r from-transparent via-caffe-gold to-transparent sm:my-10 sm:w-32"
          aria-hidden
        />

        <p className="animate-fade-in-up-delay-800 max-w-md px-2 font-body text-lg font-light italic leading-relaxed text-caffe-latte sm:text-xl">
          Uma pausa especial no coração de Pedreira
        </p>

        <div className="animate-fade-in-up-delay-1100 mt-10 flex w-full max-w-sm flex-col items-stretch gap-4 sm:mt-14 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <Link
            href="#cardapio"
            className="group relative w-full overflow-hidden rounded-sm bg-caffe-gold px-9 py-4 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-caffe-dark transition-all duration-500 ease-premium hover:shadow-lg hover:shadow-caffe-gold/25 sm:w-auto sm:min-w-[200px]"
            aria-label="Ver o cardápio do café"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-caffe-cream">
              Ver Cardápio
            </span>
            <span
              className="absolute inset-0 -translate-x-full bg-caffe-espresso transition-transform duration-500 ease-premium group-hover:translate-x-0"
              aria-hidden
            />
          </Link>
          <Link
            href="#localizacao"
            className="w-full rounded-sm border border-caffe-cream/50 px-9 py-4 text-center font-body text-xs font-light uppercase tracking-[0.2em] text-caffe-cream backdrop-blur-[2px] transition-all duration-500 ease-premium hover:border-caffe-gold hover:text-caffe-gold sm:w-auto sm:min-w-[200px]"
            aria-label="Ver como chegar ao café"
          >
            Como Chegar
          </Link>
        </div>
      </div>

      <a
        href="#sobre"
        className="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-10"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="font-body text-[0.6rem] font-light uppercase tracking-[0.3em] text-caffe-latte/70 transition-colors group-hover:text-caffe-gold">
          Descubra
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-caffe-latte/25">
          <span className="animate-scroll-cue absolute inset-x-0 h-full bg-caffe-gold" />
        </span>
      </a>
    </section>
  );
}
