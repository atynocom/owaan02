"use client";

import React from "react";

export interface OwaanLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "adaptive" | "light" | "dark";
}

/**
 * Official OWAAN Full Logotype
 * Rendered using the exact official mathematical vector geometry from /public/images/
 * 100% Transparent background (no opaque bounding box)
 * Adaptive colors:
 * - Light Mode: Pure Black (#000000)
 * - Dark Mode: Pure White (#FFFFFF)
 */
export function OwaanLogo({
  variant = "adaptive",
  className = "h-8 w-auto",
  ...props
}: OwaanLogoProps) {
  const fillClass =
    variant === "dark"
      ? "fill-white"
      : variant === "light"
      ? "fill-black"
      : "fill-black dark:fill-white transition-colors";

  return (
    <svg
      viewBox="-36 -32 612 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="OWAAN Logo"
      {...props}
    >
      <g>
        {/* Sign Mark (Squircle with "O" Cutout) */}
        <g transform="translate(0, 0)">
          <path
            d="M 24 0 L 100 0 Q 124 0 124 24 L 124 100 Q 124 124 100 124 L 24 124 Q 0 124 0 100 L 0 24 Q 0 0 24 0 Z M 62 27 C 87 27 97 37 97 62 C 97 87 87 97 62 97 C 37 97 27 87 27 62 C 27 37 37 27 62 27 Z M 62 43 C 50 43 43 50 43 62 C 43 74 50 81 62 81 C 74 81 81 74 81 62 C 81 50 74 43 62 43 Z"
            fillRule="evenodd"
            className={fillClass}
          />
        </g>

        {/* Letter 'w' */}
        <g transform="translate(148, 0)">
          <path
            d="M 0 18 L 16 18 L 28 82 C 30 92 35 92 38 82 L 50 38 C 53 31 61 31 64 38 L 76 82 C 79 92 84 92 86 82 L 98 18 L 114 18 L 99 90 C 95 103 87 106 81 106 C 73 106 67 101 63 88 L 57 65 L 51 88 C 47 101 41 106 33 106 C 27 106 19 103 15 90 Z"
            fillRule="evenodd"
            className={fillClass}
          />
        </g>

        {/* Letter 'a' (1st) */}
        <g transform="translate(276, 0)">
          <path
            d="M 65 18 L 80 18 L 80 106 L 65 106 L 65 96 C 57 103 48 106 37 106 C 15 106 0 89 0 62 C 0 35 15 18 37 18 C 48 18 57 21 65 28 L 65 18 Z M 40 32 C 24 32 15 44 15 62 C 15 80 24 92 40 92 C 55 92 65 80 65 62 C 65 44 55 32 40 32 Z"
            fillRule="evenodd"
            className={fillClass}
          />
        </g>

        {/* Letter 'a' (2nd) */}
        <g transform="translate(370, 0)">
          <path
            d="M 65 18 L 80 18 L 80 106 L 65 106 L 65 96 C 57 103 48 106 37 106 C 15 106 0 89 0 62 C 0 35 15 18 37 18 C 48 18 57 21 65 28 L 65 18 Z M 40 32 C 24 32 15 44 15 62 C 15 80 24 92 40 92 C 55 92 65 80 65 62 C 65 44 55 32 40 32 Z"
            fillRule="evenodd"
            className={fillClass}
          />
        </g>

        {/* Letter 'n' */}
        <g transform="translate(464, 0)">
          <path
            d="M 0 18 L 15 18 L 15 32 C 23 22 33 18 46 18 C 64 18 76 30 76 50 L 76 106 L 61 106 L 61 52 C 61 38 53 32 41 32 C 26 32 15 42 15 58 L 15 106 L 0 106 Z"
            fillRule="evenodd"
            className={fillClass}
          />
        </g>
      </g>
    </svg>
  );
}
