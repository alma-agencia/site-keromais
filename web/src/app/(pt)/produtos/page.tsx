import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "products");

export default function Page() {
  return <PageView page="products" lang="pt" />;
}
