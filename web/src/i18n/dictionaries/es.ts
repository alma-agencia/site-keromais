// Diccionario en español (neutro). Misma forma que `pt` (tipo `Dict`).
import type { Dict } from "./pt";
import type { Block, SplitTitle } from "./types";

const privacyBlocks: Block[] = [
  {
    p: 'Este Aviso de Privacidad describe cómo **Kero Mais Pães Congelados** ("Kero+", "nosotros") trata los datos personales de quienes se ponen en contacto con nosotros o utilizan este sitio web, de conformidad con la Ley General de Protección de Datos de Brasil (Ley n.º 13.709/2018 — LGPD).',
  },
  { h2: "1. Quién es el responsable del tratamiento" },
  {
    p: "Kero Mais Pães Congelados, con casa matriz en R. Luxemburgo, 689, Jardim Europa, Goiânia-GO, es la responsable de los datos personales tratados a través de nuestros canales de atención y de este sitio web.",
  },
  { h2: "2. Qué datos recopilamos" },
  {
    ul: [
      "**Datos que nos proporcionas:** nombre, empresa, correo electrónico, teléfono/WhatsApp y el contenido de los mensajes enviados mediante los formularios o por WhatsApp (atención comercial, Atención al Cliente y candidaturas a vacantes).",
      "**Datos de navegación:** información técnica básica generada al acceder al sitio, como el tipo de dispositivo y las páginas visitadas, cuando corresponda.",
      "**Idioma y ubicación aproximada:** para mostrar el sitio en el idioma correcto, usamos el idioma de tu dispositivo y, cuando no es suficiente, el país asociado a tu dirección IP, consultado en un servicio externo de geolocalización (Cloudflare). Esta información no es almacenada por nosotros. Tu elección de idioma se guarda únicamente en tu navegador.",
    ],
  },
  {
    p: "No recopilamos de forma intencional datos personales sensibles ni datos de niños y adolescentes.",
  },
  { h2: "3. Para qué usamos tus datos" },
  {
    ul: [
      "Responder a tus contactos y solicitudes;",
      "Conducir y mantener la relación comercial con socios (comercio minorista, panaderías, food service y hotelería);",
      "Evaluar candidaturas a vacantes de trabajo;",
      "Mejorar nuestros productos, la atención y este sitio web;",
      "Cumplir obligaciones legales y regulatorias.",
    ],
  },
  { h2: "4. Base legal" },
  {
    p: "Tratamos los datos con base en tu consentimiento, en la ejecución de un contrato o de procedimientos preliminares, en el cumplimiento de una obligación legal y en el interés legítimo, según corresponda, siempre dentro de los límites de la LGPD.",
  },
  { h2: "5. Compartición de datos" },
  {
    p: "Kero+ **no vende** tus datos personales. Estos pueden compartirse únicamente con los proveedores de servicios que nos apoyan (por ejemplo, alojamiento y comunicación), siempre bajo obligaciones de confidencialidad, o cuando lo exija la ley o una autoridad competente.",
  },
  { h2: "6. Por cuánto tiempo los conservamos" },
  {
    p: "Conservamos los datos durante el tiempo necesario para las finalidades anteriores o para cumplir obligaciones legales. Después de ese plazo, se eliminan o se anonimizan.",
  },
  { h2: "7. Tus derechos" },
  {
    p: "En los términos de la LGPD, puedes solicitar en cualquier momento: confirmación y acceso a tus datos; corrección de datos incompletos o desactualizados; anonimización, bloqueo o eliminación; portabilidad; información sobre la compartición de datos; y la revocación del consentimiento.",
  },
  { h2: "8. Cómo ejercer tus derechos" },
  {
    p: "Para ejercer tus derechos o resolver dudas sobre privacidad, contáctanos a través de nuestros canales de atención: [WhatsApp (62) 99958-7865](wa), teléfono (62) 3990-3012 o Instagram @keromaispaescongelados.",
  },
  { h2: "9. Seguridad" },
  {
    p: "Adoptamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no autorizados, pérdida o uso indebido.",
  },
  { h2: "10. Cambios en este aviso" },
  {
    p: "Este Aviso puede actualizarse en cualquier momento. La versión vigente estará siempre disponible en esta página, con la fecha de la última actualización.",
  },
];

