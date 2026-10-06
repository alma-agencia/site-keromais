// Dicionário em português (idioma-base). EN e ES precisam ter exatamente a mesma forma (tipo `Dict`).
import type { Block, SplitTitle } from "./types";

const privacyBlocks: Block[] = [
  {
    p: 'Este Aviso de Privacidade descreve como a **Kero Mais Pães Congelados** ("Kero+", "nós") trata os dados pessoais de quem entra em contato conosco ou utiliza este site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).',
  },
  { h2: "1. Quem é o controlador" },
  {
    p: "A Kero Mais Pães Congelados, com matriz na R. Luxemburgo, 689, Jardim Europa, Goiânia-GO, é a controladora dos dados pessoais tratados por meio dos nossos canais de atendimento e deste site.",
  },
  { h2: "2. Quais dados coletamos" },
  {
    ul: [
      "**Dados que você nos fornece:** nome, empresa, e-mail, telefone/WhatsApp e o conteúdo das mensagens enviadas pelos formulários ou pelo WhatsApp (atendimento comercial, SAC e candidaturas a vagas).",
      "**Dados de navegação:** informações técnicas básicas geradas ao acessar o site, como tipo de dispositivo e páginas visitadas, quando aplicável.",
      "**Idioma e localização aproximada:** para exibir o site no idioma certo, usamos o idioma do seu dispositivo e, quando ele não é suficiente, o país associado ao seu endereço IP, consultado em um serviço externo de geolocalização (Cloudflare). Essa informação não é armazenada por nós. A sua escolha de idioma fica salva apenas no seu navegador.",
    ],
  },
  {
    p: "Não coletamos dados pessoais sensíveis nem dados de crianças e adolescentes de forma intencional.",
  },
  { h2: "3. Para que usamos os seus dados" },
  {
    ul: [
      "Responder aos seus contatos e solicitações;",
      "Conduzir e manter o relacionamento comercial com parceiros (varejo, padarias, food service e hotelaria);",
      "Avaliar candidaturas a vagas de trabalho;",
      "Melhorar os nossos produtos, o atendimento e este site;",
      "Cumprir obrigações legais e regulatórias.",
    ],
  },
  { h2: "4. Base legal" },
  {
    p: "Tratamos dados com base no seu consentimento, na execução de contrato ou de procedimentos preliminares, no cumprimento de obrigação legal e no legítimo interesse, conforme o caso, sempre nos limites da LGPD.",
  },
  { h2: "5. Compartilhamento" },
  {
    p: "A Kero+ **não vende** os seus dados pessoais. Eles podem ser compartilhados apenas com prestadores de serviço que nos apoiam (por exemplo, hospedagem e comunicação), sempre sob obrigações de confidencialidade, ou quando exigido por lei ou autoridade competente.",
  },
  { h2: "6. Por quanto tempo guardamos" },
  {
    p: "Mantemos os dados pelo tempo necessário às finalidades acima ou para cumprir obrigações legais. Depois disso, eles são eliminados ou anonimizados.",
  },
  { h2: "7. Os seus direitos" },
  {
    p: "Nos termos da LGPD, você pode solicitar a qualquer momento: confirmação e acesso aos seus dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação; portabilidade; informação sobre o compartilhamento; e a revogação do consentimento.",
  },
  { h2: "8. Como exercer os seus direitos" },
  {
    p: "Para exercer os seus direitos ou tirar dúvidas sobre privacidade, fale com a gente pelos nossos canais de atendimento: [WhatsApp (62) 99958-7865](wa), telefone (62) 3990-3012 ou Instagram @keromaispaescongelados.",
  },
  { h2: "9. Segurança" },
  {
    p: "Adotamos medidas técnicas e organizacionais razoáveis para proteger os seus dados contra acessos não autorizados, perda ou uso indevido.",
  },
  { h2: "10. Alterações deste aviso" },
  {
    p: "Este Aviso pode ser atualizado a qualquer momento. A versão vigente estará sempre disponível nesta página, com a data da última atualização.",
  },
];

