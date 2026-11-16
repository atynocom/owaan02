"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Copy, Check, ArrowLeft, Code2, Server, FileCode2 } from "lucide-react";

export function DeveloperSection() {
  const [activeTab, setActiveTab] = useState<"cli" | "api" | "terraform" | "sdk">("cli");
  const [copied, setCopied] = useState(false);

  const snippets = {
    cli: {
      lang: "bash",
      filename: "terminal — zsh",
      code: `# ۱. ورود به اکانت زیرساخت
$ infra auth login --token $INFRA_TOKEN

# ۲. پیکربندی و استقرار مستقیم پروژه Next.js یا سرویس کانتینری
$ infra deploy --prod --region anycast-global

✓ Scanning workspace dependencies... Next.js 16.4.6 & Node.js 22
✓ Built static assets & compiled 24 edge functions [1.2s]
✓ Propagated DNS routes across 320+ Anycast points
✓ Live Production URL: https://api.owaan.infra
✓ Average global response time: 7.4ms`,
    },
    api: {
      lang: "bash",
      filename: "curl — REST API v1",
      code: `curl -X POST https://api.owaan.io/v1/dns/records \\
  -H "Authorization: Bearer $INFRA_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "A",
    "name": "edge-api",
    "content": "185.190.24.1",
    "ttl": 60,
    "routing": "geo_lowest_latency",
    "health_check": {
      "path": "/healthz",
      "interval_seconds": 5
    }
  }'`,
    },
    terraform: {
      lang: "hcl",
      filename: "main.tf — Terraform Provider",
      code: `terraform {
  required_providers {
    infra = {
      source  = "owaan/infra"
      version = "~> 2.4"
    }
  }
}

provider "infra" {
  api_token = var.infra_token
}

resource "infra_dns_record" "api" {
  zone_id  = "zone_abc123"
  type     = "A"
  name     = "api"
  content  = "185.190.24.1"
  anycast  = true
  failover = true
}

resource "infra_database_cluster" "pg" {
  engine   = "postgres-17"
  tier     = "ha-production-2x"
  storage  = 50 # GB NVMe
  ha_mode  = "multi-zone"
}`,
    },
    sdk: {
      lang: "typescript",
      filename: "client.ts — Node.js SDK",
      code: `import { InfraClient } from '@owaan/sdk';

const infra = new InfraClient({
  token: process.env.INFRA_API_TOKEN,
});

// تخلیه آنی کش CDN در کمتر از ۱۵۰ میلی‌ثانیه
await infra.cdn.purge({
  zone: 'example.com',
  tags: ['products-list', 'header-nav'],
});

// دریافت متریک‌های زنده پایش ترافیک
const metrics = await infra.telemetry.getRealtimeMetrics({
  timeRange: '1h',
  interval: '1m',
});
console.log('Global P95 latency:', metrics.p95Latency);`,
    },
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="developers" className="w-full py-16 sm:py-24 bg-background border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
                <span>08 // DEVELOPER EXPERIENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4">
                طراحی‌شده برای دست‌های توسعه‌دهنده
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                از یکپارچگی خط فرمان (CLI) تا پرووایدر رسمی Terraform و وب‌سرویس‌های RESTful با مستندات OpenAPI، کنترل تمامی ابعاد زیرساخت بدون کلیک‌های غیرضروری در اختیار شماست.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white" />
                  <span>پشتیبانی کامل از توابع بدون سرور (Serverless Edge Functions)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white" />
                  <span>توکن‌های دسترسی با دامنه محدود (Granular Scoped API Keys)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white" />
                  <span>پایش لاگ‌های زنده کانتینرها در خروجی ترمینال شما</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="#docs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>مشاهده مستندات جامع API و SDK</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Code Terminal Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-neutral-100 overflow-hidden shadow-2xl">
              {/* Tab Bar Header */}
              <div className="px-4 py-3 border-b border-neutral-800 bg-neutral-900/90 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab("cli")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "cli"
                        ? "bg-neutral-800 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>CLI</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("api")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "api"
                        ? "bg-neutral-800 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Server className="w-3.5 h-3.5" />
                    <span>cURL API</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("terraform")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "terraform"
                        ? "bg-neutral-800 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Terraform</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("sdk")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "sdk"
                        ? "bg-neutral-800 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>TypeScript</span>
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-neutral-500 hidden sm:inline">
                    {currentSnippet.filename}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                    aria-label="کپی کد"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-neutral-200" />
                        <span className="text-[11px]">کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">کپی</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Area */}
              <div className="p-5 overflow-x-auto text-xs font-mono leading-relaxed text-neutral-300 dir-ltr text-left selection:bg-neutral-800">
                <pre>{currentSnippet.code}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
