import Image from "next/image";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { SITE_IMAGES } from "@/lib/images";

const PILLARS = [
  {
    emoji: "☕",
    title: "Especialidade em Café",
    description:
      "Bebidas preparadas com técnica e dedicação, do espresso ao frappê.",
  },
  {
    emoji: "🍰",
    title: "Sobremesas Artesanais",
    description:
      "Doces e tortas feitos com ingredientes selecionados.",
  },
  {
    emoji: "📍",
    title: "No Centro de Pedreira",
    description:
      "A dois passos das principais lojas e atrações da cidade.",
  },
  {
    emoji: "⭐",
    title: "4.4 no Google",
    description:
      "Avaliado por centenas de clientes satisfeitos desde 2016.",
  },
] as const;

export default function About() {
  return (
    <section id="sobre" className="bg-caffe-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="lg:border-l-2 lg:border-caffe-gold lg:pl-8">
              <p className="font-body text-sm font-light uppercase tracking-widest text-caffe-mocha">
                Nossa História
              </p>
              <AnimatedReveal>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-caffe-espresso sm:text-4xl lg:text-5xl">
                  Muito além de um{" "}
                  <span className="italic text-caffe-gold">café</span>
                </h2>
              </AnimatedReveal>
              <p className="mt-6 font-body text-base leading-relaxed text-caffe-mocha lg:text-lg">
                Desde 2016, o Caffè Schiètto é um ponto de encontro no coração
                de Pedreira. Nascemos com o propósito de transformar uma simples
                pausa no dia em uma experiência completa — com sabor, acolhimento
                e aquele clima especial que só um bom café proporciona.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-caffe-mocha lg:text-lg">
                Somos uma cafeteria gourmet especializada, com foco em bebidas
                artesanais e sobremesas cuidadosamente preparadas. Seja você um
                morador local ou um turista descobrindo a cidade, queremos que
                cada visita se torne uma memória boa.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-caffe-latte/50 shadow-lg shadow-caffe-espresso/10">
              <Image
                src={SITE_IMAGES.ambiente.about}
                alt="Interior do Caffè Schiètto — mesas e ambiente da cafeteria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-lg border border-caffe-latte/60 bg-white p-6 shadow-md shadow-caffe-espresso/5 transition-shadow hover:shadow-lg"
                >
                  <span className="text-4xl" role="img" aria-hidden>
                    {pillar.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-caffe-espresso">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-caffe-mocha">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
