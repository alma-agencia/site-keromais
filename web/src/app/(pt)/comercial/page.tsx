import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "commercial");

export default function Page() {
  return <PageView page="commercial" lang="pt" />;
}
