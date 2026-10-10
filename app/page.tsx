import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  HeartHandshake,
  Wallet,
  Sparkles,
  Mountain,
  TentTree,
  Waves,
  Landmark,
  Compass,
  CalendarDays,
  Users,
  MapPinned,
  Star,
  Clock3,
  CheckCircle2,
  BadgePercent,
  Headphones,
  Route,
  TreePine,
  Sun,
  Camera,
  Backpack,
  Quote,
  ArrowUpLeft,
  MessageCircle,
  MapPin,
} from "lucide-react";

import TourCard from "../components/TourCard";
import { tours, money } from "../lib/tours";

const cats = [
  {
    name: "طبیعت‌گردی",
    sub: "جنگل و کوهستان",
    icon: Mountain,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "کویر",
    sub: "شب‌های پرستاره",
    icon: TentTree,
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "دریایی",
    sub: "آرامش کنار آب",
    icon: Waves,
    color: "bg-sky-50 text-sky-700",
  },
  {
    name: "فرهنگی",
    sub: "تاریخ و معماری",
    icon: Landmark,
    color: "bg-violet-50 text-violet-700",
  },
];

const destinations = [
  {
    name: "ماسال",
    subtitle: "اقامت میان ابرها",
    slug: "masal",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
    className: "md:col-span-2 md:row-span-2",
    height: "h-72 md:h-full",
  },
  {
    name: "کیش",
    subtitle: "آفتاب و ساحل",
    slug: "kish",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
    className: "",
    height: "h-56",
  },
  {
    name: "کویر",
    subtitle: "سکوت زیر ستاره‌ها",
    slug: "desert",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85",
    className: "",
    height: "h-56",
  },
  {
    name: "کاشان",
    subtitle: "خانه‌های تاریخی",
    slug: "kashan",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85",
    className: "",
    height: "h-56",
  },
  {
    name: "جنگل‌های شمال",
    subtitle: "فرار به دل طبیعت",
    slug: "filband",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    className: "",
    height: "h-56",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "برگزارکننده‌های قابل بررسی",
    description:
      "اطلاعات تور و برگزارکننده را قبل از انتخاب بررسی کن.",
  },
  {
    icon: Wallet,
    title: "قیمت شفاف و مشخص",
    description:
      "هزینه‌ها را از قبل ببین و با خیال راحت تصمیم بگیر.",
  },
  {
    icon: HeartHandshake,
    title: "همراه در مسیر سفر",
    description:
      "برای انتخاب تور و پیدا کردن اطلاعات موردنیازت راهنمایی بگیر.",
  },
  {
    icon: CalendarDays,
    title: "برنامه‌ریزی راحت‌تر",
    description:
      "تاریخ، مدت سفر و جزئیات برنامه را پیش از رزرو بررسی کن.",
  },
];

const steps = [
  {
    number: "۰۱",
    icon: Compass,
    title: "مقصدت رو پیدا کن",
    description:
      "بین تورهای طبیعت‌گردی، ساحلی، فرهنگی و ماجراجویانه بگرد.",
  },
  {
    number: "۰۲",
    icon: CalendarDays,
    title: "جزئیات رو بررسی کن",
    description:
      "تاریخ، قیمت، ظرفیت، برنامه سفر و خدمات هر تور رو بخون.",
  },
  {
    number: "۰۳",
    icon: CheckCircle2,
    title: "برای سفرت آماده شو",
    description:
      "تور موردنظرت رو انتخاب کن و مراحل رزرو رو ادامه بده.",
  },
];

const testimonials = [
  {
    name: "نگار محمدی",
    trip: "تجربه طبیعت‌گردی",
    text: "پیدا کردن تور مناسب وقتی گزینه‌ها مرتب باشن خیلی راحت‌تره. مهم‌تر از همه اینه که قبل از انتخاب بتونی جزئیات سفر رو ببینی.",
    initial: "ن",
  },
  {
    name: "علی رضایی",
    trip: "برنامه‌ریزی سفر دوستانه",
    text: "برای سفر گروهی، مقایسه قیمت و مدت تور خیلی کمک می‌کنه. دوست دارم قبل از حرکت همه اطلاعات لازم رو یک‌جا داشته باشم.",
    initial: "ع",
  },
  {
    name: "سارا کریمی",
    trip: "علاقه‌مند به سفرهای کوتاه",
    text: "گاهی فقط یه آخر هفته آزاد داری و می‌خوای از شهر فاصله بگیری. پیدا کردن مقصد و دیدن برنامه سفر از همین‌جا شروع می‌شه.",
    initial: "س",
  },
];

