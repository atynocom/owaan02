"use client";

import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, ChevronRight, Activity, Cpu, Globe, Database, Shield } from "lucide-react";
import { ARCHITECTURE_NODES } from "@/data/architecture";

export function InfrastructureDiagram() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("anycast-dns");

  const selectedNode =
    ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || ARCHITECTURE_NODES[1];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case "user":
        return <Globe className="w-4 h-4" />;
      case "anycast-dns":
        return <Activity className="w-4 h-4" />;
      case "cdn-edge":
        return <Shield className="w-4 h-4" />;
      case "edge-compute":
        return <Cpu className="w-4 h-4" />;
      case "cloud-db":
        return <Database className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <section id="architecture" className="w-full py-16 sm:py-24 bg-background border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-3">
            <span>06 // INTERACTIVE CONNECTIVITY PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            معماری جریان ترافیک و اتصال هوشمند نودها
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            مشاهده کنید که چگونه یک درخواست ورودی از دورترین کاربر تا نزدیک‌ترین نود Anycast و کلاستر دیتابیس در کسری از ثانیه مسیریابی و پردازش می‌شود.
          </p>
        </div>

        {/* Interactive Railway-style Topology Flow */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/60 p-6 sm:p-10 mb-8">
          {/* Visual Pipeline Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative mb-10">
            {ARCHITECTURE_NODES.map((node, idx) => {
              const isSelected = node.id === selectedNodeId;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`group relative text-start p-4 rounded-xl border transition-all text-sm focus:outline-none ${
                    isSelected
                      ? "border-neutral-950 dark:border-white bg-white dark:bg-neutral-900 shadow-md ring-1 ring-neutral-950 dark:ring-white"
                      : "border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-700"
                  }`}
                >
                  {/* Step & Protocol */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-neutral-400">
                      STEP {node.step}
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {node.latency}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    <span className={`${isSelected ? "text-neutral-950 dark:text-white" : "text-neutral-500"}`}>
                      {getNodeIcon(node.id)}
                    </span>
                    <span className="text-xs sm:text-sm truncate">{node.titleFa}</span>
                  </div>

                  {/* English subtitle */}
                  <div className="font-mono text-[10px] text-neutral-500 truncate mb-2">
                    {node.titleEn}
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                    <span>{node.status}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Focused Detail Panel */}
          <div className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-neutral-400">
                  مرحله {selectedNode.step} در خط لوله:
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700">
                  {selectedNode.protocol}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                {selectedNode.titleFa} <span className="text-sm font-normal font-mono text-neutral-500">({selectedNode.titleEn})</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            {/* Right side specs */}
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-s border-neutral-200 dark:border-neutral-800 md:ps-6">
              <div className="text-xs font-mono text-neutral-400">
                مشخصات لایه انتخابی:
              </div>
              {selectedNode.specs.map((sp, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-neutral-500">{sp.label}:</span>
                  <span className="font-mono text-neutral-900 dark:text-neutral-100 font-medium dir-ltr">
                    {sp.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 text-xs pt-1 border-t border-neutral-100 dark:border-neutral-800">
                <span className="text-neutral-500">زمان پردازش لایه:</span>
                <span className="font-mono text-neutral-950 dark:text-white font-bold dir-ltr">
                  {selectedNode.latency}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
