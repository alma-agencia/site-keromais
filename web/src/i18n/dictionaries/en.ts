// English dictionary. Must have exactly the same shape as the Portuguese base (type `Dict`).
import type { Dict } from "./pt";
import type { Block, SplitTitle } from "./types";

const privacyBlocks: Block[] = [
  {
    p: 'This Privacy Notice describes how **Kero Mais Pães Congelados** ("Kero+", "we") handles the personal data of people who contact us or use this website, in compliance with Brazil\'s General Data Protection Law (Law No. 13,709/2018 — LGPD).',
  },
  { h2: "1. Who is the controller" },
  {
    p: "Kero Mais Pães Congelados, headquartered at R. Luxemburgo, 689, Jardim Europa, Goiânia-GO, is the controller of the personal data processed through our service channels and this website.",
  },
  { h2: "2. What data we collect" },
  {
    ul: [
      "**Data you provide to us:** name, company, email, phone/WhatsApp, and the content of messages sent through the forms or WhatsApp (sales inquiries, customer service, and job applications).",
      "**Browsing data:** basic technical information generated when you access the website, such as device type and pages visited, where applicable.",
      "**Language and approximate location:** to display the website in the right language, we use your device's language and, when that is not enough, the country associated with your IP address, looked up through an external geolocation service (Cloudflare). We do not store this information. Your language choice is saved only in your browser.",
    ],
  },
  {
    p: "We do not intentionally collect sensitive personal data or data from children and adolescents.",
  },
  { h2: "3. What we use your data for" },
  {
    ul: [
      "To respond to your inquiries and requests;",
      "To conduct and maintain business relationships with partners (retail, bakeries, food service, and hospitality);",
      "To evaluate job applications;",
      "To improve our products, our service, and this website;",
      "To comply with legal and regulatory obligations.",
    ],
  },
  { h2: "4. Legal basis" },
  {
    p: "We process data based on your consent, the performance of a contract or of preliminary procedures, compliance with a legal obligation, and legitimate interest, as applicable, always within the limits of the LGPD.",
  },
  { h2: "5. Sharing" },
  {
    p: "Kero+ **does not sell** your personal data. It may be shared only with service providers that support us (for example, hosting and communication), always under confidentiality obligations, or when required by law or by a competent authority.",
  },
  { h2: "6. How long we keep it" },
  {
    p: "We keep data for as long as necessary for the purposes above or to comply with legal obligations. After that, it is deleted or anonymized.",
  },
  { h2: "7. Your rights" },
  {
    p: "Under the LGPD, you may at any time request: confirmation and access to your data; correction of incomplete or outdated data; anonymization, blocking, or deletion; portability; information about sharing; and withdrawal of consent.",
  },
  { h2: "8. How to exercise your rights" },
  {
    p: "To exercise your rights or ask questions about privacy, contact us through our service channels: [WhatsApp (62) 99958-7865](wa), phone (62) 3990-3012, or Instagram @keromaispaescongelados.",
  },
  { h2: "9. Security" },
  {
    p: "We adopt reasonable technical and organizational measures to protect your data against unauthorized access, loss, or misuse.",
  },
  { h2: "10. Changes to this notice" },
  {
    p: "This Notice may be updated at any time. The current version will always be available on this page, with the date of the last update.",
  },
];

