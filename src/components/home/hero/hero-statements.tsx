"use client";

import React, { useState } from "react";

interface StatementItem {
  id: string;
  title: string;
  description: string;
}

const STATEMENTS: StatementItem[] = [
  {
    id: "statement-1",
    title: "اتصال سریعتر",
    description: "مدیریت هوشمند DNS برای هدایت بهینه درخواستها و دسترسی سریعتر به سرویسها.",
  },
  {
    id: "statement-2",
    title: "تحویل هوشمند محتوا",
    description: "شبکه توزیع محتوا برای ارائه سریعتر و پایدارتر وبسایتها و اپلیکیشنها.",
  },
  {
    id: "statement-3",
    title: "داده و زیرساخت ابری",
    description: "سرویسهای دیتابیس و زیرساخت ابری برای اجرای مطمئن و توسعهپذیر اپلیکیشنها.",
  },
];

export function HeroStatements() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      onMouseLeave={() => setActiveId(null)}
      className="flex flex-col items-center lg:items-start text-start relative z-20 w-full max-w-[380px]"
    >
      {/* 
        Container with stabilized minimum height to guarantee zero layout instability
        and preserve harmonious optical balance across states.
      */}
      <div className="flex flex-col gap-4 sm:gap-5 w-full min-h-[170px] sm:min-h-[190px] justify-center">
        {STATEMENTS.map((item) => {
          const isActive = activeId === item.id;
          const isAnyActive = activeId !== null;

          return (
            <div key={item.id} className="w-full">
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onBlur={() => setActiveId(null)}
                aria-expanded={isActive}
                aria-controls={`desc-${item.id}`}
                className={`w-full text-start cursor-pointer bg-transparent border-none p-2.5 -mx-2.5 rounded-xl outline-none transition-all duration-200 select-none group focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 hover:bg-neutral-100/70 dark:hover:bg-white/[0.04] ${
                  isActive
                    ? "opacity-100 bg-neutral-100/80 dark:bg-white/[0.05]"
                    : isAnyActive
                    ? "opacity-60 hover:opacity-100"
                    : "opacity-100"
                }`}
              >
                <div className="flex flex-col">
                  {/* Statement Title: short, clean line visible by default */}
                  <span
                    className={`text-[16px] sm:text-[17px] lg:text-[18px] transition-colors duration-200 ${
                      isActive
                        ? "font-bold text-black dark:text-white"
                        : "font-medium text-neutral-950 dark:text-[#a1a1a1] group-hover:text-black dark:group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Smooth height-transition expansion of explanatory description */}
                  <div
                    id={`desc-${item.id}`}
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-250 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-2"
                        : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-neutral-800 dark:text-neutral-300 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
