import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = "https://joorkonberim.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "جور کن بریم | تورهای گردشگری و تجربه سفر در ایران",
    template: "%s | جور کن بریم",
  },
  description:
    "با جور کن بریم مقصدهای گردشگری ایران را کشف کنید، برنامه تورها را ببینید و برای سفر بعدی خود آگاهانه برنامه‌ریزی کنید.",
  applicationName: "جور کن بریم",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "جور کن بریم",
    url: siteUrl,
    title: "جور کن بریم | تورهای گردشگری و تجربه سفر در ایران",
    description: "راهنمای انتخاب مقصد و آشنایی با تورهای گردشگری ایران.",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
