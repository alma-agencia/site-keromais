import "@/app/globals.css";
import { defaultLocale, htmlLang, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { montserrat, playfair } from "@/lib/fonts";
import LocaleRedirectScript from "./LocaleRedirectScript";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

/** The <html> document shared by every root layout (one per language group). */
export default function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  const t = getDict(lang);
  return (
    <html lang={htmlLang[lang]} className={`${playfair.variable} ${montserrat.variable}`}>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layouts may render <head>; next/head is Pages-only */}
      <head>{lang === defaultLocale && <LocaleRedirectScript />}</head>
      <body className="min-h-screen bg-cream font-body text-cocoa antialiased">
        <SiteHeader lang={lang} t={t.header} marquee={t.marquee} />
        <main>{children}</main>
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
