export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

/** Locales served under a path prefix (/en, /es). Portuguese lives at the root. */
export const prefixedLocales = ["en", "es"] as const satisfies readonly Locale[];

export type L10n<T> = Record<Locale, T>;

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export const ogLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export const SITE_URL = "https://keromaispaescongelados.com.br";

/** localStorage key that remembers a manual language choice. */
export const LANG_STORAGE_KEY = "kero-lang";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Replaces `{token}` placeholders: fmt("Hi {name}", { name: "Ana" }). */
export function fmt(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`,
  );
}
