// Shared content for the Kero+ site. Copy is real and preserved from the brief.

export type NavItem = { label: string; href: string; key: string };

export const navItems: NavItem[] = [
  { label: "Quem Somos", href: "/quem-somos", key: "quemsomos" },
  { label: "Produtos", href: "/produtos", key: "produtos" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco", key: "trabalhe" },
  { label: "Comercial", href: "/comercial", key: "comercial" },
];

// Product names that scroll in the top marquee (produtos reais do catálogo).
export const marqueeItems: string[] = [
  "Pão Francês",
  "Pão de Queijo",
  "Chipa Tradicional",
  "Pão Amanteigado",
  "Rosca Prestígio",
  "Pão Mandi",
  "Coxinha de Frango",
  "Empanado Goiano",
  "Sonho",
  "Pastel",
];

export type Linha = {
  tag: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  href: string;
};

export const linhas: Linha[] = [
  {
    tag: "Linha de Pães",
    title: "Pães",
    desc: "Do francês ao mandi — casca crocante, miolo macio, congelado no ponto certo.",
    img: "/assets/produtos/p03-pao-frances.jpg",
    alt: "Cesto de pães franceses dourados",
    href: "/produtos#paes",
  },
  {
    tag: "Linha de Queijos",
    title: "Pães de Queijo & Biscoitos",
    desc: "Pão de queijo, chipa, biscoitos e empanado goiano: a tradição goiana, congelada.",
    img: "/assets/produtos/p08-pao-de-queijo-tradicional.jpg",
    alt: "Pães de queijo dourados",
    href: "/produtos#queijos-biscoitos",
  },
  {
    tag: "Doces & Quitandas",
    title: "Linha Doce",
    desc: "Roscas e sonhos para encher a vitrine da padaria com o melhor da confeitaria.",
    img: "/assets/produtos/p20-rosca-prestigio.jpg",
    alt: "Rosca doce da Kero+",
    href: "/produtos#linha-doce",
  },
  {
    tag: "Quintadas",
    title: "Linha Quintada",
    desc: "Broa doce, broa temperada e carolina — sabores únicos com identidade regional.",
    img: "/assets/produtos/p14-broa-temperada.jpg",
    alt: "Broa temperada da Kero+",
    href: "/produtos#linha-quintada",
  },
  {
    tag: "Linha Premium",
    title: "Salgados Grandes",
    desc: "Coxinha, quibe, disco e empanado de 120g a 150g — impacto garantido na vitrine.",
    img: "/assets/produtos/p40-coxinha-de-frango-com-requeijao-150g.jpg",
    alt: "Coxinha grande de frango com requeijão",
    href: "/produtos#salgados-grandes",
  },
  {
    tag: "Salgados",
    title: "Salgados Pequenos",
    desc: "Coxinha, risole, pastel, quibe e empanados no tamanho de lanche — prontos para fritar.",
    img: "/assets/produtos/p31-coxinha-de-frango-com-requeijao.jpg",
    alt: "Coxinhas de frango com requeijão empanadas",
    href: "/produtos#salgados-pequenos",
  },
];

export type FooterCol = { title: string; links: { label: string; href: string }[] };

export const footerCols: FooterCol[] = [
  {
    title: "Institucional",
    links: [
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
      { label: "Aviso de Privacidade", href: "/privacidade" },
      { label: "Política de Qualidade", href: "/qualidade" },
    ],
  },
  {
    title: "Produtos",
    links: [
      { label: "Pães", href: "/produtos#paes" },
      { label: "Pães de Queijo & Biscoitos", href: "/produtos#queijos-biscoitos" },
      { label: "Linha Doce", href: "/produtos#linha-doce" },
      { label: "Linha Quintada", href: "/produtos#linha-quintada" },
      { label: "Salgados Grandes", href: "/produtos#salgados-grandes" },
      { label: "Salgados Pequenos", href: "/produtos#salgados-pequenos" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Comercial / SAC", href: "/comercial" },
      { label: "Fale Conosco", href: "https://wa.me/5562999587865" },
      { label: "(62) 3990-3012", href: "tel:+556239903012" },
      { label: "@keromaispaescongelados", href: "https://instagram.com/keromaispaescongelados" },
    ],
  },
];

export type City = {
  name: string;
  sub?: string;
  lat: number;
  lng: number;
  hq?: boolean;
};

// Unidades Kero+ (matriz + filial) e principais regiões atendidas — catálogo oficial 2026.
export const cities: City[] = [
  { name: "Goiânia, GO", sub: "Matriz & fábrica · Jardim Europa", lat: -16.6869, lng: -49.2648, hq: true },
  { name: "Rondonópolis, MT", sub: "Filial · Centro", lat: -16.4706, lng: -54.6356 },
  { name: "Aparecida de Goiânia, GO", sub: "Região metropolitana", lat: -16.8198, lng: -49.2469 },
  { name: "Anápolis, GO", sub: "Atendimento", lat: -16.3267, lng: -48.9526 },
  { name: "Rio Verde, GO", sub: "Sudoeste goiano", lat: -17.7975, lng: -50.9266 },
  { name: "Brasília, DF", sub: "Entorno", lat: -15.7939, lng: -47.8828 },
];

// ---- Contato real (catálogo oficial 2026) -----------------------------------

export const contato = {
  telefoneFixo: { display: "(62) 3990-3012", href: "tel:+556239903012" },
  whatsappComercial: { display: "(62) 99958-7865", phone: "5562999587865" },
  whatsappRondonopolis: { display: "(66) 99628-9616", phone: "5566996289616" },
  instagram: {
    display: "@keromaispaescongelados",
    href: "https://instagram.com/keromaispaescongelados",
  },
  horario: "Seg a Sex · 8h–12h / 13h–17h",
};