const qualityBlocks: Block[] = [
  {
    p: "Desde hace más de 10 años, **Kero Mais Pães Congelados** fabrica panes y horneados tradicionales congelados con un principio innegociable: **confiabilidad y excelencia en cada unidad**. Esta Política de Calidad orienta el trabajo de todo nuestro equipo, desde la selección de la materia prima hasta la entrega al socio.",
  },
  { h2: "Nuestro compromiso" },
  {
    p: "Entregar productos seguros, estandarizados y sabrosos, que ayuden a panaderías, comercio minorista, food service y hotelería a ofrecer calidad al consumidor final, con la practicidad del congelado.",
  },
  { h2: "Cómo lo ponemos en práctica" },
  {
    ul: [
      "**Materia prima seleccionada:** elegimos los ingredientes con cuidado y trabajamos con proveedores de confianza.",
      "**Proceso controlado:** respetamos los tiempos de fermentación y el congelado en su punto justo, preservando sabor, aroma y textura.",
      "**Buenas Prácticas de Fabricación:** seguimos las buenas prácticas y la legislación sanitaria aplicable a la producción de alimentos.",
      "**Estandarización:** buscamos la misma calidad en cada lote, escala tras escala.",
      "**Higiene y seguridad:** mantenemos rutinas de higiene, limpieza y control en toda la fábrica.",
    ],
  },
  { h2: "Mejora continua" },
  {
    p: "Invertimos de forma constante en técnica, capacidad y procesos para evolucionar junto con las necesidades de nuestros socios y del mercado.",
  },
  { h2: "Compromiso con el socio" },
  {
    p: "Para Kero+, la calidad también es relación: consistencia, regularidad y entrega puntual. Así construimos alianzas a largo plazo.",
  },
  {
    p: "¿Dudas o sugerencias sobre nuestra calidad? Habla con nuestro equipo por [WhatsApp (62) 99958-7865](wa) o a través de nuestro [canal de atención](page:commercial).",
  },
];

const aboutTitle: SplitTitle = { line1: "Una década fabricando", accent: "calidad y confianza" };

