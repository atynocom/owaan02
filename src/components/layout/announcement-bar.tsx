"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { ANNOUNCEMENT_DATA } from "@/data/navigation";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const isDismissed = sessionStorage.getItem(`dismissed_${ANNOUNCEMENT_DATA.id}`);
      if (isDismissed) {
        setVisible(false);
      }
    } catch (e) {
      // Ignore sessionStorage errors
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(`dismissed_${ANNOUNCEMENT_DATA.id}`, "true");
    } catch (e) {}
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="اطلاعیه شبکه ابری"
      className="relative z-50 w-full bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-xs py-2 px-4 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            جدید
          </span>
          <span className="text-neutral-700 dark:text-neutral-300 font-normal">
            {ANNOUNCEMENT_DATA.text}
          </span>
          <Link
            href={ANNOUNCEMENT_DATA.href}
            className="inline-flex items-center gap-1 font-medium text-neutral-900 dark:text-neutral-100 hover:underline ms-1"
          >
            <span>{ANNOUNCEMENT_DATA.linkText}</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="بستن اعلان"
          className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 p-1 rounded transition-colors focus:outline-none"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
