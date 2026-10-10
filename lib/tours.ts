
export type Tour = {
    id: number;
    slug: string;
    title: string;
    city: string;
    category: string;
    duration: string;
    date: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    seats: number;
    image: string;
    badge?: string;
    description: string;
    includes: string[];
    itinerary: {
      time: string;
      title: string;
      description: string;
    }[];
  };
  
  export const tours: Tour[] = [
    {
      id: 1,
      slug: "masal",
      title: "فرار به ابرها؛ ییلاقات ماسال",
      city: "گیلان",
      category: "طبیعت‌گردی",
      duration: "۲ روز و ۱ شب",
      date: "۲۴ آبان",
      price: 2890000,
      oldPrice: 3450000,
      rating: 4.9,
      reviews: 128,
      seats: 8,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85",
      badge: "پرفروش",
      description:
        "یه سفر دو روزه به دل جنگل‌های سبز و اقیانوس ابر؛ مناسب نفس تازه کردن، عکاسی و دور شدن از شلوغی شهر.",
      includes: [
        "اقامت بوم‌گردی",
        "صبحانه و یک وعده غذا",
        "راهنمای محلی",
        "بیمه مسافرتی",
      ],
      itinerary: [
        {
          time: "روز اول · ۶:۰۰",
          title: "حرکت از تهران",
          description: "توقف کوتاه در مسیر و آشنایی با هم‌سفرها.",
        },
        {
          time: "روز اول · ۱۲:۰۰",
          title: "جنگل‌پیمایی سبک",
          description: "قدم زدن در مسیرهای سرسبز با راهنمای محلی.",
        },
        {
          time: "روز دوم · ۸:۰۰",
          title: "طلوع در ییلاق",
          description: "تماشای ابرها، صبحانه محلی و بازگشت.",
        },
      ],
    },
    {
      id: 2,
      slug: "desert",
      title: "شب‌نشینی زیر آسمان کویر",
      city: "مرنجاب",
      category: "کویر",
      duration: "۱ روزه",
      date: "۲۹ آبان",
      price: 1950000,
      rating: 4.8,
      reviews: 94,
      seats: 12,
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=85",
      badge: "ویژه",
      description:
        "غروب طلایی، رمل‌های نرم و رصد آسمان پرستاره در یکی از به‌یادماندنی‌ترین تجربه‌های کویری.",
      includes: [
        "وسیله رفت‌وبرگشت",
        "میان‌وعده",
        "راهنمای تخصصی",
        "بیمه",
      ],
      itinerary: [
        {
          time: "۹:۰۰",
          title: "حرکت به سمت کویر",
          description: "آشنایی گروه و توقف برای استراحت.",
        },
        {
          time: "۱۶:۰۰",
          title: "قدم زدن روی رمل‌ها",
          description: "تماشای غروب و عکاسی در شنزار.",
        },
        {
          time: "۲۰:۰۰",
          title: "رصد ستارگان",
          description: "آشنایی با آسمان شب و بازگشت.",
        },
      ],
    },
    {
      id: 3,
      slug: "kashan",
      title: "عطر گلاب و خانه‌های تاریخی کاشان",
      city: "کاشان",
      category: "فرهنگی",
      duration: "۱ روزه",
      date: "۱ آذر",
      price: 1590000,
      rating: 4.7,
      reviews: 76,
      seats: 15,
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
      description:
        "گشت‌وگذار در خانه‌های تاریخی، کوچه‌های کاهگلی و کافه‌های دنج کاشان با راهنمای محلی.",
      includes: [
        "ترانسفر رفت‌وبرگشت",
        "راهنمای گردشگری",
        "ورودی یک جاذبه",
        "بیمه",
      ],
      itinerary: [
        {
          time: "۸:۰۰",
          title: "حرکت از تهران",
          description: "شروع سفر با توقف کوتاه.",
        },
        {
          time: "۱۱:۰۰",
          title: "خانه‌های تاریخی",
          description: "بازدید و شنیدن قصه معماری خانه‌ها.",
        },
        {
          time: "۱۷:۰۰",
          title: "گشت آزاد و بازگشت",
          description: "فرصت خرید سوغات و نوشیدن چای.",
        },
      ],
    },
    {
      id: 4,
      slug: "alamut",
      title: "قلعه الموت و دریاچه اوان",
      city: "قزوین",
      category: "ماجراجویی",
      duration: "۱ روزه",
      date: "۳ آذر",
      price: 1790000,
      rating: 4.8,
      reviews: 61,
      seats: 6,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      description:
        "ترکیب تاریخ و طبیعت در مسیرهای کوهستانی الموت؛ مناسب علاقه‌مندان به کشف جاهای تازه.",
      includes: [
        "مینی‌بوس توریستی",
        "راهنمای طبیعت‌گردی",
        "صبحانه",
        "بیمه",
      ],
      itinerary: [
        {
          time: "۶:۳۰",
          title: "حرکت",
          description: "حرکت گروهی به سمت قزوین.",
        },
        {
          time: "۱۰:۰۰",
          title: "دریاچه اوان",
          description: "گشت و عکاسی کنار دریاچه.",
        },
        {
          time: "۱۳:۰۰",
          title: "مسیر الموت",
          description: "بازدید از منطقه و بازگشت عصرگاهی.",
        },
      ],
    },
    {
      id: 5,
      slug: "kish",
      title: "آبی بی‌انتها؛ تجربه جزیره کیش",
      city: "کیش",
      category: "دریایی",
      duration: "۳ روز و ۲ شب",
      date: "۸ آذر",
      price: 7490000,
      rating: 4.9,
      reviews: 142,
      seats: 9,
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
      description:
        "چند روز استراحت کنار آب‌های نیلگون، گشت جزیره و وقت آزاد برای تفریحات دریایی.",
      includes: [
        "۲ شب اقامت",
        "ترانسفر فرودگاهی",
        "گشت جزیره",
        "بیمه",
      ],
      itinerary: [
        {
          time: "روز اول",
          title: "ورود به جزیره",
          description: "ترانسفر و تحویل اتاق.",
        },
        {
          time: "روز دوم",
          title: "گشت جزیره",
          description: "دیدن جاذبه‌ها و تفریحات اختیاری.",
        },
        {
          time: "روز سوم",
          title: "وقت آزاد و بازگشت",
          description: "خرید سوغات و ترانسفر فرودگاه.",
        },
      ],
    },
    {
      id: 6,
      slug: "filband",
      title: "آخر هفته آرام در روستای فیلبند",
      city: "مازندران",
      category: "طبیعت‌گردی",
      duration: "۲ روز و ۱ شب",
      date: "۱۵ آذر",
      price: 3190000,
      rating: 4.6,
      reviews: 48,
      seats: 10,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
      description:
        "هوای خنک، مسیر جنگلی و چشم‌اندازهای آرام؛ برای وقتی که دلت استراحت واقعی می‌خواهد.",
      includes: [
        "اقامت روستایی",
        "دو وعده غذا",
        "راهنما",
        "بیمه",
      ],
      itinerary: [
        {
          time: "روز اول",
          title: "رسیدن به روستا",
          description: "تحویل اقامتگاه و گشت عصرگاهی.",
        },
        {
          time: "روز دوم",
          title: "پیاده‌روی طبیعت",
          description: "مسیر سبک و توقف برای عکاسی.",
        },
        {
          time: "عصر",
          title: "بازگشت",
          description: "پایان سفر و حرکت به سمت شهر.",
        },
      ],
    },
  ];
  
  export const money = (amount: number): string =>
    `${new Intl.NumberFormat("fa-IR").format(amount)} تومان`;
  