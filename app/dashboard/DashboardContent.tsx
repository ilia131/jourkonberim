"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  CalendarDays,
  MapPin,
  TicketCheck,
  Clock3,
  ArrowLeft,
  CircleCheck,
  UserRound,
} from "lucide-react";

import { tours, money } from "../../lib/tours";

export default function DashboardContent() {
  const searchParams = useSearchParams();

  const tourSlug = searchParams.get("tour");
  const tour = tours.find((item) => item.slug === tourSlug);

  const rawCount = Number(searchParams.get("count") || 1);
  const count =
    Number.isFinite(rawCount) && rawCount >= 1
      ? Math.floor(rawCount)
      : 1;

  const [done, setDone] = useState(false);

  return (
    <main className="container-x py-10">
      {/* Dashboard Header */}
      <div className="mb-8 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
        <div className="flex items-center gap-2 text-sm text-orange-300">
          <UserRound size={17} />
          <span>پنل مسافر</span>
        </div>

        <h1 className="mt-3 text-3xl font-black">
          سفرهات، همه یک‌جا
        </h1>

        <p className="mt-3 text-sm text-slate-300">
          رزروها و برنامه‌های سفر آینده‌ات را مدیریت کن.
        </p>
      </div>

      {/* Dashboard Layout */}
      <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside className="card h-fit p-4">
          <div className="mb-4 flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-600">
              <UserRound />
            </span>

            <div>
              <b>مسافر مهمان</b>
              <small className="mt-1 block text-slate-500">
                خوش اومدی!
              </small>
            </div>
          </div>

          {[
            "پروفایل من",
            "رزروهای من",
            "علاقه‌مندی‌ها",
            "پشتیبانی",
          ].map((item) => (
            <div
              key={item}
              className="mb-1 cursor-pointer rounded-xl px-4 py-3 text-sm font-bold text-slate-500 transition-colors hover:bg-slate-50"
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Reservations */}
        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-black">رزروهای من</h2>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-500">
              نسخه آزمایشی
            </span>
          </div>

          {tour ? (
            <div className="card overflow-hidden">
              <div className="grid sm:grid-cols-[220px_1fr]">
                {/* Tour Image */}
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-48 w-full object-cover sm:h-full"
                />

                {/* Tour Details */}
                <div className="p-5 sm:p-7">
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold text-amber-600">
                    <Clock3 size={15} />
                    <span>
                      {done
                        ? "رزرو آزمایشی ثبت شده"
                        : "در انتظار ثبت نهایی"}
                    </span>
                  </div>

                  <h3 className="text-lg font-black">
                    {tour.title}
                  </h3>

                  <div className="mt-3 grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {tour.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {tour.city}
                    </span>

                    <span className="flex items-center gap-2">
                      <TicketCheck size={16} />
                      {count} مسافر
                    </span>
                  </div>

                  {/* Price and Confirmation */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
                    <div>
                      <small className="block text-xs text-slate-400">
                        مبلغ قابل پرداخت
                      </small>

                      <b className="mt-1 block text-lg">
                        {money(tour.price * count)}
                      </b>
                    </div>

                    <button
                      type="button"
                      onClick={() => setDone(true)}
                      disabled={done}
                      className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {done
                        ? "رزرو آزمایشی ثبت شد"
                        : "تأیید رزرو آزمایشی"}
                    </button>
                  </div>

                  {/* Demo Confirmation Message */}
                  {done && (
                    <div
                      role="status"
                      className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-800"
                    >
                      <CircleCheck
                        size={18}
                        className="mt-1 shrink-0"
                      />

                      <p>
                        رزرو نمایشی ثبت شد؛ پرداخت و ثبت قطعی
                        هنوز فعال نیست.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Empty Reservations */
            <div className="card px-6 py-14 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-brand-600">
                <TicketCheck size={30} />
              </span>

              <h3 className="mt-5 text-lg font-black">
                هنوز رزروی نداری
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                وقتشه یه تجربه تازه برای خودت جور کنی.
              </p>

              <Link
                href="/tours"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-brand-600"
              >
                گشتن بین تورها
                <ArrowLeft size={16} />
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}