const qualityBlocks: Block[] = [
  {
    p: "Há mais de 10 anos a **Kero Mais Pães Congelados** fabrica pães e quitandas congelados com um princípio inegociável: **confiabilidade e excelência em cada unidade**. Esta Política de Qualidade orienta o trabalho de toda a nossa equipe, da seleção da matéria-prima à entrega ao parceiro.",
  },
  { h2: "O nosso compromisso" },
  {
    p: "Entregar produtos seguros, padronizados e saborosos, que ajudem padarias, varejo, food service e hotelaria a oferecer qualidade ao consumidor final — com a praticidade do congelado.",
  },
  { h2: "Como colocamos isso em prática" },
  {
    ul: [
      "**Matéria-prima selecionada:** escolhemos os ingredientes com cuidado e trabalhamos com fornecedores de confiança.",
      "**Processo controlado:** respeitamos os tempos de fermentação e o congelamento no ponto certo, preservando sabor, aroma e textura.",
      "**Boas Práticas de Fabricação:** seguimos as boas práticas e a legislação sanitária aplicável à produção de alimentos.",
      "**Padronização:** buscamos a mesma qualidade em cada lote, escala após escala.",
      "**Higiene e segurança:** mantemos rotinas de higiene, limpeza e controle em toda a fábrica.",
    ],
  },
  { h2: "Melhoria contínua" },
  {
    p: "Investimos de forma constante em técnica, capacidade e processos para evoluir junto com as necessidades dos nossos parceiros e do mercado.",
  },
  { h2: "Compromisso com o parceiro" },
  {
    p: "Qualidade, para a Kero+, também é relacionamento: consistência, regularidade e entrega no prazo. É assim que construímos parcerias de longo prazo.",
  },
  {
    p: "Dúvidas ou sugestões sobre a nossa qualidade? Fale com o nosso time pelo [WhatsApp (62) 99958-7865](wa) ou pelo nosso [canal de atendimento](page:commercial).",
  },
];

const aboutTitle: SplitTitle = { line1: "Uma década fabricando", accent: "qualidade e confiança" };

