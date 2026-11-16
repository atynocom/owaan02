"use client";

import React, { useState } from "react";

export function HeroMonochromePrism() {
  const [mode, setMode] = useState<0 | 1 | 2>(0);

  const toggleMode = () => {
    setMode((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
  };

  const modeLabels = [
    "منشور هندسی ایزومتریک",
    "شبکه نودهای توزیع‌شده Anycast",
    "شبکه مش معماری لبه",
  ];

  return (
    <div
      onClick={toggleMode}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleMode();
        }
      }}
      aria-label="تغییر حالت نماد معماری زیرساخت"
      className="group relative flex flex-col items-center justify-center cursor-pointer select-none py-6 px-4"
    >
      {/* 
        Monochromatic Diffused Ambient Glow:
        - Light Mode: Subtle charcoal/graphite radial diffusion.
        - Dark Mode: Subtle silver/white radial bloom.
        Strictly monochrome, zero colors!
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full transition-all duration-700 blur-2xl ${
            mode === 0
              ? "bg-neutral-900/10 dark:bg-white/15 scale-100"
              : mode === 1
              ? "bg-neutral-900/15 dark:bg-white/20 scale-110"
              : "bg-neutral-900/8 dark:bg-white/10 scale-95"
          }`}
        />
      </div>

      {/* Center Interactive Architectural Symbol */}
      <div className="relative z-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {mode === 0 && (
          /* Mode 0: Clean Architectural Isometric Prism */
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-lg transition-all duration-500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer subtle geometric guide ring */}
            <circle
              cx="100"
              cy="100"
              r="92"
              stroke="currentColor"
              className="text-neutral-300/40 dark:text-neutral-800/80 stroke-dasharray-[4_4]"
              strokeWidth="1"
            />

            {/* Architectural Isometric Pyramid Faces */}
            {/* Face 1: Light Top Reflection */}
            <polygon
              points="100,32 165,145 100,125"
              className="fill-neutral-800 dark:fill-neutral-200 transition-colors"
            />
            {/* Face 2: Shadow Side */}
            <polygon
              points="100,32 35,145 100,125"
              className="fill-neutral-950 dark:fill-neutral-100 transition-colors"
            />
            {/* Face 3: Underside Plane */}
            <polygon
              points="35,145 165,145 100,125"
              className="fill-neutral-600 dark:fill-neutral-400 transition-colors"
            />

            {/* Inner Precision Structural Lines */}
            <line x1="100" y1="32" x2="100" y2="125" stroke="currentColor" className="text-neutral-900 dark:text-black" strokeWidth="1.5" />
            <line x1="35" y1="145" x2="100" y2="125" stroke="currentColor" className="text-neutral-900 dark:text-black" strokeWidth="1.5" />
            <line x1="165" y1="145" x2="100" y2="125" stroke="currentColor" className="text-neutral-900 dark:text-black" strokeWidth="1.5" />
          </svg>
        )}

        {mode === 1 && (
          /* Mode 1: Distributed Network Nodes & Anycast Paths */
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full transition-all duration-500 animate-in fade-in duration-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric Coordinate Rings */}
            <circle cx="100" cy="100" r="90" stroke="currentColor" className="text-neutral-200 dark:text-neutral-800" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" className="text-neutral-300 dark:text-neutral-700" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="30" stroke="currentColor" className="text-neutral-400 dark:text-neutral-600" strokeWidth="1" />

            {/* Network Connection Lines */}
            <line x1="100" y1="40" x2="150" y2="80" stroke="currentColor" className="text-neutral-400 dark:text-neutral-600" strokeWidth="1.5" />
            <line x1="150" y1="80" x2="140" y2="140" stroke="currentColor" className="text-neutral-400 dark:text-neutral-600" strokeWidth="1.5" />
            <line x1="140" y1="140" x2="60" y2="140" stroke="currentColor" className="text-neutral-400 dark:text-neutral-600" strokeWidth="1.5" />
            <line x1="60" y1="140" x2="50" y2="80" stroke="currentColor" className="text-neutral-400 dark:text-neutral-600" strokeWidth="1.5" />
            <line x1="50" y1="80" x2="100" y2="40" stroke="currentColor" className="text-neutral-400 dark:text-neutral-600" strokeWidth="1.5" />

            <line x1="100" y1="100" x2="100" y2="40" stroke="currentColor" className="text-neutral-800 dark:text-neutral-200" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="150" y2="80" stroke="currentColor" className="text-neutral-800 dark:text-neutral-200" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="140" y2="140" stroke="currentColor" className="text-neutral-800 dark:text-neutral-200" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="60" y2="140" stroke="currentColor" className="text-neutral-800 dark:text-neutral-200" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="50" y2="80" stroke="currentColor" className="text-neutral-800 dark:text-neutral-200" strokeWidth="1.5" />

            {/* Central Node */}
            <circle cx="100" cy="100" r="10" className="fill-neutral-950 dark:fill-white" />
            <circle cx="100" cy="100" r="16" stroke="currentColor" className="text-neutral-950 dark:text-white" strokeWidth="1" strokeDasharray="2 2" />

            {/* Satellite Edge Nodes */}
            <circle cx="100" cy="40" r="6" className="fill-neutral-800 dark:fill-neutral-200" />
            <circle cx="150" cy="80" r="5" className="fill-neutral-700 dark:fill-neutral-300" />
            <circle cx="140" cy="140" r="6" className="fill-neutral-800 dark:fill-neutral-200" />
            <circle cx="60" cy="140" r="5" className="fill-neutral-700 dark:fill-neutral-300" />
            <circle cx="50" cy="80" r="6" className="fill-neutral-800 dark:fill-neutral-200" />
          </svg>
        )}

        {mode === 2 && (
          /* Mode 2: Precision Architectural Wireframe Matrix */
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full transition-all duration-500 animate-in fade-in duration-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid coordinates */}
            <defs>
              <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" className="text-neutral-200/60 dark:text-neutral-800/60" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#archGrid)" />

            {/* Isometric Hexagonal Wireframe Cube */}
            <polygon
              points="100,30 160,65 160,135 100,170 40,135 40,65"
              stroke="currentColor"
              className="text-neutral-900 dark:text-neutral-100"
              strokeWidth="1.8"
            />
            <line x1="100" y1="30" x2="100" y2="100" stroke="currentColor" className="text-neutral-900 dark:text-neutral-100" strokeWidth="1.8" />
            <line x1="160" y1="65" x2="100" y2="100" stroke="currentColor" className="text-neutral-900 dark:text-neutral-100" strokeWidth="1.8" />
            <line x1="40" y1="65" x2="100" y2="100" stroke="currentColor" className="text-neutral-900 dark:text-neutral-100" strokeWidth="1.8" />
            <line x1="100" y1="170" x2="100" y2="100" stroke="currentColor" className="text-neutral-900 dark:text-neutral-100" strokeWidth="1.8" />

            {/* Inner accent nodes */}
            <circle cx="100" cy="100" r="4" className="fill-neutral-950 dark:fill-white" />
            <circle cx="100" cy="30" r="3" className="fill-neutral-600 dark:fill-neutral-300" />
            <circle cx="160" cy="65" r="3" className="fill-neutral-600 dark:fill-neutral-300" />
            <circle cx="160" cy="135" r="3" className="fill-neutral-600 dark:fill-neutral-300" />
            <circle cx="100" cy="170" r="3" className="fill-neutral-600 dark:fill-neutral-300" />
            <circle cx="40" cy="135" r="3" className="fill-neutral-600 dark:fill-neutral-300" />
            <circle cx="40" cy="65" r="3" className="fill-neutral-600 dark:fill-neutral-300" />
          </svg>
        )}
      </div>

      {/* Interactive Micro-badge feedback */}
      <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm text-[11px] text-neutral-600 dark:text-neutral-400 transition-colors group-hover:border-neutral-400 dark:group-hover:border-neutral-600">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100"></span>
        <span>{modeLabels[mode]}</span>
        <span className="text-[10px] text-neutral-400 dark:text-neutral-600 font-mono ms-1">
          (کلیک کنید)
        </span>
      </div>
    </div>
  );
}
