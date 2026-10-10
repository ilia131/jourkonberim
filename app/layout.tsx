import type { Metadata } from "next";

import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "جور کن بریم | تورهایی برای خاطره ساختن",
  description:
    "تورهای جذاب ایران را پیدا کن و برای سفر بعدی آماده شو.",
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
