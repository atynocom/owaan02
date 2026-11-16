"use client";

import React from "react";
import { BENEFIT_MODULES } from "@/data/benefits";
import { Zap, ShieldCheck, Code, RefreshCw, Database, Activity } from "lucide-react";

export function BenefitsSection() {
  const getBenefitIcon = (id: string) => {
    switch (id) {
      case "low-latency":
        return <Zap className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      case "ddos-defense":
        return <ShieldCheck className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      case "infrastructure-as-code":
        return <Code className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      case "zero-downtime-scale":
        return <RefreshCw className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      case "high-availability-db":
        return <Database className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      default:
        return <Activity className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
    }
  };

  return (
    <section id="why-us" className="w-full py-16 sm:py-24 bg-neutral-50/50 dark:bg-neutral-950/50 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
            <span>07 // WHY DIGITAL INFRASTRUCTURE MATTERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            ۶ اصل مهندسی در ساخت پلتفرم پایدار
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            تمامی تصمیمات معماری این پلتفرم با هدف حذف نقاط شکست منفرد (SPOF)، افزایش حداکثری سرعت و تسهیل استقرار توسعه‌دهندگان اتخاذ شده‌اند.
          </p>
        </div>

        {/* 6 Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFIT_MODULES.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    {getBenefitIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    MODULE {item.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white mb-1">
                  {item.titleFa}
                </h3>
                <div className="font-mono text-xs text-neutral-500 mb-3">
                  {item.titleEn}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-baseline justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-neutral-950 dark:text-white font-sans">
                    {item.metric}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {item.metricLabel}
                  </div>
                </div>

                <div className="text-[10px] text-neutral-400 font-mono max-w-[130px] text-end">
                  {item.technicalDetails}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
