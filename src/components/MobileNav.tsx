"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["01", "About", "#about"],
  ["02", "Domains", "#domains"],
  ["03", "Skills", "#skills"],
  ["04", "Projects", "#projects"],
  ["05", "Experience", "#experience"],
  ["06", "Education", "#education"],
  ["07", "Research", "#research"],
  ["08", "Achievements", "#certifications"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const menu = open && mounted ? createPortal(
    <div className="fixed inset-0 z-[99999] md:hidden" style={{ backgroundColor: "#f8fafc", isolation: "isolate" }}>
      <div className="flex h-full min-h-0 flex-col overflow-y-auto" style={{ backgroundColor: "#f8fafc", color: "#142033" }}>
        <div className="h-1 w-full shrink-0 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
        <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
          <div>
            <p className="text-xl font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></p>
            <p className="mt-1 text-[10px] font-bold tracking-[.22em] text-slate-400">NAVIGATION</p>
          </div>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#142033] transition hover:bg-slate-100"
            onClick={() => setOpen(false)}
          >
            <X size={21} />
          </button>
        </header>

        <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-5 pb-6 pt-7">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Explore the portfolio</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#142033]">Where would you like to go?</h2>
          </div>

          <nav aria-label="Mobile navigation" className="grid grid-cols-1 gap-2">
            {links.map(([number, label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="group flex min-h-[58px] items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                <span className="w-7 text-xs font-black tracking-wider text-blue-600">{number}</span>
                <span className="flex-1 text-[15px] font-bold text-slate-700 group-hover:text-[#142033]">{label}</span>
                <ArrowUpRight size={17} className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#142033] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-blue-700"
          >
            Let&apos;s connect <ArrowUpRight size={17} />
          </a>
          <p className="mt-5 text-center text-[10px] font-bold tracking-[.18em] text-slate-400">DESIGNING · DEVELOPING · LEARNING</p>
        </main>
      </div>
    </div>,
    document.body
  ) : null;

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
      {menu}
    </>
  );
}
