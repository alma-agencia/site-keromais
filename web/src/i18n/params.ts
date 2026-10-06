import { prefixedLocales } from "./config";

export type PrefixedLocale = (typeof prefixedLocales)[number];

export function isPrefixedLocale(value: string): value is PrefixedLocale {
  return (prefixedLocales as readonly string[]).includes(value);
}
