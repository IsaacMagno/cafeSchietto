# cafeSchietto

Site institucional da **Caffè Schiètto** — cafeteria gourmet em Pedreira, SP.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
# Preencha NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |

## Estrutura

- `app/` — páginas (home, `/cardapio`)
- `components/` — UI e seções
- `lib/` — Supabase, catálogo, rotas
- `public/images/` — fotos do café e produtos
- `supabase/schema.sql` — schema do banco (referência)
