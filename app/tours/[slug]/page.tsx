
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CalendarDays,
  MapPin,
  Clock3,
  Star,
  CheckCircle2,
  Users,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";

import TourBooking from "./TourBooking";
import { tours } from "../../../lib/tours";

type DetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function Detail({
  params,
}: DetailPageProps) {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="container-x py-8">
      {/* Breadcrumbs */}
      <nav
        aria-label="مسیر صفحه"
        className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400"
      >
        <Link href="/" className="hover:text-brand-600">
          خانه
        </Link>

        <ChevronLeft size={15} />

        <Link href="/tours" className="hover:text-brand-600">
          تورهای گردشگری
        </Link>

        <ChevronLeft size={15} />

        <span className="text-slate-700">{tour.title}</span>
      </nav>

      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
        {/* Tour Information */}
        <section>
          {/* Cover Image */}
          <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[430px]">
            <img
              src={tour.image}
              alt={tour.title}
              className="h-full w-full object-cover"
            />

            <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold">
              {tour.category}
            </span>
          </div>

          <div className="card mt-6 p-5 sm:p-8">
            {/* Tour Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin size={16} className="text-brand-500" />
                {tour.city}
              </span>

              <span className="flex items-center gap-1">
                <Clock3 size={16} className="text-brand-500" />
                {tour.duration}
              </span>

              <span className="flex items-center gap-1 text-amber-500">
                <Star size={16} fill="currentColor" />
                {tour.rating} ({tour.reviews} نظر)
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-black leading-relaxed sm:text-3xl">
              {tour.title}
            </h1>

            <p className="mt-4 leading-8 text-slate-600">
              {tour.description}
            </p>

            {/* Tour Highlights */}
            <div className="my-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <CalendarDays className="mb-2 text-brand-500" />

                <small className="block text-slate-400">
                  تاریخ حرکت
                </small>

                <b className="mt-1 block">{tour.date}</b>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <Users className="mb-2 text-brand-500" />

                <small className="block text-slate-400">
                  ظرفیت باقی‌مانده
                </small>

                <b className="mt-1 block">{tour.seats} نفر</b>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <ShieldCheck className="mb-2 text-brand-500" />

                <small className="block text-slate-400">
                  پوشش سفر
                </small>

                <b className="mt-1 block">بیمه مسافرتی</b>
              </div>
            </div>

            {/* Itinerary */}
            <h2 className="mb-4 text-xl font-black">
              برنامه سفر
            </h2>

            <div className="space-y-5 border-r-2 border-orange-100 pr-5">
              {tour.itinerary.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="relative"
                >
                  <span className="absolute -right-[27px] top-1 h-3 w-3 rounded-full border-2 border-brand-500 bg-white" />

                  <small className="font-bold text-brand-600">
                    {item.time}
                  </small>

                  <h3 className="mt-1 font-black">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Included Services */}
            <h2 className="mb-4 mt-8 text-xl font-black">
              خدمات شامل تور
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {tour.includes.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2
                    className="shrink-0 text-emerald-500"
                    size={18}
                  />

                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Sidebar */}
        <aside className="h-fit lg:sticky lg:top-24">
          <TourBooking tour={tour} />
        </aside>
      </div>
    </main>
  );
}
