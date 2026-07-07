import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keromais.com.br"),
  title: {
    default: "Kero+ Pães Congelados — Tradição e excelência na sua mesa",
    template: "%s · Kero+ Pães Congelados",
  },
  description:
    "Fábrica de pães congelados em Goiânia há 10 anos. Pão francês, integrais & grãos e pão de mandioca para varejo, padarias, food service e hotelaria.",
  openGraph: {
    title: "Kero+ Pães Congelados",
    description:
      "Fabricando qualidade em cada lote. Pães congelados artesanais para parceiros comerciais em todo o Centro-Oeste.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/assets/c-banner4.jpg", width: 1672, height: 941 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-cream font-body text-cocoa antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
