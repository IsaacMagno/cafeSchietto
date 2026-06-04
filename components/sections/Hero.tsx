import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SITE_IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden bg-caffe-espresso">
      <Image
        src={SITE_IMAGES.ambiente.hero}
        alt="Ambiente acolhedor do Caffè Schiètto em Pedreira"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-caffe-dark/90 via-caffe-espresso/75 to-caffe-espresso/90"
        aria-hidden
      />

      <div
        className="hero-grain pointer-events-none absolute inset-0 z-[1] opacity-50"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <p className="animate-fade-in-up-delay-200 mb-6 max-w-full font-body text-xs font-light tracking-widest text-caffe-latte sm:mb-8 sm:text-sm">
          — Pedreira, SP, desde 2016 —
        </p>

        <h1 className="animate-fade-in-up-delay-500 w-full max-w-full break-words font-display leading-none">
          <span className="block text-4xl italic text-caffe-cream sm:text-6xl md:text-7xl">
            Caffè
          </span>
          <span className="mt-1 block text-5xl font-black text-caffe-gold sm:text-7xl md:text-8xl">
            Schiètto
          </span>
        </h1>

        <div
          className="animate-fade-in-up-delay-500 my-8 h-px w-20 bg-caffe-gold sm:my-10"
          aria-hidden
        />

        <p className="animate-fade-in-up-delay-800 max-w-md px-2 font-body text-lg font-light italic text-caffe-latte sm:text-xl">
          Uma pausa especial no coração de Pedreira
        </p>

        <div className="animate-fade-in-up-delay-1100 mt-10 flex w-full max-w-sm flex-col items-stretch gap-4 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <Link
            href="#cardapio"
            className="w-full rounded-sm bg-caffe-gold px-8 py-3.5 text-center font-body text-sm font-semibold tracking-wide text-caffe-dark transition-colors duration-300 hover:bg-caffe-mocha hover:text-caffe-cream sm:w-auto sm:min-w-[180px]"
            aria-label="Ver o cardápio do café"
          >
            Ver Cardápio
          </Link>
          <Link
            href="#localizacao"
            className="w-full rounded-sm border border-caffe-cream px-8 py-3.5 text-center font-body text-sm font-light tracking-wide text-caffe-cream transition-colors duration-300 hover:bg-caffe-cream hover:text-caffe-dark sm:w-auto sm:min-w-[180px]"
            aria-label="Ver como chegar ao café"
          >
            Como Chegar
          </Link>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-caffe-latte transition-colors hover:text-caffe-gold sm:bottom-10"
        aria-label="Rolar para a seção Sobre"
      >
        <ChevronDown size={32} strokeWidth={1.5} aria-hidden />
      </a>
    </section>
  );
}
