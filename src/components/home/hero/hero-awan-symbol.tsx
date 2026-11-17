"use client";

import React, { useState, useCallback } from "react";
import { OwaanSign } from "@/components/ui/owan-sign";

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
          --symbol-glow-center: ${pulse ? "rgba(255, 255, 255, 0.28)" : "rgba(255, 255, 255, 0.16)"};
          --symbol-glow-mid: ${pulse ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.04)"};
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
          opacity: 0.2,
          maskImage: "radial-gradient(circle at 50% 50%, black 35%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 35%, transparent 70%)",
        }}
      />

      {/* LAYER 3: Interactive Monochromatic Shockwave / Pulse Ring */}
      {pulse && (
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full animate-ping border border-neutral-400/40 dark:border-white/35"
          style={{
            width: "200px",
            height: "200px",
            animationDuration: "500ms",
            animationIterationCount: "1",
          }}
        />
      )}

      {/* 
        LAYER 4: Official OWAAN Sign (Hero Centerpiece)
        - 100% Transparent background (no white canvas box)
        - Custom sculpted squircle with pure white "O" letterform
        - Tactile interactive response on click / hover
      */}
      <button
        type="button"
        onClick={handleClick}
        tabIndex={0}
        aria-label="ساین و نماد رسمی اووان - OWAAN - کلیک برای تغییر انیمیشن نور"
        title="ساین و نماد رسمی اووان"
        className="relative z-30 cursor-pointer p-2 bg-transparent border-none outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-3xl transition-transform duration-300 active:scale-[0.97] hover:scale-[1.03]"
      >
        <OwaanSign
          variant="hero"
          className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[190px] md:h-[190px] lg:w-[215px] lg:h-[215px] drop-shadow-[0_12px_28px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_20px_48px_rgba(0,0,0,0.95)] transition-all pointer-events-none"
        />
      </button>
    </div>
  );
}
