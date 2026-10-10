"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Compass,
  Menu,
  X,
  ShoppingBag,
  UserRound,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white">
            <Compass size={25} />
          </span>

          <span>
            <b className="block text-lg font-black">
              جور کن بریم
            </b>

            <small className="text-xs text-slate-500">
              یه تجربه، یه خاطره
            </small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
          <Link
            href="/"
            className="transition hover:text-brand-600"
          >
            خانه
          </Link>

          <Link
            href="/tours"
            className="transition hover:text-brand-600"
          >
            همه تورها
          </Link>

          <a
            href="/#why"
            className="transition hover:text-brand-600"
          >
            چرا جور کن بریم؟
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
          >
            <ShoppingBag size={18} />
            خریدهای من
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-600"
          >
            <UserRound size={17} />
            ورود / ثبت‌نام
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-50 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="container-x grid gap-2 pb-4 md:hidden">
          <Link
            onClick={closeMenu}
            className="rounded-xl p-3 transition hover:bg-slate-50"
            href="/"
          >
            خانه
          </Link>

          <Link
            onClick={closeMenu}
            className="rounded-xl p-3 transition hover:bg-slate-50"
            href="/tours"
          >
            همه تورها
          </Link>

          <Link
            onClick={closeMenu}
            className="rounded-xl p-3 transition hover:bg-slate-50"
            href="/dashboard"
          >
            خریدهای من
          </Link>

          <Link
            onClick={closeMenu}
            className="rounded-xl bg-brand-50 p-3 font-bold text-brand-700 transition hover:bg-orange-100"
            href="/login"
          >
            ورود / ثبت‌نام
          </Link>
        </div>
      )}
    </header>
  );
}
