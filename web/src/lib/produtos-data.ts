// Catálogo Kero+ 2026 — 6 categorias reorganizadas conforme estrutura comercial.
export type ProdutoItem = { name: string; img: string; alt: string };
export type Categoria = {
  id: string;
  title: string;
  tag: string;
  intro: string;
  produtos: ProdutoItem[];
};

export const categorias: Categoria[] = [
  {
    id: "paes",
    title: "Pães",
    tag: "Linha de Pães",
    intro: "Do francês ao mandi — casca crocante, miolo macio, fermentação no ponto certo.",
    produtos: [
      { name: "Pão Francês", img: "/assets/produtos/p03-pao-frances.jpg", alt: "Pão Francês — Kero+ Pães Congelados" },
      { name: "Pão Baguete", img: "/assets/produtos/p04-pao-baguete.jpg", alt: "Pão Baguete — Kero+ Pães Congelados" },
      { name: "Pão Amanteigado", img: "/assets/produtos/p05-pao-amanteigado.jpg", alt: "Pão Amanteigado — Kero+ Pães Congelados" },
      { name: "Pão Hotdog", img: "/assets/produtos/p16-pao-hotdog.jpg", alt: "Pão Hotdog — Kero+ Pães Congelados" },
      { name: "Pão Mandi", img: "/assets/produtos/p17-pao-mandi.jpg", alt: "Pão Mandi — Kero+ Pães Congelados" },
      { name: "Pão de Milho", img: "/assets/produtos/p18-pao-de-milho.jpg", alt: "Pão de Milho — Kero+ Pães Congelados" },
      { name: "Pão de Milho 280g", img: "/assets/produtos/p28-pao-de-milho-280g.jpg", alt: "Pão de Milho 280g — Kero+ Pães Congelados" },
      { name: "Pão de Leite (280g)", img: "/assets/produtos/p29-pao-de-leite-280g.jpg", alt: "Pão de Leite (280g) — Kero+ Pães Congelados" },
      { name: "Pão Mandi (280g)", img: "/assets/produtos/p30-pao-mandi-280g.jpg", alt: "Pão Mandi (280g) — Kero+ Pães Congelados" },
    ],
  },
  {
    id: "queijos-biscoitos",
    title: "Pães de Queijo & Biscoitos",
    tag: "Linha de Queijos",
    intro: "Pão de queijo, chipa, biscoitos e empanado goiano: a tradição goiana, congelada para sua padaria.",
    produtos: [
      { name: "Pão de Queijo Caseiro", img: "/assets/produtos/p07-pao-de-queijo-caseiro.jpg", alt: "Pão de Queijo Caseiro — Kero+ Pães Congelados" },
      { name: "Pão de Queijo Tradicional", img: "/assets/produtos/p08-pao-de-queijo-tradicional.jpg", alt: "Pão de Queijo Tradicional — Kero+ Pães Congelados" },
      { name: "Biscoito Suíço Caseiro", img: "/assets/produtos/p09-biscoito-suico-caseiro.jpg", alt: "Biscoito Suíço Caseiro — Kero+ Pães Congelados" },
      { name: "Biscoito Suíço Mini", img: "/assets/produtos/p10-biscoito-suico-mini.jpg", alt: "Biscoito Suíço Mini — Kero+ Pães Congelados" },
      { name: "Biscoito de Queijo", img: "/assets/produtos/p11-biscoito-de-queijo.jpg", alt: "Biscoito de Queijo — Kero+ Pães Congelados" },
      { name: "Chipa Tradicional", img: "/assets/produtos/p12-chipa-tradicional.jpg", alt: "Chipa Tradicional — Kero+ Pães Congelados" },
      { name: "Empanado Goiano", img: "/assets/produtos/p06-empanado-goiano.jpg", alt: "Empanado Goiano — Kero+ Pães Congelados" },
    ],
  },
  {
    id: "linha-doce",
    title: "Linha Doce",
    tag: "Doces & Quitandas",
    intro: "Roscas e sonhos que enchem a vitrine e o olho do cliente — o melhor da confeitaria congelada.",
    produtos: [
      { name: "Sonho", img: "/assets/produtos/p19-sonho.jpg", alt: "Sonho — Kero+ Pães Congelados" },
      { name: "Rosca Prestígio", img: "/assets/produtos/p20-rosca-prestigio.jpg", alt: "Rosca Prestígio — Kero+ Pães Congelados" },
      { name: "Rosca Caracol", img: "/assets/produtos/p21-rosca-caracol.jpg", alt: "Rosca Caracol — Kero+ Pães Congelados" },
      { name: "Rosca Língua de Sogra", img: "/assets/produtos/p22-rosca-lingua-de-sogra.jpg", alt: "Rosca Língua de Sogra — Kero+ Pães Congelados" },
      { name: "Rosca Tipo 8", img: "/assets/produtos/p23-rosca-tipo-8.jpg", alt: "Rosca Tipo 8 — Kero+ Pães Congelados" },
      { name: "Rosca Rainha", img: "/assets/produtos/p24-rosca-rainha.jpg", alt: "Rosca Rainha — Kero+ Pães Congelados" },
      { name: "Rosca Húngara", img: "/assets/produtos/p25-rosca-hungara.jpg", alt: "Rosca Húngara — Kero+ Pães Congelados" },
      { name: "Rosca Trançada", img: "/assets/produtos/p26-rosca-trancada.jpg", alt: "Rosca Trançada — Kero+ Pães Congelados" },
      { name: "Rosca de Laranja", img: "/assets/produtos/p27-rosca-de-laranja.jpg", alt: "Rosca de Laranja — Kero+ Pães Congelados" },
    ],
  },
  {
    id: "linha-quintada",
    title: "Linha Quintada",
    tag: "Quintadas",
    intro: "Broa doce, broa temperada e carolina — sabores únicos com identidade regional que completam qualquer vitrine.",
    produtos: [
      { name: "Broa Doce", img: "/assets/produtos/p13-broa-doce.jpg", alt: "Broa Doce — Kero+ Pães Congelados" },
      { name: "Broa Temperada", img: "/assets/produtos/p14-broa-temperada.jpg", alt: "Broa Temperada — Kero+ Pães Congelados" },
      { name: "Carolina", img: "/assets/produtos/p15-carolina.jpg", alt: "Carolina — Kero+ Pães Congelados" },
    ],
  },
  {
    id: "salgados-grandes",
    title: "Salgados Grandes",
    tag: "Linha Premium",
    intro: "Salgados no tamanho generoso — coxinha, quibe, disco e empanado de 120g a 150g, para quem quer impacto na vitrine.",
    produtos: [
      { name: "Coxinha de frango com requeijão (150g)", img: "/assets/produtos/p40-coxinha-de-frango-com-requeijao-150g.jpg", alt: "Coxinha de frango com requeijão 150g — Kero+ Pães Congelados" },
      { name: "Quibe com requeijão (150g)", img: "/assets/produtos/p41-quibe-com-requeijao-150g.jpg", alt: "Quibe com requeijão 150g — Kero+ Pães Congelados" },
      { name: "Disco de carne (150g)", img: "/assets/produtos/p42-disco-de-carne-150g.jpg", alt: "Disco de carne 150g — Kero+ Pães Congelados" },
      { name: "Empanado de salsicha (120g)", img: "/assets/produtos/p43-empanado-de-salsicha-120g.jpg", alt: "Empanado de salsicha 120g — Kero+ Pães Congelados" },
    ],
  },
  {
    id: "salgados-pequenos",
    title: "Salgados Pequenos",
    tag: "Salgados",
    intro: "Coxinha, risole, pastel, quibe e empanados no tamanho de lanche — prontos para fritar e servir.",
    produtos: [
      { name: "Coxinha de frango com requeijão", img: "/assets/produtos/p31-coxinha-de-frango-com-requeijao.jpg", alt: "Coxinha de frango com requeijão — Kero+ Pães Congelados" },
      { name: "Risole de carne", img: "/assets/produtos/p32-risole-de-carne.jpg", alt: "Risole de carne — Kero+ Pães Congelados" },
      { name: "Risole de milho", img: "/assets/produtos/p33-risole-de-milho.jpg", alt: "Risole de milho — Kero+ Pães Congelados" },
      { name: "Quibe com requeijão", img: "/assets/produtos/p34-quibe-com-requeijao.jpg", alt: "Quibe com requeijão — Kero+ Pães Congelados" },
      { name: "Disquinho de carne", img: "/assets/produtos/p35-disquinho-de-carne.jpg", alt: "Disquinho de carne — Kero+ Pães Congelados" },
      { name: "Empanado de salsicha", img: "/assets/produtos/p36-empanado-de-salsicha.jpg", alt: "Empanado de salsicha — Kero+ Pães Congelados" },
      { name: "Bolinha de queijo", img: "/assets/produtos/p37-bolinha-de-queijo.jpg", alt: "Bolinha de queijo — Kero+ Pães Congelados" },
      { name: "Croquete de presunto e queijo", img: "/assets/produtos/p38-croquete-de-presunto-e-queijo.jpg", alt: "Croquete de presunto e queijo — Kero+ Pães Congelados" },
      { name: "Pastel de Carne", img: "/assets/produtos/p45-pastel-de-carne-35g.jpg", alt: "Pastel de Carne — Kero+ Pães Congelados" },
      { name: "Pastel de Queijo", img: "/assets/produtos/p46-pastel-de-queijo-35g.jpg", alt: "Pastel de Queijo — Kero+ Pães Congelados" },
      { name: "Pastel de Frango", img: "/assets/produtos/p47-pastel-de-frango-35g.jpg", alt: "Pastel de Frango — Kero+ Pães Congelados" },
      { name: "Pastel de Pizza", img: "/assets/produtos/p48-pastel-de-pizza-35g.jpg", alt: "Pastel de Pizza — Kero+ Pães Congelados" },
      { name: "Churros", img: "/assets/produtos/p39-churros.jpg", alt: "Churros — Kero+ Pães Congelados" },
    ],
  },
];
