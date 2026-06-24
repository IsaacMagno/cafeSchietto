import { menuImage } from "./menu-images";
import type { MenuItem } from "@/types/menu";

const I = menuImage;

export const FULL_MENU_CATALOG: MenuItem[] = [
  // ── Cafés ──
  {
    id: "cafe-espresso",
    name: "Café Espresso",
    description:
      "Café gourmet em grãos 100% arábica moído na hora. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 9,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ ESPRESSO.webp"),
  },
  {
    id: "cafe-carioca",
    name: "Cafe Carioca",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 9,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFE CARIOCA.webp"),
  },
  {
    id: "cafe-canelinha",
    name: "Café Canelinha",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora e finalizado com canela em pó. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 10,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ CANELINHA.webp"),
  },
  {
    id: "cafe-macchiato",
    name: "Café Macchiato",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora e finalizado com crema de leite. 50ml",
    price: "R$ 10,90",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ MACCHIATO.webp"),
  },
  {
    id: "espresso-romano",
    name: "Espresso Romano",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora e finalizado com raspas de limão. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 10,90",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("ESPRESSO ROMANO.webp"),
  },
  {
    id: "cafe-espresso-chantilly",
    name: "Café Espresso Chantilly",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora e finalizado com chantilly. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 12,00",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ ESPRESSO CHANTILLY.webp"),
  },
  {
    id: "cafe-duplo",
    name: "Café Duplo",
    description:
      "Café espresso duplo gourmet em grãos 100% arábica, moído na hora. Acompanha dose de água gaseificada mediante solicitação. 150ml",
    price: "R$ 15,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ DUPLO.webp"),
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora, leite vaporizado e finalizado com crema de leite. 150ml",
    price: "R$ 15,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ COM LEITE.webp"),
  },
  {
    id: "cafe-espresso-nespresso",
    name: "Café Espresso Nespresso",
    description: "Consulte blends disponíveis. 50ml",
    price: "R$ 10,00",
    category: "cafes_chocolates",
    section: "Cafés",
  },

  // ── Cafés, chocolates e chá ──
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description:
      "Leite vaporizado com chocolate Europeu — possui textura líquida. 200ml",
    price: "R$ 17,00",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CHOCOLATE QUENTE.webp"),
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora, chocolate Europeu, canela, leite vaporizado e finalizado com crema de leite. 150ml",
    price: "R$ 19,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CAPPUCCINO.webp"),
  },
  {
    id: "mocha",
    name: "Mocha",
    description:
      "Café espresso gourmet em grãos 100% arábica, moído na hora, calda de chocolate, leite vaporizado e crema de leite. 200ml",
    price: "R$ 19,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("MOCHA.webp"),
  },
  {
    id: "chocolate-quente-europeu",
    name: "Chocolate Quente Europeu",
    description:
      "Leite vaporizado com chocolate Europeu — possui textura cremosa. 200ml",
    price: "R$ 21,90",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CHOCOLATE QUENTE EUROPEU.webp"),
  },
  {
    id: "cafe-schietto",
    name: "Café Schiètto",
    description:
      "Café espresso duplo ou café com leite, blends de chocolate ao leite, borda de doce de leite, finalizado com chantilly e raspas de chocolate. 150ml",
    price: "R$ 21,90",
    category: "cafes_chocolates",
    section: "Receitas Schiètto",
    image: I("CAFÉ SCHIÈTTO.webp"),
  },
  {
    id: "chocolate-schietto",
    name: "Chocolate Schiètto",
    description:
      "Leite vaporizado, blends de chocolate ao leite, borda de Nutella, finalizado com chantilly e raspas de chocolate. 150ml",
    price: "R$ 22,90",
    category: "cafes_chocolates",
    section: "Receitas Schiètto",
    image: I("CHOCOLATE SCHIÈTTO.webp"),
  },
  {
    id: "cappuccino-schietto",
    name: "Cappuccino Schiètto",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora, chocolate Europeu, canela, leite vaporizado, borda de Nutella, finalizado com chantilly e Ovomaltine. 150ml",
    price: "R$ 23,90",
    category: "cafes_chocolates",
    section: "Receitas Schiètto",
    image: I("CAPPUCCINO SCHIÈTTO.webp"),
  },
  {
    id: "cha",
    name: "Chá",
    description:
      "Com sabor de sua preferência: Matte, Erva Doce, Camomila ou Hortelã. 150ml",
    price: "R$ 9,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CHÁ.webp"),
  },

  // ── Coffee Drinks ──
  {
    id: "amarula-coffee",
    name: "Amarula Coffee",
    description:
      "Café espresso duplo gourmet em grãos 100% arábica, moído na hora, Amarula e leite condensado, finalizado com chantilly e raspas de chocolate. 200ml",
    price: "R$ 26,90",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("AMARULA COFFEE.webp"),
  },
  {
    id: "chocolate-jack-daniels",
    name: "Chocolate Jack Daniel's",
    description:
      "Chocolate quente Europeu, whisky Jack Daniel's e leite condensado, finalizado com chantilly e raspas de chocolate — possui textura cremosa. 200ml",
    price: "R$ 29,00",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("CHOCOLATE JACK DANIEL'S.webp"),
  },
  {
    id: "menta-coffee",
    name: "Menta Coffee",
    description:
      "Café espresso gourmet em grãos 100% arábica, moído na hora, licor de menta, leite vaporizado e calda de chocolate, finalizado com crema de leite. 200ml",
    price: "R$ 22,90",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("MENTA COFFEE-ORANGE COFFEE.webp"),
  },
  {
    id: "orange-coffee",
    name: "Orange Coffee",
    description:
      "Café gourmet em grãos 100% arábica, moído na hora, licor de laranja, xarope de frutas de tangerina, suco natural de laranja e cubos de gelo. 200ml",
    price: "R$ 21,90",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("MENTA COFFEE-ORANGE COFFEE.webp"),
  },

  // ── Bebidas especiais geladas ──
  {
    id: "acai-schietto",
    name: "Açaí Schiètto",
    description:
      "Açaí, sorvete de creme, banana, granola, ninho, borda de Nutella com amendoim, finalizado com cereja e ninho. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("AÇAÍ SCHIÈTTO.webp"),
  },
  {
    id: "cafe-gelado",
    name: "Café Gelado",
    description:
      "Leite batido com cubos de café espresso congelado, leite condensado, decorado com calda de caramelo e finalizado com chantilly e Ovomaltine. 200ml",
    price: "R$ 25,00",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("CAFÉ GELADO.webp"),
  },
  {
    id: "cappuccino-gelado",
    name: "Cappuccino Gelado",
    description:
      "Leite batido com cubos de café espresso congelado, leite condensado, chocolate Europeu, canela em pó, decorado com calda de caramelo e chocolate e finalizado com Ovomaltine. 200ml",
    price: "R$ 25,00",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("CAPPUCCINO GELADO.webp"),
  },
  {
    id: "coffee-tonic",
    name: "Coffee Tonic",
    description:
      "Tônica, xarope de frutas de limão siciliano, café espresso e gelo. 400ml",
    price: "R$ 25,00",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("COFFEE TONIC.webp"),
  },
  {
    id: "chocolate-gelado",
    name: "Chocolate Gelado",
    description:
      "Leite e gelo batido com chocolate Europeu, decorado com calda de chocolate e finalizado com chantilly e Ovomaltine. 200ml",
    price: "R$ 24,00",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("CHOCOLATE GELADO.webp"),
  },
  {
    id: "frappe-ninho-frutas",
    name: "Frapê de Ninho com Frutas Vermelhas",
    description:
      "Leite e gelo batido com ninho e geleia de frutas vermelhas, decorado com geleia de frutas vermelhas e finalizado com chantilly, cereja e ninho. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("FRAPÊ DE NINHO COM FRUTAS VERMELHAS.webp"),
  },
  {
    id: "frappe-ninho-nutella",
    name: "Frapê de Ninho com Nutella",
    description:
      "Leite e gelo batido com ninho e Nutella, borda de Nutella, finalizado com chantilly, Ovomaltine, ninho e canudo de waffler. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("FRAPÊ DE NINHO COM NUTELLA.webp"),
  },
  {
    id: "frappuccino",
    name: "Frappuccino",
    description:
      "Leite batido com cubos de café espresso congelado, sorvete de creme, leite condensado, canela, chocolate Europeu, borda de doce de leite e finalizado com chantilly, amendoim e canudo de waffler. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("FRAPPUCCINO.webp"),
  },

  // ── Brunch ──
  {
    id: "pao-na-chapa",
    name: "Pão na Chapa",
    description:
      "Pão de forma integral 30% ou pão francês com acompanhamento de sua preferência: Manteiga (R$ 10,90) · Requeijão, Goiabada ou Doce de Leite (R$ 12,90) · Requeijão Crispy (R$ 20,50)",
    price: "A partir de R$ 10,90",
    category: "brunch_combos",
    section: "Brunch",
    image: I("PÃO NA CHAPA-MANTEIGA.webp"),
  },
  {
    id: "waffle",
    name: "Waffle",
    description:
      "Massa de waffle com acompanhamento de sua preferência: Nutella (R$ 31,50) · Requeijão, Banana e Mel, Doce de Leite, Goiabada, Geleia de Frutas Vermelhas ou Manteiga (R$ 25,00)",
    price: "A partir de R$ 25,00",
    category: "brunch_combos",
    section: "Brunch",
    image: I("WAFFLE.webp"),
  },

  // ── Salgados ──
  {
    id: "pao-queijo-tradicional",
    name: "Pão de Queijo Tradicional",
    description: "Pão de queijo fresquinho, feito na hora.",
    price: "R$ 10,50",
    category: "salgados",
    section: "Salgados",
    image: I("PÃO DE QUEIJO TRADICIONAL.webp"),
  },
  {
    id: "pao-queijo-recheado",
    name: "Pão de Queijo Recheado",
    description:
      "Recheios: Pizza (mussarela, presunto, tomate e orégano), Dois Queijos (mussarela e queijo prato), Frango desfiado com Requeijão, Peito de Peru com Mussarela, Peito de Peru com Requeijão, Salame e Queijo Prato ou Requeijão.",
    price: "R$ 19,90",
    category: "salgados",
    section: "Salgados",
    image: I("PÃO DE QUEIJO RECHEADO.webp"),
  },
  {
    id: "panini",
    name: "Panini",
    description:
      "Pão de queijo prensado e recheado. Recheios: Pizza (mussarela, presunto, tomate e orégano), Dois Queijos (mussarela e queijo prato), Frango desfiado com Requeijão, Peito de Peru com Mussarela, Peito de Peru com Requeijão, Salame e Queijo Prato ou Requeijão.",
    price: "R$ 19,90",
    category: "salgados",
    section: "Salgados",
    image: I("PANINI.webp"),
  },
  {
    id: "salgados-diversos",
    name: "Salgados Diversos",
    description: "Seleção de salgados da casa.",
    price: "R$ 11,50",
    category: "salgados",
    section: "Salgados",
    image: I("SALGADOS DIVERSOS SALGADOS ESPECIAIS.webp"),
  },
  {
    id: "salgados-especiais",
    name: "Salgados Especiais",
    description: "Salgados especiais da casa.",
    price: "R$ 14,00",
    category: "salgados",
    section: "Salgados",
    image: I("SALGADOS DIVERSOS SALGADOS ESPECIAIS.webp"),
  },
  {
    id: "torta-salgada",
    name: "Torta Salgada",
    description:
      "Frango com Requeijão (contém cebola e condimentos) ou Palmito (contém alho, cebola e condimentos).",
    price: "R$ 23,50",
    category: "salgados",
    section: "Salgados",
    image: I("TORTA SALGADA.webp"),
  },
  {
    id: "omelete-recheado",
    name: "Omelete Recheado com dois ovos",
    description:
      "Recheios: Pizza (mussarela, presunto, tomate e orégano), Dois queijos (mussarela e queijo prato), Frango desfiado com Requeijão e Mussarela, Peito de Peru e Mussarela ou Mussarela.",
    price: "R$ 23,50",
    category: "salgados",
    section: "Salgados",
    image: I("OMELETE RECHEADO com dois ovos.webp"),
  },
  {
    id: "lanche-natural",
    name: "Lanche Natural",
    description:
      "Pão de forma integral 30% ou pão francês recheado com mix de folhas, requeijão, tomate e batata palha. Recheios: Pizza (mussarela, presunto e orégano), Dois Queijos (mussarela e queijo prato), Frango desfiado com Requeijão e Mussarela, Peito de Peru e Mussarela, Salame e Queijo Prato ou Mussarela.",
    price: "R$ 24,00",
    category: "salgados",
    section: "Salgados",
    image: I("LANCHE NATURAL.webp"),
  },
  {
    id: "tostex",
    name: "Tostex",
    description:
      "Pão de forma integral 30% ou pão francês recheado e prensado na chapa. Recheios: Pizza (mussarela, presunto, tomate e orégano), Dois Queijos (mussarela e queijo prato), Frango desfiado com Requeijão e Mussarela, Peito de Peru com Mussarela, Salame e Queijo Prato ou Mussarela.",
    price: "R$ 23,50",
    category: "salgados",
    section: "Salgados",
    image: I("TOSTEX.webp"),
  },

  // ── Combos ──
  {
    id: "combo-espresso",
    name: "Combo Espresso",
    description:
      "Café espresso 50ml, servido com duas fatias de pão de forma integral 30% ou pão francês na chapa. Manteiga (R$ 17,50) · Requeijão, Doce de Leite ou Goiabada (R$ 19,50)",
    price: "A partir de R$ 17,50",
    category: "brunch_combos",
    section: "Combos",
    image: I("COMBO ESPRESSO.webp"),
  },
  {
    id: "combo-latte",
    name: "Combo Latte",
    description:
      "Café espresso com leite vaporizado 150ml, servido com duas fatias de pão de forma integral 30% ou pão francês na chapa. Manteiga (R$ 22,00) · Requeijão, Doce de Leite ou Goiabada (R$ 24,00)",
    price: "A partir de R$ 22,00",
    category: "brunch_combos",
    section: "Combos",
    image: I("COMBO LATTE.webp"),
  },
  {
    id: "combo-sul-minas",
    name: "Combo Sul Minas",
    description: "Café espresso 50ml acompanhado de um pão de queijo.",
    price: "R$ 17,00",
    category: "brunch_combos",
    section: "Combos",
  },
  {
    id: "combo-latte-sul-minas",
    name: "Combo Latte Sul Minas",
    description:
      "Café espresso com leite vaporizado 150ml acompanhado de um pão de queijo.",
    price: "R$ 22,00",
    category: "brunch_combos",
    section: "Combos",
  },
  {
    id: "salada-tropical-torta",
    name: "Salada Mix Tropical com Torta Salgada",
    description:
      "Mix de folhas, batata palha, tomate e uma fatia de torta salgada (Frango com Requeijão ou Palmito). Acompanha molho Schiètto mediante solicitação.",
    price: "R$ 39,50",
    category: "saladas",
    section: "Saladas",
    image: I("SALADA MIX TROPICAL COM TORTA SALGADA.webp"),
  },
  {
    id: "salada-omelete",
    name: "Salada Mix com Omelete",
    description:
      "Mix de folhas, batata palha, tomate e omelete com dois ovos (Pizza, Peito de Peru e Mussarela, Frango com Requeijão e Mussarela ou Mussarela). Acompanha molho Schiètto mediante solicitação.",
    price: "R$ 39,50",
    category: "saladas",
    section: "Saladas",
    image: I("SALADA MIX COM OMELETE.webp"),
  },
  {
    id: "salada-caesar",
    name: "Salada Mix Caesar",
    description:
      "Mix de folhas, frango desfiado, queijo parmesão ralado e croûtons. Acompanha molho Caesar mediante solicitação.",
    price: "R$ 29,90",
    category: "saladas",
    section: "Saladas",
    image: I("SALADA MIX CAESAR.webp"),
  },

  // ── Sobremesas ──
  {
    id: "taca-sorvete",
    name: "Taça de Sorvete de Creme",
    description:
      "Uma bola de sorvete de creme, Ovomaltine, cobertura de chocolate e cereja.",
    price: "R$ 15,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("TAÇA DE SORVETE DE CREME.webp"),
  },
  {
    id: "fatia-bolo-caseiro",
    name: "Fatia de Bolo Caseiro",
    description: "Consulte opções disponíveis.",
    price: "R$ 15,50",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("FATIA DE BOLO CASEIRO.webp"),
  },
  {
    id: "fatia-bolo-confeitado",
    name: "Fatia de Bolo Confeitado",
    description: "Consulte opções disponíveis.",
    price: "R$ 22,50",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("FATIA DE BOLO CONFEITADO.webp"),
  },
  {
    id: "petit-gateau",
    name: "Petit Gateau Duo",
    description:
      "Servido com duas bolas de sorvete de creme, Ovomaltine, cereja e cobertura de chocolate.",
    price: "R$ 35,00",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("PETIT GATEAU DUO.webp"),
  },
  {
    id: "waffle-sorvete",
    name: "Waffle com Sorvete",
    description:
      "Waffle acompanhado de uma bola de sorvete de creme, cobertura de chocolate e Ovomaltine.",
    price: "R$ 30,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("WAFFLE COM SORVETE.webp"),
  },
  {
    id: "real-tartufo",
    name: "Real Tartufo",
    description:
      "Sorvete de chocolate, envolto por uma camada de cacau em pó e recheado com um cremoso chantilly.",
    price: "R$ 30,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("REAL TARTUFO.webp"),
  },
  {
    id: "amore-di-coco",
    name: "Amore di Coco",
    description:
      "Sorvete de coco com raspas de coco e recheio de doce de leite.",
    price: "R$ 30,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("AMORE DI COCO.webp"),
  },
  {
    id: "pao-queijo-doce",
    name: "Pão de Queijo Recheado",
    description:
      "Pão de queijo recheado com sabor de sua preferência: Goiabada ou Doce de Leite (R$ 19,90) · Nutella (R$ 23,00)",
    price: "A partir de R$ 19,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("PÃO DE QUEIJO RECHEADO DOCE.webp"),
  },
  {
    id: "panini-doce",
    name: "Panini Doce",
    description:
      "Pão de queijo recheado, prensado na chapa. Goiabada ou Doce de Leite (R$ 19,90) · Nutella (R$ 23,00)",
    price: "A partir de R$ 19,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("PANINI DOCE.webp"),
  },

  // ── Bebidas geladas ──
  {
    id: "suco-polpa",
    name: "Suco Polpa",
    description: "Sabores: Abacaxi, Abacaxi com Hortelã ou Maracujá. 400ml",
    price: "R$ 13,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO POLPA .webp"),
  },
  {
    id: "suco-natural",
    name: "Suco Natural",
    description:
      "Sabores: Laranja, Morango ou Limão. Acréscimo de leite R$ 4,00 mediante solicitação. 400ml",
    price: "R$ 13,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO NATURAL.webp"),
  },
  {
    id: "suco-acai",
    name: "Suco de Açaí",
    description: "Suco natural de laranja batido com açaí e morango. 400ml",
    price: "R$ 22,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO DE AÇAÍ.webp"),
  },
  {
    id: "suco-laranja-morango",
    name: "Suco de Laranja com Morango",
    description: "Suco natural de laranja batido com suco de morango. 400ml",
    price: "R$ 21,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO DE LARANJA COM MORANGO.webp"),
  },
  {
    id: "soda-italiana",
    name: "Soda Italiana",
    description:
      "Água gaseificada e xarope de frutas com sabor da sua preferência. Frutas Vermelhas (grenadine), Maçã Verde, Tangerina ou Limão Siciliano. Consulte outros sabores disponíveis. 400ml",
    price: "R$ 22,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SODA ITALIANA.webp"),
  },
  {
    id: "lemonade",
    name: "Lemonade",
    description:
      "Água, suco de limão e xarope de frutas com sabor de sua preferência: Frutas Vermelhas (grenadine), Maçã Verde, Tangerina ou Limão Siciliano. 400ml",
    price: "R$ 20,50",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("LEMONADE.webp"),
  },
  {
    id: "lara-cream",
    name: "Lara Cream",
    description:
      "Suco natural de laranja batido com gelo e sorvete de creme. 400ml",
    price: "R$ 22,50",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("LARA CREAM.webp"),
  },
  {
    id: "limonada-suica",
    name: "Limonada Suíça",
    description: "Leite batido com gelo, limão e leite condensado. 400ml",
    price: "R$ 20,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("LIMONADA SUÍÇA.webp"),
  },
  {
    id: "suco-energico",
    name: "Suco Enérgico Cenoura",
    description:
      "Suco natural de laranja batido com cenoura e gengibre em pó. 400ml",
    price: "R$ 20,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO ENÉRGICO CENOURA.webp"),
  },
  {
    id: "suco-antioxidante",
    name: "Suco Antioxidante",
    description: "Suco natural de morango batido com beterraba. 400ml",
    price: "R$ 20,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO ANTIOXIDANTE.webp"),
  },
  {
    id: "suco-detox",
    name: "Suco Detox",
    description: "Suco natural de abacaxi batido com couve e hortelã. 400ml",
    price: "R$ 20,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO DETOX.webp"),
  },

  // ── Bebidas (latas e garrafas) ──
  {
    id: "agua-mineral",
    name: "Água Mineral",
    description: "500ml",
    price: "R$ 6,00",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "agua-mineral-gas",
    name: "Água Mineral com Gás",
    description: "500ml",
    price: "R$ 6,50",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "h2o",
    name: "H20",
    description: "500ml",
    price: "R$ 9,90",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "suco-lata",
    name: "Suco Lata",
    description: "Consulte opções disponíveis. 290ml",
    price: "R$ 8,50",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "refrigerante-lata",
    name: "Refrigerante Lata",
    description: "Consulte opções disponíveis. 350ml",
    price: "R$ 8,50",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "refrigerante",
    name: "Refrigerante",
    description: "Consulte opções disponíveis. 600ml",
    price: "R$ 12,00",
    category: "bebidas",
    section: "Bebidas",
  },

  // ── Cervejas ──
  {
    id: "heineken",
    name: "Heineken Longneck",
    description: "330ml",
    price: "R$ 13,00",
    category: "cervejas",
    section: "Cervejas",
  },
  {
    id: "heineken-zero",
    name: "Heineken Longneck Zero",
    description: "330ml",
    price: "R$ 14,00",
    category: "cervejas",
    section: "Cervejas",
  },
  {
    id: "stella",
    name: "Stella Artois Longneck",
    description: "330ml",
    price: "R$ 13,00",
    category: "cervejas",
    section: "Cervejas",
  },
];
