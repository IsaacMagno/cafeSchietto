import { Clock, MapPin, Phone } from "lucide-react";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import { MAPS_URL } from "@/lib/maps";
import { SOCIAL_LINKS } from "@/lib/social";

const HOURS = [
  { label: "Segunda a Sexta", time: "09h00 às 18h00" },
  { label: "Sábado e Domingo", time: "08h30 às 18h00" },
] as const;

const PHONES = ["(19) 3893-7377", "(19) 3852-2356"] as const;

function CardShell({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <AnimatedReveal delay={delay} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-caffe-mocha/40 bg-gradient-to-b from-caffe-dark/50 to-transparent p-8 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-caffe-gold/50 hover:shadow-xl hover:shadow-caffe-dark/40 sm:p-9">
        <span
          className="absolute left-8 top-0 h-px w-12 bg-caffe-gold/50 transition-all duration-500 ease-premium group-hover:w-20 group-hover:bg-caffe-gold sm:left-9"
          aria-hidden
        />
        {children}
      </div>
    </AnimatedReveal>
  );
}

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-caffe-gold/40 bg-caffe-gold/5 text-caffe-gold transition-colors duration-500 group-hover:border-caffe-gold/70 group-hover:bg-caffe-gold/10">
      {children}
    </span>
  );
}

export default function Location() {
  return (
    <section id="localizacao">
      <div className="relative flex min-h-screen items-center overflow-hidden bg-caffe-espresso py-24 sm:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-caffe-gold/40 to-transparent"
          aria-hidden
        />
        <div
          className="hero-grain pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caffe-gold/[0.03] blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeader
            tag="Visite-nos"
            title="Localização & Contato"
            tagClassName="font-body text-xs font-light uppercase tracking-[0.3em] text-caffe-gold"
            titleClassName="mt-4 font-display text-4xl font-bold text-caffe-cream sm:text-5xl"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
            <CardShell>
              <CardIcon>
                <Clock size={26} strokeWidth={1.25} aria-hidden />
              </CardIcon>
              <h3 className="mt-6 font-display text-2xl font-bold text-caffe-cream">
                Horário de Funcionamento
              </h3>
              <ul className="mt-6 space-y-4">
                {HOURS.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline justify-between gap-4 border-b border-caffe-mocha/30 pb-3"
                  >
                    <span className="font-body text-sm font-light text-caffe-latte">
                      {item.label}
                    </span>
                    <span className="whitespace-nowrap font-body text-base font-bold text-caffe-cream">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-body text-sm font-light italic text-caffe-latte/70">
                Feriados: podem ter alteração
              </p>
            </CardShell>

            <CardShell delay={120}>
              <CardIcon>
                <MapPin size={26} strokeWidth={1.25} aria-hidden />
              </CardIcon>
              <h3 className="mt-6 font-display text-2xl font-bold text-caffe-cream">
                Onde Estamos
              </h3>
              <address className="mt-6 space-y-1.5 font-body not-italic leading-relaxed">
                <p className="text-lg font-bold text-caffe-cream">
                  Rua Primo Frazato, 30
                </p>
                <p className="font-light text-caffe-latte">
                  Centro — Pedreira, SP
                </p>
                <p className="font-light text-caffe-latte">CEP: 13920-000</p>
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block cursor-pointer rounded-sm border border-caffe-gold/70 px-6 py-3 font-body text-xs font-light uppercase tracking-[0.16em] text-caffe-gold transition-all duration-500 ease-premium hover:bg-caffe-gold hover:text-caffe-dark"
                aria-label="Abrir localização no Google Maps"
              >
                Ver no Google Maps
              </a>
            </CardShell>

            <CardShell delay={240}>
              <CardIcon>
                <Phone size={26} strokeWidth={1.25} aria-hidden />
              </CardIcon>
              <h3 className="mt-6 font-display text-2xl font-bold text-caffe-cream">
                Fale Conosco
              </h3>
              <ul className="mt-6 space-y-3">
                {PHONES.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="cursor-pointer font-body text-lg font-bold text-caffe-cream transition-colors duration-300 hover:text-caffe-gold"
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
                className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-500 ease-premium hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/20"
                aria-label="Fazer encomenda pelo WhatsApp"
              >
                Encomendar pelo WhatsApp
              </a>
            </CardShell>
          </div>

          <AnimatedReveal delay={300}>
            <p className="mt-12 text-center font-display text-lg italic text-caffe-latte/60 sm:mt-16 sm:text-xl">
              &ldquo;Esperamos você para um café&rdquo;
            </p>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
