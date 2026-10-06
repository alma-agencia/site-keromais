import type { Locale } from "../config";
import { en } from "./en";
import { es } from "./es";
import { pt, type Dict } from "./pt";

export type { Dict };

const dictionaries: Record<Locale, Dict> = { pt, en, es };

export function getDict(lang: Locale): Dict {
  return dictionaries[lang];
}
