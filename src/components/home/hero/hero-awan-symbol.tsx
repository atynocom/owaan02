"use client";

import React from "react";
import { OwaanSign } from "@/components/ui/owan-sign";

export function HeroAwanSymbol() {
  return (
    <div className="relative flex items-center justify-center w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] aspect-[4/3] select-none mx-auto group">
      {/* 
        Official OWAAN Sign (Hero Centerpiece)
        - 100% Clean: No dark halo, no ambient shadow box, no noise texture rectangle.
        - Enlarged prominent scale matching Vercel's signature monolithic centerpiece.
        - Tactile interactive response on click / hover.
      */}
      <button
        type="button"
        tabIndex={0}
        aria-label="ساین و نماد رسمی اُوان - OWAAN"
        title="ساین و نماد رسمی اُوان"
        className="relative z-30 cursor-pointer p-0 bg-transparent border-none outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-3xl transition-transform duration-300 active:scale-[0.98] hover:scale-[1.03]"
      >
        <OwaanSign
          variant="hero"
          className="w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[285px] lg:h-[285px] xl:w-[310px] xl:h-[310px] transition-all pointer-events-none"
        />
      </button>
    </div>
  );
}
