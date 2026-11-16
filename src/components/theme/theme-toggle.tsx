"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="تغییر تم"
        className={`w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 opacity-60 ${className}`}
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "تغییر به تم روشن" : "تغییر به تم تاریک"}
      className={`w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-neutral-200 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-800 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
