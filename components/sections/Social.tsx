import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import { MAPS_EMBED_URL, MAPS_URL } from "@/lib/maps";
import { SOCIAL_LINKS } from "@/lib/social";

export default function Social() {
  return (
    <section
      id="redes"
      data-snap
      className="bg-caffe-cream py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSectionHeader tag="Conecte-se" title="Redes Sociais" />

        <AnimatedReveal>
          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-12">
            <p className="font-body text-base font-light leading-[1.9] text-caffe-mocha sm:text-lg">
              Siga o Caffè Schiètto e acompanhe o dia a dia, os lançamentos e
              os bastidores do café.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={SOCIAL_LINKS.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm border border-caffe-gold/60 px-7 py-3.5 font-body text-xs font-light uppercase tracking-[0.16em] text-caffe-espresso transition-all duration-500 ease-premium hover:border-caffe-gold hover:bg-caffe-gold hover:text-caffe-dark hover:shadow-lg hover:shadow-caffe-gold/20 sm:w-auto"
                aria-label={`Seguir no Instagram ${SOCIAL_LINKS.instagram.handle}`}
              >
                <InstagramIcon />
                {SOCIAL_LINKS.instagram.handle}
              </a>
              <a
                href={SOCIAL_LINKS.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm border border-caffe-gold/60 px-7 py-3.5 font-body text-xs font-light uppercase tracking-[0.16em] text-caffe-espresso transition-all duration-500 ease-premium hover:border-caffe-gold hover:bg-caffe-gold hover:text-caffe-dark hover:shadow-lg hover:shadow-caffe-gold/20 sm:w-auto"
                aria-label={`Seguir no Facebook ${SOCIAL_LINKS.facebook.handle}`}
              >
                <FacebookIcon />
                {SOCIAL_LINKS.facebook.label}
              </a>
            </div>
          </div>
        </AnimatedReveal>

        <div className="mt-16 sm:mt-20">
          <AnimatedReveal>
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-caffe-espresso sm:text-3xl">
                Como Chegar
              </h3>
              <div
                className="mx-auto mt-4 h-px w-12 bg-caffe-gold"
                aria-hidden
              />
              <p className="mt-4 font-body text-sm font-light text-caffe-mocha sm:text-base">
                Rua Primo Frazato, 30 — Centro, Pedreira/SP
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-body text-sm text-caffe-espresso underline decoration-caffe-gold/60 underline-offset-4 transition-colors duration-300 hover:text-caffe-gold"
                aria-label="Abrir localização no Google Maps"
              >
                Abrir no Google Maps
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={150}>
            <div className="mt-9 overflow-hidden rounded-xl shadow-xl shadow-caffe-espresso/10 ring-1 ring-caffe-latte/60">
              <div className="relative aspect-video w-full min-h-[280px] sm:min-h-[350px] lg:min-h-[450px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Caffè Schiètto no Google Maps"
                />
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
