"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-neutral-50/50 dark:bg-neutral-950/50 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
            <span>11 // FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            پرسش‌های متداول فنی و معماری
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            پاسخ‌های دقیق و شفاف درباره سازوکار Anycast DNS، شبکه توزیع محتوا، امنیت پایگاه‌های داده و سیاست‌های پرداخت.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-neutral-950 dark:text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60 pt-4"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3 text-[11px] font-mono text-neutral-400">
                      دسته‌بندی: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Engineer Contact Note */}
        <div className="mt-12 text-center text-xs text-neutral-500 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-neutral-400" />
          <span>سؤال فنی خاصی درباره سناریوی خود دارید؟ با تیم مهندسی ما در ارتباط باشید.</span>
        </div>
      </div>
    </section>
  );
}
