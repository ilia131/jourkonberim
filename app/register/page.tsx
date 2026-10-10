
"use client";

import Link from "next/link";
import { useState } from "react";

import {
  UserRound,
  Phone,
  LockKeyhole,
  Compass,
} from "lucide-react";

export default function Register() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(
      "ثبت‌نام نمایشی است؛ برای ساخت حساب واقعی باید API وصل شود."
    );
  };

  return (
    <main className="container-x flex min-h-[650px] items-center justify-center py-12">
      <div className="w-full max-w-xl rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-brand-600">
            <Compass size={28} />
          </span>

          <h1 className="text-2xl font-black">
            هم‌سفرمون می‌شی؟
          </h1>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            حساب بساز تا رزروها و سفرهات رو مدیریت کنی.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <label className="block text-sm font-bold">
            نام و نام خانوادگی

            <div className="mt-2 flex items-center gap-2 rounded-xl border px-4 transition-colors focus-within:border-brand-500">
              <UserRound
                size={18}
                className="shrink-0 text-slate-400"
              />

              <input
                required
                type="text"
                autoComplete="name"
                placeholder="مثلاً علی رضایی"
                className="w-full py-4 outline-none"
              />
            </div>
          </label>

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
                type="password"
                autoComplete="new-password"
                placeholder="حداقل ۶ کاراکتر"
                className="w-full py-4 outline-none"
              />
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-500 py-4 font-black text-white transition-colors hover:bg-brand-600"
          >
            ساخت حساب کاربری
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

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-500">
          قبلاً ثبت‌نام کردی؟{" "}
          <Link
            href="/login"
            className="font-black text-brand-600 hover:text-brand-700"
          >
            وارد شو
          </Link>
        </p>
      </div>
    </main>
  );
}
