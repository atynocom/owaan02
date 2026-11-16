"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Copy, Check, ShieldCheck, Zap } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";

export function FeaturedProducts() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-neutral-50/40 dark:bg-neutral-950/40 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
            <span>05 // FEATURED INFRASTRUCTURE PRODUCTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            بررسی فنی و عمیق ۴ ستون اصلی پلتفرم
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            معماری مهندسی‌شده هر محصول بر مبنای بالاترین استانداردهای کارایی، ایزولاسیون منابع و تعامل‌پذیری با API طراحی شده است.
          </p>
        </div>

        {/* 4 In-Depth Product Modules */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {FEATURED_PRODUCTS.map((prod, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={prod.id}
                id={prod.id}
                className="scroll-mt-24 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-all hover:border-neutral-400 dark:hover:border-neutral-700"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                  {/* Text & Specs Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}>
                    <div>
                      {/* Product Tag & Category */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="font-mono text-xs text-neutral-400">
                          {`#0${index + 1}`}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                          {prod.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-1">
                        {prod.nameFa}
                      </h3>
                      <div className="font-mono text-xs text-neutral-500 mb-4">
                        {prod.nameEn}
                      </div>

                      <h4 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 leading-snug">
                        {prod.headline}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        {prod.description}
                      </p>

                      {/* 3 Metric Pills */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {prod.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
                          >
                            <div className="text-lg sm:text-xl font-black text-neutral-950 dark:text-white font-sans">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                              {m.label}
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-0.5 hidden sm:block">
                              {m.hint}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technical Highlights */}
                      <div className="flex flex-col gap-2 mb-6">
                        {prod.highlights.map((hl, hlIdx) => (
                          <div key={hlIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                            <Zap className="w-3.5 h-3.5 text-neutral-950 dark:text-neutral-100 shrink-0 mt-1" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-4">
                      <Link
                        href="#signup"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black text-xs sm:text-sm font-semibold transition-colors"
                      >
                        <span>فعال‌سازی سرویس</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="#developers"
                        className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                      >
                        مستندات API این محصول
                      </Link>
                    </div>
                  </div>

                  {/* Code Snippet & Technical Specs Column */}
                  <div className={`lg:col-span-5 flex flex-col gap-4 ${isEven ? "" : "lg:order-1"}`}>
                    {/* Code Terminal Box */}
                    {prod.codeExample && (
                      <div className="rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-neutral-100 overflow-hidden shadow-lg">
                        <div className="px-4 py-2.5 border-b border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                            <span className="ms-2 font-mono text-[11px] text-neutral-400">
                              {prod.codeExample.lang}
                            </span>
                          </div>

                          <button
                            onClick={() => handleCopy(prod.id, prod.codeExample!.code)}
                            className="text-neutral-400 hover:text-white transition-colors p-1"
                            aria-label="کپی کد"
                          >
                            {copiedId === prod.id ? (
                              <Check className="w-3.5 h-3.5 text-neutral-200" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-neutral-300 dir-ltr text-left selection:bg-neutral-800">
                          <pre>{prod.codeExample.code}</pre>
                        </div>
                      </div>
                    )}

                    {/* Technical Specs Table */}
                    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                        <ShieldCheck className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                        <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                          مشخصات لایه سخت‌افزار و شبکه
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        {prod.technicalSpecs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-center text-xs gap-3">
                            <span className="text-neutral-500 font-medium">{spec.key}</span>
                            <span className="text-neutral-900 dark:text-neutral-200 font-mono text-left dir-ltr">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
