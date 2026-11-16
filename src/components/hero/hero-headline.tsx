"use client";

import React from "react";
import Link from "next/link";

export function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-20 w-full max-w-[480px]">
      {/* 
        Fluid Responsive Headline Typography:
        - Mobile: 40px
        - Tablet: 52px
        - Laptop (1024px-1280px): 58px (Compact enough to prevent colliding with center column)
        - Desktop (1280px+): 72px
      */}
      <h1 className="text-[38px] leading-[1.0] sm:text-[50px] lg:text-[56px] xl:text-[72px] font-semibold text-white tracking-[-0.045em] text-balance">
        Agentic
        <br />
        Infrastructure
      </h1>

      {/* Action Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
        <Link
          href="https://vercel.com/new"
          className="w-full sm:w-auto inline-flex items-center justify-center h-9 px-4.5 rounded-full bg-white text-black text-[13px] font-medium tracking-tight transition-all hover:bg-[#eaeaea] active:scale-[0.98] shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Deploy now
        </Link>

        <Link
          href="/contact/sales"
          className="w-full sm:w-auto inline-flex items-center justify-center h-9 px-4.5 rounded-full bg-black text-[#a1a1a1] hover:text-white text-[13px] font-medium tracking-tight border border-[#333333] hover:border-[#666666] transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Talk to sales
        </Link>
      </div>
    </div>
  );
}
