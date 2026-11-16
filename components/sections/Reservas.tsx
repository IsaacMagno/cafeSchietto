import { CakeSlice, CalendarCheck, Users } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import Tilt from "@/components/ui/Tilt";
import { WHATSAPP_LINKS } from "@/lib/social";

const ACTIONS = [
  {
    icon: CalendarCheck,
    title: "Reservar mesa",
    description:
      "Garanta o seu lugar para o café da manhã, o lanche da tarde ou um encontro especial.",
    cta: "Reservar pelo WhatsApp",
    href: WHATSAPP_LINKS.reserva,
  },
  {
    icon: Users,
    title: "Confraternização",
    description:
      "Aniversário, reunião de amigos ou da empresa: combinamos o espaço e o cardápio com você.",
    cta: "Combinar pelo WhatsApp",
    href: WHATSAPP_LINKS.confraternizacao,
  },
  {
    icon: CakeSlice,
    title: "Encomendar bolo ou doces",
    description:
      "Bolos caseiros, bolos confeitados e doces artesanais feitos sob encomenda para a sua data.",
    cta: "Encomendar pelo WhatsApp",
    href: WHATSAPP_LINKS.encomenda,
  },
] as const;

/** Os três pedidos mais comuns, cada um com a mensagem de WhatsApp pronta. */
export default function Reservas() {
  return (
    <section id="reservas" className="bg-caffe-cream py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSectionHeader
          tag="Pelo WhatsApp"
          title="Reservas e encomendas"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3 lg:gap-7">
          {ACTIONS.map((action, index) => {
            const Icon = action.icon;
            return (
              <AnimatedReveal
                key={action.title}
                delay={index * 120}
                className="h-full"
              >
                <Tilt className="h-full rounded-xl" max={4}>
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full cursor-pointer flex-col rounded-xl border border-caffe-latte/60 bg-white/50 p-7 shadow-sm shadow-caffe-espresso/5 transition-all duration-500 ease-premium hover:border-caffe-gold hover:shadow-xl hover:shadow-caffe-espresso/15 sm:p-8"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-caffe-gold/60 text-caffe-bronze transition-colors duration-500 group-hover:bg-caffe-gold group-hover:text-caffe-dark">
                      <Icon size={22} strokeWidth={1.4} aria-hidden />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-caffe-espresso">
                      {action.title}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-base font-light leading-relaxed text-caffe-mocha">
                      {action.description}
                    </p>
                    <span className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-5 py-3.5 font-body text-sm font-bold text-caffe-dark transition-colors duration-300 group-hover:bg-[#1fb857]">
                      <WhatsAppIcon className="h-4 w-4" />
                      {action.cta}
                    </span>
                  </a>
                </Tilt>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
