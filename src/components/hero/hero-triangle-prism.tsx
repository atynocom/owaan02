"use client";

import React, { useState, useRef, useCallback } from "react";

interface ColorTheme {
  id: string;
  name: string;
  gradient1: string;
  gradient2: string;
  gradient3: string;
  ambientGlow: string;
  accentColor: string;
}

const COLOR_THEMES: ColorTheme[] = [
  {
    id: "prism-spectrum",
    name: "Prism Spectrum",
    // 1:1 match to Vercel's chromatic refraction in user reference screenshot:
    // Top-left: soft rose/pink (#f472b6)
    // Top-right/Right: celestial electric cyan & sky blue (#38bdf8, #0070f3)
    // Bottom: soft lime & emerald (#4ade80, #50e3c2)
    // Bottom-left: warm amber & coral (#f59e0b, #fb7185)
    gradient1: "conic-gradient(from 180deg at 50% 50%, #f472b6 0deg, #c084fc 60deg, #0070f3 130deg, #38bdf8 180deg, #4ade80 240deg, #f59e0b 300deg, #fb7185 360deg)",
    gradient2: "radial-gradient(circle at 65% 45%, rgba(56, 189, 248, 0.45), transparent 60%)",
    gradient3: "radial-gradient(circle at 35% 65%, rgba(245, 158, 11, 0.4), transparent 60%)",
    ambientGlow: "rgba(56, 189, 248, 0.22)",
    accentColor: "#0070f3",
  },
  {
    id: "cyber-aurora",
    name: "Cyber Aurora",
    // Northern lights: radiant turquoise, cyan, mint and deep violet
    gradient1: "conic-gradient(from 220deg at 50% 50%, #00f2fe 0deg, #4facfe 90deg, #00c6ff 160deg, #0072ff 220deg, #10b981 290deg, #00f2fe 360deg)",
    gradient2: "radial-gradient(circle at 45% 35%, rgba(16, 185, 129, 0.5), transparent 65%)",
    gradient3: "radial-gradient(circle at 65% 65%, rgba(0, 114, 255, 0.45), transparent 60%)",
    ambientGlow: "rgba(0, 242, 254, 0.28)",
    accentColor: "#00dfd8",
  },
  {
    id: "solar-sunset",
    name: "Solar Sunset",
    // Warm magenta, solar gold, ember coral, deep twilight violet
    gradient1: "conic-gradient(from 140deg at 50% 50%, #f72585 0deg, #7209b7 80deg, #3a0ca3 140deg, #4361ee 200deg, #f72585 270deg, #ff9e00 330deg, #f72585 360deg)",
    gradient2: "radial-gradient(circle at 40% 40%, rgba(247, 37, 133, 0.5), transparent 60%)",
    gradient3: "radial-gradient(circle at 60% 60%, rgba(255, 158, 0, 0.45), transparent 60%)",
    ambientGlow: "rgba(247, 37, 133, 0.25)",
    accentColor: "#f72585",
  },
  {
    id: "electric-indigo",
    name: "Electric Indigo",
    // Deep royal blues, ultramarine, neon purple, cyan halo
    gradient1: "conic-gradient(from 0deg at 50% 50%, #4338ca 0deg, #6366f1 90deg, #a855f7 160deg, #3b82f6 240deg, #06b6d4 300deg, #4338ca 360deg)",
    gradient2: "radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.5), transparent 60%)",
    gradient3: "radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.45), transparent 60%)",
    ambientGlow: "rgba(99, 102, 241, 0.28)",
    accentColor: "#6366f1",
  },
  {
    id: "emerald-matrix",
    name: "Emerald Matrix",
    // Luminous jade, chartreuse, cyber lime, deep teal
    gradient1: "conic-gradient(from 90deg at 50% 50%, #10b981 0deg, #059669 80deg, #065f46 140deg, #14b8a6 210deg, #84cc16 280deg, #10b981 360deg)",
    gradient2: "radial-gradient(circle at 40% 60%, rgba(132, 204, 22, 0.45), transparent 60%)",
    gradient3: "radial-gradient(circle at 60% 40%, rgba(20, 184, 166, 0.4), transparent 60%)",
    ambientGlow: "rgba(16, 185, 129, 0.25)",
    accentColor: "#10b981",
  },
  {
    id: "lunar-monochrome",
    name: "Lunar Glow",
    // Subtle ethereal moonlight, pure titanium white, silver graphite
    gradient1: "radial-gradient(circle at 50% 50%, rgba(200, 210, 225, 0.6) 0%, rgba(180, 190, 210, 0.35) 45%, rgba(240, 245, 255, 0) 75%)",
    gradient2: "radial-gradient(circle at 45% 45%, rgba(140, 150, 170, 0.25), transparent 55%)",
    gradient3: "radial-gradient(circle at 55% 55%, rgba(220, 230, 245, 0.35), transparent 65%)",
    ambientGlow: "rgba(180, 190, 210, 0.25)",
    accentColor: "#888888",
  },
];

