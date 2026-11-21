"use client";

import React from "react";

export interface OwaanSignProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "hero";
}

/**
 * Official OWAAN Sign Mark
 * Rendered using the exact official mathematical vector geometry from /public/images/
 * 100% Transparent background (no opaque bounding box)
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
        <path
          d="M 24 0 L 100 0 Q 124 0 124 24 L 124 100 Q 124 124 100 124 L 24 124 Q 0 124 0 100 L 0 24 Q 0 0 24 0 Z M 62 27 C 87 27 97 37 97 62 C 97 87 87 97 62 97 C 37 97 27 87 27 62 C 27 37 37 27 62 27 Z M 62 43 C 50 43 43 50 43 62 C 43 74 50 81 62 81 C 74 81 81 74 81 62 C 81 50 74 43 62 43 Z"
          fillRule="evenodd"
          className="fill-black dark:fill-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_16px_36px_rgba(255,255,255,0.18)] transition-all duration-300"
        />
      </svg>
    );
  }

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
      <path
        d="M 24 0 L 100 0 Q 124 0 124 24 L 124 100 Q 124 124 100 124 L 24 124 Q 0 124 0 100 L 0 24 Q 0 0 24 0 Z M 62 27 C 87 27 97 37 97 62 C 97 87 87 97 62 97 C 37 97 27 87 27 62 C 27 37 37 27 62 27 Z M 62 43 C 50 43 43 50 43 62 C 43 74 50 81 62 81 C 74 81 81 74 81 62 C 81 50 74 43 62 43 Z"
        fillRule="evenodd"
        className="fill-black dark:fill-white transition-colors"
      />
    </svg>
  );
}