const qualityBlocks: Block[] = [
  {
    p: "For more than 10 years, **Kero Mais Pães Congelados** has made frozen breads and traditional bakes under one non-negotiable principle: **reliability and excellence in every single unit**. This Quality Policy guides the work of our entire team, from raw material selection to delivery to our partner.",
  },
  { h2: "Our commitment" },
  {
    p: "To deliver safe, consistent, and delicious products that help bakeries, retail, food service, and hospitality offer quality to the end consumer — with the convenience of frozen.",
  },
  { h2: "How we put it into practice" },
  {
    ul: [
      "**Selected raw materials:** we choose ingredients carefully and work with trusted suppliers.",
      "**Controlled process:** we respect fermentation times and freeze at the perfect point, preserving flavor, aroma, and texture.",
      "**Good Manufacturing Practices:** we follow good practices and the health regulations applicable to food production.",
      "**Standardization:** we pursue the same quality in every batch, at every scale.",
      "**Hygiene and safety:** we maintain hygiene, cleaning, and control routines throughout the factory.",
    ],
  },
  { h2: "Continuous improvement" },
  {
    p: "We invest steadily in technique, capacity, and processes to evolve alongside the needs of our partners and the market.",
  },
  { h2: "Commitment to our partners" },
  {
    p: "For Kero+, quality is also about relationships: consistency, regularity, and on-time delivery. This is how we build long-term partnerships.",
  },
  {
    p: "Questions or suggestions about our quality? Talk to our team on [WhatsApp (62) 99958-7865](wa) or through our [service channel](page:commercial).",
  },
];

const aboutTitle: SplitTitle = { line1: "A Decade Crafting", accent: "Quality and Trust" };

