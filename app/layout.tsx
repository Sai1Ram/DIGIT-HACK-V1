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
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-18052182389');
  `}
        </Script>
        {/* <!-- Meta Pixel Code --> */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1514114043481607');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1514114043481607&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
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
