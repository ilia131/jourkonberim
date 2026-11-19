import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تورهای گردشگری ایران",
  description:
    "تورهای گردشگری و مقصدهای سفر ایران را با جور کن بریم بررسی کنید. جزئیات، مدت سفر و برنامه‌های پیشنهادی را مقایسه کنید.",
  alternates: { canonical: "/tours" },
  // List data is currently local demonstration content, not verified offers.
  robots: { index: false, follow: true },
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
