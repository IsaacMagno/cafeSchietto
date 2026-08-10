const WHATSAPP_PHONE = "551938937377";

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site Caffè Schiètto (cafe.schietto.com.br).";

export const HOME_DECOR_URL = "https://homedecor.schietto.com.br";

export const SOCIAL_LINKS = {
  whatsapp: {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    handle: "(19) 3893-7377",
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
