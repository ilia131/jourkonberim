import Link from "next/link";

import {
  MapPin,
  Star,
  ArrowUpLeft,
} from "lucide-react";

import { Tour, money } from "../lib/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const tourUrl = `/tours/${tour.slug}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-soft">
      {/* Tour Image */}
      <Link
        href={tourUrl}
        className="relative block h-52 overflow-hidden"
      >
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Tour Badge */}
        {tour.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-brand-700">
            {tour.badge}
          </span>
        )}

        {/* Tour Duration */}
        <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/65 px-3 py-1 text-xs font-bold text-white">
          {tour.duration}
        </span>
      </Link>

      {/* Tour Information */}
      <div className="p-4">
        {/* City and Rating */}
        <div className="mb-2 flex items-center justify-between gap-2 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {tour.city}
          </span>

          <span className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />

            <b>{tour.rating}</b>

            <span className="text-slate-400">
              ({tour.reviews})
            </span>
          </span>
        </div>

        {/* Tour Title */}
        <Link
          href={tourUrl}
          className="mb-4 block min-h-12 text-base font-black leading-6 text-slate-900 transition hover:text-brand-600"
        >
          {tour.title}
        </Link>

        {/* Price and Details Link */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <small className="block text-xs text-slate-400">
              شروع قیمت از
            </small>

            <b className="mt-1 block text-sm">
              {money(tour.price)}
            </b>
          </div>

          <Link
            aria-label={`جزئیات تور ${tour.title}`}
            href={tourUrl}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition hover:bg-brand-500 hover:text-white"
          >
            <ArrowUpLeft size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}
