"use client";

import React from "react";
import { USE_CASES_DATA } from "@/data/use-cases";
import { Layers } from "lucide-react";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="w-full py-16 sm:py-24 bg-background border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
            <span>10 // TAILORED WORKLOADS & USE CASES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            متناسب با نیازمندی‌های حیاتی صنایع مختلف
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            از راه‌اندازی سریع اولیه تا مدیریت ترافیک‌های سنگین میلیون‌کاربره، معماری زیرساخت برای هر مقیاسی بهینه‌سازی شده است.
          </p>
        </div>

        {/* 6 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES_DATA.map((uc) => (
            <div
              key={uc.id}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-900 transition-all hover:border-neutral-400 dark:hover:border-neutral-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    {uc.tag}
                  </span>
                  <Layers className="w-4 h-4 text-neutral-400" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white mb-1">
                  {uc.titleFa}
                </h3>
                <div className="font-mono text-xs text-neutral-500 mb-4">
                  {uc.titleEn}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {uc.description}
                </p>

                <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-950/70 text-xs text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">
                    مزیت معماری:
                  </span>
                  {uc.architectureHighlight}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-baseline justify-between">
                <div>
                  <div className="text-xl font-black text-neutral-950 dark:text-white font-sans">
                    {uc.keyMetric}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {uc.keyMetricLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
