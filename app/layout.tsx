import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
// @ts-ignore: side-effect import of global CSS without type declarations
import "./globals.css";
import BackToTop from "@/components/custom/ui/BackToTop";
import Navbar from "@/components/custom/layout/Navbar";
import Footer from "@/components/custom/layout/Footer";


const geistMono = Geist_Mono({
  subsets: ["latin"],
});
 

export const metadata: Metadata = {
  title: "DigIT-Hack",
  description: "Cutting-edge SaaS & Solutions for Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.className} antialiased bg-[#FAF8FF]`}
      >
        <Navbar />
        {children}
         <BackToTop />
         <Footer />
      </body>
    </html>
  );
}
