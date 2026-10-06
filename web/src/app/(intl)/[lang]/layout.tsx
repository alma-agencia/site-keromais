import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RootShell from "@/components/RootShell";
import { prefixedLocales } from "@/i18n/config";
import { isPrefixedLocale } from "@/i18n/params";
import { rootMetadata } from "@/i18n/seo";

type Params = Promise<{ lang: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  return isPrefixedLocale(lang) ? rootMetadata(lang) : {};
}

export default async function InternationalRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <RootShell lang={lang}>{children}</RootShell>;
}
