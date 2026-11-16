"use client";

import React, { useState, useCallback } from "react";

export function HeroAwanSymbol() {
  const [pulse, setPulse] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setPulse(true);
    setTimeout(() => setPulse(false), 500);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[460px] aspect-[4/3] select-none mx-auto group">
      {/* 
        LAYER 1: Monochromatic Ambient Glow Field
        Restrained, elegant grayscale illumination.
        Dark mode: soft white/silver ambient aura.
        Light mode: subtle neutral gray ambient shadow.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-all duration-500 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--symbol-glow-center) 0%, var(--symbol-glow-mid) 40%, transparent 70%)",
        }}
      />

      {/* Dynamic CSS variables for light & dark mode monochromatic glow */}
      <style jsx>{`
        div {
          --symbol-glow-center: rgba(0, 0, 0, 0.06);
          --symbol-glow-mid: rgba(0, 0, 0, 0.015);
        }
        :global(html.dark) div {
          --symbol-glow-center: ${pulse ? "rgba(255, 255, 255, 0.26)" : "rgba(255, 255, 255, 0.15)"};
          --symbol-glow-mid: ${pulse ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.04)"};
        }
      `}</style>

      {/* LAYER 2: Filmic Tactile Noise Texture Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-repeat pointer-events-none rounded-full"
        style={{
          backgroundImage: "url(/images/fallback-dark-noise.webp)",
          backgroundSize: "70px 70px",
          mixBlendMode: "overlay",
          opacity: 0.18,
          maskImage: "radial-gradient(circle at 50% 50%, black 35%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 35%, transparent 70%)",
        }}
      />

      {/* LAYER 3: Interactive Monochromatic Shockwave / Pulse Ring */}
      {pulse && (
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full animate-ping border border-neutral-400/40 dark:border-white/30"
          style={{
            width: "190px",
            height: "190px",
            animationDuration: "500ms",
            animationIterationCount: "1",
          }}
        />
      )}

      {/* 
        LAYER 4: Original AWAN Sculptural Monolithic Mark
        A bespoke geometric architectural mark composed of 3 precision-aligned elements:
        1. Apex Chevron (Cloud reach & high-speed uplink)
        2. Left Monolith Blade (Anycast DNS routing & data resilience)
        3. Right Monolith Blade (Edge CDN distribution & intelligent delivery)
        Features a 24px central negative-space light channel and precision air-slits.
      */}
      <button
        type="button"
        onClick={handleClick}
        tabIndex={0}
        aria-label="نماد هندسی زیرساخت دیجیتال اووان - کلیک برای تغییر انیمیشن نور"
        title="نماد هندسی زیرساخت دیجیتال اووان"
        className="relative z-30 cursor-pointer p-4 bg-transparent border-none outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-lg transition-transform duration-300 active:scale-[0.97] hover:scale-[1.02]"
      >
        <svg
          className="w-[125px] h-[125px] sm:w-[155px] sm:h-[155px] md:w-[185px] md:h-[185px] lg:w-[205px] lg:h-[205px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_16px_36px_rgba(0,0,0,0.85)] transition-all pointer-events-none"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark Mode Gradients */}
            <linearGradient id="awan-dark-apex" x1="120" y1="38" x2="120" y2="94" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#383838" />
              <stop offset="50%" stopColor="#1f1f1f" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>

            <linearGradient id="awan-dark-left" x1="46" y1="98" x2="108" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2c2c2c" />
              <stop offset="60%" stopColor="#181818" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </linearGradient>

            <linearGradient id="awan-dark-right" x1="194" y1="98" x2="132" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#252525" />
              <stop offset="60%" stopColor="#151515" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>

            {/* Light Mode Gradients */}
            <linearGradient id="awan-light-apex" x1="120" y1="38" x2="120" y2="94" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1c1c1c" />
              <stop offset="70%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            <linearGradient id="awan-light-left" x1="46" y1="98" x2="108" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#242424" />
              <stop offset="70%" stopColor="#141414" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>

            <linearGradient id="awan-light-right" x1="194" y1="98" x2="132" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e1e1e" />
              <stop offset="70%" stopColor="#0f0f0f" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            {/* Specular Edge Highlighting */}
            <linearGradient id="awan-edge-specular" x1="46" y1="38" x2="194" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* 
            ELEMENT 1: Apex Chevron
            Zenith facet symbolizing infrastructure reach, cloud apex, and directional routing.
          */}
          <path
            d="M 120,38 L 194,82 L 174,94 L 120,63 L 66,94 L 46,82 Z"
            className="fill-[url(#awan-light-apex)] dark:fill-[url(#awan-dark-apex)] stroke-neutral-700/30 dark:stroke-[url(#awan-edge-specular)]"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* 
            ELEMENT 2: Left Monolith Blade
            Foundation facet representing Anycast DNS, reliable routing, and high-availability compute.
          */}
          <path
            d="M 46,98 L 108,134 L 108,202 L 74,182 L 74,142 L 46,126 Z"
            className="fill-[url(#awan-light-left)] dark:fill-[url(#awan-dark-left)] stroke-neutral-700/25 dark:stroke-white/15"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* 
            ELEMENT 3: Right Monolith Blade
            Edge delivery facet representing global content distribution and database synchronization.
          */}
          <path
            d="M 194,98 L 132,134 L 132,202 L 166,182 L 166,142 L 194,126 Z"
            className="fill-[url(#awan-light-right)] dark:fill-[url(#awan-dark-right)] stroke-neutral-700/25 dark:stroke-white/15"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
