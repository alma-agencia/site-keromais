import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "privacy");

export default function Page() {
  return <PageView page="privacy" lang="pt" />;
}
