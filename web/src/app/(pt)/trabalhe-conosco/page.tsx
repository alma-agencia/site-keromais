import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "careers");

export default function Page() {
  return <PageView page="careers" lang="pt" />;
}
