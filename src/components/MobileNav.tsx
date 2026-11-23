"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#142033] shadow-sm md:hidden"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden" style={{ isolation: "isolate" }}>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-slate-950/55"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-[min(82vw,340px)] flex-col p-6 shadow-2xl" style={{ backgroundColor: "#ffffff", opacity: 1, zIndex: 10000, color: "#142033" }}>
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-black tracking-tight text-[#142033]">MENU<span className="text-blue-600">.</span></span>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#142033]"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col" style={{ backgroundColor: "#ffffff" }}>
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-200 py-4 text-base font-semibold transition hover:text-blue-700" style={{ color: "#334155", backgroundColor: "#ffffff", opacity: 1 }}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#142033] px-5 py-4 text-sm font-bold text-white"
            >
              Let&apos;s connect <ArrowUpRight size={16} />
            </a>
          </aside>
        </div>
      )}
    </>
  );
}