export function HeroTrianglePrism() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTheme = COLOR_THEMES[themeIndex];

  // Mouse position tracking for physical light parallax / refraction shift
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 20, y: y * 20 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  // Cycle to next color theme on triangle click
  const handleTriangleClick = () => {
    setIsClicking(true);
    setThemeIndex((prev) => (prev + 1) % COLOR_THEMES.length);
    setTimeout(() => setIsClicking(false), 350);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTriangleClick();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center select-none w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square mx-auto z-10 group"
    >
      {/* Dynamic Chromatic Prism Glow Field */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out will-change-transform flex items-center justify-center"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
        }}
      >
        {/* Layer 1: Conic chromatic dispersion ray */}
        <div
          className="absolute w-[95%] sm:w-[105%] h-[95%] sm:h-[105%] rounded-full opacity-85 blur-[50px] sm:blur-[65px] transition-all duration-700 ease-in-out"
          style={{
            background: activeTheme.gradient1,
            transform: `scale(${isClicking ? 1.12 : isHovered ? 1.04 : 1})`,
          }}
        />

        {/* Layer 2: Secondary radial color bloom */}
        <div
          className="absolute w-[80%] h-[80%] rounded-full opacity-90 blur-[40px] sm:blur-[50px] transition-all duration-700 ease-in-out"
          style={{
            background: activeTheme.gradient2,
          }}
        />

        {/* Layer 3: Warm contrast counter-glow */}
        <div
          className="absolute w-[70%] h-[70%] rounded-full opacity-80 blur-[30px] sm:blur-[40px] transition-all duration-700 ease-in-out"
          style={{
            background: activeTheme.gradient3,
          }}
        />

        {/* Layer 4: Concentrated ambient core light right behind the triangle */}
        <div
          className="absolute w-[50%] h-[50%] rounded-full opacity-90 blur-[24px] transition-all duration-500 ease-out"
          style={{
            boxShadow: `0 0 80px 25px ${activeTheme.ambientGlow}`,
          }}
        />
      </div>

      {/* Interactive Central Vercel Equilateral Triangle Button */}
      <button
        type="button"
        onClick={handleTriangleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label={`Vercel Triangle - Current Spectrum: ${activeTheme.name}. Click to change color spectrum.`}
        title="Click to change color spectrum"
        className="relative z-20 cursor-pointer p-4 outline-none focus-visible:ring-4 focus-visible:ring-black/20 rounded-2xl transition-transform duration-300 active:scale-[0.96] hover:scale-[1.03]"
      >
        {/* Equilateral Black Triangle SVG */}
        <svg
          className="w-[140px] h-[122px] sm:w-[180px] sm:h-[156px] lg:w-[200px] lg:h-[173px] text-black drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-all duration-300"
          viewBox="0 0 115 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Authentic Vercel geometry */}
          <polygon points="57.5,0 115,100 0,100" fill="#000000" />
        </svg>

        {/* Subtle click shockwave ripple ring */}
        {isClicking && (
          <span
            className="absolute inset-0 rounded-full border-2 border-white/60 animate-ping pointer-events-none"
            style={{ borderColor: activeTheme.accentColor }}
          />
        )}
      </button>

      {/* Floating Interactive Spectrum Pill Indicator (Sleek hover disclosure) */}
      <div
        className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.08] text-[12px] text-[#555] font-medium shadow-xs transition-all duration-300 cursor-pointer hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 pointer-events-auto"
        onClick={handleTriangleClick}
      >
        <span
          className="w-2 h-2 rounded-full transition-colors duration-500"
          style={{ backgroundColor: activeTheme.accentColor }}
        />
        <span>{activeTheme.name}</span>
        <span className="text-[10px] text-[#888] hidden sm:inline">(Click to switch)</span>
      </div>
    </div>
  );
}
