import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "NICSI ERP Portal | Digital Governance Platform",
  description:
    "Secure, Scalable ERP Platform for Government Digital Transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}