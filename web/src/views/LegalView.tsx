import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import type { Locale } from "@/i18n/config";
import type { Block } from "@/i18n/dictionaries/types";
import { Rich } from "@/i18n/rich";

/** Long-form page (privacy notice, quality policy) built from the dictionary's content blocks. */
export default function LegalView({
  lang,
  hero,
  blocks,
}: {
  lang: Locale;
  hero: { eyebrow: string; title: string; subtitle: string };
  blocks: Block[];
}) {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="bg-cream px-6 py-16 sm:px-10 md:py-20">
        <Prose>
          {blocks.map((block, i) => {
            if ("h2" in block) return <h2 key={i}>{block.h2}</h2>;
            if ("ul" in block) {
              return (
                <ul key={i}>
                  {block.ul.map((item, j) => (
                    <li key={j}>
                      <Rich text={item} lang={lang} />
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i}>
                <Rich text={block.p} lang={lang} />
              </p>
            );
          })}
        </Prose>
      </section>
    </>
  );
}
