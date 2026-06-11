const PRODUTOS_BASE = "/images/produtosWEBP";

/** Retorna o caminho público da imagem em public/images/produtosWEBP */
export function menuImage(filename: string): string {
  const webpName = filename.replace(/\.(png|jpe?g)$/i, ".webp");
  return `${PRODUTOS_BASE}/${encodeURIComponent(webpName)}`;
}
