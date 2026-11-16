export const SITE_URL = "https://cafe.schietto.com.br";
export const HOME_DECOR_URL = "https://homedecor.schietto.com.br";
export const PORTAL_URL = "https://schietto.com.br";

const WHATSAPP_PHONE = "551938937377";

/** Telefones do café. O primeiro é também o WhatsApp. */
export const PHONES = ["(19) 3893-7377", "(19) 3852-2356"] as const;

/** Link do WhatsApp com uma mensagem pronta. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensagens prontas por assunto: quem clica já chega no WhatsApp com o que
 * quer escrito, e o café sabe de onde veio o contato.
 */
export const WHATSAPP_MESSAGES = {
  geral: "Olá! Vim pelo site do Caffè Schiètto (cafe.schietto.com.br).",
  reserva:
    "Olá! Vim pelo site do Caffè Schiètto e quero reservar uma mesa. Dia, horário e número de pessoas: ",
  confraternizacao:
    "Olá! Vim pelo site do Caffè Schiètto e quero organizar uma confraternização. Data e número de pessoas: ",
  encomenda:
    "Olá! Vim pelo site do Caffè Schiètto e quero encomendar bolo ou doces. O que eu preciso e para quando: ",
} as const;

export const WHATSAPP_LINKS = {
  geral: whatsappUrl(WHATSAPP_MESSAGES.geral),
  reserva: whatsappUrl(WHATSAPP_MESSAGES.reserva),
  confraternizacao: whatsappUrl(WHATSAPP_MESSAGES.confraternizacao),
  encomenda: whatsappUrl(WHATSAPP_MESSAGES.encomenda),
} as const;

export const SOCIAL_LINKS = {
  whatsapp: {
    label: "WhatsApp",
    href: WHATSAPP_LINKS.geral,
    handle: PHONES[0],
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/caffeschietto/",
    handle: "@caffeschietto",
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/caffeschiettopedreira",
    handle: "Caffè Schiètto",
  },
} as const;
