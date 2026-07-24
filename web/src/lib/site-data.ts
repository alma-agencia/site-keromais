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

// Unidades Kero+ (matriz + filial) e cidades com rota de entrega ativa — planilha "Rotas Kero Mais" (jul/2026).
export const cities: City[] = [
  { name: "Goiânia, GO", sub: "Matriz & fábrica · Jardim Europa", lat: -16.6869, lng: -49.2648, hq: true },
  { name: "Rondonópolis, MT", sub: "Filial · Centro", lat: -16.4706, lng: -54.6356 },

  // Rota Goiás-GO
  { name: "Goianira, GO", sub: "Rota Goiás", lat: -16.499, lng: -49.421 },
  { name: "Caturaí, GO", sub: "Rota Goiás", lat: -16.383, lng: -49.708 },
  { name: "Inhumas, GO", sub: "Rota Goiás", lat: -16.359, lng: -49.495 },
  { name: "Itaberaí, GO", sub: "Rota Goiás", lat: -16.020, lng: -49.813 },
  { name: "Goiás, GO", sub: "Rota Goiás", lat: -15.933, lng: -50.140 },

  // Rota Aparecida de Goiânia
  { name: "Aparecida de Goiânia, GO", sub: "Região metropolitana", lat: -16.8198, lng: -49.2469 },
  { name: "Hidrolândia, GO", sub: "Rota Aparecida de Goiânia", lat: -16.968, lng: -49.228 },

  // Entorno de Brasília
  { name: "Brasília, DF", sub: "Entorno de Brasília", lat: -15.7939, lng: -47.8828 },
  { name: "Gama, DF", sub: "Entorno de Brasília", lat: -16.021, lng: -48.062 },
  { name: "Valparaíso de Goiás, GO", sub: "Entorno de Brasília", lat: -16.0655, lng: -47.9786 },
  { name: "Cidade Ocidental, GO", sub: "Entorno de Brasília", lat: -16.078, lng: -47.933 },
  { name: "Luziânia, GO", sub: "Entorno de Brasília", lat: -16.252, lng: -47.950 },

  // Rota Senador Canedo
  { name: "Senador Canedo, GO", sub: "Rota Senador Canedo", lat: -16.703, lng: -49.093 },
  { name: "Gameleira de Goiás, GO", sub: "Rota Senador Canedo", lat: -16.485, lng: -48.645 },

  // Rota Rio Verde
  { name: "Rio Verde, GO", sub: "Sudoeste goiano", lat: -17.7975, lng: -50.9266 },
  { name: "Santo Antônio da Barra, GO", sub: "Rota Rio Verde", lat: -17.559, lng: -50.635 },
  { name: "Montividiu, GO", sub: "Rota Rio Verde", lat: -17.434, lng: -51.169 },

  // Rota Barreiras-BA
  { name: "Flores de Goiás, GO", sub: "Rota Barreiras-BA", lat: -14.453, lng: -47.062 },
  { name: "Simolândia, GO", sub: "Rota Barreiras-BA", lat: -14.477, lng: -46.482 },
  { name: "Posse, GO", sub: "Rota Barreiras-BA", lat: -14.093, lng: -46.369 },
  { name: "Iaciara, GO", sub: "Rota Barreiras-BA", lat: -14.098, lng: -46.627 },
  { name: "Luís Eduardo Magalhães, BA", sub: "Rota Barreiras-BA", lat: -12.090, lng: -45.798 },
  { name: "Barreiras, BA", sub: "Rota Barreiras-BA", lat: -12.152, lng: -44.990 },
  { name: "São Desidério, BA", sub: "Rota Barreiras-BA", lat: -12.363, lng: -44.973 },

  // Rota Mineiros
  { name: "Jataí, GO", sub: "Rota Mineiros", lat: -17.881, lng: -51.714 },
  { name: "Perolândia, GO", sub: "Rota Mineiros", lat: -17.759, lng: -52.036 },
  { name: "Mineiros, GO", sub: "Rota Mineiros", lat: -17.569, lng: -52.550 },
  { name: "Portelândia, GO", sub: "Rota Mineiros", lat: -17.335, lng: -52.680 },

  // Rota Quirinópolis
  { name: "Acreúna, GO", sub: "Rota Quirinópolis", lat: -17.395, lng: -50.384 },
  { name: "Santa Helena de Goiás, GO", sub: "Rota Quirinópolis", lat: -17.813, lng: -50.598 },
  { name: "Turvelândia, GO", sub: "Rota Quirinópolis", lat: -17.706, lng: -50.194 },
  { name: "Maurilândia, GO", sub: "Rota Quirinópolis", lat: -17.720, lng: -50.398 },
  { name: "Quirinópolis, GO", sub: "Rota Quirinópolis", lat: -18.448, lng: -50.451 },
  { name: "Caçu, GO", sub: "Rota Quirinópolis", lat: -18.557, lng: -51.126 },
  { name: "Itarumã, GO", sub: "Rota Quirinópolis", lat: -18.653, lng: -51.322 },
  { name: "Cachoeira Alta, GO", sub: "Rota Quirinópolis", lat: -18.939, lng: -50.987 },
  { name: "Paranaiguara, GO", sub: "Rota Quirinópolis", lat: -18.937, lng: -50.588 },
  { name: "São Simão, GO", sub: "Rota Quirinópolis", lat: -19.006, lng: -50.554 },
  { name: "Indiara, GO", sub: "Rota Quirinópolis", lat: -17.221, lng: -50.221 },
  { name: "Edéia, GO", sub: "Rota Quirinópolis", lat: -17.343, lng: -49.943 },

  // Rota Palmeiras
  { name: "Guapó, GO", sub: "Rota Palmeiras", lat: -16.986, lng: -49.780 },
  { name: "Varjão, GO", sub: "Rota Palmeiras", lat: -17.050, lng: -49.619 },
  { name: "Cezarina, GO", sub: "Rota Palmeiras", lat: -17.033, lng: -49.575 },
  { name: "Palmeiras de Goiás, GO", sub: "Rota Palmeiras", lat: -16.802, lng: -49.928 },
  { name: "Turvânia, GO", sub: "Rota Palmeiras", lat: -16.310, lng: -49.905 },
  { name: "Firminópolis, GO", sub: "Rota Palmeiras", lat: -16.605, lng: -50.020 },
  { name: "Nazário, GO", sub: "Rota Palmeiras", lat: -16.660, lng: -49.821 },
  { name: "Santa Bárbara de Goiás, GO", sub: "Rota Palmeiras", lat: -16.741, lng: -49.938 },

  // Rota Aragoiânia
  { name: "Aragoiânia, GO", sub: "Rota Aragoiânia", lat: -16.898, lng: -49.559 },

  // Rota Cristalina
  { name: "Cristianópolis, GO", sub: "Rota Cristalina", lat: -17.088, lng: -48.638 },
  { name: "Santa Cruz de Goiás, GO", sub: "Rota Cristalina", lat: -17.191, lng: -48.581 },
  { name: "Palmelo, GO", sub: "Rota Cristalina", lat: -17.148, lng: -48.548 },
  { name: "Pires do Rio, GO", sub: "Rota Cristalina", lat: -17.301, lng: -48.278 },
  { name: "Ipameri, GO", sub: "Rota Cristalina", lat: -17.723, lng: -48.161 },
  { name: "Cristalina, GO", sub: "Rota Cristalina", lat: -16.768, lng: -47.613 },
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