const faqs = [
  {
    question: "چطور تور مناسب خودم رو پیدا کنم؟",
    answer:
      "از جستجوی بالای صفحه استفاده کن، دسته‌بندی موردعلاقه‌ات رو انتخاب کن و بعد قیمت، مدت سفر، تاریخ و جزئیات تورها رو مقایسه کن.",
  },
  {
    question: "قبل از انتخاب تور چه اطلاعاتی رو بررسی کنم؟",
    answer:
      "تاریخ حرکت، مدت سفر، هزینه نهایی، خدمات شامل تور، شرایط اقامت، ظرفیت باقی‌مانده و قوانین لغو رو بررسی کن.",
  },
  {
    question: "آیا امکان انتخاب تور بر اساس نوع سفر وجود داره؟",
    answer:
      "بله، می‌تونی از دسته‌بندی‌های طبیعت‌گردی، کویر، دریایی و فرهنگی شروع کنی و گزینه‌های موجود رو ببینی.",
  },
  {
    question: "آیا رزرو آنلاین در حال حاضر قطعی است؟",
    answer:
      "این نسخه در مرحله اولیه توسعه است. تأیید رزرو فعلی نمایشی است و تا زمان اتصال سامانه پرداخت و ثبت نهایی، به معنی خرید قطعی یا پرداخت موفق نیست.",
  },
];

