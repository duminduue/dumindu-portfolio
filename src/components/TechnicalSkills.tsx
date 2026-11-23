"use client";

import { useState } from "react";
import { Code2, Braces, Database, Cpu, Wrench, X, ArrowUpRight, Info } from "lucide-react";

const groups = [
 { number:"01", title:"Programming & Data", description:"Languages and tools for building logic, working with data and developing solutions.", icon:Braces, skills:["Python","JavaScript","TypeScript","SQL","Pandas","Scikit-learn","Power BI","Microsoft Excel"] },
 { number:"02", title:"Web & Software Development", description:"Frontend, backend and full-stack technologies used in software projects.", icon:Code2, skills:["React","Next.js","Vue.js","Node.js","Express.js","FastAPI","HTML","CSS"] },
 { number:"03", title:"Robotics & Embedded Systems", description:"Microcontrollers, sensors and control technologies for connected physical systems.", icon:Cpu, skills:["ESP32","Arduino","MPU6050 / IMU","PID Control","MQ Sensors","MAX30102","Blynk IoT","MQTT"] },
 { number:"04", title:"Engineering & Design", description:"Engineering design, modelling and industrial systems.", icon:Wrench, skills:["SOLIDWORKS","Mechanical Design","3D Modelling","PLC Fundamentals","HMI Fundamentals","Control Systems"] },
 { number:"05", title:"Databases & Development Tools", description:"Data storage, version control and practical development workflows.", icon:Database, skills:["MongoDB","MySQL","SQLite","Git","GitHub","Arduino IDE","Visual Studio Code"] },
];
const projects = [
 { title:"Self-Balancing Mobile Robot Using PID Control", anchor:"project-01", skills:["ESP32","MPU6050 / IMU","PID Control","SOLIDWORKS","Arduino"] },
 { title:"IoT-Based Health Monitoring System", anchor:"project-02", skills:["ESP32","MAX30102","DS18B20","Blynk IoT"] },
 { title:"Autonomous Mobile Robot for Indoor Air Quality Monitoring", anchor:"project-03", skills:["ESP32","MQ Sensors","DHT22","Arduino"] },
 { title:"Hand Gesture-Based Robotic Car", anchor:"project-04", skills:["ESP32","MPU6050 / IMU","Arduino"] },
 { title:"Industrial Engineering Calculator", anchor:"project-05", skills:["React","TypeScript","Python","FastAPI","SQLite"] },
 { title:"PlantorAI – AI-Powered Plant Care Platform", anchor:"project-06", skills:["React","TypeScript","Node.js","MongoDB"] },
];
export default function TechnicalSkills() {
 const [selected,setSelected]=useState<string|null>(null);
 const related=selected?projects.filter(p=>p.skills.some(s=>s.toLowerCase()===selected.toLowerCase())):[];
 return <>
 <section id="skills" className="bg-[#f6f8fb] pt-0 pb-24 md:pt-0 md:pb-32">
  <div className="section-shell">
   <p className="eyebrow">03 / Technical capabilities</p>
   <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
    <div><h2 className="max-w-2xl text-4xl font-black tracking-tight text-[#142033] md:text-5xl">Tools I use to<br/>turn ideas into reality.</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-500">Explore the technologies behind my engineering and software work. Select any skill to see where it is applied in my projects.</p></div>
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"><span className="text-3xl font-black tracking-tight text-blue-700">05</span><span className="text-xs font-bold uppercase leading-5 tracking-[.14em] text-slate-500">Technology<br/>groups</span></div>
   </div>
   <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {groups.map(group=>{const Icon=group.icon;return <article key={group.number} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]">
     <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-5 text-white"><div className="flex items-center justify-between gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white"><Icon size={22}/></span><span className="text-xs font-black tracking-[.2em] text-white/65">{group.number}</span></div><h3 className="mt-4 text-lg font-black tracking-tight">{group.title}</h3></div>
     <div className="p-5 md:p-6"><p className="min-h-[3rem] text-sm leading-6 text-slate-500">{group.description}</p>
     <div className="mt-5 flex flex-wrap gap-2">{group.skills.map(skill=><button key={skill} type="button" onClick={()=>setSelected(skill)} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800">{skill} ↗</button>)}</div>
     </div></article>})}
   </div>
   <p className="mt-8 text-center text-xs leading-6 text-slate-400">This list represents technologies and tools used in projects or explored through learning. It does not indicate professional certification or equal proficiency in every tool.</p>
  </div>
 </section>
 {selected && <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-[#0b1729]/60 p-4 backdrop-blur-sm" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}>
  <section role="dialog" aria-modal="true" aria-labelledby="skill-dialog-title" className="my-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
   <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-black tracking-[.18em] text-blue-600">TECHNOLOGY / PROJECT CONNECTIONS</p><h2 id="skill-dialog-title" className="mt-2 text-2xl font-black text-[#142033]">{selected}</h2><p className="mt-2 text-sm text-slate-500">Projects in this portfolio that list this technology.</p></div><button type="button" onClick={()=>setSelected(null)} aria-label="Close technology details" className="rounded-full p-2 text-slate-500 hover:bg-slate-100"><X size={21}/></button></div>
   <div className="mt-6"><h3 className="text-xs font-black tracking-[.16em] text-[#142033]">RELATED PROJECTS ({related.length})</h3>
    {related.length? <div className="mt-3 grid gap-3">{related.map(project=><a key={project.anchor} href={`#${project.anchor}`} onClick={()=>setSelected(null)} className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"><span className="text-sm font-bold text-[#142033]">{project.title}</span><ArrowUpRight size={18} className="shrink-0 text-blue-600"/></a>)}</div>:<div className="mt-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4"><div className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700"><Info size={18}/></span><div><p className="text-sm font-bold text-[#142033]">No featured project yet</p><p className="mt-1 text-sm leading-6 text-slate-600">This technology is part of my toolkit and learning journey. A matching project will be listed here when there is work ready to showcase.</p><a href="#projects" onClick={()=>setSelected(null)} className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900">Browse all projects <ArrowUpRight size={14}/></a></div></div></div>}
   </div>
   <p className="mt-6 text-[11px] leading-5 text-slate-400">Only projects currently featured in this portfolio are shown.</p>
  </section>
 </div>}
 </>;
}
