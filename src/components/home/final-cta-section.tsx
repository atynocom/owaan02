"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Terminal } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-background overflow-hidden select-none transition-colors">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6 backdrop-blur-sm">
            <span>12 // READY TO DEPLOY</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.2] mb-6">
            آماده ساختن زیرساخت بهتر هستید؟
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-10">
            در کمتر از ۲ دقیقه دامنه و سرویس‌های خود را به شبکه جهانی Anycast ما متصل کنید. بدون نیاز به ورود شماره کارت اعتباری برای شروع.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="#signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-semibold text-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
            >
              <span>ایجاد حساب کاربری رایگان</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-medium text-sm transition-all focus:outline-none"
            >
              <MessageSquare className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              <span>گفتگو با معماران شبکه</span>
            </Link>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-sans">
            <span>✓ راه‌اندازی فوری در لبه شبکه</span>
            <span>✓ دوره آزمایشی رایگان بدون تعهد</span>
            <span>✓ پشتیبانی مهندسی ۲۴/۷</span>
          </div>
        </div>
      </div>
    </section>
  );
}
