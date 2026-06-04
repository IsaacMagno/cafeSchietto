-- Tabela de produtos/cardápio
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL CHECK (category IN ('cafe', 'bebida_fria', 'sobremesa', 'salgado')),
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de eventos
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Policies de leitura pública
CREATE POLICY "Products são públicos" ON products FOR SELECT USING (active = true);
CREATE POLICY "Events são públicos" ON events FOR SELECT USING (active = true);

-- Dados de seed (alinhados às fotos em public/images)
INSERT INTO products (name, description, category, image_url) VALUES
  (
    'Cappuccino',
    'Café latte na xícara personalizada do Schiètto, com latte art em formato de coração.',
    'cafe',
    '/images/produto1.webp'
  ),
  (
    'Torta Salgada',
    'Fatia generosa de torta salgada (frango ou palmito) com salada de folhas, tomate e batata palha.',
    'salgado',
    '/images/produto2.webp'
  ),
  (
    'Chá Gelado com Pão de Queijo',
    'Chá gelado refrescante (mate com limão) acompanhado de pão de queijo prensado na chapa.',
    'bebida_fria',
    '/images/produto3.webp'
  ),
  (
    'Brigadeiro Gourmet',
    'Brigadeiros artesanais: chocolate com creme ou doce de leite e sabores claros como churros ou castanhas.',
    'sobremesa',
    '/images/produto4.webp'
  ),
  (
    'Sanduíche Natural',
    'Lanche natural no pão de forma com queijo, salame e alface — leve e saboroso.',
    'salgado',
    '/images/produto5.webp'
  ),
  (
    'Bolo Recheado',
    'Bolos recheados na caixinha: chocolate com raspas, leite ninho com damasco e coco com chocolate (prestígio).',
    'sobremesa',
    '/images/produto6.webp'
  ),
  (
    'Tostex',
    'Misto quente clássico de presunto e queijo com orégano, cortado ao meio e servido quentinho.',
    'salgado',
    '/images/produto7.webp'
  ),
  (
    'Sanduíche para Viagem',
    'Sanduíche natural embalado para viagem, com frios, alface, tomate e cenoura ralada.',
    'salgado',
    '/images/produto8.jpg'
  ),
  (
    'Bolo Caseiro',
    'Bolo caseiro com furo no meio, calda cremosa e pedaços de castanhas, nozes ou amendoim.',
    'sobremesa',
    '/images/produto9.webp'
  );
