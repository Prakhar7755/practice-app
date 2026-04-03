import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prakhar Portfolio | Next.js",
  description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} scrollbar-hide antialiased`}
        style={{ background: 'linear-gradient(180deg, #09091b 0%, #0d0e26 40%, #0f0a2e 100%)' }}
      >
        <ResponsiveNav />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
