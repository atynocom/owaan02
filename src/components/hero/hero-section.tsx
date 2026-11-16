"use client";

import React from "react";
import { HeroHeadline } from "./hero-headline";
import { HeroTriangleShader } from "./hero-triangle-shader";
import { HeroTagline } from "./hero-tagline";
import { HeroCustomerLogos } from "./hero-customer-logos";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[calc(100svh-64px)] flex flex-col justify-between select-none pt-4 sm:pt-6 lg:pt-8">
      {/* Main Hero Visual Area */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex-1 flex flex-col justify-center my-auto">
        {/* 
          Robust Responsive Modular Grid:
          - Mobile / Tablet (< 1024px): 1-column vertical stack (Headline -> Triangle -> Tagline).
          - Desktop (>= 1024px): 3 balanced columns with dedicated center space for the Triangle.
          This guarantees ZERO overlap between text and the logo on ANY viewport width!
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,460px)_1fr] xl:grid-cols-[1.1fr_minmax(380px,520px)_1fr] items-center gap-6 sm:gap-8 lg:gap-4 py-4 sm:py-6">
          {/* Column 1: Headline & CTA Buttons */}
          <div className="order-1 flex justify-center lg:justify-start">
            <HeroHeadline />
          </div>

          {/* Column 2: Central Interactive Triangle with Authentic Shader Glow */}
          <div className="order-2 flex justify-center my-2 sm:my-0 relative z-20">
            <HeroTriangleShader />
          </div>

          {/* Column 3: Taglines */}
          <div className="order-3 flex justify-center lg:justify-end">
            <HeroTagline />
          </div>
        </div>
      </div>

      {/* Customer Logos Marquee */}
      <div className="relative z-10 w-full mt-auto pb-4 sm:pb-6">
        <HeroCustomerLogos />
      </div>
    </section>
  );
}
