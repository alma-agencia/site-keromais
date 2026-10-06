// Catálogo Kero+ 2026 — 6 categorias reorganizadas conforme estrutura comercial.
// Textos em PT / EN / ES; getCategorias(lang) devolve a versão localizada.
import type { L10n, Locale } from "@/i18n/config";

export type ProdutoItem = { name: string; img: string; alt: string };
export type Categoria = {
  id: string;
  title: string;
  tag: string;
  intro: string;
  produtos: ProdutoItem[];
};

const n = (pt: string, en: string, es: string): L10n<string> => ({ pt, en, es });

type ProdutoSource = { name: L10n<string>; img: string };
type CategoriaSource = {
  id: string;
  title: L10n<string>;
  tag: L10n<string>;
  intro: L10n<string>;
  produtos: ProdutoSource[];
};

const img = (file: string) => `/assets/produtos/${file}`;

const categoriasSource: CategoriaSource[] = [
  {
    id: "paes",
    title: n("Pães", "Breads", "Panes"),
    tag: n("Linha de Pães", "Bread Line", "Línea de Panes"),
    intro: n(
      "Do francês ao mandi — casca crocante, miolo macio, fermentação no ponto certo.",
      "From French rolls to mandi bread — crisp crust, soft crumb, proofed to perfection.",
      "Del pan francés al mandi: corteza crujiente, miga suave y fermentación en su punto.",
    ),
    produtos: [
      { name: n("Pão Francês", "French Bread Roll", "Pan Francés"), img: img("p03-pao-frances.jpg") },
      { name: n("Pão Baguete", "Baguette", "Baguette"), img: img("p04-pao-baguete.jpg") },
      { name: n("Pão Amanteigado", "Buttery Bread Roll", "Pan Mantecoso"), img: img("p05-pao-amanteigado.jpg") },
      { name: n("Pão Hotdog", "Hot Dog Bun", "Pan para Hot Dog"), img: img("p16-pao-hotdog.jpg") },
      { name: n("Pão Mandi", "Mandi Bread (Pão Mandi)", "Pan Mandi (Pão Mandi)"), img: img("p17-pao-mandi.jpg") },
      { name: n("Pão de Milho", "Corn Bread", "Pan de Maíz"), img: img("p18-pao-de-milho.jpg") },
      { name: n("Pão de Milho 280g", "Corn Bread 280g", "Pan de Maíz 280 g"), img: img("p28-pao-de-milho-280g.jpg") },
      { name: n("Pão de Leite (280g)", "Milk Bread (280g)", "Pan de Leche (280 g)"), img: img("p29-pao-de-leite-280g.jpg") },
      { name: n("Pão Mandi (280g)", "Mandi Bread (280g)", "Pan Mandi (280 g)"), img: img("p30-pao-mandi-280g.jpg") },
    ],
  },
  {
    id: "queijos-biscoitos",
    title: n("Pães de Queijo & Biscoitos", "Cheese Breads & Biscuits", "Panes de Queso y Galletas"),
    tag: n("Linha de Queijos", "Cheese Line", "Línea de Quesos"),
    intro: n(
      "Pão de queijo, chipa, biscoitos e empanado goiano: a tradição goiana, congelada para sua padaria.",
      "Pão de queijo (Brazilian cheese bread), chipa, biscuits and empanado goiano: Goiás tradition, frozen and ready for your bakery.",
      "Pão de queijo (pan de queso brasileño), chipa, galletas y empanado goiano: la tradición de Goiás, congelada para tu panadería.",
    ),
    produtos: [
      { name: n("Pão de Queijo Caseiro", "Homestyle Cheese Bread (Pão de Queijo)", "Pan de Queso Casero (Pão de Queijo)"), img: img("p07-pao-de-queijo-caseiro.jpg") },
      { name: n("Pão de Queijo Tradicional", "Traditional Cheese Bread (Pão de Queijo)", "Pan de Queso Tradicional (Pão de Queijo)"), img: img("p08-pao-de-queijo-tradicional.jpg") },
      { name: n("Biscoito Suíço Caseiro", "Homestyle Swiss Biscuit", "Galleta Suiza Casera"), img: img("p09-biscoito-suico-caseiro.jpg") },
      { name: n("Biscoito Suíço Mini", "Mini Swiss Biscuit", "Galleta Suiza Mini"), img: img("p10-biscoito-suico-mini.jpg") },
      { name: n("Biscoito de Queijo", "Cheese Biscuit", "Galleta de Queso"), img: img("p11-biscoito-de-queijo.jpg") },
      { name: n("Chipa Tradicional", "Traditional Chipa (cheese bread)", "Chipa Tradicional"), img: img("p12-chipa-tradicional.jpg") },
      { name: n("Empanado Goiano", "Empanado Goiano (Goiás-style)", "Empanado Goiano (estilo Goiás)"), img: img("p06-empanado-goiano.jpg") },
    ],
  },
  {
    id: "linha-doce",
    title: n("Linha Doce", "Sweet Line", "Línea Dulce"),
    tag: n("Doces & Quitandas", "Sweets & Traditional Bakes", "Dulces y Horneados Tradicionales"),
    intro: n(
      "Roscas e sonhos que enchem a vitrine e o olho do cliente — o melhor da confeitaria congelada.",
      "Roscas (sweet bread rings) and sonhos (Brazilian doughnuts) that fill the display case and catch every customer's eye — the best of frozen confectionery.",
      "Roscas y sonhos (donas brasileñas) que llenan la vitrina y conquistan la mirada del cliente: lo mejor de la repostería congelada.",
    ),
    produtos: [
      { name: n("Sonho", "Sonho (Brazilian doughnut)", "Sonho (dona brasileña)"), img: img("p19-sonho.jpg") },
      { name: n("Rosca Prestígio", "Rosca Prestígio", "Rosca Prestígio"), img: img("p20-rosca-prestigio.jpg") },
      { name: n("Rosca Caracol", "Rosca Caracol (Spiral)", "Rosca Caracol"), img: img("p21-rosca-caracol.jpg") },
      { name: n("Rosca Língua de Sogra", "Rosca Língua de Sogra", "Rosca Lengua de Suegra"), img: img("p22-rosca-lingua-de-sogra.jpg") },
      { name: n("Rosca Tipo 8", "Rosca Tipo 8 (Figure-8)", "Rosca Tipo 8"), img: img("p23-rosca-tipo-8.jpg") },
      { name: n("Rosca Rainha", "Rosca Rainha (Queen)", "Rosca Reina"), img: img("p24-rosca-rainha.jpg") },
      { name: n("Rosca Húngara", "Rosca Húngara (Hungarian)", "Rosca Húngara"), img: img("p25-rosca-hungara.jpg") },
      { name: n("Rosca Trançada", "Rosca Trançada (Braided)", "Rosca Trenzada"), img: img("p26-rosca-trancada.jpg") },
      { name: n("Rosca de Laranja", "Rosca de Laranja (Orange)", "Rosca de Naranja"), img: img("p27-rosca-de-laranja.jpg") },
    ],
  },
  {
    id: "linha-quintada",
    title: n("Linha Quintada", "Quintada Line", "Línea Quintada"),
    tag: n("Quintadas", "Quintadas", "Quintadas"),
    intro: n(
      "Broa doce, broa temperada e carolina — sabores únicos com identidade regional que completam qualquer vitrine.",
      "Sweet broa, seasoned broa and carolina — unique flavors with a regional identity that complete any display case.",
      "Broa dulce, broa condimentada y carolina: sabores únicos con identidad regional que completan cualquier vitrina.",
    ),
    produtos: [
      { name: n("Broa Doce", "Sweet Broa (Broa Doce)", "Broa Dulce"), img: img("p13-broa-doce.jpg") },
      { name: n("Broa Temperada", "Seasoned Broa (Broa Temperada)", "Broa Condimentada"), img: img("p14-broa-temperada.jpg") },
      { name: n("Carolina", "Carolina", "Carolina"), img: img("p15-carolina.jpg") },
    ],
  },
  {
    id: "salgados-grandes",
    title: n("Salgados Grandes", "Large Savory Snacks", "Salgados Grandes"),
    tag: n("Linha Premium", "Premium Line", "Línea Premium"),
    intro: n(
      "Salgados no tamanho generoso — coxinha, quibe, disco e empanado de 120g a 150g, para quem quer impacto na vitrine.",
      "Generously sized savory snacks (salgados) — coxinha, quibe, meat disc and breaded sausage from 120g to 150g, for display cases that make an impact. Requeijão is Brazilian cream cheese.",
      "Salgados (snacks salados brasileños) de tamaño generoso: coxinha, quibe, disco de carne y salchicha empanada de 120 g a 150 g, para quienes buscan impacto en la vitrina. El requeijão es el queso crema brasileño.",
    ),
    produtos: [
      { name: n("Coxinha de frango com requeijão (150g)", "Chicken & Requeijão Coxinha (150g)", "Coxinha de Pollo con Requeijão (150 g)"), img: img("p40-coxinha-de-frango-com-requeijao-150g.jpg") },
      { name: n("Quibe com requeijão (150g)", "Quibe (Kibbeh) with Requeijão (150g)", "Quibe con Requeijão (150 g)"), img: img("p41-quibe-com-requeijao-150g.jpg") },
      { name: n("Disco de carne (150g)", "Meat Disc (150g)", "Disco de Carne (150 g)"), img: img("p42-disco-de-carne-150g.jpg") },
      { name: n("Empanado de salsicha (120g)", "Breaded Sausage (120g)", "Salchicha Empanada (120 g)"), img: img("p43-empanado-de-salsicha-120g.jpg") },
    ],
  },
  {
    id: "salgados-pequenos",
    title: n("Salgados Pequenos", "Small Savory Snacks", "Salgados Pequenos"),
    tag: n("Salgados", "Savory Snacks", "Salgados"),
    intro: n(
      "Coxinha, risole, pastel, quibe e empanados no tamanho de lanche — prontos para fritar e servir.",
      "Coxinha, rissole, pastel, quibe and breaded snacks in party-size portions — ready to fry and serve.",
      "Coxinha, risole, pastel, quibe y empanados en tamaño de aperitivo: listos para freír y servir.",
    ),
    produtos: [
      { name: n("Coxinha de frango com requeijão", "Chicken & Requeijão Coxinha", "Coxinha de Pollo con Requeijão"), img: img("p31-coxinha-de-frango-com-requeijao.jpg") },
      { name: n("Risole de carne", "Beef Rissole (Risole de Carne)", "Risole de Carne"), img: img("p32-risole-de-carne.jpg") },
      { name: n("Risole de milho", "Corn Rissole (Risole de Milho)", "Risole de Maíz"), img: img("p33-risole-de-milho.jpg") },
      { name: n("Quibe com requeijão", "Quibe (Kibbeh) with Requeijão", "Quibe con Requeijão"), img: img("p34-quibe-com-requeijao.jpg") },
      { name: n("Disquinho de carne", "Mini Meat Disc", "Disquito de Carne"), img: img("p35-disquinho-de-carne.jpg") },
      { name: n("Empanado de salsicha", "Breaded Sausage", "Salchicha Empanada"), img: img("p36-empanado-de-salsicha.jpg") },
      { name: n("Bolinha de queijo", "Cheese Ball", "Bolita de Queso"), img: img("p37-bolinha-de-queijo.jpg") },
      { name: n("Croquete de presunto e queijo", "Ham & Cheese Croquette", "Croqueta de Jamón y Queso"), img: img("p38-croquete-de-presunto-e-queijo.jpg") },
      { name: n("Pastel de Carne", "Beef Pastel", "Pastel de Carne"), img: img("p45-pastel-de-carne-35g.jpg") },
      { name: n("Pastel de Queijo", "Cheese Pastel", "Pastel de Queso"), img: img("p46-pastel-de-queijo-35g.jpg") },
      { name: n("Pastel de Frango", "Chicken Pastel", "Pastel de Pollo"), img: img("p47-pastel-de-frango-35g.jpg") },
      { name: n("Pastel de Pizza", "Pizza Pastel", "Pastel de Pizza"), img: img("p48-pastel-de-pizza-35g.jpg") },
      { name: n("Churros", "Churros", "Churros"), img: img("p39-churros.jpg") },
    ],
  },
];

const BRAND = "Kero+ Pães Congelados";

/** Catálogo no idioma pedido (nomes, introduções e textos alternativos das imagens). */
export function getCategorias(lang: Locale): Categoria[] {
  return categoriasSource.map((c) => ({
    id: c.id,
    title: c.title[lang],
    tag: c.tag[lang],
    intro: c.intro[lang],
    produtos: c.produtos.map((p) => ({
      name: p.name[lang],
      img: p.img,
      alt: `${p.name[lang]} — ${BRAND}`,
    })),
  }));
}
