import Link from "next/link";

import { Compass, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        {/* Brand Information */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-xl font-black">
            <Compass className="text-orange-400" />
            <span>جور کن بریم</span>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-400">
            برای آخر هفته‌ات یه برنامه تازه بچین؛ از طبیعت‌گردی تا سفرهای
            چندروزه.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <b className="mb-4 block">دسترسی سریع</b>

          <div className="grid gap-3 text-sm text-slate-400">
            <Link
              href="/tours"
              className="transition hover:text-orange-400"
            >
              تورهای گردشگری
            </Link>

            <Link
              href="/dashboard"
              className="transition hover:text-orange-400"
            >
              رزروهای من
            </Link>

            <Link
              href="/login"
              className="transition hover:text-orange-400"
            >
              ورود و ثبت‌نام
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <b className="mb-4 block">ارتباط با ما</b>

          <div className="grid gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </span>

            <span className="flex items-center gap-2">
              {/* <Instagram size={16} />
              <span dir="ltr">joor-kon-berim</span> */}
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © ۱۴۰۵ جور کن بریم — تمام حقوق محفوظ است.
      </div>
    </footer>
  );
}
