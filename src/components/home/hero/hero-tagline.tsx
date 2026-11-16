"use client";

import React, { useState } from "react";

interface TaglineItem {
  id: string;
  title: string;
  description: string;
}

export function HeroTagline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items: TaglineItem[] = [
    {
      id: "coding-agents",
      title: "برای ایجنت‌های کدنویسی",
      description: "جهت استقرار با زبان مادری، از طریق API، CLI، MCP و Skills اختصاصی.",
    },
    {
      id: "ship-apps",
      title: "برای ارسال برنامه‌ها و ایجنت‌ها",
      description: "با شبکه توزیع محتوای جهانی Anycast و کش لبه هوشمند با کمترین تأخیر.",
    },
    {
      id: "automated",
      title: "خودکارسازی با ایجنت‌ها",
      description: "با پایگاه‌های داده توزیع‌شده و استقرار بدون وقفه در مقیاس بالا.",
    },
  ];

  return (
    <div
      onMouseLeave={() => setHoveredId(null)}
      className="flex flex-col items-center text-center lg:items-start lg:text-start relative z-20 max-w-[380px] w-full"
    >
      <div className="flex flex-col gap-3 sm:gap-4 w-full">
        {items.map((item) => {
          const isHovered = hoveredId === item.id;
          const isAnyHovered = hoveredId !== null;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              className={`cursor-pointer transition-all duration-200 select-none ${
                isHovered
                  ? "text-neutral-950 dark:text-white"
                  : isAnyHovered
                  ? "text-neutral-400 dark:text-neutral-600 opacity-60"
                  : "text-neutral-600 dark:text-[#a1a1a1]"
              }`}
            >
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed">
                <span
                  className={`transition-colors duration-150 ${
                    isHovered
                      ? "font-bold text-neutral-950 dark:text-white"
                      : "font-normal"
                  }`}
                >
                  {item.title}
                </span>

                {/* Smooth hover reveal of detailed text */}
                {isHovered && (
                  <span className="inline text-neutral-600 dark:text-neutral-300 font-normal ms-1.5 animate-in fade-in duration-200">
                    {item.description}
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
