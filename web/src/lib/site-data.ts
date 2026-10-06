// Dados compartilhados (não traduzíveis) do site Kero+.
// Todo texto traduzível mora em src/i18n/dictionaries — aqui ficam só fatos e chaves.
import { fmt } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";

/** Chave do rótulo da cidade; a tradução vem de `Dict["map"]`. */
export type CitySub =
  | "hq"
  | "branch"
  | "metro"
  | "brasilia"
  | "southwest"
  | `route:${string}`;

export type City = {
  name: string;
  sub: CitySub;
  lat: number;
  lng: number;
  hq?: boolean;
};

export type LocalizedCity = Omit<City, "sub"> & { sub: string };

// Unidades Kero+ (matriz + filial) e cidades com rota de entrega ativa — planilha "Rotas Kero Mais" (jul/2026).
export const cities: City[] = [
  { name: "Goiânia, GO", sub: "hq", lat: -16.6869, lng: -49.2648, hq: true },
  { name: "Rondonópolis, MT", sub: "branch", lat: -16.4706, lng: -54.6356 },

  // Rota Goiás-GO
  { name: "Goianira, GO", sub: "route:Goiás", lat: -16.499, lng: -49.421 },
  { name: "Caturaí, GO", sub: "route:Goiás", lat: -16.383, lng: -49.708 },
  { name: "Inhumas, GO", sub: "route:Goiás", lat: -16.359, lng: -49.495 },
  { name: "Itaberaí, GO", sub: "route:Goiás", lat: -16.020, lng: -49.813 },
  { name: "Goiás, GO", sub: "route:Goiás", lat: -15.933, lng: -50.140 },

  // Rota Aparecida de Goiânia
  { name: "Aparecida de Goiânia, GO", sub: "metro", lat: -16.8198, lng: -49.2469 },
  { name: "Hidrolândia, GO", sub: "route:Aparecida de Goiânia", lat: -16.968, lng: -49.228 },

  // Entorno de Brasília
  { name: "Brasília, DF", sub: "brasilia", lat: -15.7939, lng: -47.8828 },
  { name: "Gama, DF", sub: "brasilia", lat: -16.021, lng: -48.062 },
  { name: "Valparaíso de Goiás, GO", sub: "brasilia", lat: -16.0655, lng: -47.9786 },
  { name: "Cidade Ocidental, GO", sub: "brasilia", lat: -16.078, lng: -47.933 },
  { name: "Luziânia, GO", sub: "brasilia", lat: -16.252, lng: -47.950 },

  // Rota Senador Canedo
  { name: "Senador Canedo, GO", sub: "route:Senador Canedo", lat: -16.703, lng: -49.093 },
  { name: "Gameleira de Goiás, GO", sub: "route:Senador Canedo", lat: -16.485, lng: -48.645 },

  // Rota Rio Verde
  { name: "Rio Verde, GO", sub: "southwest", lat: -17.7975, lng: -50.9266 },
  { name: "Santo Antônio da Barra, GO", sub: "route:Rio Verde", lat: -17.559, lng: -50.635 },
  { name: "Montividiu, GO", sub: "route:Rio Verde", lat: -17.434, lng: -51.169 },

  // Rota Barreiras-BA
  { name: "Flores de Goiás, GO", sub: "route:Barreiras-BA", lat: -14.453, lng: -47.062 },
  { name: "Simolândia, GO", sub: "route:Barreiras-BA", lat: -14.477, lng: -46.482 },
  { name: "Posse, GO", sub: "route:Barreiras-BA", lat: -14.093, lng: -46.369 },
  { name: "Iaciara, GO", sub: "route:Barreiras-BA", lat: -14.098, lng: -46.627 },
  { name: "Luís Eduardo Magalhães, BA", sub: "route:Barreiras-BA", lat: -12.090, lng: -45.798 },
  { name: "Barreiras, BA", sub: "route:Barreiras-BA", lat: -12.152, lng: -44.990 },
  { name: "São Desidério, BA", sub: "route:Barreiras-BA", lat: -12.363, lng: -44.973 },

  // Rota Mineiros
  { name: "Jataí, GO", sub: "route:Mineiros", lat: -17.881, lng: -51.714 },
  { name: "Perolândia, GO", sub: "route:Mineiros", lat: -17.759, lng: -52.036 },
  { name: "Mineiros, GO", sub: "route:Mineiros", lat: -17.569, lng: -52.550 },
  { name: "Portelândia, GO", sub: "route:Mineiros", lat: -17.335, lng: -52.680 },

  // Rota Quirinópolis
  { name: "Acreúna, GO", sub: "route:Quirinópolis", lat: -17.395, lng: -50.384 },
  { name: "Santa Helena de Goiás, GO", sub: "route:Quirinópolis", lat: -17.813, lng: -50.598 },
  { name: "Turvelândia, GO", sub: "route:Quirinópolis", lat: -17.706, lng: -50.194 },
  { name: "Maurilândia, GO", sub: "route:Quirinópolis", lat: -17.720, lng: -50.398 },
  { name: "Quirinópolis, GO", sub: "route:Quirinópolis", lat: -18.448, lng: -50.451 },
  { name: "Caçu, GO", sub: "route:Quirinópolis", lat: -18.557, lng: -51.126 },
  { name: "Itarumã, GO", sub: "route:Quirinópolis", lat: -18.653, lng: -51.322 },
  { name: "Cachoeira Alta, GO", sub: "route:Quirinópolis", lat: -18.939, lng: -50.987 },
  { name: "Paranaiguara, GO", sub: "route:Quirinópolis", lat: -18.937, lng: -50.588 },
  { name: "São Simão, GO", sub: "route:Quirinópolis", lat: -19.006, lng: -50.554 },
  { name: "Indiara, GO", sub: "route:Quirinópolis", lat: -17.221, lng: -50.221 },
  { name: "Edéia, GO", sub: "route:Quirinópolis", lat: -17.343, lng: -49.943 },

  // Rota Palmeiras
  { name: "Guapó, GO", sub: "route:Palmeiras", lat: -16.986, lng: -49.780 },
  { name: "Varjão, GO", sub: "route:Palmeiras", lat: -17.050, lng: -49.619 },
  { name: "Cezarina, GO", sub: "route:Palmeiras", lat: -17.033, lng: -49.575 },
  { name: "Palmeiras de Goiás, GO", sub: "route:Palmeiras", lat: -16.802, lng: -49.928 },
  { name: "Turvânia, GO", sub: "route:Palmeiras", lat: -16.310, lng: -49.905 },
  { name: "Firminópolis, GO", sub: "route:Palmeiras", lat: -16.605, lng: -50.020 },
  { name: "Nazário, GO", sub: "route:Palmeiras", lat: -16.660, lng: -49.821 },
  { name: "Santa Bárbara de Goiás, GO", sub: "route:Palmeiras", lat: -16.741, lng: -49.938 },

  // Rota Aragoiânia
  { name: "Aragoiânia, GO", sub: "route:Aragoiânia", lat: -16.898, lng: -49.559 },

  // Rota Cristalina
  { name: "Cristianópolis, GO", sub: "route:Cristalina", lat: -17.088, lng: -48.638 },
  { name: "Santa Cruz de Goiás, GO", sub: "route:Cristalina", lat: -17.191, lng: -48.581 },
  { name: "Palmelo, GO", sub: "route:Cristalina", lat: -17.148, lng: -48.548 },
  { name: "Pires do Rio, GO", sub: "route:Cristalina", lat: -17.301, lng: -48.278 },
  { name: "Ipameri, GO", sub: "route:Cristalina", lat: -17.723, lng: -48.161 },
  { name: "Cristalina, GO", sub: "route:Cristalina", lat: -16.768, lng: -47.613 },
];

