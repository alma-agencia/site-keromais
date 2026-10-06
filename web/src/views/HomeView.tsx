import Hero from "@/components/Hero";
import LinhasVitrine from "@/components/LinhasVitrine";
import type { LinhaCardData } from "@/components/LinhaCard";
import QuemSomosResumo from "@/components/QuemSomosResumo";
import MapaAtuacao from "@/components/MapaAtuacao";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pathFor } from "@/i18n/routes";
import { getCategorias } from "@/lib/produtos-data";
import { getCities, linhas } from "@/lib/site-data";

export default function HomeView({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const categorias = getCategorias(lang);

  const cards: LinhaCardData[] = linhas.map((l) => {
    const categoria = categorias.find((c) => c.id === l.id)!;
    const copy = t.linhas.items[l.id];
    return {
      tag: categoria.tag,
      title: categoria.title,
      desc: copy.desc,
      alt: copy.alt,
      img: l.img,
      href: pathFor("products", lang, l.id),
    };
  });

  return (
    <>
      <Hero lang={lang} t={t.hero} />
      <LinhasVitrine lang={lang} t={t.linhas} linhas={cards} />
      <QuemSomosResumo lang={lang} t={t.aboutSummary} />
      <MapaAtuacao lang={lang} t={t.map} cities={getCities(t.map)} />
    </>
  );
}
