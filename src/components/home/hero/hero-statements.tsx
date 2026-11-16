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
                className={`w-full text-start cursor-pointer bg-transparent border-none p-0 outline-none transition-all duration-200 select-none group focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-sm ${
                  isActive
                    ? "opacity-100"
                    : isAnyActive
                    ? "opacity-45 hover:opacity-75"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex flex-col">
                  {/* Statement Title: short, clean line visible by default */}
                  <span
                    className={`text-[15px] sm:text-[16px] lg:text-[17px] transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-neutral-950 dark:text-white"
                        : "font-normal text-neutral-700 dark:text-[#a1a1a1]"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Smooth height-transition expansion of explanatory description */}
                  <div
                    id={`desc-${item.id}`}
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-250 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-1.5"
                        : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-normal">
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
