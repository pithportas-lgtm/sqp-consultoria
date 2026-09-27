import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import DynamicHeader from "../components/DynamicHeader";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SQP Consultoria",
  description: "Consultoria, auditoria, treinamento e inspeção para a implantação e manutenção de Sistemas de Gestão.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ScrollProgress />
        <DynamicHeader />
        <main style={{ minHeight: 'calc(100vh - 80px - 300px)' }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
