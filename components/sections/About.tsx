import Image from "next/image";
import Link from "next/link";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { SITE_IMAGES } from "@/lib/images";
import { GOOGLE_REVIEWS_URL, MAPS_URL } from "@/lib/maps";
import { menuImage } from "@/lib/menu-images";
import { ROUTES } from "@/lib/routes";

const PILLARS = [
  {
    title: "Especialidade em Café",
    description:
      "Bebidas preparadas com técnica e dedicação, do espresso ao frappê.",
    image: menuImage("CAFE CARIOCA.webp"),
    imageAlt: "Café Carioca — bebida especial da casa",
    href: `${ROUTES.cardapioCompleto}?categoria=cafes_chocolates`,
    external: false,
    ariaLabel: "Ver cafés e chocolates no cardápio",
  },
  {
    title: "Sobremesas Artesanais",
    description:
      "Doces e tortas feitos com ingredientes selecionados.",
    image: menuImage("FATIA DE BOLO CASEIRO.webp"),
    imageAlt: "Fatia de Bolo Caseiro — sobremesa da casa",
    href: `${ROUTES.cardapioCompleto}?categoria=sobremesas`,
    external: false,
    ariaLabel: "Ver sobremesas no cardápio",
  },
  {
    title: "No Centro de Pedreira",
    description:
      "A dois passos das principais lojas e atrações da cidade.",
    image:
      "https://visitesocorrosp.com.br/content/images/2024/04/Guia-de-Pedreira.jpg",
    imageAlt: "Vista do centro de Pedreira, SP",
    href: MAPS_URL,
    external: true,
    ariaLabel: "Abrir localização do Caffè Schiètto no Google Maps",
  },
  {
    title: "4.4 no Google",
    description:
      "Avaliado por centenas de clientes satisfeitos desde 2016.",
    image: SITE_IMAGES.ambiente.hero,
    imageAlt: "Ambiente do Caffè Schiètto em Pedreira",
    href: GOOGLE_REVIEWS_URL,
    external: true,
    ariaLabel: "Ver avaliações do Caffè Schiètto no Google",
  },
] as const;

function PillarCard({
  index,
  title,
  description,
  image,
  imageAlt,
  href,
  external,
  ariaLabel,
}: (typeof PILLARS)[number] & { index: number }) {
  const cardClassName =
    "group relative block min-h-[220px] cursor-pointer overflow-hidden rounded-xl shadow-md shadow-caffe-espresso/10 ring-1 ring-caffe-espresso/10 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-xl hover:shadow-caffe-espresso/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caffe-gold sm:min-h-[260px] lg:min-h-[300px]";

  const content = (
    <>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.06]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-caffe-dark/95 via-caffe-espresso/60 to-caffe-espresso/25 transition-opacity duration-500 group-hover:from-caffe-dark"
        aria-hidden
      />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-6 sm:p-7">
        <span
          className="font-display text-sm italic text-caffe-gold/80"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="mt-2 block h-px w-8 bg-caffe-gold/70 transition-all duration-500 ease-premium group-hover:w-14"
          aria-hidden
        />
        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-caffe-cream sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 font-body text-sm font-light leading-relaxed text-caffe-cream/85">
          {description}
        </p>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={cardClassName}>
      {content}
    </Link>
  );
}

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-caffe-cream py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <AnimatedReveal>
              <p className="flex items-center gap-3 font-body text-xs font-light uppercase tracking-[0.3em] text-caffe-mocha">
                <span className="h-px w-8 bg-caffe-gold" aria-hidden />
                Nossa História
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-caffe-espresso sm:text-4xl lg:text-5xl">
                Muito além de{" "}
                <span className="italic font-medium text-caffe-gold">
                  um café
                </span>
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={150}>
              <p className="mt-8 font-body text-base font-light leading-[1.9] text-caffe-mocha lg:text-lg">
                Desde 2016, o Caffè Schiètto é um ponto de encontro no coração
                de Pedreira. Nascemos com o propósito de transformar uma
                simples pausa no dia em uma experiência completa — com sabor,
                acolhimento e aquele clima especial que só um bom café
                proporciona.
              </p>
              <p className="mt-5 font-body text-base font-light leading-[1.9] text-caffe-mocha lg:text-lg">
                Somos uma cafeteria gourmet especializada, com foco em bebidas
                artesanais e sobremesas cuidadosamente preparadas. Seja você um
                morador local ou um turista descobrindo a cidade, queremos que
                cada visita se torne uma memória boa.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={300}>
              <div className="mt-10 flex items-center gap-8 border-t border-caffe-latte/50 pt-8 sm:gap-12">
                <div>
                  <p className="font-display text-3xl font-bold text-caffe-espresso sm:text-4xl">
                    2016
                  </p>
                  <p className="mt-1 font-body text-xs font-light uppercase tracking-[0.18em] text-caffe-mocha">
                    Desde
                  </p>
                </div>
                <span className="h-10 w-px bg-caffe-latte/50" aria-hidden />
                <div>
                  <p className="font-display text-3xl font-bold text-caffe-espresso sm:text-4xl">
                    4.4
                  </p>
                  <p className="mt-1 font-body text-xs font-light uppercase tracking-[0.18em] text-caffe-mocha">
                    No Google
                  </p>
                </div>
                <span className="h-10 w-px bg-caffe-latte/50" aria-hidden />
                <div>
                  <p className="font-display text-3xl font-bold text-caffe-espresso sm:text-4xl">
                    100%
                  </p>
                  <p className="mt-1 font-body text-xs font-light uppercase tracking-[0.18em] text-caffe-mocha">
                    Artesanal
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={200} className="relative">
            <div
              className="absolute -top-4 -right-4 bottom-4 left-4 rounded-xl border border-caffe-gold/40 sm:-top-6 sm:-right-6 sm:bottom-6 sm:left-6"
              aria-hidden
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-caffe-espresso/15">
              <Image
                src={SITE_IMAGES.ambiente.about}
                alt="Interior do Caffè Schiètto — mesas e ambiente da cafeteria"
                fill
                className="object-cover transition-transform duration-[1.4s] ease-premium hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {PILLARS.map((pillar, index) => (
            <AnimatedReveal key={pillar.title} delay={index * 120}>
              <PillarCard {...pillar} index={index} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
