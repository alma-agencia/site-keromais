import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPrefixedLocale } from "@/i18n/params";
import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  return isPrefixedLocale(lang) ? pageMetadata(lang, "home") : {};
}

export default async function LocalizedHome({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <PageView page="home" lang={lang} />;
}
