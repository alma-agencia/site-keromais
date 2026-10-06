import { pageMetadata } from "@/i18n/seo";
import { PageView } from "@/views";

export const metadata = pageMetadata("pt", "home");

export default function Page() {
  return <PageView page="home" lang="pt" />;
}
