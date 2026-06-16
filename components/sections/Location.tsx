import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { MAPS_EMBED_URL, MAPS_URL } from "@/lib/maps";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { SOCIAL_LINKS } from "@/lib/social";

const HOURS = [
  { label: "Segunda a Sexta", time: "09h00 às 18h00" },
  { label: "Sábado e Domingo", time: "08h30 às 18h00" },
] as const;

const PHONES = ["(19) 3893-7377", "(19) 3852-2356"] as const;

export default function Location() {
  return (
    <section id="localizacao">
      <div className="bg-caffe-espresso py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-12">
            <div>
              <Clock
                className="text-caffe-gold"
                size={32}
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-2xl font-bold text-caffe-cream">
                Horário de Funcionamento
              </h3>
              <ul className="mt-6 space-y-4">
                {HOURS.map((item) => (
                  <li key={item.label}>
                    <span className="block font-body text-sm font-light text-caffe-latte">
                      {item.label}
                    </span>
                    <span className="font-body text-base font-bold text-caffe-cream">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-body text-sm italic text-caffe-latte/70">
                Feriados: podem ter alteração
              </p>
            </div>

            <div>
              <MapPin
                className="text-caffe-gold"
                size={32}
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-2xl font-bold text-caffe-cream">
                Onde Estamos
              </h3>
              <address className="mt-6 space-y-1 font-body not-italic leading-relaxed">
                <p className="text-lg font-bold text-caffe-cream">
                  Rua Primo Frazato, 30
                </p>
                <p className="text-caffe-latte">Centro — Pedreira, SP</p>
                <p className="text-caffe-latte">CEP: 13920-000</p>
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-sm border border-caffe-gold px-5 py-2.5 font-body text-sm font-light text-caffe-gold transition-colors hover:bg-caffe-gold hover:text-caffe-dark"
                aria-label="Abrir localização no Google Maps"
              >
                Ver no Google Maps
              </a>
            </div>

            <div>
              <Phone
                className="text-caffe-gold"
                size={32}
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-2xl font-bold text-caffe-cream">
                Fale Conosco
              </h3>
              <ul className="mt-6 space-y-2">
                {PHONES.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="font-body text-base font-bold text-caffe-cream transition-colors hover:text-caffe-gold"
                      aria-label={`Ligar para ${phone}`}
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                aria-label="Fazer encomenda pelo WhatsApp"
              >
                Encomendar pelo WhatsApp
              </a>
              <ul className="mt-8 space-y-3">
                <li>
                  <a
                    href={SOCIAL_LINKS.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-body text-sm text-caffe-latte transition-colors hover:text-caffe-gold"
                    aria-label={`Instagram ${SOCIAL_LINKS.instagram.handle}`}
                  >
                    <ExternalLink
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-caffe-gold"
                      aria-hidden
                    />
                    Instagram: {SOCIAL_LINKS.instagram.handle}
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-body text-sm text-caffe-latte transition-colors hover:text-caffe-gold"
                    aria-label={`Facebook ${SOCIAL_LINKS.facebook.handle}`}
                  >
                    <ExternalLink
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-caffe-gold"
                      aria-hidden
                    />
                    Facebook: {SOCIAL_LINKS.facebook.handle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <AnimatedReveal>
              <h3 className="font-display text-2xl font-bold text-caffe-cream sm:text-3xl">
                Como Chegar
              </h3>
            </AnimatedReveal>
            <div className="mt-6 overflow-hidden rounded-xl border border-caffe-mocha">
              <div className="relative aspect-video w-full min-h-[280px] sm:min-h-[350px] lg:min-h-[450px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full rounded-xl"
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
      </div>
    </section>
  );
}
