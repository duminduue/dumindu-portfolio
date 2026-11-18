"use client";

import { useState } from "react";
import {
  ArrowUpRight, Bot, BrainCircuit, Cloud, Code2, Cpu, Database,
  Factory, ShieldCheck, Wrench, X, ExternalLink
} from "lucide-react";

const domains = [
  { number: "01", title: "Mechatronics Engineering", detail: "Integrated mechanical, electrical and electronic systems", icon: Wrench, skills: ["Mechanical design", "SolidWorks", "Electronics", "Sensors", "System integration"], projects: [0, 3] },
  { number: "02", title: "Robotics Engineering", detail: "Robot design, embedded systems and intelligent control", icon: Bot, skills: ["ESP32", "Arduino", "PID control", "MPU6050 / IMU", "Motor control", "Embedded systems"], projects: [0, 2, 3] },
  { number: "03", title: "Artificial Intelligence", detail: "AI-enabled applications and intelligent systems", icon: BrainCircuit, skills: ["Python", "Gemini AI integration", "AI-assisted application development"], projects: [5] },
  { number: "04", title: "Machine Learning", detail: "Learning algorithms, modelling and prediction", icon: Cpu, skills: ["Python", "Random Forest", "Decision Trees", "Model training", "Model evaluation"], projects: [] },
  { number: "05", title: "Data Science", detail: "Data analysis, insights and evidence-based decisions", icon: Database, skills: ["Python", "Pandas", "SQL", "Power BI", "Microsoft Excel", "Data analysis"], projects: [] },
  { number: "06", title: "Industrial Automation", detail: "PLC, HMI, control and smart manufacturing", icon: Factory, skills: ["PLC fundamentals", "HMI", "Sensors", "Control systems", "Industrial maintenance"], projects: [] },
  { number: "07", title: "Cloud Computing", detail: "Cloud platforms, infrastructure and deployment", icon: Cloud, skills: ["Cloud computing fundamentals", "Application deployment", "Infrastructure concepts"], projects: [] },
  { number: "08", title: "Cybersecurity", detail: "Secure-by-design systems and digital infrastructure", icon: ShieldCheck, skills: ["Secure software practices", "Application security fundamentals", "Network security concepts"], projects: [] },
  { number: "09", title: "Software Engineering", detail: "Full-stack development and reliable software systems", icon: Code2, skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "Python"], projects: [4, 5] },
];

const projects = [
  { title: "Self-Balancing Mobile Robot Using PID Control", stack: "ESP32 · MPU6050 · PID · SolidWorks", anchor: "project-01" },
  { title: "IoT-Based Health Monitoring System", stack: "ESP32 · MAX30102 · DS18B20 · Blynk", anchor: "project-02" },
  { title: "Autonomous Mobile Robot for Indoor Air Quality Monitoring", stack: "ESP32 · MQ-2 · MQ-135 · DHT22", anchor: "project-03" },
  { title: "Hand Gesture-Based Robotic Car", stack: "Dual ESP32 · MPU6050 · ESP-NOW", anchor: "project-04" },
  { title: "Industrial Engineering Calculator", stack: "React · TypeScript · Python · FastAPI · SQLite", anchor: "project-05" },
  { title: "PlantorAI – AI-Powered Plant Care Platform", stack: "React · TypeScript · Node.js · MongoDB · Gemini AI", anchor: "project-06" },
];

