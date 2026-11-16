"use client";

import React from "react";
import { HeroHeadline } from "./hero-headline";
import { HeroTriangleShader } from "./hero-triangle-shader";
import { HeroTagline } from "./hero-tagline";
import { HeroCustomerLogos } from "./hero-customer-logos";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black min-h-[calc(100svh-64px)] flex flex-col justify-between select-none pt-8 sm:pt-14 lg:pt-20 transition-colors">
      {/* 
        Clean, Airy Vercel-style Main Canvas:
        Vast negative space with zero clutter, zero blueprint lines.
      */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(300px,460px)_1fr] items-center gap-8 lg:gap-4 py-8 sm:py-12">
          {/* Column 1 (RTL Start / Right side): Minimal Bold Headline & 2 Pill Buttons */}
          <div className="order-1 flex justify-center lg:justify-start">
            <HeroHeadline />
          </div>

          {/* Column 2 (Center): Vercel Triangle with Authentic Eclipse Ray & Click Glow */}
          <div className="order-2 flex justify-center my-4 sm:my-0 relative z-20">
            <HeroTriangleShader />
          </div>

          {/* Column 3 (RTL End / Left side): 3 Minimal Taglines with Smooth Hover Expansion */}
          <div className="order-3 flex justify-center lg:justify-end">
            <HeroTagline />
          </div>
        </div>
      </div>

      {/* Customer / Ecosystem Logos Marquee at Bottom */}
      <div className="relative z-10 w-full mt-auto">
        <HeroCustomerLogos />
      </div>
    </section>
  );
}