export const es: Dict = {
  meta: {
    siteName: "Kero+ Pães Congelados",
    titleDefault: "Kero+ Pães Congelados — Tradición y excelencia en tu mesa",
    titleTemplate: "%s · Kero+ Pães Congelados",
    description:
      "Fábrica de pan congelado en Goiânia desde hace 10 años. Panes, panes de queso (pão de queijo), dulces, quintadas y salgados (snacks salados brasileños) congelados para comercio minorista, panaderías, food service y hotelería.",
    ogDescription:
      "Fabricando calidad en cada lote. Pan congelado artesanal para socios comerciales en Goiás, el Distrito Federal, Mato Grosso y Bahía.",
    pages: {
      products: {
        title: "Productos",
        description:
          "Catálogo completo Kero+ 2026: panes, panes de queso, dulces y salgados congelados — frescura de fábrica, listos para hornear y freír. Para panaderías, comercio minorista y food service.",
      },
      about: {
        title: "Quiénes Somos",
        description:
          "Desde hace 10 años Kero+ fabrica pan congelado en Goiânia. Hoy son 30 toneladas por día — más de 300 mil panes — para panaderías, comercio minorista y food service en GO, DF y MT.",
      },
      commercial: {
        title: "Ventas",
        description:
          "Habla con el equipo de ventas de Kero+ Pães Congelados: alianzas, pedidos y atención por WhatsApp, teléfono o formulario. Casa matriz en Goiânia y sucursal en Rondonópolis.",
      },
      careers: {
        title: "Trabaja con Nosotros",
        description:
          "Forma parte del equipo Kero+ Pães Congelados — fábrica, administración y ventas, en Goiânia (GO) y Rondonópolis (MT). Envía tu currículum por WhatsApp.",
      },
      privacy: {
        title: "Aviso de Privacidad",
        description:
          "Cómo Kero+ Pães Congelados recopila, usa y protege tus datos personales, de conformidad con la LGPD.",
      },
      quality: {
        title: "Política de Calidad",
        description:
          "El compromiso de Kero+ Pães Congelados con la calidad, la estandarización y la seguridad de los alimentos en cada lote.",
      },
    },
  },

  header: {
    logoAria: "Kero+ Pães Congelados — inicio",
    logoAlt: "Kero+ Pães Congelados",
    nav: {
      about: "Quiénes Somos",
      products: "Productos",
      careers: "Trabaja con Nosotros",
      commercial: "Ventas",
    },
    cta: "Contáctanos",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    language: "Idioma",
    languageMenuAria: "Seleccionar idioma",
  },

  marquee: [
    "Pan Francés",
    "Pão de Queijo",
    "Chipa Tradicional",
    "Pan Mantecoso",
    "Rosca Prestígio",
    "Pan Mandi",
    "Coxinha de Pollo",
    "Empanado Goiano",
    "Sonho",
    "Pastel",
  ],

  footer: {
    logoAlt: "Kero+ Pães Congelados",
    tagline:
      "Fabricando calidad en cada lote. Pan congelado artesanal con la tradición que tu mesa merece.",
    hq: "Casa matriz",
    branch: "Sucursal",
    cols: {
      institutional: "Institucional",
      products: "Productos",
      service: "Atención",
    },
    links: {
      about: "Quiénes Somos",
      careers: "Trabaja con Nosotros",
      privacy: "Aviso de Privacidad",
      quality: "Política de Calidad",
      commercialSac: "Ventas / Atención al Cliente",
      contactUs: "Contáctanos",
    },
    rights: "© 2026 Kero+ Pães Congelados. Todos los derechos reservados.",
    slogan: "Fabricando Calidad",
  },

  hero: {
    slides: {
      expoind: {
        alt: "Kero+ en Expoind 2026: presencia confirmada en la 3.ª edición de la Feria de Negocios y Soluciones para la Industria de Goiás, del 27 al 29 de octubre de 2026, en el Centro de Convenciones de Goiânia",
      },
      paes: { alt: "Panes y horneados tradicionales Kero+ — tradición y calidad fabricadas en cada lote" },
      salgados: {
        alt: "Salgados congelados Kero+ — coxinha, risole, pastel y empanados listos para freír",
      },
    },
    title: { line1: "Tradición y Excelencia", accent: "en Tu Mesa" } as SplitTitle,
    cta: "Conoce los Productos",
    prev: "Imagen anterior",
    next: "Imagen siguiente",
    goTo: "Ir a la imagen {n}",
  },

  linhas: {
    eyebrow: "Nuestras Líneas",
    title: "Una vitrina de sabores",
    subtitle:
      "Seis líneas para la vitrina de tu panadería — panes, quesos, dulces, quintadas y salgados, todos congelados.",
    catalogCta: "Ver catálogo completo →",
    explore: "Explorar la línea →",
    prev: "Línea anterior",
    next: "Línea siguiente",
    goTo: "Ir a {title}",
    items: {
      paes: {
        desc: "Del francés al mandi — corteza crujiente, miga suave, congelado en su punto justo.",
        alt: "Cesta de panes franceses dorados",
      },
      "queijos-biscoitos": {
        desc: "Pão de queijo (pan de queso brasileño), chipa, galletas y empanado goiano: la tradición de Goiás, congelada.",
        alt: "Panes de queso dorados",
      },
      "linha-doce": {
        desc: "Roscas y sonhos para llenar la vitrina de la panadería con lo mejor de la repostería.",
        alt: "Rosca dulce de Kero+",
      },
      "linha-quintada": {
        desc: "Broa dulce, broa condimentada y carolina — sabores únicos con identidad regional.",
        alt: "Broa condimentada de Kero+",
      },
      "salgados-grandes": {
        desc: "Coxinha, quibe, disco y empanado de 120 g a 150 g — impacto garantizado en la vitrina.",
        alt: "Coxinha grande de pollo con requeijão",
      },
      "salgados-pequenos": {
        desc: "Coxinha, risole, pastel, quibe y empanados en tamaño de merienda — listos para freír.",
        alt: "Coxinhas de pollo con requeijão empanadas",
      },
    } as Record<string, { desc: string; alt: string }>,
  },

  aboutSummary: {
    eyebrow: "Quiénes Somos",
    title: { line1: "Calidad fabricada,", accent: "lote a lote" } as SplitTitle,
    p1: "En 2016, Anderson Santos y Reinaldo Moreira fundaron Kero Mais Pães Congelados en Goiânia. El amor por la panificación y las ganas de llevar sabor y practicidad a la mesa mueven nuestra fábrica todos los días.",
    p2: "Hoy producimos **más de 300 mil panes todos los días** — con seis líneas de productos que atienden panaderías y food service en Goiás, en el entorno de Brasilia, en Mato Grosso, en Bahía y en Maranhão.",
    imgAlt:
      "Colaboradora de Kero+ en la fábrica sosteniendo un paquete de pão de queijo congelado",
  },

  map: {
    eyebrow: "Dónde estamos · Atención",
    title: "Kero+ está cerca de ti",
    intro:
      "Casa matriz en Goiânia (GO) y sucursal en Rondonópolis (MT). Rutas de entrega activas en más de 50 ciudades de Goiás, en el entorno de Brasilia (DF) y en el oeste de Bahía.",
    searchTitle: "Busca tu ciudad",
    searchPlaceholder: "Escribe el nombre de tu ciudad…",
    searchAria: "Buscar ciudad atendida por Kero+",
    hqBadge: "Matriz",
    notFound:
      "No encontramos esa ciudad en nuestra lista, pero eso no significa que no la atendamos. ¡Contáctanos!",
    askWhatsapp: "Preguntar por WhatsApp",
    askMessage: "¡Hola! Me gustaría saber si Kero+ entrega en {city}.",
    askFallbackCity: "mi ciudad",
    mapAria:
      "Mapa del Centro-Oeste con la casa matriz de Kero+ en Goiânia, la sucursal en Rondonópolis (MT) y las ciudades atendidas en Goiás, el Distrito Federal y Bahía",
    ctaPartner: "Sé un socio comercial",
    ctaWhere: "Dónde comprar (Atención al Cliente)",
    routeLabel: "Ruta {name}",
    subs: {
      hq: "Casa matriz y fábrica · Jardim Europa",
      branch: "Sucursal · Centro",
      metro: "Región metropolitana",
      brasilia: "Entorno de Brasília",
      southwest: "Sudoeste de Goiás",
    },
    popup: {
      dialogAria: "Ciudad: {city}",
      title: "¡Atendemos {city}!",
      body: "Habla con nuestro equipo de ventas por WhatsApp y descubre cómo llevar los productos Kero+ a tu panadería o negocio.",
      cta: "Contáctanos",
      close: "Cerrar",
      message:
        "¡Hola! Vi que Kero+ atiende {city} y me gustaría saber más sobre cómo llevar los productos a mi región.",
    },
  },

  products: {
    hero: {
      eyebrow: "Catálogo Digital",
      title: "Nuestros Productos",
      subtitle:
        "Panes, panes de queso, dulces y salgados congelados — organizados por línea. Frescura de fábrica, listos para hornear y freír.",
    },
    popup: {
      dialogAria: "Producto: {name}",
      detailsAria: "Ver detalles: {name}",
      title: "¿Quieres hablar con nuestra central de compras?",
      body: "Conoce nuestro portafolio completo y descubre las mejores opciones para la vitrina de tu panadería.",
      cta: "Contáctanos",
      close: "Cerrar",
      message:
        "¡Hola! Vi el producto *{name}* en el sitio de Kero+ y me gustaría conocer más sobre el portafolio completo.",
    },
    cta: {
      title: "¿Quieres revender o servir los panes Kero+?",
      body: "Más de 40 productos congelados — panes, horneados tradicionales, dulces y salgados — con escala y regularidad para comercio minorista, panaderías, food service y hotelería. Habla con nuestro equipo de ventas.",
      button: "Hablar con Ventas",
    },
  },

  about: {
    hero: {
      eyebrow: "Nuestra Historia · 10 años",
      title: aboutTitle,
      subtitle:
        "Del primer lote en Goiânia a 30 toneladas de pan por día — conoce la evolución de Kero+.",
    },
    origin: {
      eyebrow: "Nuestro origen",
      title: { line1: "Empezó pequeño,", accent: "creció con propósito" } as SplitTitle,
      p1: "En 2016, Anderson Santos y Reinaldo Moreira fundaron Kero Mais Pães Congelados en Goiânia, haciendo realidad el sueño de crear una fábrica de pan congelado de calidad. Empezaron con una línea de producción y unos pocos socios que creyeron en la propuesta.",
      p2: "Una década después, la inversión en fermentación, congelado en su punto justo y procesos consistentes llevó a Kero+ a producir hoy **30 toneladas por día — más de 300 mil panes** — para panaderías, comercio minorista, food service y hotelería en Goiás, en el entorno de Brasilia y en Mato Grosso.",
      p3: "La misión sigue siendo simple e innegociable: **confiabilidad y excelencia en cada unidad**.",
      imgAlt:
        "Equipo de Kero+ en la producción, con bandejas de panes listas para el congelado",
      quote: "Diez años después, el mismo cuidado en cada lote que congelamos.",
    },
    numbers: {
      imgAlt: "Unidad de producción de pan congelado de Kero+",
      eyebrow: "Logros en cifras",
      title: "Una década que habla por sí sola",
      stats: [
        { num: "10", label: "años de historia" },
        { num: "30 t", label: "toneladas producidas por día" },
        { num: "+300 mil", label: "panes por día" },
        { num: "46", label: "productos en el catálogo" },
      ],
    },
    timeline: {
      eyebrow: "Nuestra evolución",
      title: "Diez años, hito a hito",
      items: [
        {
          year: "2016",
          title: "El comienzo de todo",
          desc: "En Goiânia, Anderson Santos y Reinaldo Moreira fundan Kero Mais Pães Congelados, cumpliendo el sueño de crear una fábrica de pan congelado de calidad.",
        },
        {
          year: "2018",
          title: "Las primeras alianzas",
          desc: "Panaderías y cadenas de la región empiezan a contar con el pan congelado Kero+ en su día a día.",
        },
        {
          year: "2020",
          title: "Portafolio en expansión",
          desc: "Crecen las líneas de panes, panes de queso, dulces y salgados — más opciones para la vitrina del cliente.",
        },
        {
          year: "2022",
          title: "Llegada a Mato Grosso",
          desc: "La sucursal en Rondonópolis (MT) acerca a Kero+ a nuevos socios más allá de Goiás.",
        },
        {
          year: "2024",
          title: "Escala industrial",
          desc: "La inversión en capacidad y logística de congelados acelera la producción rumbo a las 30 toneladas por día.",
        },
        {
          year: "2025",
          title: "Llegada a Bahía y Maranhão",
          desc: "Kero+ se expande a Bahía y llega a Balsas, en Maranhão, llevando el sabor de Goiás a nuevos mercados.",
        },
        {
          year: "2026",
          title: "Una década de referencia",
          desc: "10 años, 30 toneladas y más de 300 mil panes por día — con la misma obsesión por la calidad del primer día.",
        },
      ],
    },
    values: [
      {
        mark: "C",
        title: "Calidad innegociable",
        desc: "Cada unidad pasa por el mismo rigor: granos seleccionados, fermentación respetada y congelado en su punto justo.",
      },
      {
        mark: "C",
        title: "Confianza de socio",
        desc: "Relaciones a largo plazo construidas con consistencia, regularidad y entrega puntual.",
      },
      {
        mark: "E",
        title: "Evolución constante",
        desc: "Inversión continua en técnica, capacidad y nuevas líneas para acompañar la mesa del cliente.",
      },
    ],
    cta: {
      title: "Sé parte de la próxima década",
      body: "Hazte socio comercial o conoce nuestras líneas de pan congelado.",
      products: "Conoce los Productos",
      commercial: "Habla con Ventas",
    },
  },

  commercial: {
    hero: {
      eyebrow: "Atención Comercial",
      title: "Hablemos",
      subtitle:
        "Alianzas comerciales, pedidos y soporte — por WhatsApp, teléfono o mediante el formulario.",
    },
    title: "¿Listo para una alianza exitosa?",
    body: "Vamos juntos. Habla con nuestro equipo de ventas por los canales de abajo o completa el formulario — te responderemos lo antes posible.",
    channels: {
      whatsapp: "WhatsApp de ventas",
      phone: "Teléfono",
      instagram: "Instagram",
      hours: "Horario",
    },
    hours: "Lun a Vie · 8:00–12:00 / 13:00–17:00 (hora de Brasilia)",
    form: {
      name: "Nombre completo",
      namePh: "Tu nombre",
      company: "Empresa / Panadería",
      companyPh: "Nombre de tu negocio",
      email: "Correo electrónico",
      emailPh: "tu@correo.com",
      phone: "Teléfono / WhatsApp",
      phonePh: "+00 00 00000-0000",
      typeLegend: "Tipo de contacto",
      types: ["Alianza comercial", "Ya soy cliente", "Atención al cliente / Comentarios"],
      message: "Mensaje",
      messagePh: "Cuéntanos qué necesitas…",
      submit: "Enviar por WhatsApp",
      noteIdle:
        "Al enviar, abrimos el WhatsApp de nuestro equipo de ventas con tus datos ya completados. Usamos tu información únicamente para responderte.",
      noteSent:
        "Abrimos WhatsApp con tu mensaje ya escrito — solo tienes que tocar enviar.",
      wa: {
        title: "*Contacto desde el sitio — {type}*",
        fallbackType: "Ventas",
        name: "Nombre",
        company: "Empresa",
        email: "Correo electrónico",
        phone: "Teléfono",
      },
    },
  },

  careers: {
    hero: {
      eyebrow: "Trabaja con Nosotros",
      title: "Forma parte de nuestro equipo",
      subtitle:
        "Desde hace 10 años Kero+ crece con buena gente — en la fábrica, en administración y en ventas.",
    },
    imgAlt: "Equipo Kero+ — personas de la fábrica, de administración y de ventas",
    eyebrow: "Ven con nosotros",
    title: "Buena gente que hace realidad la calidad",
    body: "Desde la producción en la fábrica hasta administración y el equipo de ventas, es nuestra gente quien firma la calidad Kero+ todos los días. ¿Tienes ganas de crecer con nosotros, en Goiânia (GO) o Rondonópolis (MT)? Envía tu currículum.",
    cta: "Enviar currículum por WhatsApp",
    message:
      "¡Hola! Tengo interés en formar parte del equipo Kero+. Me gustaría enviar mi currículum.",
  },

  privacy: {
    hero: {
      eyebrow: "Institucional",
      title: "Aviso de Privacidad",
      subtitle:
        "Cómo Kero+ recopila, usa y protege tus datos personales. Última actualización: octubre de 2026.",
    },
    blocks: privacyBlocks,
  },

  quality: {
    hero: {
      eyebrow: "Institucional",
      title: "Política de Calidad",
      subtitle:
        "El compromiso de Kero+ con la calidad y la seguridad de los alimentos, del grano al congelado.",
    },
    blocks: qualityBlocks,
  },

  notFound: {
    title: "Página no encontrada",
    body: "La dirección que intentaste abrir no existe o fue movida.",
    cta: "Volver al inicio",
  },
};
