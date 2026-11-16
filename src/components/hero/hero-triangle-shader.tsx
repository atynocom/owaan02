"use client";

import React, { useState, useCallback } from "react";

export function HeroTriangleShader() {
  const [isColorActive, setIsColorActive] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Reliable click & pointer handler with immediate state toggle
  const handleTriangleClick = useCallback((e: React.MouseEvent | React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPulse(true);
    setTimeout(() => setPulse(false), 500);
    setIsColorActive((prev) => !prev);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[540px] aspect-[3/2] select-none mx-auto"
      style={{
        maskImage: "radial-gradient(ellipse at 50% 50%, black 50%, transparent 74%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 50%, transparent 74%)",
      }}
    >
      {/* =========================================================================
          LAYER 1: Authentic Vercel Eclipse Ray Field (Grayscale / Luminosity)
          Centrally positioned with zero duplicate transform
          ========================================================================= */}
      <img
        src="/images/fallback-dark-glow-desktop.webp"
        alt=""
        width={1536}
        height={1024}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none hidden sm:block"
        style={{
          mixBlendMode: "luminosity",
        }}
      />

      <img
        src="/images/fallback-dark-glow-mobile.webp"
        alt=""
        width={1536}
        height={1024}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none block sm:hidden"
        style={{
          mixBlendMode: "luminosity",
        }}
      />

      {/* =========================================================================
          LAYER 2A: Authentic Conic Chromatic Tint (mix-blend-mode: color)
          Directly calibrated from Vercel's real shader uniform matrix:
          - Top: Violet/Purple plume (#9333ea)
          - Right: Indigo/Royal Blue (#4f46e5 / #3b82f6)
          - Bottom: Mint/Teal/Emerald (#10b981 / #06b6d4)
          - Left: Dusky Ruby/Rose/Magenta (#e11d48 / #c026d3)
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            #9333ea 0deg,
            #4f46e5 65deg,
            #3b82f6 115deg,
            #06b6d4 155deg,
            #10b981 195deg,
            #f43f5e 245deg,
            #e11d48 285deg,
            #c026d3 330deg,
            #9333ea 360deg
          )`,
          mixBlendMode: "color",
          opacity: isColorActive ? 1.0 : 0.0,
        }}
      />

      {/* =========================================================================
          LAYER 2B: High-Definition Radiance Bloom (mix-blend-mode: screen)
          Provides unmistakable, radiant, multi-spectral aurora lighting!
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            rgba(147, 51, 234, 0.75) 0deg,
            rgba(79, 70, 229, 0.65) 65deg,
            rgba(59, 130, 246, 0.6) 115deg,
            rgba(6, 182, 212, 0.65) 155deg,
            rgba(16, 185, 129, 0.75) 195deg,
            rgba(244, 63, 94, 0.65) 245deg,
            rgba(225, 29, 72, 0.75) 285deg,
            rgba(192, 38, 211, 0.75) 330deg,
            rgba(147, 51, 234, 0.75) 360deg
          )`,
          mixBlendMode: "screen",
          filter: "blur(10px)",
          opacity: isColorActive ? 0.85 : 0.0,
        }}
      />

      {/* =========================================================================
          LAYER 2C: Soft Atmospheric Corona Haze
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            rgba(147, 51, 234, 0.45) 0deg,
            rgba(79, 70, 229, 0.4) 65deg,
            rgba(59, 130, 246, 0.35) 115deg,
            rgba(6, 182, 212, 0.4) 155deg,
            rgba(16, 185, 129, 0.45) 195deg,
            rgba(244, 63, 94, 0.4) 245deg,
            rgba(225, 29, 72, 0.45) 285deg,
            rgba(192, 38, 211, 0.45) 330deg,
            rgba(147, 51, 234, 0.45) 360deg
          )`,
          mixBlendMode: "screen",
          filter: "blur(24px)",
          opacity: isColorActive ? 0.65 : 0.0,
        }}
      />

      {/* =========================================================================
          LAYER 3: Vercel Authentic 70px Film-Grain Noise Overlay
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-repeat pointer-events-none"
        style={{
          backgroundImage: "url(/images/fallback-dark-noise.webp)",
          backgroundSize: "70px 70px",
          mixBlendMode: "multiply",
          opacity: 0.42,
        }}
      />

      {/* =========================================================================
          LAYER 4: Click Ripple Shockwave
          ========================================================================= */}
      {pulse && (
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full animate-ping border border-white/40"
          style={{
            width: "180px",
            height: "180px",
            animationDuration: "500ms",
            animationIterationCount: "1",
          }}
        />
      )}

      {/* =========================================================================
          LAYER 5: Central Interactive Equilateral Vercel Triangle Button
          Generous clickable hit target with clean cursor pointer
          ========================================================================= */}
      <button
        type="button"
        onClick={handleTriangleClick}
        onPointerDown={handleTriangleClick}
        tabIndex={0}
        aria-label="Vercel Triangle Logo - Click to toggle chromatic light animation"
        title="Click to toggle rainbow glow"
        className="relative z-30 cursor-pointer p-4 bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none transition-transform duration-200 active:scale-[0.96] hover:scale-[1.02]"
      >
        <svg
          className="w-[130px] h-[112px] sm:w-[160px] sm:h-[138px] md:w-[185px] md:h-[160px] lg:w-[195px] lg:h-[169px] xl:w-[210px] xl:h-[182px] text-black drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] transition-all pointer-events-none"
          viewBox="-0.15238095238095237 -0.15238095238095237 0.30476190476190473 0.30476190476190473"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="0,-0.15238095238095237 -0.13196577581477162,0.07619047619047618 0.13196577581477162,0.07619047619047618"
            fill="#000000"
          />
        </svg>
      </button>
    </div>
  );
}
