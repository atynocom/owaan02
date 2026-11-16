"use client";

import React from "react";
import Link from "next/link";

export function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-start relative z-20">
      {/* Confident Vercel-style Bold Typography */}
      <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-8 select-none">
        زیرساخت <br />
        دیجیتال
      </h1>

      {/* Two Vercel-style Clean Pill Buttons */}
      <div className="flex items-center gap-3">
        {/* Primary Pill Button */}
        <Link
          href="#signup"
          className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium transition-all duration-200 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
        >
          شروع استقرار
        </Link>

        {/* Secondary Pill Button */}
        <Link
          href="#contact"
          className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium transition-all duration-200 border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-950 dark:hover:text-white hover:scale-[1.02] active:scale-[0.98]"
        >
          گفتگو با فروش
        </Link>
      </div>
    </div>
  );
}
