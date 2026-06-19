import { menuImage } from "./menu-images";
import type { MenuItem } from "@/types/menu";

const I = menuImage;

export const FULL_MENU_CATALOG: MenuItem[] = [
  // ── Cafés e chocolates (receitas Schiètto) ──
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
      "Leite vaporizado, blends de chocolate ao leite, borda de Nutella, finalizado com chantilly e Ovomaltine. 150ml",
    price: "R$ 20,90",
    category: "cafes_chocolates",
    section: "Receitas Schiètto",
    image: I("CHOCOLATE SCHIÈTTO.webp"),
  },
  {
    id: "cappuccino-schietto",
    name: "Cappuccino Schiètto",
    description:
      "Café gourmet 100% arábica moído na hora, chocolate Europeu, canela, raspas de chocolate, leite vaporizado, borda de Nutella, finalizado com chantilly e Ovomaltine. 150ml",
    price: "R$ 23,90",
    category: "cafes_chocolates",
    section: "Receitas Schiètto",
    image: I("CAPPUCCINO SCHIÈTTO.webp"),
  },
  {
    id: "cafe-espresso-nespresso",
    name: "Café Espresso Nespresso",
    description: "Consulte blends disponíveis. 50ml",
    price: "R$ 10,00",
    category: "cafes_chocolates",
    section: "Receitas Schiètto",
  },

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
    name: "Café Carioca",
    description:
      "Café gourmet em grãos 100% arábica moído na hora. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 9,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFE CARIOCA.webp"),
  },
  {
    id: "cafe-canelinha",
    name: "Café Canelinha",
    description:
      "Café gourmet em grãos 100% arábica moído na hora e finalizado com canela em pó. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 9,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ CANELINHA.webp"),
  },
  {
    id: "cafe-macchiato",
    name: "Café Macchiato",
    description:
      "Café gourmet em grãos 100% arábica moído na hora e finalizado com crema de leite. 50ml",
    price: "R$ 9,90",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ MACCHIATO.webp"),
  },
  {
    id: "espresso-romano",
    name: "Espresso Romano",
    description:
      "Café gourmet em grãos 100% arábica moído na hora e finalizado com raspas de limão. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 9,90",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("ESPRESSO ROMANO.webp"),
  },
  {
    id: "cafe-espresso-chantilly",
    name: "Café Espresso Chantilly",
    description:
      "Café gourmet em grãos 100% arábica moído na hora e finalizado com chantilly. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 10,90",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ ESPRESSO CHANTILLY.webp"),
  },
  {
    id: "cafe-duplo",
    name: "Café Duplo",
    description:
      "Café espresso duplo gourmet em grãos 100% arábica moído na hora. Acompanha dose de água gaseificada mediante solicitação. 50ml",
    price: "R$ 15,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ DUPLO.webp"),
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description:
      "Café gourmet em grãos 100% arábica moído na hora, leite vaporizado e finalizado com crema de leite. 150ml",
    price: "R$ 15,50",
    category: "cafes_chocolates",
    section: "Cafés",
    image: I("CAFÉ COM LEITE.webp"),
  },

  // ── Cafés, chocolates e chá ──
  {
    id: "mocha",
    name: "Mocha",
    description:
      "Café espresso gourmet em grãos 100% arábica moído na hora, calda de chocolate, leite vaporizado e crema de leite. 200ml",
    price: "R$ 17,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("MOCHA.webp"),
  },
  {
    id: "affogatto",
    name: "Affogatto",
    description:
      "Leite vaporizado com chocolate Europeu, borda de doce de leite, finalizado com sorvete de creme e Ovomaltine — textura cremosa. 200ml",
    price: "R$ 27,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
  },
  {
    id: "chocolate-italiano",
    name: "Chocolate Italiano",
    description:
      "Leite vaporizado com chocolate Europeu e geleia de frutas vermelhas — textura cremosa. 200ml",
    price: "R$ 20,90",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
  },
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description:
      "Leite vaporizado com chocolate Europeu — textura líquida. 200ml",
    price: "R$ 15,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CHOCOLATE QUENTE.webp"),
  },
  {
    id: "chocolate-quente-europeu",
    name: "Chocolate Quente Europeu",
    description:
      "Leite vaporizado com chocolate Europeu — textura cremosa. 200ml",
    price: "R$ 19,90",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CHOCOLATE QUENTE EUROPEU.webp"),
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Café gourmet em grãos 100% arábica moído na hora, chocolate Europeu, canela, raspas de chocolate, leite vaporizado e crema de leite. 150ml",
    price: "R$ 17,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CAPPUCCINO.webp"),
  },
  {
    id: "cha",
    name: "Chá",
    description:
      "Com sabor de sua preferência: Matte, Erva Doce, Camomila ou Hortelã. 150ml",
    price: "R$ 8,50",
    category: "cafes_chocolates",
    section: "Cafés, Chocolates e Chá",
    image: I("CHÁ.webp"),
  },

  // ── Coffee Drinks (álcool) ──
  {
    id: "chocolate-jack-daniels",
    name: "Chocolate Jack Daniel's",
    description:
      "Chocolate quente Europeu, whisky Jack Daniel's e leite condensado, finalizado com chantilly e raspas de chocolate — textura cremosa. 200ml",
    price: "R$ 25,50",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("CHOCOLATE JACK DANIEL'S.webp"),
  },
  {
    id: "amarula-coffee",
    name: "Amarula Coffee",
    description:
      "Café espresso duplo gourmet em grãos 100% arábica moído na hora, Amarula e leite condensado, finalizado com chantilly e raspas de chocolate. 200ml",
    price: "R$ 24,50",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("AMARULA COFFEE.webp"),
  },
  {
    id: "orange-coffee",
    name: "Orange Coffee",
    description:
      "Café gourmet em grãos 100% arábica moído na hora, licor de laranja, xarope de frutas de tangerina, suco natural de laranja e cubos de gelo. 200ml",
    price: "R$ 19,90",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("MENTA COFFEE-ORANGE COFFEE.webp"),
  },
  {
    id: "menta-coffee",
    name: "Menta Coffee",
    description:
      "Café espresso gourmet em grãos 100% arábica moído na hora, licor de menta, leite vaporizado e calda de chocolate, finalizado com crema de leite. 200ml",
    price: "R$ 20,90",
    category: "coffee_drinks",
    section: "Coffee Drinks",
    image: I("MENTA COFFEE-ORANGE COFFEE.webp"),
  },

  // ── Bebidas especiais geladas ──
  {
    id: "frappe-ninho-nutella",
    name: "Frapê de Ninho com Nutella",
    description:
      "Leite e gelo batido com ninho e Nutella, borda de Nutella, finalizado com chantilly, Ovomaltine, ninho e canudo de wafer. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("FRAPÊ DE NINHO COM NUTELLA.webp"),
  },
  {
    id: "frappe-ninho-frutas",
    name: "Frapê de Ninho com Frutas Vermelhas",
    description:
      "Leite e gelo batido com ninho e geleia de frutas vermelhas, decorado com geleia e finalizado com chantilly, cereja e ninho. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("FRAPÊ DE NINHO COM FRUTAS VERMELHAS.webp"),
  },
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
    id: "frappuccino",
    name: "Frappuccino",
    description:
      "Leite batido com cubos de café espresso congelado, sorvete de creme, leite condensado, canela, chocolate Europeu, calda de caramelo, borda de doce de leite, chantilly, amendoim e canudo de wafer. 350ml",
    price: "R$ 31,50",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("FRAPPUCCINO.webp"),
  },
  {
    id: "cappuccino-gelado",
    name: "Cappuccino Gelado",
    description:
      "Leite batido com cubos de café espresso congelado, leite condensado, chocolate Europeu, canela, calda de caramelo e chocolate, finalizado com Ovomaltine. 200ml",
    price: "R$ 22,90",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("CAPPUCCINO GELADO.webp"),
  },
  {
    id: "cafe-gelado",
    name: "Café Gelado",
    description:
      "Leite batido com cubos de café espresso congelado, leite condensado, calda de caramelo, chantilly e Ovomaltine. 200ml",
    price: "R$ 22,90",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("CAFÉ GELADO.webp"),
  },
  {
    id: "coffee-tonic",
    name: "Coffee Tonic",
    description:
      "Tônica, xarope de frutas de limão siciliano, café espresso e gelo. 400ml",
    price: "R$ 22,90",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("COFFEE TONIC.webp"),
  },
  {
    id: "chocolate-gelado",
    name: "Chocolate Gelado",
    description:
      "Leite e gelo batido com chocolate Europeu, calda de chocolate, chantilly e Ovomaltine. 200ml",
    price: "R$ 21,90",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
    image: I("CHOCOLATE GELADO.webp"),
  },
  {
    id: "chocotine",
    name: "Chocotine",
    description:
      "Leite e gelo batido com Ovomaltine, calda de chocolate, chantilly e Ovomaltine. 200ml",
    price: "R$ 21,90",
    category: "bebidas_geladas",
    section: "Bebidas Especiais",
  },

  // ── Brunch ──
  {
    id: "pao-na-chapa",
    name: "Pão na Chapa",
    description:
      "Pão de forma integral 30% ou pão francês com acompanhamento: Manteiga (R$ 10,90) · Requeijão, Goiabada ou Doce de Leite (R$ 11,90) · Requeijão Crispy (R$ 18,50)",
    price: "A partir de R$ 10,90",
    category: "brunch_combos",
    section: "Brunch",
    image: I("PÃO NA CHAPA-MANTEIGA.webp"),
  },
  {
    id: "waffle",
    name: "Waffle",
    description:
      "Massa de waffle com acompanhamento: Nutella (R$ 31,50) · Requeijão, Banana e Mel, Doce de Leite, Goiabada, Geleia de Frutas Vermelhas ou Manteiga (R$ 22,90)",
    price: "A partir de R$ 22,90",
    category: "brunch_combos",
    section: "Brunch",
    image: I("WAFFLE.webp"),
  },

  // ── Combos ──
  {
    id: "combo-espresso",
    name: "Combo Espresso",
    description:
      "Café espresso 50ml com duas fatias de pão na chapa. Manteiga (R$ 16,00) · Requeijão, Doce de Leite ou Goiabada (R$ 17,50)",
    price: "A partir de R$ 16,00",
    category: "brunch_combos",
    section: "Combos",
    image: I("COMBO ESPRESSO.webp"),
  },
  {
    id: "combo-latte",
    name: "Combo Latte",
    description:
      "Café espresso com leite vaporizado 150ml com duas fatias de pão na chapa. Manteiga (R$ 20,00) · Requeijão, Doce de Leite ou Goiabada (R$ 22,00)",
    price: "A partir de R$ 20,00",
    category: "brunch_combos",
    section: "Combos",
    image: I("COMBO LATTE.webp"),
  },
  {
    id: "combo-chocolate-quente",
    name: "Combo Chocolate Quente",
    description:
      "Leite vaporizado com chocolate europeu 200ml com pão na chapa. Manteiga (R$ 25,00) · Requeijão, Doce de Leite ou Goiabada (R$ 27,00)",
    price: "A partir de R$ 25,00",
    category: "brunch_combos",
    section: "Combos",
  },
  {
    id: "combo-sul-minas",
    name: "Combo Sul Minas",
    description: "Café espresso 50ml acompanhado de um pão de queijo.",
    price: "R$ 16,00",
    category: "brunch_combos",
    section: "Combos",
  },
  {
    id: "combo-latte-sul-minas",
    name: "Combo Latte Sul Minas",
    description:
      "Café espresso com leite vaporizado 150ml acompanhado de um pão de queijo.",
    price: "R$ 20,00",
    category: "brunch_combos",
    section: "Combos",
  },
  {
    id: "salada-tropical-torta",
    name: "Salada Mix Tropical com Torta Salgada",
    description:
      "Mix de folhas, batata palha, tomate e fatia de torta salgada (frango com requeijão ou palmito). Molho Schiètto mediante solicitação. 130g",
    price: "R$ 36,00",
    category: "saladas",
    section: "Combos",
    image: I("SALADA MIX TROPICAL COM TORTA SALGADA.webp"),
  },
  {
    id: "salada-omelete",
    name: "Salada Mix com Omelete Recheado",
    description:
      "Mix de folhas, batata palha, tomate e omelete com dois ovos (pizza, peito de peru e mussarela ou mussarela). Molho Schiètto mediante solicitação. 130g",
    price: "R$ 36,00",
    category: "saladas",
    section: "Combos",
    image: I("SALADA MIX COM OMELETE.webp"),
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
      "Recheios: Pizza, Dois Queijos, Frango com Requeijão, Peito de Peru com Mussarela, Peito de Peru com Requeijão, Salame e Queijo Prato ou Requeijão.",
    price: "R$ 18,00",
    category: "salgados",
    section: "Salgados",
    image: I("PÃO DE QUEIJO RECHEADO.webp"),
  },
  {
    id: "panini",
    name: "Panini",
    description:
      "Pão de queijo prensado e recheado. Recheios: Pizza, Dois Queijos, Frango com Requeijão, Peito de Peru com Mussarela, Peito de Peru com Requeijão, Salame e Queijo Prato ou Requeijão.",
    price: "R$ 18,00",
    category: "salgados",
    section: "Salgados",
    image: I("PANINI.webp"),
  },
  {
    id: "salgados-diversos",
    name: "Salgados Diversos",
    description: "Seleção de salgados da casa.",
    price: "R$ 10,50",
    category: "salgados",
    section: "Salgados",
    image: I("SALGADOS DIVERSOS SALGADOS ESPECIAIS.webp"),
  },
  {
    id: "salgados-especiais",
    name: "Salgados Especiais",
    description: "Salgados especiais da casa.",
    price: "R$ 12,90",
    category: "salgados",
    section: "Salgados",
    image: I("SALGADOS DIVERSOS SALGADOS ESPECIAIS.webp"),
  },
  {
    id: "torta-salgada",
    name: "Torta Salgada",
    description:
      "Frango com Requeijão (contém cebola e condimentos) ou Palmito (contém alho, cebola e condimentos).",
    price: "R$ 21,50",
    category: "salgados",
    section: "Salgados",
    image: I("TORTA SALGADA.webp"),
  },
  {
    id: "omelete-recheado",
    name: "Omelete Recheado",
    description:
      "Com dois ovos. Recheios: Pizza, Dois Queijos, Frango com Requeijão e Mussarela, Peito de Peru e Mussarela ou Mussarela.",
    price: "R$ 21,50",
    category: "salgados",
    section: "Salgados",
    image: I("OMELETE RECHEADO com dois ovos.webp"),
  },
  {
    id: "ovos-mexidos",
    name: "Ovos Mexidos Cremosos",
    description:
      "Três ovos mexidos com leite integral e manteiga, acompanhados de requeijão, tomate cereja, alface e orégano.",
    price: "R$ 20,00",
    category: "salgados",
    section: "Salgados",
  },
  {
    id: "lanche-natural",
    name: "Lanche Natural",
    description:
      "Pão integral 30% ou francês com mix de folhas, requeijão, tomate, batata palha. Recheios: Pizza, Dois Queijos, Frango, Peito de Peru, Salame ou Mussarela.",
    price: "R$ 22,00",
    category: "salgados",
    section: "Salgados",
    image: I("LANCHE NATURAL.webp"),
  },
  {
    id: "tostex",
    name: "Tostex",
    description:
      "Pão integral 30% ou francês recheado e prensado na chapa. Recheios: Pizza, Dois Queijos, Frango, Peito de Peru, Salame ou Mussarela.",
    price: "R$ 21,50",
    category: "salgados",
    section: "Salgados",
    image: I("TOSTEX.webp"),
  },

  // ── Saladas ──
  {
    id: "salada-caesar",
    name: "Salada Mix Caesar",
    description:
      "Mix de folhas, frango desfiado, queijo parmesão ralado, tomate e croûtons. Molho Schiètto mediante solicitação. 130g",
    price: "R$ 27,00",
    category: "saladas",
    section: "Saladas",
    image: I("SALADA MIX CAESAR.webp"),
  },

  {
    id: "suco-energico",
    name: "Suco Energético Cenoura",
    description: "Suco natural de laranja batido com cenoura e gengibre em pó. 400ml",
    price: "R$ 19,00",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO ENÉRGICO CENOURA.webp"),
  },
  {
    id: "suco-antioxidante",
    name: "Suco Antioxidante",
    description: "Suco natural de morango batido com beterraba. 400ml",
    price: "R$ 19,00",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO ANTIOXIDANTE.webp"),
  },
  {
    id: "suco-detox",
    name: "Suco Detox",
    description: "Suco natural de abacaxi batido com couve e hortelã. 400ml",
    price: "R$ 19,00",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO DETOX.webp"),
  },

  // ── Sobremesas ──
  {
    id: "taca-sorvete",
    name: "Taça de Sorvete de Creme",
    description:
      "Uma bola de sorvete de creme, Ovomaltine, cobertura de chocolate e cereja.",
    price: "R$ 14,50",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("TAÇA DE SORVETE DE CREME.webp"),
  },
  {
    id: "fatia-bolo-caseiro",
    name: "Fatia de Bolo Caseiro",
    description: "Consulte opções disponíveis no balcão de sobremesas.",
    price: "R$ 13,90",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("FATIA DE BOLO CASEIRO.webp"),
  },
  {
    id: "fatia-bolo-confeitado",
    name: "Fatia de Bolo Confeitado",
    description: "Consulte opções disponíveis no balcão de sobremesas.",
    price: "R$ 20,50",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("FATIA DE BOLO CONFEITADO.webp"),
  },
  {
    id: "petit-gateau",
    name: "Petit Gateau Duo",
    description:
      "Servido com duas bolas de sorvete de creme, Ovomaltine, cereja e cobertura de chocolate.",
    price: "R$ 32,00",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("PETIT GATEAU DUO.webp"),
  },
  {
    id: "waffle-sorvete",
    name: "Waffle com Sorvete",
    description:
      "Waffle acompanhado de uma bola de sorvete de creme, cobertura de chocolate e Ovomaltine.",
    price: "R$ 28,00",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("WAFFLE COM SORVETE.webp"),
  },
  {
    id: "pao-queijo-doce",
    name: "Pão de Queijo Recheado Doce",
    description:
      "Goiabada ou Doce de Leite (R$ 18,00) · Nutella (R$ 21,00)",
    price: "A partir de R$ 18,00",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("PÃO DE QUEIJO RECHEADO DOCE.webp"),
  },
  {
    id: "panini-doce",
    name: "Panini Doce",
    description:
      "Pão de queijo prensado na chapa. Goiabada ou Doce de Leite (R$ 18,00) · Nutella (R$ 21,00)",
    price: "A partir de R$ 18,00",
    category: "sobremesas",
    section: "Sobremesas",
    image: I("PANINI DOCE.webp"),
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

  // ── Bebidas geladas (sucos etc.) ──
  {
    id: "suco-polpa",
    name: "Suco Polpa",
    description:
      "Sabores: Abacaxi, Abacaxi com Hortelã ou Maracujá. 400ml",
    price: "R$ 12,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO POLPA .webp"),
  },
  {
    id: "suco-natural",
    name: "Suco Natural",
    description:
      "Sabores: Laranja, Morango ou Limão. Acréscimo de leite R$ 4,00 mediante solicitação. 400ml",
    price: "R$ 12,90",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO NATURAL.webp"),
  },
  {
    id: "suco-acai",
    name: "Suco de Açaí",
    description: "Suco natural de laranja batido com açaí e morango. 400ml",
    price: "R$ 20,80",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO DE AÇAÍ.webp"),
  },
  {
    id: "suco-laranja-morango",
    name: "Suco de Laranja com Morango",
    description: "Suco natural de laranja batido com suco de morango. 400ml",
    price: "R$ 19,80",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SUCO DE LARANJA COM MORANGO.webp"),
  },
  {
    id: "soda-italiana",
    name: "Soda Italiana",
    description:
      "Água com gás e xarope de frutas vermelhas. Também: Maçã Verde, Tangerina ou Limão Siciliano. 400ml",
    price: "R$ 20,80",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("SODA ITALIANA.webp"),
  },
  {
    id: "lemonade",
    name: "Lemonade",
    description:
      "Água, suco de limão e xarope de frutas. Sabores: Frutas Vermelhas, Maçã Verde, Tangerina ou Limão Siciliano. 400ml",
    price: "R$ 18,60",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("LEMONADE.webp"),
  },
  {
    id: "lara-cream",
    name: "Lara Cream",
    description:
      "Suco natural de laranja batido com gelo e sorvete de creme. 400ml",
    price: "R$ 19,80",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("LARA CREAM.webp"),
  },
  {
    id: "limonada-suica",
    name: "Limonada Suíça",
    description: "Leite batido com gelo, limão e leite condensado. 400ml",
    price: "R$ 20,80",
    category: "bebidas",
    section: "Bebidas Geladas",
    image: I("LIMONADA SUÍÇA.webp"),
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
    name: "H2O",
    description: "500ml",
    price: "R$ 8,50",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "suco-lata",
    name: "Suco Lata",
    description: "290ml — consulte opções disponíveis",
    price: "R$ 8,50",
    category: "bebidas",
    section: "Bebidas",
  },
  {
    id: "refrigerante-lata",
    name: "Refrigerante Lata",
    description: "350ml — consulte opções disponíveis",
    price: "R$ 8,50",
    category: "bebidas",
    section: "Bebidas",
  },

  // ── Cervejas ──
  {
    id: "heineken",
    name: "Heineken Longneck",
    description: "330ml",
    price: "R$ 12,00",
    category: "cervejas",
    section: "Cervejas",
  },
  {
    id: "heineken-zero",
    name: "Heineken Longneck Zero",
    description: "330ml",
    price: "R$ 13,00",
    category: "cervejas",
    section: "Cervejas",
  },
  {
    id: "stella",
    name: "Stella Artois Longneck",
    description: "330ml",
    price: "R$ 12,00",
    category: "cervejas",
    section: "Cervejas",
  },
];