export const pt = {
  meta: {
    siteName: "Kero+ Pães Congelados",
    titleDefault: "Kero+ Pães Congelados — Tradição e excelência na sua mesa",
    titleTemplate: "%s · Kero+ Pães Congelados",
    description:
      "Fábrica de pães congelados em Goiânia há 10 anos. Pães, pães de queijo, doces, quintadas e salgados congelados para varejo, padarias, food service e hotelaria.",
    ogDescription:
      "Fabricando qualidade em cada lote. Pães congelados artesanais para parceiros comerciais em Goiás, no Distrito Federal, no Mato Grosso e na Bahia.",
    pages: {
      products: {
        title: "Produtos",
        description:
          "Catálogo completo Kero+ 2026: pães, pães de queijo, doces e salgados congelados — frescor de fábrica, prontos para assar e fritar. Para padarias, varejo e food service.",
      },
      about: {
        title: "Quem Somos",
        description:
          "Há 10 anos a Kero+ fabrica pães congelados em Goiânia. Hoje são 30 toneladas por dia — mais de 300 mil pães — para padarias, varejo e food service em GO, DF e MT.",
      },
      commercial: {
        title: "Comercial",
        description:
          "Fale com o time comercial da Kero+ Pães Congelados: parcerias, pedidos e atendimento por WhatsApp, telefone ou formulário. Matriz em Goiânia e filial em Rondonópolis.",
      },
      careers: {
        title: "Trabalhe Conosco",
        description:
          "Faça parte do time Kero+ Pães Congelados — fábrica, administrativo e vendas, em Goiânia (GO) e Rondonópolis (MT). Envie o seu currículo pelo WhatsApp.",
      },
      privacy: {
        title: "Aviso de Privacidade",
        description:
          "Como a Kero+ Pães Congelados coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.",
      },
      quality: {
        title: "Política de Qualidade",
        description:
          "O compromisso da Kero+ Pães Congelados com a qualidade, a padronização e a segurança dos alimentos em cada lote.",
      },
    },
  },

  header: {
    logoAria: "Kero+ Pães Congelados — início",
    logoAlt: "Kero+ Pães Congelados",
    nav: {
      about: "Quem Somos",
      products: "Produtos",
      careers: "Trabalhe Conosco",
      commercial: "Comercial",
    },
    cta: "Fale Conosco",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    language: "Idioma",
    languageMenuAria: "Selecionar idioma",
  },

  marquee: [
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
  ],

  footer: {
    logoAlt: "Kero+ Pães Congelados",
    tagline:
      "Fabricando qualidade em cada lote. Pães congelados artesanais com a tradição que a sua mesa merece.",
    hq: "Matriz",
    branch: "Filial",
    cols: {
      institutional: "Institucional",
      products: "Produtos",
      service: "Atendimento",
    },
    links: {
      about: "Quem Somos",
      careers: "Trabalhe Conosco",
      privacy: "Aviso de Privacidade",
      quality: "Política de Qualidade",
      commercialSac: "Comercial / SAC",
      contactUs: "Fale Conosco",
    },
    rights: "© 2026 Kero+ Pães Congelados. Todos os direitos reservados.",
    slogan: "Fabricando Qualidade",
  },

  hero: {
    slides: [
      { alt: "Pães e quitandas Kero+ — tradição e qualidade fabricada em cada lote" },
      {
        alt: "Salgados congelados Kero+ — coxinha, risole, pastel e empanados prontos para fritar",
      },
    ],
    title: { line1: "Tradição e Excelência", accent: "na Sua Mesa" } as SplitTitle,
    cta: "Conheça os Produtos",
    prev: "Imagem anterior",
    next: "Próxima imagem",
    goTo: "Ir para a imagem {n}",
  },

  linhas: {
    eyebrow: "Nossas Linhas",
    title: "Uma vitrine de sabores",
    subtitle:
      "Seis linhas para a vitrine da sua padaria — pães, queijos, doces, quintadas e salgados, todos congelados.",
    catalogCta: "Ver catálogo completo →",
    explore: "Explorar a linha →",
    prev: "Linha anterior",
    next: "Próxima linha",
    goTo: "Ir para {title}",
    items: {
      paes: {
        desc: "Do francês ao mandi — casca crocante, miolo macio, congelado no ponto certo.",
        alt: "Cesto de pães franceses dourados",
      },
      "queijos-biscoitos": {
        desc: "Pão de queijo, chipa, biscoitos e empanado goiano: a tradição goiana, congelada.",
        alt: "Pães de queijo dourados",
      },
      "linha-doce": {
        desc: "Roscas e sonhos para encher a vitrine da padaria com o melhor da confeitaria.",
        alt: "Rosca doce da Kero+",
      },
      "linha-quintada": {
        desc: "Broa doce, broa temperada e carolina — sabores únicos com identidade regional.",
        alt: "Broa temperada da Kero+",
      },
      "salgados-grandes": {
        desc: "Coxinha, quibe, disco e empanado de 120g a 150g — impacto garantido na vitrine.",
        alt: "Coxinha grande de frango com requeijão",
      },
      "salgados-pequenos": {
        desc: "Coxinha, risole, pastel, quibe e empanados no tamanho de lanche — prontos para fritar.",
        alt: "Coxinhas de frango com requeijão empanadas",
      },
    } as Record<string, { desc: string; alt: string }>,
  },

  aboutSummary: {
    eyebrow: "Quem Somos",
    title: { line1: "Qualidade fabricada,", accent: "lote a lote" } as SplitTitle,
    p1: "Em 2016, Anderson Santos e Reinaldo Moreira fundaram a Kero Mais Pães Congelados em Goiânia. O amor pela panificação e a vontade de levar sabor e praticidade à mesa movem a nossa fábrica todos os dias.",
    p2: "Hoje produzimos **mais de 300 mil pães todos os dias** — com seis linhas de produtos que atendem padarias e food service em Goiás, no entorno de Brasília, em Mato Grosso, na Bahia e no Maranhão.",
    imgAlt:
      "Colaboradora da Kero+ na fábrica segurando um pacote de pão de queijo congelado",
  },

  map: {
    eyebrow: "Onde estamos · Atendimento",
    title: "O Kero+ está perto de você",
    intro:
      "Matriz em Goiânia (GO) e filial em Rondonópolis (MT). Rotas de entrega ativas em mais de 50 cidades de Goiás, no entorno de Brasília (DF) e no oeste da Bahia.",
    searchTitle: "Busque sua cidade",
    searchPlaceholder: "Digite o nome da sua cidade…",
    searchAria: "Buscar cidade atendida pela Kero+",
    hqBadge: "Matriz",
    notFound:
      "Não encontramos essa cidade na nossa lista — mas isso não significa que não atendemos. Fale com a gente!",
    askWhatsapp: "Perguntar no WhatsApp",
    askMessage: "Olá! Gostaria de saber se a Kero+ entrega em {city}.",
    askFallbackCity: "minha cidade",
    mapAria:
      "Mapa do Centro-Oeste com a matriz da Kero+ em Goiânia, a filial em Rondonópolis (MT) e as cidades atendidas em Goiás, Distrito Federal e Bahia",
    ctaPartner: "Seja um parceiro comercial",
    ctaWhere: "Onde comprar (SAC)",
    routeLabel: "Rota {name}",
    subs: {
      hq: "Matriz & fábrica · Jardim Europa",
      branch: "Filial · Centro",
      metro: "Região metropolitana",
      brasilia: "Entorno de Brasília",
      southwest: "Sudoeste goiano",
    },
    popup: {
      dialogAria: "Cidade: {city}",
      title: "Atendemos {city}!",
      body: "Fale com nosso time comercial pelo WhatsApp e descubra como levar os produtos Kero+ até a sua padaria ou negócio.",
      cta: "Fale Conosco",
      close: "Fechar",
      message:
        "Olá! Vi que a Kero+ atende {city} e gostaria de saber mais sobre como levar os produtos até a minha região.",
    },
  },

  products: {
    hero: {
      eyebrow: "Catálogo Digital",
      title: "Nossos Produtos",
      subtitle:
        "Pães, pães de queijo, doces e salgados congelados — organizados por linha. Frescor de fábrica, prontos para assar e fritar.",
    },
    popup: {
      dialogAria: "Produto: {name}",
      detailsAria: "Ver detalhes: {name}",
      title: "Quer falar com nossa central de compras?",
      body: "Conheça nosso portfólio completo e descubra as melhores opções para a vitrine da sua padaria.",
      cta: "Fale Conosco",
      close: "Fechar",
      message:
        "Olá! Vi o produto *{name}* no site da Kero+ e gostaria de conhecer mais sobre o portfólio completo.",
    },
    cta: {
      title: "Quer revender ou servir os pães Kero+?",
      body: "Mais de 40 produtos congelados — pães, quitandas, doces e salgados — com escala e regularidade para varejo, padarias, food service e hotelaria. Fale com o nosso time comercial.",
      button: "Falar com o Comercial",
    },
  },

  about: {
    hero: {
      eyebrow: "Nossa História · 10 anos",
      title: aboutTitle,
      subtitle:
        "Do primeiro lote em Goiânia a 30 toneladas de pães por dia — conheça a evolução da Kero+.",
    },
    origin: {
      eyebrow: "A nossa origem",
      title: { line1: "Começou pequeno,", accent: "cresceu com propósito" } as SplitTitle,
      p1: "Em 2016, Anderson Santos e Reinaldo Moreira fundaram a Kero Mais Pães Congelados em Goiânia, transformando em realidade o sonho de criar uma fábrica de pães congelados de qualidade. Começaram com uma linha de produção e poucos parceiros que acreditaram na proposta.",
      p2: "Década adentro, o investimento em fermentação, congelamento no ponto certo e processos consistentes levou a Kero+ a produzir hoje **30 toneladas por dia — mais de 300 mil pães** — para padarias, varejo, food service e hotelaria em Goiás, no entorno de Brasília e no Mato Grosso.",
      p3: "A missão segue simples e inegociável: **confiabilidade e excelência em cada unidade**.",
      imgAlt:
        "Equipe da Kero+ na produção, com bandejas de pães prontas para o congelamento",
      quote: "Dez anos depois, o mesmo cuidado em cada lote que congelamos.",
    },
    numbers: {
      imgAlt: "Unidade de produção de pães congelados da Kero+",
      eyebrow: "Conquistas em números",
      title: "Uma década que fala por si",
      stats: [
        { num: "10", label: "anos de história" },
        { num: "30 t", label: "produzidas por dia" },
        { num: "+300 mil", label: "pães por dia" },
        { num: "46", label: "produtos no catálogo" },
      ],
    },
    timeline: {
      eyebrow: "A nossa evolução",
      title: "Dez anos, marco a marco",
      items: [
        {
          year: "2016",
          title: "O começo de tudo",
          desc: "Em Goiânia, Anderson Santos e Reinaldo Moreira fundam a Kero Mais Pães Congelados, realizando o sonho de criar uma fábrica de pães congelados de qualidade.",
        },
        {
          year: "2018",
          title: "As primeiras parcerias",
          desc: "Padarias e redes da região passam a contar com os pães congelados Kero+ no dia a dia.",
        },
        {
          year: "2020",
          title: "Portfólio em expansão",
          desc: "Crescem as linhas de pães, pães de queijo, doces e salgados — mais opções para a vitrine do cliente.",
        },
        {
          year: "2022",
          title: "Chegada ao Mato Grosso",
          desc: "A filial em Rondonópolis (MT) aproxima a Kero+ de novos parceiros para além de Goiás.",
        },
        {
          year: "2024",
          title: "Escala industrial",
          desc: "Investimento em capacidade e logística de congelados acelera a produção rumo às 30 toneladas por dia.",
        },
        {
          year: "2025",
          title: "Chegada à Bahia e ao Maranhão",
          desc: "A Kero+ expande para a Bahia e chega a Balsas, no Maranhão — levando sabor goiano para novos mercados.",
        },
        {
          year: "2026",
          title: "Uma década de referência",
          desc: "10 anos, 30 toneladas e mais de 300 mil pães por dia — com a mesma obsessão pela qualidade do primeiro dia.",
        },
      ],
    },
    values: [
      {
        mark: "Q",
        title: "Qualidade inegociável",
        desc: "Cada unidade passa pelo mesmo rigor: grãos selecionados, fermentação respeitada e congelamento no ponto certo.",
      },
      {
        mark: "C",
        title: "Confiança de parceiro",
        desc: "Relações de longo prazo construídas com consistência, regularidade e entrega no prazo.",
      },
      {
        mark: "E",
        title: "Evolução constante",
        desc: "Investimento contínuo em técnica, capacidade e novas linhas para acompanhar a mesa do cliente.",
      },
    ],
    cta: {
      title: "Faça parte da próxima década",
      body: "Seja parceiro comercial ou conheça as nossas linhas de pães congelados.",
      products: "Conheça os Produtos",
      commercial: "Fale com o Comercial",
    },
  },

  commercial: {
    hero: {
      eyebrow: "Atendimento Comercial",
      title: "Fale com a gente",
      subtitle:
        "Parcerias comerciais, pedidos e suporte — por WhatsApp, telefone ou pelo formulário.",
    },
    title: "Pronto para uma parceria de sucesso?",
    body: "Vamos juntos. Fale com o nosso time comercial pelos canais abaixo ou preencha o formulário — retornamos o seu contato o quanto antes.",
    channels: {
      whatsapp: "WhatsApp comercial",
      phone: "Telefone",
      instagram: "Instagram",
      hours: "Horário",
    },
    hours: "Seg a Sex · 8h–12h / 13h–17h",
    form: {
      name: "Nome completo",
      namePh: "Seu nome",
      company: "Empresa / Padaria",
      companyPh: "Nome do seu negócio",
      email: "E-mail",
      emailPh: "voce@email.com",
      phone: "Telefone / WhatsApp",
      phonePh: "(00) 00000-0000",
      typeLegend: "Tipo de contato",
      types: ["Parceria comercial", "Já sou cliente", "SAC / Feedback"],
      message: "Mensagem",
      messagePh: "Conte o que você precisa…",
      submit: "Enviar pelo WhatsApp",
      noteIdle:
        "Ao enviar, abrimos o WhatsApp do nosso comercial com os seus dados já preenchidos. Usamos suas informações apenas para retornar o contato.",
      noteSent:
        "Abrimos o WhatsApp com a sua mensagem preenchida — é só tocar em enviar.",
      wa: {
        title: "*Contato pelo site — {type}*",
        fallbackType: "Comercial",
        name: "Nome",
        company: "Empresa",
        email: "E-mail",
        phone: "Telefone",
      },
    },
  },

  careers: {
    hero: {
      eyebrow: "Trabalhe Conosco",
      title: "Faça parte do nosso time",
      subtitle:
        "Há 10 anos a Kero+ cresce com gente boa — na fábrica, no administrativo e no comercial.",
    },
    imgAlt: "Equipe Kero+ — pessoas da fábrica, do administrativo e do comercial",
    eyebrow: "Vem com a gente",
    title: "Gente boa que faz a qualidade acontecer",
    body: "Da produção na fábrica ao administrativo e ao time de vendas, é o nosso pessoal que assina a qualidade Kero+ todos os dias. Tem vontade de crescer com a gente, em Goiânia (GO) ou Rondonópolis (MT)? Manda o seu currículo.",
    cta: "Enviar currículo pelo WhatsApp",
    message:
      "Olá! Tenho interesse em fazer parte da equipe Kero+. Gostaria de enviar o meu currículo.",
  },

  privacy: {
    hero: {
      eyebrow: "Institucional",
      title: "Aviso de Privacidade",
      subtitle:
        "Como a Kero+ coleta, usa e protege os seus dados pessoais. Última atualização: outubro de 2026.",
    },
    blocks: privacyBlocks,
  },

  quality: {
    hero: {
      eyebrow: "Institucional",
      title: "Política de Qualidade",
      subtitle:
        "O compromisso da Kero+ com a qualidade e a segurança dos alimentos, do grão ao congelamento.",
    },
    blocks: qualityBlocks,
  },

  notFound: {
    title: "Página não encontrada",
    body: "O endereço que você tentou abrir não existe ou foi movido.",
    cta: "Voltar para o início",
  },
};

export type Dict = typeof pt;
