"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe, Shield, Database, Cpu } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";

export function ProductCategories() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "network-dns":
        return <Globe className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      case "content-delivery":
        return <Shield className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      case "cloud-databases":
        return <Database className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
      default:
        return <Cpu className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />;
    }
  };

  return (
    <section id="products" className="w-full py-16 sm:py-24 bg-background border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
              <span>04 // PRODUCT CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              دسته‌بندی محصولات و سرویس‌های ابری
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
              معماری یکپارچه برای مدیریت نام دامنه، توزیع پرسرعت محتوا، پایگاه‌داده‌های توزیع‌شده و پردازش در لبه شبکه بدون مدیریت دستی سرور.
            </p>
          </div>

          <Link
            href="#architecture"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline group"
          >
            <span>مشاهده دیاگرام معماری شبکه</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar with Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex items-center justify-center">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
                    {cat.badge}
                  </span>
                </div>

                {/* Title and English Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mb-1">
                  {cat.titleFa}
                </h3>
                <div className="font-mono text-xs text-neutral-500 mb-4">
                  {cat.titleEn}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-950/60 mb-6">
                  {cat.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[11px] text-neutral-500 font-sans">
                        {m.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Checklist */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {cat.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Link */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
                <Link
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:underline"
                >
                  <span>مشاهده جزئیات و مشخصات فنی</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
