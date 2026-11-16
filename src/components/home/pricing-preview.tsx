"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { PRICING_TIERS } from "@/data/pricing";

export function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 bg-neutral-50/50 dark:bg-neutral-950/50 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
            <span>09 // TRANSPARENT INFRASTRUCTURE PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            تعرفه‌های شفاف، بدون هزینه‌های پنهان
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            از پروژه‌های شخصی رایگان تا زیرساخت‌های بزرگ با ترافیک نامحدود. محاسبه دقیق بر مبنای منابع واقعی بدون هزینه‌های ناگهانی.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                !isAnnual
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-black shadow-xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              تسویه ماهیانه
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-black shadow-xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              <span>تسویه سالیانه</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                ۲۰٪ صرفه‌جویی
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                tier.popular
                  ? "border-neutral-950 dark:border-white bg-white dark:bg-neutral-900 shadow-xl ring-1 ring-neutral-950 dark:ring-white"
                  : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-400 dark:hover:border-neutral-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 start-6 px-3 py-0.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-wide uppercase">
                  انتخاب پرطرفدار
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-0.5">
                  {tier.nameFa}
                </h3>
                <div className="font-mono text-xs text-neutral-500 mb-3">
                  {tier.nameEn}
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="text-2xl sm:text-3xl font-black text-neutral-950 dark:text-white font-sans">
                    {isAnnual ? tier.priceAnnual : tier.priceMonthly}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">
                    {tier.billingUnit}
                  </div>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-neutral-950 dark:text-white shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href={tier.ctaHref}
                className={`w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  tier.popular
                    ? "bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black"
                    : "border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                <span>{tier.ctaLabel}</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise & Payment Methods Note */}
        <div className="mt-12 text-center text-xs text-neutral-500 max-w-xl mx-auto leading-relaxed">
          کلیه مبالغ با پشتیبانی از درگاه پرداخت بانکی، پیش‌پرداخت اینترنتی و امکان صدور فاکتور رسمی شرکتی با تسویه بانکی به شماره شبا قابل ارائه می‌باشد.
        </div>
      </div>
    </section>
  );
}
