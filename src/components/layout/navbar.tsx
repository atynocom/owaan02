"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowLeft, Shield, Server, Database, Globe } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { OwaanLogo } from "@/components/ui/owan-logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getProductIcon = (title: string) => {
    if (title.includes("DNS")) return <Globe className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />;
    if (title.includes("CDN")) return <Shield className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />;
    if (title.includes("پایگاه‌داده")) return <Database className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />;
    return <Server className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
          : "bg-white/60 dark:bg-black/60 backdrop-blur-sm border-b border-neutral-200/40 dark:border-neutral-800/40"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Start: Brand Logo & Desktop Navigation */}
        <div className="flex items-center gap-8">
          {/* Official OWAAN Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="صفحه اصلی پلتفرم زیرساخت دیجیتال اووان - OWAAN"
          >
            <OwaanLogo className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-[1.02]" />
            <div className="flex flex-col border-s border-neutral-300 dark:border-neutral-800 ps-2.5">
              <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-none">
                اووان
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 hidden sm:block font-sans">
                زیرساخت ابری توزیع‌شده
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" ref={menuRef}>
            {NAVIGATION_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      onMouseEnter={() => setProductsOpen(true)}
                      aria-expanded={productsOpen}
                      className="px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 flex items-center gap-1 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega-menu dropdown */}
                    {productsOpen && (
                      <div
                        onMouseLeave={() => setProductsOpen(false)}
                        className="absolute start-0 top-full mt-2 w-96 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-2 shadow-xl shadow-black/10 dark:shadow-black/50 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setProductsOpen(false)}
                              className="group p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-start gap-3"
                            >
                              <div className="w-8 h-8 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                                {getProductIcon(child.title)}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
                                  {child.title}
                                </div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* End: Actions, Theme Switcher & Auth */}
        <div className="flex items-center gap-3">
          {/* Monochrome Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Auth & CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="#login"
              className="px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              ورود به پنل
            </Link>
            <Link
              href="#signup"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 dark:focus:ring-offset-black"
            >
              <span>شروع کنید</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors focus:outline-none"
            aria-label="باز کردن منوی موبایل"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-neutral-100 dark:border-neutral-900 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-neutral-900 dark:text-neutral-100"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ms-3 mt-1 flex flex-col gap-2 border-s-2 border-neutral-200 dark:border-neutral-800 ps-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 py-1"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <Link
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                ورود به پنل
              </Link>
              <Link
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-medium bg-neutral-950 dark:bg-white text-white dark:text-black rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                شروع رایگان
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
