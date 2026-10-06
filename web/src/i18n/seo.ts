import type { Metadata } from "next";
import { ogLocale, SITE_URL, locales, type Locale } from "./config";
import { getDict } from "./dictionaries";
import { pathFor, type PageKey } from "./routes";

const OG_IMAGE = { url: "/assets/banner1-paes.jpg", width: 1672, height: 941 };

/** hreflang map (relative paths are resolved against metadataBase). */
function languageAlternates(page: PageKey) {
  return {
    "pt-BR": pathFor(page, "pt"),
    en: pathFor(page, "en"),
    es: pathFor(page, "es"),
    "x-default": pathFor(page, "pt"),
  };
}

/** Site-wide defaults for a root layout (title template, Open Graph, base URL). */
export function rootMetadata(lang: Locale): Metadata {
  const t = getDict(lang).meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.titleDefault, template: t.titleTemplate },
    description: t.description,
    openGraph: {
      title: t.siteName,
      description: t.ogDescription,
      siteName: t.siteName,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      type: "website",
      images: [OG_IMAGE],
    },
  };
}

/** Per-page metadata: title/description in the page language + canonical and hreflang links. */
export function pageMetadata(lang: Locale, page: PageKey): Metadata {
  const t = getDict(lang).meta;
  const alternates = {
    canonical: pathFor(page, lang),
    languages: languageAlternates(page),
  };
  if (page === "home") {
    return { title: { absolute: t.titleDefault }, description: t.description, alternates };
  }
  const p = t.pages[page];
  return { title: p.title, description: p.description, alternates };
}
