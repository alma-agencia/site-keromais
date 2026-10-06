import { prefixedLocales, type L10n, type Locale } from "./config";

export const pageKeys = [
  "home",
  "products",
  "about",
  "commercial",
  "careers",
  "privacy",
  "quality",
] as const;
export type PageKey = (typeof pageKeys)[number];

/** Localized URL slugs. Portuguese keeps the original (pre-i18n) URLs. */
export const slugs: Record<PageKey, L10n<string>> = {
  home: { pt: "", en: "", es: "" },
  products: { pt: "produtos", en: "products", es: "productos" },
  about: { pt: "quem-somos", en: "about-us", es: "quienes-somos" },
  commercial: { pt: "comercial", en: "sales", es: "ventas" },
  careers: { pt: "trabalhe-conosco", en: "careers", es: "trabaja-con-nosotros" },
  privacy: { pt: "privacidade", en: "privacy", es: "privacidad" },
  quality: { pt: "qualidade", en: "quality", es: "calidad" },
};

/** Absolute path (with trailing slash) of a page in a given language. */
export function pathFor(page: PageKey, locale: Locale, hash?: string): string {
  const prefix = locale === "pt" ? "" : `/${locale}`;
  const slug = slugs[page][locale];
  const path = slug ? `${prefix}/${slug}/` : `${prefix}/`;
  return hash ? `${path}#${hash}` : path;
}

/** Reverse lookup: which page/locale does a pathname belong to? */
export function resolvePathname(
  pathname: string,
): { page: PageKey; locale: Locale } | null {
  const parts = pathname.split("/").filter(Boolean);
  let locale: Locale = "pt";
  if (parts.length && (prefixedLocales as readonly string[]).includes(parts[0])) {
    locale = parts.shift() as Locale;
  }
  if (parts.length > 1) return null;
  const slug = parts[0] ?? "";
  const page = pageKeys.find((key) => slugs[key][locale] === slug);
  return page ? { page, locale } : null;
}

/** Slug → page key for one locale (used by generateStaticParams / the [slug] route). */
export function pageForSlug(locale: Locale, slug: string): PageKey | null {
  return pageKeys.find((key) => key !== "home" && slugs[key][locale] === slug) ?? null;
}

/**
 * Compact map used by the inline language-detection script on Portuguese pages:
 * PT slug → localized paths.
 */
export function redirectTable(): Record<string, { en: string; es: string }> {
  const table: Record<string, { en: string; es: string }> = {};
  for (const key of pageKeys) {
    table[slugs[key].pt] = {
      en: pathFor(key, "en"),
      es: pathFor(key, "es"),
    };
  }
  return table;
}
