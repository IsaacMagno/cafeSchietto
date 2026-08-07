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
    <section id="redes" className="bg-caffe-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSectionHeader tag="Conecte-se" title="Redes Sociais" />

        <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-12">
          <p className="font-body text-base leading-relaxed text-caffe-mocha sm:text-lg">
            Siga o Caffè Schiètto e acompanhe o dia a dia, os lançamentos e os
            bastidores do café.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SOCIAL_LINKS.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-caffe-gold px-6 py-3 font-body text-sm text-caffe-espresso transition-colors hover:bg-caffe-gold hover:text-caffe-dark sm:w-auto"
              aria-label={`Seguir no Instagram ${SOCIAL_LINKS.instagram.handle}`}
            >
              <InstagramIcon />
              {SOCIAL_LINKS.instagram.handle}
            </a>
            <a
              href={SOCIAL_LINKS.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-caffe-gold px-6 py-3 font-body text-sm text-caffe-espresso transition-colors hover:bg-caffe-gold hover:text-caffe-dark sm:w-auto"
              aria-label={`Seguir no Facebook ${SOCIAL_LINKS.facebook.handle}`}
            >
              <FacebookIcon />
              {SOCIAL_LINKS.facebook.label}
            </a>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <AnimatedReveal>
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-caffe-espresso sm:text-3xl">
                Como Chegar
              </h3>
              <p className="mt-3 font-body text-sm text-caffe-mocha sm:text-base">
                Rua Primo Frazato, 30 — Centro, Pedreira/SP
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-body text-sm text-caffe-espresso underline decoration-caffe-gold/60 underline-offset-4 transition-colors hover:text-caffe-mocha"
                aria-label="Abrir localização no Google Maps"
              >
                Abrir no Google Maps
              </a>
            </div>
          </AnimatedReveal>

          <div className="mt-8 overflow-hidden rounded-xl border border-caffe-latte/70 shadow-lg shadow-caffe-espresso/5">
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
        </div>
      </div>
    </section>
  );
}
