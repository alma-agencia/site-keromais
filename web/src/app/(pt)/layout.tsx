import type { Metadata } from "next";
import RootShell from "@/components/RootShell";
import { rootMetadata } from "@/i18n/seo";

export const metadata: Metadata = rootMetadata("pt");

export default function PortugueseRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="pt">{children}</RootShell>;
}