export const en: Dict = {
  meta: {
    siteName: "Kero+ Pães Congelados",
    titleDefault: "Kero+ Pães Congelados — Tradition and excellence on your table",
    titleTemplate: "%s · Kero+ Pães Congelados",
    description:
      "Frozen bread factory in Goiânia for 10 years. Frozen breads, pão de queijo (Brazilian cheese bread), sweet bakes, quintadas, and savory snacks for retail, bakeries, food service, and hospitality.",
    ogDescription:
      "Crafting quality in every batch. Artisan frozen bread for trade partners in Goiás, the Federal District, Mato Grosso, and Bahia.",
    pages: {
      products: {
        title: "Products",
        description:
          "The complete Kero+ 2026 catalog: frozen breads, pão de queijo, sweet bakes, and savory snacks — factory-fresh, ready to bake and fry. For bakeries, retail, and food service.",
      },
      about: {
        title: "About Us",
        description:
          "For 10 years, Kero+ has been making frozen bread in Goiânia. Today that means 30 tons a day — over 300,000 breads — for bakeries, retail, and food service in GO, DF, and MT.",
      },
      commercial: {
        title: "Sales",
        description:
          "Talk to the Kero+ Pães Congelados sales team: partnerships, orders, and support by WhatsApp, phone, or form. Headquarters in Goiânia and a branch in Rondonópolis.",
      },
      careers: {
        title: "Careers",
        description:
          "Join the Kero+ Pães Congelados team — factory, administrative, and sales roles in Goiânia (GO) and Rondonópolis (MT). Send your résumé via WhatsApp.",
      },
      privacy: {
        title: "Privacy Notice",
        description:
          "How Kero+ Pães Congelados collects, uses, and protects your personal data, in compliance with the LGPD.",
      },
      quality: {
        title: "Quality Policy",
        description:
          "Kero+ Pães Congelados' commitment to quality, standardization, and food safety in every batch.",
      },
    },
  },

  header: {
    logoAria: "Kero+ Pães Congelados — home",
    logoAlt: "Kero+ Pães Congelados",
    nav: {
      about: "About Us",
      products: "Products",
      careers: "Careers",
      commercial: "Sales",
    },
    cta: "Contact Us",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    languageMenuAria: "Select language",
  },

  marquee: [
    "French Bread Roll",
    "Pão de Queijo",
    "Traditional Chipa",
    "Buttery Bread Roll",
    "Rosca Prestígio",
    "Mandi Bread",
    "Chicken Coxinha",
    "Empanado Goiano",
    "Sonho",
    "Pastel",
  ],

  footer: {
    logoAlt: "Kero+ Pães Congelados",
    tagline:
      "Crafting quality in every batch. Artisan frozen bread with the tradition your table deserves.",
    hq: "Headquarters",
    branch: "Branch",
    cols: {
      institutional: "Company",
      products: "Products",
      service: "Support",
    },
    links: {
      about: "About Us",
      careers: "Careers",
      privacy: "Privacy Notice",
      quality: "Quality Policy",
      commercialSac: "Sales / Customer Service",
      contactUs: "Contact Us",
    },
    rights: "© 2026 Kero+ Pães Congelados. All rights reserved.",
    slogan: "Crafting Quality",
  },

  hero: {
    slides: [
      { alt: "Kero+ breads and traditional bakes — tradition and quality crafted in every batch" },
      {
        alt: "Kero+ frozen savory snacks — coxinha, rissole, pastel, and breaded snacks ready to fry",
      },
    ],
    title: { line1: "Tradition and Excellence", accent: "on Your Table" } as SplitTitle,
    cta: "Explore Our Products",
    prev: "Previous image",
    next: "Next image",
    goTo: "Go to image {n}",
  },

  linhas: {
    eyebrow: "Our Lines",
    title: "A showcase of flavors",
    subtitle:
      "Six lines for your bakery display — breads, cheese breads, sweet bakes, quintadas, and savory snacks, all frozen.",
    catalogCta: "View the full catalog →",
    explore: "Explore the line →",
    prev: "Previous line",
    next: "Next line",
    goTo: "Go to {title}",
    items: {
      paes: {
        desc: "From French rolls to mandi bread — crisp crust, soft crumb, frozen at the perfect point.",
        alt: "Basket of golden French bread rolls",
      },
      "queijos-biscoitos": {
        desc: "Pão de queijo (Brazilian cheese bread), chipa, biscuits, and empanado goiano: Goiás tradition, frozen.",
        alt: "Golden pão de queijo",
      },
      "linha-doce": {
        desc: "Roscas and sonhos (Brazilian sweet rolls and doughnuts) to fill your bakery display with the best of confectionery.",
        alt: "Kero+ sweet rosca",
      },
      "linha-quintada": {
        desc: "Sweet broa, seasoned broa, and carolina — unique flavors with a regional identity.",
        alt: "Kero+ seasoned broa",
      },
      "salgados-grandes": {
        desc: "Coxinha, quibe, disco, and breaded snacks from 120g to 150g — guaranteed impact on the display.",
        alt: "Large chicken coxinha with requeijão (Brazilian cream cheese)",
      },
      "salgados-pequenos": {
        desc: "Coxinha, rissole, pastel, quibe, and breaded snacks in snack size — ready to fry.",
        alt: "Breaded chicken coxinhas with requeijão",
      },
    } as Record<string, { desc: string; alt: string }>,
  },

  aboutSummary: {
    eyebrow: "About Us",
    title: { line1: "Quality crafted,", accent: "batch by batch" } as SplitTitle,
    p1: "In 2016, Anderson Santos and Reinaldo Moreira founded Kero Mais Pães Congelados in Goiânia. A love of baking and the desire to bring flavor and convenience to the table drive our factory every day.",
    p2: "Today we produce **over 300,000 breads every day** — with six product lines serving bakeries and food service in Goiás, the Brasília surroundings, Mato Grosso, Bahia, and Maranhão.",
    imgAlt: "Kero+ team member at the factory holding a bag of frozen pão de queijo",
  },

  map: {
    eyebrow: "Where we are · Coverage",
    title: "Kero+ is close to you",
    intro:
      "Headquarters in Goiânia (GO) and a branch in Rondonópolis (MT). Active delivery routes in more than 50 cities in Goiás, the Brasília surroundings (DF), and western Bahia.",
    searchTitle: "Find your city",
    searchPlaceholder: "Type your city name…",
    searchAria: "Search for a city served by Kero+",
    hqBadge: "HQ",
    notFound:
      "We couldn't find that city on our list — but that doesn't mean we don't serve it. Get in touch!",
    askWhatsapp: "Ask on WhatsApp",
    askMessage: "Hello! I'd like to know if Kero+ delivers to {city}.",
    askFallbackCity: "my city",
    mapAria:
      "Map of Brazil's Center-West region showing the Kero+ headquarters in Goiânia, the branch in Rondonópolis (MT), and the served cities in Goiás, the Federal District, and Bahia",
    ctaPartner: "Become a trade partner",
    ctaWhere: "Where to buy (Customer Service)",
    routeLabel: "{name} route",
    subs: {
      hq: "Headquarters & factory · Jardim Europa",
      branch: "Branch · Centro",
      metro: "Metropolitan area",
      brasilia: "Brasília surroundings",
      southwest: "Southwest Goiás",
    },
    popup: {
      dialogAria: "City: {city}",
      title: "We serve {city}!",
      body: "Talk to our sales team on WhatsApp and find out how to bring Kero+ products to your bakery or business.",
      cta: "Contact Us",
      close: "Close",
      message:
        "Hello! I saw that Kero+ serves {city} and I'd like to learn more about how to bring your products to my area.",
    },
  },

  products: {
    hero: {
      eyebrow: "Digital Catalog",
      title: "Our Products",
      subtitle:
        "Frozen breads, pão de queijo, sweet bakes, and savory snacks — organized by line. Factory-fresh, ready to bake and fry.",
    },
    popup: {
      dialogAria: "Product: {name}",
      detailsAria: "View details: {name}",
      title: "Want to talk to our purchasing team?",
      body: "Explore our full portfolio and discover the best options for your bakery display.",
      cta: "Contact Us",
      close: "Close",
      message:
        "Hello! I saw the product *{name}* on the Kero+ website and I'd like to learn more about your full portfolio.",
    },
    cta: {
      title: "Want to resell or serve Kero+ breads?",
      body: "Over 40 frozen products — breads, traditional bakes, sweet treats, and savory snacks — with the scale and consistency that retail, bakeries, food service, and hospitality need. Talk to our sales team.",
      button: "Talk to Sales",
    },
  },

  about: {
    hero: {
      eyebrow: "Our Story · 10 years",
      title: aboutTitle,
      subtitle:
        "From the first batch in Goiânia to 30 tons of bread a day — discover how Kero+ has grown.",
    },
    origin: {
      eyebrow: "Our origin",
      title: { line1: "Started small,", accent: "grew with purpose" } as SplitTitle,
      p1: "In 2016, Anderson Santos and Reinaldo Moreira founded Kero Mais Pães Congelados in Goiânia, turning into reality the dream of creating a quality frozen bread factory. They started with a single production line and a few partners who believed in the idea.",
      p2: "Over the decade, investment in fermentation, freezing at the perfect point, and consistent processes has led Kero+ to produce **30 tons a day — over 300,000 breads —** for bakeries, retail, food service, and hospitality in Goiás, the Brasília surroundings, and Mato Grosso.",
      p3: "The mission remains simple and non-negotiable: **reliability and excellence in every unit**.",
      imgAlt:
        "Kero+ production team with trays of bread ready for freezing",
      quote: "Ten years later, the same care in every batch we freeze.",
    },
    numbers: {
      imgAlt: "Kero+ frozen bread production facility",
      eyebrow: "Achievements in numbers",
      title: "A decade that speaks for itself",
      stats: [
        { num: "10", label: "years of history" },
        { num: "30 t", label: "tons produced per day" },
        { num: "300k+", label: "breads per day" },
        { num: "46", label: "products in the catalog" },
      ],
    },
    timeline: {
      eyebrow: "Our evolution",
      title: "Ten years, milestone by milestone",
      items: [
        {
          year: "2016",
          title: "Where it all began",
          desc: "In Goiânia, Anderson Santos and Reinaldo Moreira found Kero Mais Pães Congelados, realizing the dream of creating a quality frozen bread factory.",
        },
        {
          year: "2018",
          title: "The first partnerships",
          desc: "Bakeries and chains in the region begin to rely on Kero+ frozen breads every day.",
        },
        {
          year: "2020",
          title: "A growing portfolio",
          desc: "The lines of breads, pão de queijo, sweet bakes, and savory snacks grow — more options for our customers' displays.",
        },
        {
          year: "2022",
          title: "Arrival in Mato Grosso",
          desc: "The branch in Rondonópolis (MT) brings Kero+ closer to new partners beyond Goiás.",
        },
        {
          year: "2024",
          title: "Industrial scale",
          desc: "Investment in frozen-food capacity and logistics accelerates production toward 30 tons a day.",
        },
        {
          year: "2025",
          title: "Arrival in Bahia and Maranhão",
          desc: "Kero+ expands into Bahia and reaches Balsas, in Maranhão — bringing the flavor of Goiás to new markets.",
        },
        {
          year: "2026",
          title: "A decade of leadership",
          desc: "10 years, 30 tons, and over 300,000 breads a day — with the same obsession with quality as on day one.",
        },
      ],
    },
    values: [
      {
        mark: "Q",
        title: "Quality without compromise",
        desc: "Every unit gets the same rigor: selected grains, respected fermentation, and freezing at the perfect point.",
      },
      {
        mark: "T",
        title: "Partner trust",
        desc: "Long-term relationships built on consistency, regularity, and on-time delivery.",
      },
      {
        mark: "E",
        title: "Constant evolution",
        desc: "Ongoing investment in technique, capacity, and new lines to keep pace with our customers' tables.",
      },
    ],
    cta: {
      title: "Be part of the next decade",
      body: "Become a trade partner or explore our lines of frozen bread.",
      products: "Explore Our Products",
      commercial: "Talk to Sales",
    },
  },

  commercial: {
    hero: {
      eyebrow: "Sales Support",
      title: "Get in touch",
      subtitle:
        "Business partnerships, orders, and support — by WhatsApp, phone, or through the form.",
    },
    title: "Ready for a successful partnership?",
    body: "Let's work together. Reach our sales team through the channels below or fill out the form — we'll get back to you as soon as possible.",
    channels: {
      whatsapp: "Sales WhatsApp",
      phone: "Phone",
      instagram: "Instagram",
      hours: "Hours",
    },
    hours: "Mon–Fri · 8am–12pm / 1pm–5pm (Brasília time)",
    form: {
      name: "Full name",
      namePh: "Your name",
      company: "Company / Bakery",
      companyPh: "Your business name",
      email: "Email",
      emailPh: "you@email.com",
      phone: "Phone / WhatsApp",
      phonePh: "+00 00 00000-0000",
      typeLegend: "Type of inquiry",
      types: ["Business partnership", "Existing customer", "Customer service / Feedback"],
      message: "Message",
      messagePh: "Tell us what you need…",
      submit: "Send via WhatsApp",
      noteIdle:
        "When you submit, we open our sales team's WhatsApp with your details already filled in. We use your information only to get back to you.",
      noteSent:
        "We've opened WhatsApp with your message filled in — just tap send.",
      wa: {
        title: "*Website inquiry — {type}*",
        fallbackType: "Sales",
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
      },
    },
  },

  careers: {
    hero: {
      eyebrow: "Careers",
      title: "Join our team",
      subtitle:
        "For 10 years, Kero+ has grown with great people — on the factory floor, in administration, and in sales.",
    },
    imgAlt: "The Kero+ team — people from the factory, administration, and sales",
    eyebrow: "Come with us",
    title: "Great people who make quality happen",
    body: "From production on the factory floor to administration and the sales team, our people put their signature on Kero+ quality every day. Want to grow with us, in Goiânia (GO) or Rondonópolis (MT)? Send us your résumé.",
    cta: "Send your résumé via WhatsApp",
    message:
      "Hello! I'm interested in joining the Kero+ team. I'd like to send my résumé.",
  },

  privacy: {
    hero: {
      eyebrow: "Company",
      title: "Privacy Notice",
      subtitle:
        "How Kero+ collects, uses, and protects your personal data. Last updated: October 2026.",
    },
    blocks: privacyBlocks,
  },

  quality: {
    hero: {
      eyebrow: "Company",
      title: "Quality Policy",
      subtitle:
        "Kero+'s commitment to quality and food safety, from grain to freezing.",
    },
    blocks: qualityBlocks,
  },

  notFound: {
    title: "Page not found",
    body: "The address you tried to open does not exist or has been moved.",
    cta: "Back to home",
  },
};
