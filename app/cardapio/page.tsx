import type { Metadata } from "next";
import MenuClient from "@/components/cardapio/MenuClient";
import { FULL_MENU_CATALOG } from "@/lib/full-menu-catalog";
import { parseMenuCategoryFilter } from "@/lib/menu-categories";

export const metadata: Metadata = {
  title: "Cardápio Completo | Caffè Schiètto",
  description:
    "Cardápio completo do Caffè Schiètto — cafés, chocolates, salgados, sobremesas, bebidas e muito mais em Pedreira, SP.",
};

const CURRENT_YEAR = new Date().getFullYear();

export default async function CardapioPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const initialCategory = parseMenuCategoryFilter(categoria);

  return (
    <div className="flex min-h-screen flex-col bg-caffe-cream">
      <main className="flex-1 px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-[1200px]">
          <header className="text-center">
            <p className="font-body text-sm font-light uppercase tracking-widest text-caffe-mocha">
              Cardápio {CURRENT_YEAR}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-caffe-espresso sm:text-5xl">
              Explore o universo de sabores do Schiètto Caffè.
            </h1>
            <div
              className="mx-auto mt-6 h-px w-[60px] bg-caffe-gold"
              aria-hidden
            />
            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-caffe-mocha sm:text-base">
              Uma seleção cuidadosa de cafés especiais, doces artesanais,
              salgados e opções exclusivas para tornar o seu momento ainda mais
              saboroso.
            </p>
          </header>

          <div className="mt-12">
            <MenuClient
              items={FULL_MENU_CATALOG}
              initialCategory={initialCategory}
            />
          </div>
        </div>
      </main>

      <footer className="border-t border-caffe-latte/60 bg-caffe-espresso py-6 text-center">
        <p className="font-body text-xs text-caffe-latte/70">
          Preços sujeitos a alteração · Não cobramos 10% de taxa de serviço
        </p>
      </footer>
    </div>
  );
}
