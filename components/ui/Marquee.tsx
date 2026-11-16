const ITEMS = [
  "Espresso tirado na hora",
  "Cappuccinos",
  "Chocolates quentes",
  "Frappês",
  "Bolos caseiros",
  "Doces artesanais",
  "Pão de queijo",
  "Lanches na chapa",
] as const;

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap font-display text-base italic text-caffe-cream/85 sm:text-lg"
        >
          <span className="px-6 sm:px-8">{item}</span>
          <span
            className="h-1.5 w-1.5 rotate-45 border border-caffe-gold/70"
            aria-hidden
          />
        </li>
      ))}
    </ul>
  );
}

/** Faixa em movimento com o que o café serve, logo abaixo do topo. */
export default function Marquee() {
  return (
    <div
      className="marquee border-y border-caffe-gold/25 bg-caffe-dark py-4"
      aria-label="O que servimos"
    >
      <Track />
      <Track hidden />
    </div>
  );
}
