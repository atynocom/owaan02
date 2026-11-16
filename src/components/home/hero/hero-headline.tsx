"use client";

import React from "react";
import Link from "next/link";

export function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-start relative z-20 w-full select-none">
      {/* 
        Dominant Headline: Two words, two lines.
        Large, lightweight, highly legible with responsive clamp().
        Follows Vercel's spacious typographic philosophy.
      */}
      <h1 className="text-[clamp(2.75rem,5.2vw,5.5rem)] font-medium tracking-tight text-neutral-950 dark:text-[#ededed] leading-[1.08] mb-8 select-none">
        زیرساخت <br />
        دیجیتال
      </h1>

      {/* Two Vercel-style Clean Pill Buttons */}
      <div className="flex items-center gap-3">
        {/* Primary Pill Button */}
        <Link
          href="#services"
          className="inline-flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium transition-all duration-200 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6] shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
        >
          مشاهده سرویسها
        </Link>

        {/* Secondary Pill Button */}
        <Link
          href="#contact"
          className="inline-flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium transition-all duration-200 border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-white/[0.04] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
        >
          ارتباط با فروش
        </Link>
      </div>
    </div>
  );
}
