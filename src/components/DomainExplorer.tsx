"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight, Bot, BrainCircuit, Cloud, Code2, Cpu, Database,
  Factory, ShieldCheck, Wrench, X, ExternalLink, Info, ArrowRight
} from "lucide-react";

const domains = [
  { number: "01", title: "Mechatronics Engineering", detail: "Integrated mechanical, electrical and electronic systems", icon: Wrench, skills: ["Mechanical design", "SolidWorks", "Electronics", "Sensors", "System integration"], projects: [0, 3] },
  { number: "02", title: "Robotics Engineering", detail: "Robot design, embedded systems and intelligent control", icon: Bot, skills: ["ESP32", "Arduino", "PID control", "MPU6050 / IMU", "Motor control", "Embedded systems"], projects: [0, 2, 3] },
  { number: "03", title: "Industrial Automation", detail: "PLC, HMI, control and smart manufacturing", icon: Factory, skills: ["PLC fundamentals", "HMI", "Sensors", "Control systems", "Industrial maintenance"], projects: [] },
  { number: "04", title: "Artificial Intelligence", detail: "AI-enabled applications and intelligent systems", icon: BrainCircuit, skills: ["Python", "Gemini AI integration", "AI-assisted application development"], projects: [5] },
  { number: "05", title: "Machine Learning", detail: "Learning algorithms, modelling and prediction", icon: Cpu, skills: ["Python", "Random Forest", "Decision Trees", "Model training", "Model evaluation"], projects: [] },
  { number: "06", title: "Data Science", detail: "Data analysis, insights and evidence-based decisions", icon: Database, skills: ["Python", "Pandas", "SQL", "Power BI", "Microsoft Excel", "Data analysis"], projects: [] },
  { number: "07", title: "Software Engineering", detail: "Full-stack development and reliable software systems", icon: Code2, skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "Python"], projects: [4, 5] },
  { number: "08", title: "Cloud Computing", detail: "Cloud platforms, infrastructure and deployment", icon: Cloud, skills: ["Cloud computing fundamentals", "Application deployment", "Infrastructure concepts"], projects: [] },
  { number: "09", title: "Cybersecurity", detail: "Secure-by-design systems and digital infrastructure", icon: ShieldCheck, skills: ["Secure software practices", "Application security fundamentals", "Network security concepts"], projects: [] },
];

const pillars = [
  { number: "01", title: "Core Engineering", subtitle: "Designing and controlling physical systems", range: [0, 3], tone: "from-blue-700 to-blue-500" },
  { number: "02", title: "Intelligence & Data", subtitle: "Building adaptive, analytical solutions", range: [3, 6], tone: "from-indigo-700 to-blue-600" },
  { number: "03", title: "Digital Technology", subtitle: "Engineering connected and secure software", range: [6, 9], tone: "from-slate-800 to-slate-600" },
];

const projects = [
  { title: "Self-Balancing Mobile Robot Using PID Control", stack: "ESP32 · MPU6050 · PID · SolidWorks", anchor: "project-01", slug: "self-balancing-mobile-robot" },
  { title: "IoT-Based Health Monitoring System", stack: "ESP32 · MAX30102 · DS18B20 · Blynk", anchor: "project-02", slug: "iot-health-monitoring" },
  { title: "Autonomous Mobile Robot for Indoor Air Quality Monitoring", stack: "ESP32 · MQ-2 · MQ-135 · DHT22", anchor: "project-03", slug: "indoor-air-quality-robot" },
  { title: "Hand Gesture-Based Robotic Car", stack: "Dual ESP32 · MPU6050 · ESP-NOW", anchor: "project-04", slug: "hand-gesture-robotic-car" },
  { title: "Industrial Engineering Calculator", stack: "React · TypeScript · Python · FastAPI · SQLite", anchor: "project-05", slug: "industrial-engineering-calculator" },
  { title: "PlantorAI – AI-Powered Plant Care Platform", stack: "React · TypeScript · Node.js · MongoDB · Gemini AI", anchor: "project-06", slug: "plantorai" },
];

