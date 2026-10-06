import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prefixedLocales } from "@/i18n/config";
import { isPrefixedLocale } from "@/i18n/params";
import { pageKeys, pageForSlug, slugs } from "@/i18n/routes";
import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

type Params = Promise<{ lang: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.flatMap((lang) =>
    pageKeys
      .filter((key) => key !== "home")
      .map((key) => ({ lang, slug: slugs[key][lang] })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = isPrefixedLocale(lang) ? pageForSlug(lang, slug) : null;
  return page ? pageMetadata(lang as "en" | "es", page) : {};
}

export default async function LocalizedPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const page = isPrefixedLocale(lang) ? pageForSlug(lang, slug) : null;
  if (!page || !isPrefixedLocale(lang)) notFound();
  return <PageView page={page} lang={lang} />;
}
