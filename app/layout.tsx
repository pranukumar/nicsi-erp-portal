import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImportantLinksBar from "@/components/layout/ImportantLinksBar";
import NicsiSaathiChatbot from "@/components/chatbot/NicsiSaathiChatbot";
import { getNicsiChatbotFaqs } from "@/services/nicsiChatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NICSI ERP Portal | Digital Governance Platform",
  description:
    "Secure, Scalable ERP Platform for Government Digital Transformation",
  metadataBase: new URL("https://nicsi.nic.in"),
  alternates: {
    languages: {
      en: "/",
      hi: "/",
    },
  },
  openGraph: {
    title: "NICSI ERP Portal | Digital Governance Platform",
    description: "Secure, Scalable ERP Platform for Government Digital Transformation",
    type: "website",
    url: "/",
    siteName: "NICSI ERP Portal",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqs = await getNicsiChatbotFaqs();

  return (
    <html lang="en-IN">
      <body className="nicsi-theme bg-gray-50 text-gray-800 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1} className="min-h-[60vh]">
          {children}
        </div>
        <ImportantLinksBar />
        <Footer />
        <NicsiSaathiChatbot faqs={faqs} />
      </body>
    </html>
  );
}