export default function DomainExplorer() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : domains[selected];
  const ActiveIcon = active?.icon;

  return (
    <>
      <section id="domains" className="bg-[#f6f8fb] pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="section-shell">
          <p className="eyebrow">02 / Professional direction</p>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-2xl text-4xl font-black tracking-tight text-[#142033] md:text-5xl">Engineering across<br />three connected pillars.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">My professional interests bring together core engineering, intelligent technologies and digital systems to develop practical solutions.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <span className="text-3xl font-black tracking-tight text-blue-700">09</span>
              <span className="text-xs font-bold uppercase leading-5 tracking-[.14em] text-slate-500">Professional<br />domains</span>
            </div>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]">
                <div className={`bg-gradient-to-r ${pillar.tone} px-5 py-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[.2em] text-white/70">PILLAR {pillar.number}</span>
                    <span className="text-3xl font-light text-white/35">0{pillar.number.slice(-1)}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-black tracking-tight">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{pillar.subtitle}</p>
                </div>
                <div className="divide-y divide-slate-100 px-4">
                  {domains.slice(pillar.range[0], pillar.range[1]).map((domain) => {
                    const DomainIcon = domain.icon;
                    const index = domains.findIndex((item) => item.number === domain.number);
                    return (
                      <button key={domain.number} type="button" onClick={() => setSelected(index)} aria-label={`Explore ${domain.title}`} className="group flex w-full items-center gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:scale-105 group-hover:bg-blue-100"><DomainIcon size={20} strokeWidth={1.7} /></span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10px] font-black tracking-[.18em] text-blue-600">{domain.number} / DOMAIN</span>
                          <span className="mt-1 block text-sm font-extrabold leading-5 text-[#142033]">{domain.title}</span>
                          <span className="mt-1 block text-xs leading-5 text-slate-500">{domain.detail}</span>
                        </span>
                        <ArrowUpRight size={18} className="shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-slate-500">Select any domain to explore its related skills, technologies and featured projects.</p>
        </div>
      </section>

      {active && ActiveIcon && (
        <div className="domain-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#0b1729]/60 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="domain-dialog-title" className="my-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><ActiveIcon size={28} /></span>
                <div><p className="text-[10px] font-black tracking-[.18em] text-blue-600">{active.number} / PROFESSIONAL DOMAIN</p><h2 id="domain-dialog-title" className="mt-1 text-2xl font-black text-[#142033]">{active.title}</h2><p className="mt-1 text-sm text-slate-500">{active.detail}</p></div>
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close domain details" className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"><X size={21} /></button>
            </div>
            <div className="mt-7">
              <h3 className="text-xs font-black tracking-[.16em] text-[#142033]">SKILLS &amp; TECHNOLOGIES</h3>
              <div className="mt-3 flex flex-wrap gap-2">{active.skills.map((skill) => <a key={skill} href="#skills" onClick={() => setSelected(null)} title={`Explore ${skill} in Technical Skills`} className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-semibold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100">{skill} ↗</a>)}</div>
            </div>
            <div className="mt-7">
              <div className="flex items-center justify-between gap-3"><h3 className="text-xs font-black tracking-[.16em] text-[#142033]">RELATED PROJECTS</h3><span className="text-[10px] text-slate-400">{active.projects.length} linked</span></div>
              {active.projects.length ? <div className="mt-3 grid gap-3">{active.projects.map((projectIndex) => { const project = projects[projectIndex]; return <Link key={project.anchor} href={`/projects/${project.slug}`} onClick={() => setSelected(null)} className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"><span><span className="block text-sm font-bold text-[#142033]">{project.title}</span><span className="mt-1 block text-xs text-slate-500">{project.stack}</span></span><ExternalLink size={17} className="shrink-0 text-blue-600 transition group-hover:translate-x-0.5" /></a>; })}</div> : <div className="mt-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700"><Info size={18}/></span><div><p className="text-sm font-bold text-[#142033]">More work is on the way</p><p className="mt-1 text-sm leading-6 text-slate-600">I’m continuing to develop my experience in this area. A related project will appear here when it is ready to showcase.</p><a href="#projects" onClick={() => setSelected(null)} className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900">Explore all projects <ArrowRight size={14}/></a></div></div>
              </div>}
            </div>
            <p className="mt-6 text-[11px] leading-5 text-slate-400">Skills shown reflect the current portfolio profile and areas of development. Project links are limited to work currently featured in this portfolio.</p>
          </section>
        </div>
      )}
    </>
  );
}
