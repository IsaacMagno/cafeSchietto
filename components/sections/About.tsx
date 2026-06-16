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
  title,
  description,
  image,
  imageAlt,
  href,
  external,
  ariaLabel,
}: (typeof PILLARS)[number]) {
  const cardClassName =
    "group relative block min-h-[220px] overflow-hidden rounded-xl transition-shadow hover:shadow-lg hover:shadow-caffe-espresso/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caffe-gold sm:min-h-[260px] lg:min-h-[280px]";

  const content = (
    <>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-caffe-espresso/95 via-caffe-espresso/75 to-caffe-espresso/40 transition-opacity group-hover:from-caffe-espresso"
        aria-hidden
      />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold leading-tight text-caffe-cream sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-caffe-cream/90">
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
    <section id="sobre" className="bg-caffe-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
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
              Desde 2016, o Caffè Schiètto é um ponto de encontro no coração de
              Pedreira. Nascemos com o propósito de transformar uma simples
              pausa no dia em uma experiência completa — com sabor, acolhimento
              e aquele clima especial que só um bom café proporciona.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-caffe-mocha lg:text-lg">
              Somos uma cafeteria gourmet especializada, com foco em bebidas
              artesanais e sobremesas cuidadosamente preparadas. Seja você um
              morador local ou um turista descobrindo a cidade, queremos que cada
              visita se torne uma memória boa.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-caffe-latte/50 shadow-lg shadow-caffe-espresso/10">
            <Image
              src={SITE_IMAGES.ambiente.about}
              alt="Interior do Caffè Schiètto — mesas e ambiente da cafeteria"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
