import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
// @ts-ignore: side-effect import of global CSS without type declarations
import "./globals.css";
import BackToTop from "@/components/custom/ui/BackToTop";
import Navbar from "@/components/custom/layout/Navbar";
import Footer from "@/components/custom/layout/Footer";
import Script from "next/script";
import FloatingWhatsapp from "@/components/custom/ui/FloatingWhatsapp";
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker";
import { Suspense } from "react";

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
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18052182389"
        ></Script>
        <Script>
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-18052182389');
  `}
        </Script>
      </head>
      <body className={` ${geistMono.className} antialiased bg-[#FAF8FF]`}>
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <Navbar />
        {children}
        <FloatingWhatsapp />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
