"use client";

import React from "react";
import { Server, Activity, ShieldCheck, Globe } from "lucide-react";

export function TrustSection() {
  const trustMetrics = [
    {
      icon: <Globe className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      value: "+۳۲۰",
      unit: "پاپ‌سایت Anycast",
      label: "مراکز داده فعال در سراسر نقاط تبادل ترافیک اصلی جهان",
    },
    {
      icon: <Activity className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      value: "۸.۴ ms",
      unit: "میانگین پاسخ‌دهی",
      label: "زمان پاسخ‌دهی DNS و نخستین بایت بر بستر پروتکل Anycast",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      value: "۹۹.۹۹٪",
      unit: "پایداری تعهدشده",
      label: "تضمین رسمی در قرارداد سطح خدمات با نظارت لحظه‌ای",
    },
    {
      icon: <Server className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      value: "۲۵+ Tbps",
      unit: "ظرفیت پالایش لبه",
      label: "دفاع سخت‌افزاری بلادرنگ در برابر شدیدترین حملات DDoS",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-neutral-50/50 dark:bg-neutral-950/50 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
            VERIFIED INFRASTRUCTURE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mt-2 mb-3">
            قابلیت‌های سنجش‌پذیر در سطح استانداردهای جهانی
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            زیرساخت ما بر پایه سخت‌افزارهای مدرن سازمانی و اتصالات مستقیم فیبر نوری اختصاصی، پایداری بی‌وقفه برنامه‌ها را تضمین می‌کند.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-sm transition-all hover:border-neutral-400 dark:hover:border-neutral-700 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  METRIC-0{idx + 1}
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight font-sans">
                    {item.value}
                  </span>
                  <span className="text-xs font-medium text-neutral-500 font-sans">
                    {item.unit}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
