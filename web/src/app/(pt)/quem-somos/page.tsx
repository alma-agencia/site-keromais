import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "about");

export default function Page() {
  return <PageView page="about" lang="pt" />;
}