export default function DomainExplorer() {
  const [selected, setSelected] = useState(null);
  const active = selected === null ? null : domains[selected];
  const ActiveIcon = active?.icon;

  return (
    <>
      <section id="domains" className="bg-[#f7f9fc] py-24 md:py-32">
        <div className="section-shell">
          <p className="eyebrow">02 / Professional direction</p>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-4xl font-black tracking-tight text-[#142033] md:text-5xl">Nine domains.<br />One connected vision.</h2>
            <p className="max-w-md text-base leading-7 text-slate-500">Explore the skills, technologies and practical work connected to each area of my professional development.</p>
          </div>

          <div className="domain-radial relative mx-auto mt-16 hidden w-full max-w-[1100px] lg:block">
            <svg className="domain-radial-lines absolute inset-0 h-full w-full" viewBox="0 0 1100 820" fill="none" aria-hidden="true">
              <g stroke="#93b4f7" strokeWidth="2" strokeOpacity=".8" strokeLinecap="round">
                <line x1="550" y1="410" x2="550" y2="100" /><line x1="550" y1="410" x2="774" y2="148" />
                <line x1="550" y1="410" x2="884" y2="310" /><line x1="550" y1="410" x2="858" y2="528" />
                <line x1="550" y1="410" x2="656" y2="710" /><line x1="550" y1="410" x2="444" y2="710" />
                <line x1="550" y1="410" x2="242" y2="528" /><line x1="550" y1="410" x2="216" y2="310" />
                <line x1="550" y1="410" x2="326" y2="148" />
              </g>
              <g fill="#2563eb">
                <circle cx="550" cy="100" r="5" /><circle cx="774" cy="148" r="5" /><circle cx="884" cy="310" r="5" />
                <circle cx="858" cy="528" r="5" /><circle cx="656" cy="710" r="5" /><circle cx="444" cy="710" r="5" />
                <circle cx="242" cy="528" r="5" /><circle cx="216" cy="310" r="5" /><circle cx="326" cy="148" r="5" />
              </g>
            </svg>

            <div className="domain-radial-hub absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-3xl border border-blue-200 bg-white px-8 py-7 text-center shadow-xl shadow-blue-900/10">
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Cpu size={28} /></span>
              <span className="text-[10px] font-black tracking-[.2em] text-blue-700">CENTRAL HUB</span>
              <span className="mt-1 whitespace-nowrap text-lg font-black text-[#142033]">Engineering &amp; Technology</span>
              <span className="mt-1 text-xs text-slate-500">One connected vision</span>
            </div>

            {domains.map((domain, index) => {
              const Icon = domain.icon;
              const positions = [
                { left: "50%", top: "12.2%" }, { left: "70.4%", top: "18%" }, { left: "80.4%", top: "37.8%" },
                { left: "78%", top: "64.4%" }, { left: "59.6%", top: "86.6%" }, { left: "40.4%", top: "86.6%" },
                { left: "22%", top: "64.4%" }, { left: "19.6%", top: "37.8%" }, { left: "29.6%", top: "18%" },
              ];
              return (
                <button type="button" key={domain.number} style={positions[index]} onClick={() => setSelected(index)} aria-label={`Explore ${domain.title}`} className="domain-radial-card group absolute z-10 flex min-h-[112px] w-[218px] -translate-x-1/2 -translate-y-1/2 items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-md shadow-slate-900/5 transition duration-300 hover:z-20 hover:scale-[1.04] hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={20} /></span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-black tracking-[.16em] text-blue-600">{domain.number} / DOMAIN</span>
                    <span className="mt-1 block text-sm font-bold leading-snug text-[#142033]">{domain.title}</span>
                    <span className="mt-1 block text-[11px] leading-4 text-slate-500">{domain.detail}</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-blue-700">Explore domain <ArrowUpRight size={12} /></span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="domain-radial-mobile mt-12 lg:hidden">
            <div className="mx-auto mb-7 flex w-fit flex-col items-center rounded-2xl border border-blue-200 bg-white px-7 py-5 text-center shadow-lg shadow-blue-900/5">
              <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Cpu size={26} /></span>
              <span className="text-[10px] font-black tracking-[.18em] text-blue-700">CENTRAL HUB</span>
              <span className="mt-1 text-base font-black text-[#142033]">Engineering &amp; Technology</span>
              <span className="mt-1 text-xs text-slate-500">One connected vision</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return <button type="button" key={domain.number} onClick={() => setSelected(index)} className="group flex min-h-[120px] items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={21} /></span>
                  <span><span className="block text-[10px] font-black tracking-[.16em] text-blue-600">{domain.number} / DOMAIN</span><span className="mt-1 block text-sm font-bold text-[#142033]">{domain.title}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{domain.detail}</span><span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-blue-700">Explore domain <ArrowUpRight size={12} /></span></span>
                </button>;
              })}
            </div>
          </div>

          <p className="mt-10 text-center text-sm font-medium text-slate-500">Select a domain to explore its related skills, technologies and featured projects.</p>
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
              <div className="mt-3 flex flex-wrap gap-2">{active.skills.map((skill) => <span key={skill} className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-semibold text-blue-800">{skill}</span>)}</div>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between gap-3"><h3 className="text-xs font-black tracking-[.16em] text-[#142033]">RELATED PROJECTS</h3><span className="text-[10px] text-slate-400">{active.projects.length} linked</span></div>
              {active.projects.length ? <div className="mt-3 grid gap-3">{active.projects.map((projectIndex) => { const project = projects[projectIndex]; return <a key={project.anchor} href={`#${project.anchor}`} onClick={() => setSelected(null)} className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"><span><span className="block text-sm font-bold text-[#142033]">{project.title}</span><span className="mt-1 block text-xs text-slate-500">{project.stack}</span></span><ExternalLink size={17} className="shrink-0 text-blue-600 transition group-hover:translate-x-0.5" /></a>; })}</div> : <p className="mt-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-6 text-slate-500">No featured project is currently linked to this domain. Related work can be added as it is completed and documented.</p>}
            </div>
            <p className="mt-6 text-[11px] leading-5 text-slate-400">Skills shown reflect the current portfolio profile and areas of development. Project links are limited to work currently featured in this portfolio.</p>
          </section>
        </div>
      )}
    </>
  );
}
