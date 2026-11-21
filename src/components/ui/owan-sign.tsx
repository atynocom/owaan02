"use client";

import React from "react";

export interface OwaanSignProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "hero";
}

/**
 * Official OWAAN Sign Mark
 * Rendered using the exact official mathematical vector geometry from /public/images/
 * 100% Transparent background (no opaque bounding box)
 * In both dark and light modes, the squircle is dark/black with a crisp white "O" letterform,
 * matching Vercel's signature monolithic dark mark aesthetic.
 */
export function OwaanSign({
  variant = "default",
  className = "w-10 h-10",
  ...props
}: OwaanSignProps) {
  if (variant === "hero") {
    return (
      <svg
        viewBox="-20 -20 164 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="OWAAN Sign"
        {...props}
      >
        <defs>
          {/* Obsidian Squircle Body Gradient */}
          <linearGradient id="owan-squircle-body" x1="0" y1="0" x2="124" y2="124" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e1e20" />
            <stop offset="50%" stopColor="#121214" />
            <stop offset="100%" stopColor="#080809" />
          </linearGradient>

          {/* Precision Specular Rim Stroke */}
          <linearGradient id="owan-squircle-rim" x1="0" y1="0" x2="124" y2="124" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* 1. Dark Obsidian Squircle Body with Specular Rim */}
        <path
          d="M 24 0 L 100 0 Q 124 0 124 24 L 124 100 Q 124 124 100 124 L 24 124 Q 0 124 0 100 L 0 24 Q 0 0 24 0 Z"
          fill="url(#owan-squircle-body)"
          stroke="url(#owan-squircle-rim)"
          strokeWidth="1.4"
        />

        {/* 2. Pure White "O" Letterform (Hollow Aperture) */}
        <path
          d="M 62 27 C 87 27 97 37 97 62 C 97 87 87 97 62 97 C 37 97 27 87 27 62 C 27 37 37 27 62 27 Z M 62 43 C 50 43 43 50 43 62 C 43 74 50 81 62 81 C 74 81 81 74 81 62 C 81 50 74 43 62 43 Z"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
      </svg>
    );
  }

  // Default compact variant
  return (
    <svg
      viewBox="-20 -20 164 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="OWAAN Sign"
      {...props}
    >
      {/* Dark Squircle */}
      <path
        d="M 24 0 L 100 0 Q 124 0 124 24 L 124 100 Q 124 124 100 124 L 24 124 Q 0 124 0 100 L 0 24 Q 0 0 24 0 Z"
        className="fill-neutral-900 dark:fill-[#121214] stroke-neutral-700/50 dark:stroke-white/15"
        strokeWidth="1.2"
      />
      {/* Pure White O */}
      <path
        d="M 62 27 C 87 27 97 37 97 62 C 97 87 87 97 62 97 C 37 97 27 87 27 62 C 27 37 37 27 62 27 Z M 62 43 C 50 43 43 50 43 62 C 43 74 50 81 62 81 C 74 81 81 74 81 62 C 81 50 74 43 62 43 Z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />
    </svg>
  );
}
