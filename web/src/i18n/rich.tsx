import Link from "next/link";
import { contato, whatsappUrl } from "@/lib/site-data";
import type { Locale } from "./config";
import { pageKeys, pathFor, type PageKey } from "./routes";

/**
 * Tiny inline markup used by the dictionaries:
 *   **bold**                 -> <strong>
 *   [label](wa)              -> WhatsApp (sales) link
 *   [label](rh)              -> WhatsApp (HR) link
 *   [label](page:commercial) -> internal link to a page, in the current language
 *   [label](https://...)     -> external link
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function resolveHref(href: string, lang: Locale): { href: string; external: boolean } {
  if (href === "wa") return { href: whatsappUrl(contato.whatsappComercial.phone), external: true };
  if (href === "rh") return { href: whatsappUrl(contato.whatsappRH.phone), external: true };
  if (href.startsWith("page:")) {
    const key = href.slice(5) as PageKey;
    if ((pageKeys as readonly string[]).includes(key)) {
      return { href: pathFor(key, lang), external: false };
    }
  }
  return { href, external: /^https?:/.test(href) };
}

export function Rich({ text, lang }: { text: string; lang: Locale }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const { href, external } = resolveHref(link[2], lang);
          return external ? (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {link[1]}
            </a>
          ) : (
            <Link key={i} href={href}>
              {link[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}
