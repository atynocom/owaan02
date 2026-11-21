"use client";

import React from "react";
import { HeroHeadline } from "./hero-headline";
import { HeroAwanSymbol } from "./hero-awan-symbol";
import { HeroStatements } from "./hero-statements";
import { HeroCustomerLogos } from "./hero-customer-logos";
import { HeroLakeCanvas } from "./hero-lake-canvas";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black min-h-[calc(100svh-64px)] flex flex-col justify-between select-none pt-6 sm:pt-10 lg:pt-14 transition-colors">
      {/* 
        3D Living Lake Ecosystem WebGL Canvas (Inspired by Lake Ovan - دریاچه اوان)
        - Harmonic obsidian water waves and cursor wake displacement
        - Click-triggered acoustic shockwaves
        - Submerged bathymetric contour rings and 260 dynamic ecosystem nodes
      */}
      <HeroLakeCanvas />

      {/* 
        Vercel-Inspired Minimal Main Canvas:
        - Strict 3-zone horizontal composition with exact proportions (34% / 32% / 34%).
        - Spacious negative space, optical alignment, and zero visual clutter.
        - In RTL, Zone 1 (34%) is at Start (Right side: Headline & CTAs).
        - Zone 2 (32%) is Center (Original AWAN Monolithic Geometric Symbol).
        - Zone 3 (34%) is at End (Left side: 3 Compact Interactive Statements).
      */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center my-auto">
        {/* Desktop 3-Column Grid / Mobile Art-Directed Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[34%_32%_34%] items-center gap-10 lg:gap-0 py-6 sm:py-10">
          {/* 
            Zone 1: RTL Start (Right Side in RTL / Left in LTR mindset)
            Headline & CTAs: Dominant text element, two words, two lines, two pill buttons
          */}
          <div className="order-1 flex justify-center lg:justify-start lg:ps-2">
            <HeroHeadline />
          </div>

          {/* 
            Zone 2: Center (32%)
            Original AWAN Brand Symbol: Monochromatic sculptural geometric centerpiece with ambient glow
          */}
          <div className="order-2 flex justify-center my-2 sm:my-0 relative z-20">
            <HeroAwanSymbol />
          </div>

          {/* 
            Zone 3: RTL End (Left Side in RTL / Right in LTR mindset)
            Three Compact Interactive Statements with smooth hover/focus/tap description reveals
          */}
          <div className="order-3 flex justify-center lg:justify-end lg:pe-2">
            <HeroStatements />
          </div>
        </div>
      </div>

      {/* Understated Customer / Partner Logos at Bottom */}
      <div className="relative z-10 w-full mt-auto">
        <HeroCustomerLogos />
      </div>
    </section>
  );
}
