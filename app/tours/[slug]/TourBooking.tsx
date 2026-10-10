
"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Users } from "lucide-react";

import { money, type Tour } from "../../../lib/tours";

type TourBookingProps = {
  tour: Tour;
};

export default function TourBooking({ tour }: TourBookingProps) {
  const [count, setCount] = useState(1);

  const hasSeats = tour.seats > 0;
  const isAtCapacity = count >= tour.seats;

  return (
    <div className="card p-5 sm:p-6">
      {/* Price */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <small className="text-slate-400">قیمت هر نفر</small>

          <b className="mt-1 block text-2xl font-black">
            {money(tour.price)}
          </b>

          {tour.oldPrice && (
            <del className="mt-1 block text-sm text-slate-400">
              {money(tour.oldPrice)}
            </del>
          )}
        </div>

        {tour.badge && (
          <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-brand-600">
            {tour.badge}
          </span>
        )}
      </div>

      {/* Passenger Counter */}
      <div className="my-5 flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3">
        <span className="text-sm text-slate-600">تعداد مسافر</span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="کم کردن تعداد مسافر"
            disabled={count <= 1}
            onClick={() =>
              setCount((previous) => Math.max(1, previous - 1))
            }
            className="h-8 w-8 rounded-lg border bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>

          <b className="min-w-4 text-center">{count}</b>

          <button
            type="button"
            aria-label="افزایش تعداد مسافر"
            disabled={!hasSeats || isAtCapacity}
            onClick={() =>
              setCount((previous) =>
                Math.min(tour.seats, previous + 1)
              )
            }
            className="h-8 w-8 rounded-lg border bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      {!hasSeats && (
        <p className="mb-4 text-sm text-red-600">
          ظرفیت این تور تکمیل شده است.
        </p>
      )}

      {/* Total Price */}
      <div className="mb-4 flex justify-between text-sm text-slate-500">
        <span>جمع کل</span>

        <b className="text-base text-slate-900">
          {money(tour.price * count)}
        </b>
      </div>

      {/* Continue Booking */}
      {hasSeats ? (
        <Link
          href={`/dashboard?tour=${encodeURIComponent(tour.slug)}&count=${count}`}
          className="block rounded-xl bg-brand-500 py-4 text-center font-black text-white transition-colors hover:bg-brand-600"
        >
          ادامه و ثبت رزرو
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-xl bg-slate-200 py-4 font-black text-slate-500"
        >
          ظرفیت تکمیل شده
        </button>
      )}

      <p className="mt-4 text-center text-xs leading-6 text-slate-400">
        پرداخت واقعی در این نسخه فعال نیست.
      </p>

      {/* Trust Information */}
      <div className="mt-5 border-t pt-4 text-sm text-slate-500">
        <div className="mb-2 flex items-center gap-2">
          <ShieldCheck size={17} className="text-emerald-500" />
          اطلاعات شفاف پیش از خرید
        </div>

        <div className="flex items-center gap-2">
          <Users size={17} className="text-emerald-500" />
          ظرفیت قابل مشاهده
        </div>
      </div>
    </div>
  );
}
