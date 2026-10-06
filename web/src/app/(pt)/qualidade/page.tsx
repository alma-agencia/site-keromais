import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "quality");

export default function Page() {
  return <PageView page="quality" lang="pt" />;
}
