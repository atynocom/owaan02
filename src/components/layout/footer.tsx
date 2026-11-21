"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { OwaanLogo } from "@/components/ui/owan-logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 text-sm transition-colors mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          {/* Brand Info & Mission (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <OwaanLogo className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-[1.02]" />
              <div className="flex flex-col border-s border-neutral-300 dark:border-neutral-800 ps-2.5">
                <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-none">
                  اُوان
                </span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-sans">
                  زیرساخت ابری توزیع‌شده
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              پلتفرم زیرساخت دیجیتال، شبکه توزیع محتوا (CDN)، پایگاه‌داده‌های ابری توزیع‌شده و Anycast Smart DNS با تأخیر زیر ۱۰ میلی‌ثانیه برای اپلیکیشن‌ها و ایجنت‌های مدرن.
            </p>

            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-300 w-fit mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-neutral-100"></span>
              </span>
              <span className="font-mono text-[11px]">SYS-STATUS:</span>
              <span className="font-medium">همه سرویس‌ها عملیاتی هستند (۹۹.۹۹٪)</span>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright, Legal, Theme Toggle */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span>© ۲۰۲۶ اُوان. تمامی حقوق محفوظ است.</span>
            <span className="hidden sm:inline">•</span>
            <Link href="#privacy" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
              حریم خصوصی داده‌ها
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="#terms" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
              شرایط استفاده از زیرساخت
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="#security" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
              امنیت و استانداردها
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-neutral-400">RTL / FA</span>
            <ThemeToggle className="w-8 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
