import type { Metadata } from "next";
import Link from "next/link";
import CookiePreferencesButton from "@/components/analytics/CookiePreferencesButton";
import { PHONES, SOCIAL_LINKS } from "@/lib/social";

export const metadata: Metadata = {
  title: "Política de Privacidade | Caffè Schiètto",
  description:
    "Como o site do Caffè Schiètto trata dados e cookies, e como você pode exercer seus direitos pela LGPD.",
  alternates: { canonical: "/privacidade" },
};

const sectionTitle = "mt-10 font-display text-2xl font-bold text-caffe-espresso";
const paragraph =
  "mt-3 font-body text-base font-light leading-relaxed text-caffe-mocha";
const strong = "font-bold text-caffe-espresso";
const link =
  "cursor-pointer text-caffe-bronze underline underline-offset-2 hover:text-caffe-espresso";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-caffe-cream px-6 pb-16 pt-28 lg:pb-24 lg:pt-36">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className={`font-body text-sm ${link}`}>
          ← Voltar ao site
        </Link>

        <h1 className="mt-8 font-display text-4xl font-bold text-caffe-espresso lg:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 font-body text-sm text-caffe-mocha/80">
          Última atualização: 16 de novembro de 2026
        </p>

        <h2 className={sectionTitle}>Quem somos</h2>
        <p className={paragraph}>
          Este site é do Caffè Schiètto, cafeteria localizada na Rua Primo
          Frazato, 30 — Centro, Pedreira, SP. O site apresenta o café e o
          cardápio e leva você até o nosso WhatsApp, telefone e endereço. Não
          vendemos pela internet e não temos cadastro, login nem formulários no
          site.
        </p>

        <h2 className={sectionTitle}>Quais dados tratamos</h2>
        <p className={paragraph}>
          <strong className={strong}>
            Dados de navegação (somente com o seu aceite).
          </strong>{" "}
          Se você clicar em &ldquo;Aceitar&rdquo; no aviso de cookies, usamos o
          Microsoft Clarity, ferramenta da Microsoft que registra como o site é
          usado: páginas visitadas, cliques, rolagem, tipo de aparelho e
          navegador, e localização aproximada. Serve para entendermos o que
          funciona e o que precisa melhorar. Se você recusar, o Clarity não é
          carregado.
        </p>
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <p className={paragraph}>
            <strong className={strong}>
              Pixel da Meta (somente com o seu aceite).
            </strong>{" "}
            Se você aceitar, usamos o Pixel da Meta (Facebook e Instagram) para
            medir se os nossos anúncios levam a contatos, como cliques no
            WhatsApp, no telefone e no mapa. A Meta pode receber informações do
            seu navegador (páginas visitadas, cliques e identificadores) e
            usá-las conforme a política dela. Se você recusar, o Pixel não é
            carregado.
          </p>
        )}
        <p className={paragraph}>
          <strong className={strong}>Quando você fala conosco.</strong> Ao tocar
          em um botão de WhatsApp ou no telefone, a conversa acontece fora do
          site, no WhatsApp ou na sua operadora. O que você nos enviar ali
          (nome, telefone, mensagem, dados de uma reserva ou encomenda) é usado
          apenas para atender ao seu pedido, e o WhatsApp trata esses dados
          segundo a política dele. Se você chegar por um anúncio nosso, o link
          traz o nome da campanha e nós o acrescentamos à mensagem pronta do
          WhatsApp, para sabermos qual anúncio gerou o contato.
        </p>
        <p className={paragraph}>
          <strong className={strong}>Mapa do Google.</strong> No fim da página
          inicial mostramos um mapa incorporado do Google Maps. Ao carregá-lo, o
          Google pode receber informações do seu navegador e usar cookies
          próprios, conforme a política de privacidade do Google.
        </p>
        <p className={paragraph}>
          <strong className={strong}>Links externos.</strong> Os links para o
          Instagram, o Facebook, a Schiètto Home Decor e o Google Maps levam a
          sites de terceiros, que têm suas próprias políticas.
        </p>

        <h2 className={sectionTitle}>Cookies e a sua escolha</h2>
        <p className={paragraph}>
          Guardamos no seu navegador apenas a sua resposta ao aviso de cookies,
          para não perguntar de novo a cada visita. Você pode mudar de ideia a
          qualquer momento:
        </p>
        <p className="mt-4">
          <CookiePreferencesButton className={`${link} font-body text-base`} />
        </p>

        <h2 className={sectionTitle}>Seus direitos (LGPD)</h2>
        <p className={paragraph}>
          Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir
          confirmação de que tratamos dados seus, acesso, correção, eliminação,
          informações sobre compartilhamento e a revogação do consentimento.
          Como não mantemos cadastro de visitantes, a forma mais simples de
          exercer esses direitos é falar com a gente:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 font-body text-base font-light text-caffe-mocha">
          <li>
            WhatsApp:{" "}
            <a
              href={SOCIAL_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              {PHONES[0]}
            </a>
          </li>
          <li>
            Telefone:{" "}
            <a href={`tel:+55${PHONES[0].replace(/\D/g, "")}`} className={link}>
              {PHONES[0]}
            </a>
          </li>
          <li>Pessoalmente, no café.</li>
        </ul>

        <h2 className={sectionTitle}>Mudanças nesta política</h2>
        <p className={paragraph}>
          Se mudarmos a forma como tratamos dados, atualizaremos esta página e a
          data acima.
        </p>
      </article>
    </main>
  );
}
