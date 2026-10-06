import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import type { PageKey } from "@/i18n/routes";
import AboutView from "./AboutView";
import CareersView from "./CareersView";
import CommercialView from "./CommercialView";
import HomeView from "./HomeView";
import LegalView from "./LegalView";
import ProductsView from "./ProductsView";

/** Renders any page of the site in the given language. */
export function PageView({ page, lang }: { page: PageKey; lang: Locale }) {
  switch (page) {
    case "home":
      return <HomeView lang={lang} />;
    case "products":
      return <ProductsView lang={lang} />;
    case "about":
      return <AboutView lang={lang} />;
    case "commercial":
      return <CommercialView lang={lang} />;
    case "careers":
      return <CareersView lang={lang} />;
    case "privacy": {
      const t = getDict(lang).privacy;
      return <LegalView lang={lang} hero={t.hero} blocks={t.blocks} />;
    }
    case "quality": {
      const t = getDict(lang).quality;
      return <LegalView lang={lang} hero={t.hero} blocks={t.blocks} />;
    }
  }
}