export default function Home() {
  const featuredTours = tours.slice(0, 3);
  const popularTours = [...tours]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90)",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-slate-950/95 via-slate-950/75 to-slate-950/25" />

        <div className="absolute -right-28 top-20 -z-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-28 left-10 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="container-x py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-orange-100 backdrop-blur">
                <Sparkles size={16} />
                سفر بعدی تو از اینجا شروع می‌شه
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.5] sm:text-5xl lg:text-6xl">
                از روزمرگی فاصله بگیر،
                <br />
                <span className="text-orange-400">سفر دلخواهت</span> رو
                <br className="hidden sm:block" />
                جور کن!
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                از جنگل‌های مه‌آلود شمال تا شب‌های پرستاره کویر؛
                مقصدت رو انتخاب کن، جزئیات رو ببین و برای تجربه بعدی
                زندگی آماده شو.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 text-sm font-black text-white transition hover:bg-brand-600"
                >
                  کشف تورها
                  <ArrowLeft size={17} />
                </Link>

                <Link
                  href="#destinations"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  دیدن مقصدها
                  <MapPinned size={17} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-300 sm:text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  جزئیات قابل بررسی
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  مقایسه ساده تورها
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  انتخاب متناسب با بودجه
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-4 rounded-[2rem] border border-white/10 rotate-3" />

                <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-300">
                        وقت یه تجربه تازه‌ست
                      </p>
                      <h2 className="mt-1 text-xl font-black">
                        کجا بریم؟
                      </h2>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-400 text-slate-950">
                      <Compass size={24} />
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        icon: Mountain,
                        title: "هوای تازه جنگل",
                        sub: "برای عاشقان طبیعت",
                      },
                      {
                        icon: Sun,
                        title: "ماجراجویی کویری",
                        sub: "برای تجربه‌های متفاوت",
                      },
                      {
                        icon: Waves,
                        title: "آرامش کنار دریا",
                        sub: "برای یک استراحت واقعی",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          href="/tours"
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:bg-white/10"
                        >
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                            <Icon size={22} />
                          </span>
                          <span className="flex-1">
                            <b className="block text-sm">{item.title}</b>
                            <small className="mt-1 block text-slate-400">
                              {item.sub}
                            </small>
                          </span>
                          <ArrowLeft size={17} className="text-slate-400" />
                        </Link>
                      );
                    })}
                  </div>

                  <p className="mt-4 text-center text-xs leading-6 text-slate-300">
                    مقصدت هر جا باشه، از همین‌جا شروع کن.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <form
            action="/tours"
            className="mt-12 grid max-w-5xl gap-3 rounded-2xl bg-white p-3 text-slate-900 shadow-2xl sm:grid-cols-[1fr_1fr_auto] sm:p-4"
          >
            <label className="rounded-xl bg-slate-50 px-4 py-3">
              <small className="block text-xs text-slate-400">
                مقصد یا حال‌وهوای سفر
              </small>
              <input
                name="q"
                placeholder="مثلاً ماسال، جنگل، دریا..."
                className="w-full bg-transparent pt-2 text-sm font-bold outline-none"
              />
            </label>

            <label className="rounded-xl bg-slate-50 px-4 py-3">
              <small className="block text-xs text-slate-400">
                نوع سفر
              </small>
              <select
                name="category"
                defaultValue="همه تورها"
                className="w-full bg-transparent pt-2 text-sm font-bold outline-none"
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
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-4 text-sm font-black text-white transition hover:bg-brand-600"
            >
              <Compass size={18} />
              جستجوی تور
            </button>
          </form>
        </div>

        {/* Quick stats */}
        <div className="border-t border-white/10 bg-slate-950/50 backdrop-blur">
          <div className="container-x grid grid-cols-2 divide-x divide-x-reverse divide-white/10 py-5 sm:grid-cols-4">
            <div className="px-3 py-2 text-center">
              <MapPinned className="mx-auto mb-2 text-orange-400" size={22} />
              <b className="block text-sm sm:text-base">مقصدهای متنوع</b>
              <span className="mt-1 block text-xs text-slate-400">
                برای هر سلیقه
              </span>
            </div>
            <div className="px-3 py-2 text-center">
              <Users className="mx-auto mb-2 text-orange-400" size={22} />
              <b className="block text-sm sm:text-base">سفرهای گروهی</b>
              <span className="mt-1 block text-xs text-slate-400">
                تجربه در کنار هم
              </span>
            </div>
            <div className="px-3 py-2 text-center">
              <Wallet className="mx-auto mb-2 text-orange-400" size={22} />
              <b className="block text-sm sm:text-base">قیمت مشخص</b>
              <span className="mt-1 block text-xs text-slate-400">
                مقایسه پیش از انتخاب
              </span>
            </div>
            <div className="px-3 py-2 text-center">
              <Route className="mx-auto mb-2 text-orange-400" size={22} />
              <b className="block text-sm sm:text-base">برنامه سفر</b>
              <span className="mt-1 block text-xs text-slate-400">
                جزئیات پیش از حرکت
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-x py-14 sm:py-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold text-brand-600">
              از کجا شروع کنیم؟
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              حال‌وهوای سفرت رو انتخاب کن
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              اهل جنگل و هوای خنکی؟ یا دنبال آفتاب و ساحل هستی؟
              از دسته‌بندی موردعلاقه‌ات شروع کن.
            </p>
          </div>

          <Link
            href="/tours"
            className="hidden shrink-0 items-center gap-2 text-sm font-bold text-slate-500 sm:flex"
          >
            همه تورها
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {cats.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/tours?category=${encodeURIComponent(category.name)}`}
                className="card group flex flex-col gap-4 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color} transition group-hover:scale-105`}
                >
                  <Icon size={27} />
                </span>

                <span>
                  <b className="block text-base">{category.name}</b>
                  <small className="mt-1 block text-xs text-slate-400">
                    {category.sub}
                  </small>
                </span>

                <span className="flex items-center gap-1 text-xs font-bold text-brand-600">
                  کشف تورها
                  <ArrowLeft size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-slate-50 py-14 sm:py-16">
        <div className="container-x">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold text-brand-600">
                مقصدهایی برای کشف کردن
              </p>
              <h2 className="text-2xl font-black sm:text-3xl">
                دلت کجا می‌خواد باشه؟
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                از طبیعت سبز شمال تا کوچه‌های قدیمی و ساحل‌های آفتابی.
              </p>
            </div>

            <Link
              href="/tours"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-brand-600 sm:flex"
            >
              همه مقصدها
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                href={`/tours?${new URLSearchParams({ q: destination.name }).toString()}`}
                className={`group relative isolate overflow-hidden rounded-3xl ${destination.height} ${destination.className}`}
              >
                <div
                  className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
                    <MapPin size={12} />
                    مقصد پیشنهادی
                  </span>

                  <h3 className="text-xl font-black sm:text-2xl">
                    {destination.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-200">
                    {destination.subtitle}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-300">
                    دیدن تورها
                    <ArrowLeft size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="container-x py-14 sm:py-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold text-brand-600">
              پیشنهادهای جورواجور
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              تورهایی برای شروع ماجراجویی
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              چند انتخاب برای برنامه بعدی تو
            </p>
          </div>

          <Link
            href="/tours"
            className="flex shrink-0 items-center gap-2 text-sm font-bold text-brand-600"
          >
            دیدن همه
            <ArrowLeft size={16} />
          </Link>
        </div>

        {featuredTours.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center text-sm text-slate-500">
            هنوز توری برای نمایش وجود نداره.
          </div>
        )}
      </section>

      {/* Special callout */}
      <section className="container-x pb-14 sm:pb-16">
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
          <div className="absolute -left-10 -top-16 -z-10 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-20 right-1/3 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-400/15 px-3 py-1.5 text-xs font-bold text-orange-300">
                <Sparkles size={14} />
                وقتشه یه خاطره بسازی
              </span>

              <h2 className="mt-4 text-2xl font-black leading-relaxed sm:text-3xl">
                لازم نیست برای سفر بعدی‌ات کلی برنامه‌ریزی پیچیده کنی.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                گزینه‌ها رو ببین، اطلاعات رو مقایسه کن و مقصدی رو انتخاب
                کن که با زمان و بودجه‌ات جور درمیاد.
              </p>
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-orange-300"
            >
              پیدا کردن سفر بعدی
              <ArrowLeft size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular tours */}
      <section className="bg-orange-50/70 py-14 sm:py-16">
        <div className="container-x">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold text-brand-600">
                انتخاب‌های محبوب
              </p>
              <h2 className="text-2xl font-black sm:text-3xl">
                تورهایی با امتیاز بالاتر
              </h2>
              <p className="mt-3 text-sm text-slate-500">
                امتیازها رو کنار جزئیات و قیمت بررسی کن.
              </p>
            </div>

            <Link
              href="/tours"
              className="flex shrink-0 items-center gap-2 text-sm font-bold text-brand-600"
            >
              مشاهده همه
              <ArrowLeft size={16} />
            </Link>
          </div>

          {popularTours.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center text-sm text-slate-500">
              به‌زودی تورهای بیشتری اضافه می‌شن.
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-14 sm:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold text-brand-600">
            شروع یک سفر خوب
          </p>
          <h2 className="text-2xl font-black sm:text-3xl">
            رزرو تور از کجا شروع می‌شه؟
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            مسیر انتخاب رو ساده کردیم تا بتونی با اطلاعات بیشتر تصمیم بگیری.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="card relative p-6 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-brand-600">
                    <Icon size={26} />
                  </span>
                  <span className="text-3xl font-black text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="container-x pb-14 sm:pb-16">
        <div className="rounded-3xl bg-orange-50 p-7 sm:p-10 lg:p-12">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-bold text-brand-600">
              سفر آسون‌تر از همیشه
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              تو مقصد رو انتخاب کن؛ با اطلاعات کامل‌تر
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              هدف «جور کن بریم» اینه که برای انتخاب سفر، اطلاعات ضروری
              رو شفاف‌تر ببینی و گزینه‌های مناسب خودت رو راحت‌تر مقایسه کنی.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                    <Icon size={22} />
                  </span>

                  <div>
                    <h3 className="font-black">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel tips */}
      <section className="container-x pb-14 sm:pb-16">
        <div className="mb-7">
          <p className="mb-2 text-sm font-bold text-brand-600">
            قبل از حرکت
          </p>
          <h2 className="text-2xl font-black sm:text-3xl">
            چند نکته برای سفر بهتر
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            یه انتخاب خوب از بررسی جزئیات شروع می‌شه.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="card p-5 sm:p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Backpack size={24} />
            </span>
            <h3 className="mt-4 font-black">وسایل مناسب مقصد</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              لباس، کفش و وسایل ضروری رو با توجه به آب‌وهوا و فعالیت‌های
              برنامه‌ریزی‌شده انتخاب کن.
            </p>
          </article>

          <article className="card p-5 sm:p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Clock3 size={24} />
            </span>
            <h3 className="mt-4 font-black">زمان‌بندی رو بررسی کن</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              ساعت حرکت، مدت مسیر، زمان برگشت و جزئیات برنامه رو پیش از
              نهایی کردن انتخابت بخون.
            </p>
          </article>

          <article className="card p-5 sm:p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <Wallet size={24} />
            </span>
            <h3 className="mt-4 font-black">هزینه نهایی رو بسنج</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              ببین هزینه تور چه خدماتی رو شامل می‌شه و برای مخارج شخصی
              و خریدهای احتمالی هم بودجه کنار بذار.
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials - sample content */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container-x">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-bold text-brand-600">
              سفر از نگاه مسافر
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              تجربه خوب از یک انتخاب آگاهانه شروع می‌شه
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              این بخش برای نمایش تجربه‌های واقعی مسافران در آینده در نظر
              گرفته شده است.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl bg-white p-6 shadow-sm">
                <Quote className="mb-4 text-orange-300" size={28} />

                <p className="text-sm leading-7 text-slate-600">
                  «{item.text}»
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 font-black text-brand-600">
                    {item.initial}
                  </span>

                  <div>
                    <b className="block text-sm">{item.name}</b>
                    <span className="mt-1 block text-xs text-slate-400">
                      {item.trip}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-400">
            توجه: متن‌های این بخش نمونه طراحی هستند و نباید به‌عنوان
            نظرات واقعی مشتریان منتشر شوند.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-2 text-sm font-bold text-brand-600">
              سوال‌های پرتکرار
            </p>
            <h2 className="text-2xl font-black leading-relaxed sm:text-3xl">
              قبل از انتخاب تور
              <br />
              شاید این‌ها رو بخوای بدونی
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              جواب سوال‌های رایج درباره انتخاب مقصد، جزئیات سفر و وضعیت
              رزرو رو اینجا پیدا کن.
            </p>

            <Link
              href="/tours"
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-600"
            >
              شروع جستجوی تور
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-orange-200 open:bg-orange-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold leading-7">
                  <span className="flex items-start gap-3">
                    <span className="text-sm text-brand-600">
                      ۰{index + 1}
                    </span>
                    {faq.question}
                  </span>

                  <span className="text-xl text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 pr-8 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-x pb-16">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-l from-orange-500 to-amber-400 px-6 py-10 text-slate-950 sm:px-10 sm:py-14">
          <div className="absolute -left-10 -top-16 -z-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/20 px-3 py-1.5 text-xs font-bold">
                <Sparkles size={15} />
                ماجراجویی بعدی منتظرته
              </span>

              <h2 className="mt-4 text-2xl font-black leading-relaxed sm:text-4xl">
                یه مقصد انتخاب کن؛
                <br className="hidden sm:block" />
                یه خاطره تازه بساز.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-800 sm:text-base">
                تورها رو ببین، مقصد موردعلاقه‌ات رو پیدا کن و قدم اول
                رو برای سفر بعدی بردار.
              </p>
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            >
              بزن بریم سفر
              <ArrowLeft size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA strip */}
      <section className="border-t border-slate-100 bg-white">
        <div className="container-x flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-brand-600">
              <Compass size={23} />
            </span>
            <div>
              <b className="block">جور کن بریم</b>
              <p className="mt-1 text-xs text-slate-500">
                مقصد بعدی‌ات رو پیدا کن.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <Link href="/tours" className="transition hover:text-brand-600">
              تورها
            </Link>
            <Link href="/dashboard" className="transition hover:text-brand-600">
              پنل مسافر
            </Link>
            <Link href="/#why" className="transition hover:text-brand-600">
              درباره ما
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}