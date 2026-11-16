"use client";

import React from "react";

export function HeroTagline() {
  const points = [
    "For coding agents",
    "To ship apps and agents",
    "Automated by agents",
  ];

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-20 max-w-[340px]">
      <div className="space-y-3">
        {points.map((point, index) => (
          <p
            key={index}
            className="text-[15px] sm:text-[16px] lg:text-[17px] font-normal text-[#a1a1a1] tracking-[-0.02em] leading-snug"
          >
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}
