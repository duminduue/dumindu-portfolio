"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

const links = [
  ["About", "#about"],
  ["Domains", "#domains"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Research", "#research"],
  ["Achievements", "#certifications"],
];

export default function SiteHeader() {
  const [expanded, setExpanded] = useState(true);

  return (
    <header className="sticky top-0 z-[200] w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="section-shell flex min-h-[68px] items-center justify-between gap-3 py-3" aria-label="Main navigation">
        <a href="#home" className="shrink-0 text-xl font-black tracking-tight text-[#142033]">
          DUMINDU<span className="text-blue-600">.</span>
        </a>

        <div className={`min-w-0 flex-1 items-center justify-center gap-5 text-xs font-semibold text-slate-600 xl:gap-7 ${expanded ? "hidden lg:flex" : "hidden"}`}>
          {links.map(([label, href]) => (
            <a key={href} className="whitespace-nowrap transition hover:text-blue-600" href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <MobileNav />
          <a
            href="#contact"
            className={`hidden items-center gap-2 rounded-full bg-[#142033] px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 lg:inline-flex ${expanded ? "" : "lg:hidden"}`}
          >
            Let&apos;s connect <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-label={expanded ? "Collapse navigation bar" : "Expand navigation bar"}
            aria-expanded={expanded}
            title={expanded ? "Hide navigation links" : "Show navigation links"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {expanded ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
          </button>
        </div>
      </nav>

      {expanded && (
        <div className="border-t border-slate-100 bg-white px-4 py-2 lg:hidden">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="py-1 text-xs font-semibold text-slate-600 transition hover:text-blue-600">
                {label}
              </a>
            ))}
            <a href="#contact" className="py-1 text-xs font-bold text-blue-700">Let&apos;s connect</a>
          </div>
        </div>
      )}
    </header>
  );
}
