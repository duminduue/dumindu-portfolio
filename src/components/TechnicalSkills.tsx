"use client";

import {
  Code2, Braces, Database, Globe2, Cpu, Bot, CircuitBoard,
  Wrench, DraftingCompass, BarChart3, Cloud, ShieldCheck, GitBranch
} from "lucide-react";

const groups = [
  {
    number: "01",
    title: "Programming & Data",
    description: "Languages and tools for building logic, working with data and developing solutions.",
    icon: Braces,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Pandas", "Scikit-learn", "Power BI", "Microsoft Excel"],
  },
  {
    number: "02",
    title: "Web & Software Development",
    description: "Frontend, backend and full-stack technologies used in software projects.",
    icon: Code2,
    skills: ["React", "Next.js", "Vue.js", "Node.js", "Express.js", "FastAPI", "HTML", "CSS"],
  },
  {
    number: "03",
    title: "Robotics & Embedded Systems",
    description: "Microcontrollers, sensors and control technologies for connected physical systems.",
    icon: Cpu,
    skills: ["ESP32", "Arduino", "MPU6050 / IMU", "PID Control", "MQ Sensors", "MAX30102", "Blynk IoT", "MQTT"],
  },
  {
    number: "04",
    title: "Engineering & Design",
    description: "Engineering design, modelling and industrial systems.",
    icon: Wrench,
    skills: ["SOLIDWORKS", "Mechanical Design", "3D Modelling", "PLC Fundamentals", "HMI Fundamentals", "Control Systems"],
  },
  {
    number: "05",
    title: "Databases & Development Tools",
    description: "Data storage, version control and practical development workflows.",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQLite", "Git", "GitHub", "Arduino IDE", "Visual Studio Code"],
  },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <p className="eyebrow">03 / Technical capabilities</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-2xl text-4xl font-black tracking-tight text-[#142033] md:text-5xl">Tools I use to<br />turn ideas into reality.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">A practical toolkit built through engineering studies, hands-on projects and continuous learning across software and physical systems.</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <span className="text-3xl font-black tracking-tight text-blue-700">05</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-[.14em] text-slate-500">Technology<br />groups</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <article key={group.number} className="group rounded-[1.5rem] border border-slate-200 bg-[#fbfcfe] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"><GroupIcon size={23} strokeWidth={1.7} /></span>
                  <span className="text-xs font-black tracking-[.2em] text-slate-300">{group.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-black tracking-tight text-[#142033]">{group.title}</h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-500">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition group-hover:border-blue-100 group-hover:text-blue-800">{skill}</span>)}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs leading-6 text-slate-400">This list represents technologies and tools used in projects or explored through learning. It does not indicate professional certification or equal proficiency in every tool.</p>
      </div>
    </section>
  );
}
