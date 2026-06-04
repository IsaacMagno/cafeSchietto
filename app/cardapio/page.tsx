import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Cardápio Completo | Caffè Schiètto",
  description:
    "O cardápio digital completo do Caffè Schiètto estará disponível em breve.",
  robots: { index: false, follow: true },
};

export default function CardapioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-caffe-cream">
      <header className="border-b border-caffe-latte/60 bg-caffe-espresso px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <Link
            href={ROUTES.home}
            className="font-display text-xl font-bold italic text-caffe-cream transition-colors hover:text-caffe-gold sm:text-2xl"
            aria-label="Voltar para a página inicial"
          >
            Caffè Schiètto
          </Link>
          <Link
            href={`${ROUTES.home}#cardapio`}
            className="inline-flex items-center gap-2 font-body text-sm text-caffe-latte transition-colors hover:text-caffe-gold"
            aria-label="Voltar para a prévia do cardápio no site"
          >
            <ArrowLeft size={18} strokeWidth={1.5} aria-hidden />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-lg rounded-xl border border-caffe-latte/60 bg-white p-10 shadow-lg shadow-caffe-espresso/10">
          <Coffee
            className="mx-auto text-caffe-gold"
            size={56}
            strokeWidth={1.25}
            aria-hidden
          />
          <p className="mt-6 font-body text-sm font-light uppercase tracking-widest text-caffe-mocha">
            Em breve
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-caffe-espresso sm:text-4xl">
            Cardápio completo
          </h1>
          <div
            className="mx-auto mt-6 h-px w-16 bg-caffe-gold"
            aria-hidden
          />
          <p className="mt-6 font-body text-base leading-relaxed text-caffe-mocha">
            Estamos preparando o cardápio digital completo com todos os itens,
            preços e novidades. Volte em breve para conferir!
          </p>
          <p className="mt-4 font-body text-sm italic text-caffe-mocha/80">
            Enquanto isso, veja nossa seleção de destaques na página inicial.
          </p>
          <Link
            href={`${ROUTES.home}#cardapio`}
            className="mt-8 inline-block rounded-sm bg-caffe-gold px-8 py-3.5 font-body text-sm font-semibold text-caffe-dark transition-colors hover:bg-caffe-mocha hover:text-caffe-cream"
            aria-label="Ver destaques do cardápio na página inicial"
          >
            Ver destaques do cardápio
          </Link>
        </div>
      </main>
    </div>
  );
}
