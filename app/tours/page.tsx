
"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Search } from "lucide-react";

import TourCard from "../../components/TourCard";
import { tours } from "../../lib/tours";

function ToursContent() {
  const params = useSearchParams();

  const [q, setQ] = useState(() => params.get("q") || "");
  const [cat, setCat] = useState(
    () => params.get("category") || "همه تورها"
  );
  const [sort, setSort] = useState("recommended");

  const list = useMemo(() => {
    let filteredTours = tours.filter((tour) => {
      const matchesCategory =
        cat === "همه تورها" || tour.category === cat;

      const searchText =
        `${tour.title} ${tour.city} ${tour.category}`.toLowerCase();

      const matchesSearch = searchText.includes(
        q.trim().toLowerCase()
      );

      return matchesCategory && matchesSearch;
    });

    if (sort === "price") {
      filteredTours = [...filteredTours].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "rating") {
      filteredTours = [...filteredTours].sort(
        (a, b) => b.rating - a.rating
      );
    }

    return filteredTours;
  }, [q, cat, sort]);

  const clearFilters = () => {
    setQ("");
    setCat("همه تورها");
    setSort("recommended");
  };

  return (
    <main className="container-x py-10">
      <section className="mb-8 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <p className="mb-2 text-sm font-bold text-orange-400">
          کشف کن، انتخاب کن، برو!
        </p>

        <h1 className="text-3xl font-black">
          همه تورها
        </h1>

        <p className="mt-3 text-sm text-slate-300">
          برای خاطره بعدی‌ات یه مقصد پیدا کن.
        </p>
      </section>

      <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
        <aside className="card h-fit p-5">
          <div className="mb-5 flex items-center gap-2 font-black">
            <SlidersHorizontal size={18} />
            فیلتر تورها
          </div>

          <label className="mb-5 block text-sm font-bold">
            جستجو

            <input
              type="search"
              value={q}
              onChange={(event) => setQ(event.target.value)}
              placeholder="نام تور یا مقصد..."
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm font-normal outline-none transition focus:border-brand-500"
            />
          </label>

          <label className="block text-sm font-bold">
            دسته‌بندی

            <select
              value={cat}
              onChange={(event) => setCat(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm"
            >
              <option value="همه تورها">همه تورها</option>
              <option value="طبیعت‌گردی">طبیعت‌گردی</option>
              <option value="کویر">کویر</option>
              <option value="فرهنگی">فرهنگی</option>
              <option value="ماجراجویی">ماجراجویی</option>
              <option value="دریایی">دریایی</option>
            </select>
          </label>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 w-full rounded-xl bg-slate-100 py-3 text-sm font-bold transition hover:bg-slate-200"
          >
            پاک کردن فیلترها
          </button>
        </aside>

        <section>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm text-slate-500">
              <b className="text-slate-900">
                {list.length} تور
              </b>{" "}
              پیدا شد
            </span>

            <label className="flex items-center gap-2 text-sm text-slate-500">
              مرتب‌سازی

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 font-bold"
              >
                <option value="recommended">پیشنهادی</option>
                <option value="price">ارزان‌ترین</option>
                <option value="rating">بالاترین امتیاز</option>
              </select>
            </label>
          </div>

          {list.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="card py-16 text-center">
              <Search
                className="mx-auto mb-3 text-slate-300"
                size={36}
              />

              <b>توری با این مشخصات پیدا نشد</b>

              <p className="mt-2 text-sm text-slate-500">
                فیلترها رو تغییر بده و دوباره امتحان کن.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
              >
                نمایش همه تورها
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default function ToursPage() {
  return (
    <Suspense
      fallback={
        <main className="container-x py-10">
          <div className="animate-pulse space-y-6">
            <div className="h-40 rounded-3xl bg-slate-200" />

            <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
              <div className="h-64 rounded-2xl bg-slate-200" />

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                <div className="h-80 rounded-2xl bg-slate-200" />
                <div className="h-80 rounded-2xl bg-slate-200" />
                <div className="h-80 rounded-2xl bg-slate-200" />
              </div>
            </div>
          </div>
        </main>
      }
    >
      <ToursContent />
    </Suspense>
  );
}