/** Cidades com o rótulo (sub) já traduzido para o idioma do dicionário. */
export function getCities(t: Dict["map"]): LocalizedCity[] {
  return cities.map((c) => ({
    name: c.name,
    lat: c.lat,
    lng: c.lng,
    hq: c.hq,
    sub: c.sub.startsWith("route:")
      ? fmt(t.routeLabel, { name: c.sub.slice("route:".length) })
      : t.subs[c.sub as keyof typeof t.subs],
  }));
}

/** As seis linhas da vitrine — mesmos ids das categorias do catálogo. */
export const linhas = [
  { id: "paes", img: "/assets/produtos/p03-pao-frances.jpg" },
  { id: "queijos-biscoitos", img: "/assets/produtos/p08-pao-de-queijo-tradicional.jpg" },
  { id: "linha-doce", img: "/assets/produtos/p20-rosca-prestigio.jpg" },
  { id: "linha-quintada", img: "/assets/produtos/p14-broa-temperada.jpg" },
  { id: "salgados-grandes", img: "/assets/produtos/p40-coxinha-de-frango-com-requeijao-150g.jpg" },
  { id: "salgados-pequenos", img: "/assets/produtos/p31-coxinha-de-frango-com-requeijao.jpg" },
] as const;

// ---- Contato real (catálogo oficial 2026) -----------------------------------

export const contato = {
  telefoneFixo: { display: "(62) 3990-3012", href: "tel:+556239903012" },
  whatsappComercial: { display: "(62) 99958-7865", phone: "5562999587865" },
  whatsappRondonopolis: { display: "(66) 99628-9616", phone: "5566996289616" },
  whatsappRH: { display: "(62) 99240-1631", phone: "5562992401631" },
  instagram: {
    display: "@keromaispaescongelados",
    href: "https://instagram.com/keromaispaescongelados",
  },
};

export const whatsappUrl = (phone: string, text?: string) =>
  `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
