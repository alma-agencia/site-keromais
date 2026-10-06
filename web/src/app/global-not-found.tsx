import type { Metadata } from "next";
import "./globals.css";
import { locales } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pathFor } from "@/i18n/routes";
import { montserrat, playfair } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "404 · Kero+ Pães Congelados",
  robots: { index: false },
};

/**
 * 404 for any URL that matches no route. There is no way to know the visitor's language here
 * (static export, several root layouts), so the message is shown in all three languages.
 */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-cream font-body text-cocoa antialiased">
        <main className="mx-auto flex min-h-screen max-w-[720px] flex-col items-center justify-center gap-10 px-6 py-16 text-center">
          <p className="font-display text-[72px] font-extrabold leading-none text-gold">404</p>
          {locales.map((lang) => {
            const t = getDict(lang).notFound;
            return (
              <div key={lang} lang={lang === "pt" ? "pt-BR" : lang}>
                <h1 className="font-display text-[26px] font-extrabold leading-tight text-crust">
                  {t.title}
                </h1>
                <p className="mt-2 text-[15px] leading-relaxed">{t.body}</p>
                <a
                  href={pathFor("home", lang)}
                  className="mt-4 inline-flex items-center gap-2 rounded-btn bg-gold px-6 py-3 text-[12.5px] font-bold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-crust hover:text-cream"
                >
                  {t.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </main>
      </body>
    </html>
  );
}
