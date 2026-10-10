
"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Compass,
  Eye,
  EyeOff,
  Phone,
  LockKeyhole,
  ArrowLeft,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(
      "این فرم نمایشی است؛ پس از اتصال API، ورود واقعی فعال می‌شود."
    );
  };

  return (
    <main className="container-x flex min-h-[650px] items-center justify-center py-12">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-soft md:grid-cols-2">
        {/* Intro Panel */}
        <div className="hidden flex-col justify-between bg-slate-950 p-10 text-white md:flex">
          <div>
            <Compass size={34} className="mb-8 text-orange-400" />

            <h1 className="text-3xl font-black leading-relaxed">
              سفر بعدی‌ات
              <br />
              از همین‌جا شروع می‌شه.
            </h1>

            <p className="mt-4 leading-8 text-slate-300">
              وارد حساب کاربری‌ات شو و برنامه سفرهات رو یک‌جا
              مدیریت کن.
            </p>
          </div>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
            زندگی کوتاه‌تر از اونه که همه آخر هفته‌هاش شبیه
            هم باشن!
          </div>
        </div>

        {/* Login Form */}
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl font-black">
            خوش برگشتی 👋
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            برای ادامه، وارد حساب کاربری‌ات شو.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Phone Number */}
            <label className="block text-sm font-bold">
              شماره موبایل

              <div className="mt-2 flex items-center gap-2 rounded-xl border px-4 transition-colors focus-within:border-brand-500">
                <Phone
                  size={18}
                  className="shrink-0 text-slate-400"
                />

                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  dir="rtl"
                  placeholder="0912 345 6789"
                  className="w-full py-4 outline-none"
                />
              </div>
            </label>

            {/* Password */}
            <label className="block text-sm font-bold">
              رمز عبور

              <div className="mt-2 flex items-center gap-2 rounded-xl border px-4 transition-colors focus-within:border-brand-500">
                <LockKeyhole
                  size={18}
                  className="shrink-0 text-slate-400"
                />

                <input
                  required
                  minLength={6}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="حداقل ۶ کاراکتر"
                  className="w-full py-4 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword
                      ? "مخفی کردن رمز عبور"
                      : "نمایش رمز عبور"
                  }
                  className="shrink-0 text-slate-400 transition-colors hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-4 font-black text-white transition-colors hover:bg-brand-600"
            >
              ورود به حساب
              <ArrowLeft size={18} />
            </button>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                className="rounded-xl bg-orange-50 p-3 text-sm leading-6 text-orange-800"
              >
                {message}
              </p>
            )}
          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-slate-500">
            حساب نداری؟{" "}
            <Link
              href="/register"
              className="font-black text-brand-600 hover:text-brand-700"
            >
              ثبت‌نام کن
            </Link>
          </p>

          <p className="mt-5 text-center text-xs leading-6 text-slate-400">
            با ورود، قوانین و شرایط استفاده را می‌پذیری.
          </p>
        </div>
      </div>
    </main>
  );
}
