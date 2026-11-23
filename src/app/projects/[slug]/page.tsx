import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowUpRight, BookOpen, Code2, FileText, Github,
  Images, PlayCircle, Workflow, Wrench, CheckCircle2, Lightbulb
} from "lucide-react";

const projects = {
  "self-balancing-mobile-robot": {
    number: "01",
    title: "Self-Balancing Mobile Robot Using PID Control",
    category: "ROBOTICS · EMBEDDED SYSTEMS",
    summary: "An ESP32-based self-balancing robot using MPU6050 IMU sensing and PID control, with encoder feedback and wireless web-based control.",
    stack: ["ESP32", "MPU6050", "PID Control", "SOLIDWORKS"],
  },
  "iot-health-monitoring": {
    number: "02",
    title: "IoT-Based Health Monitoring System",
    category: "IOT · EMBEDDED SYSTEMS",
    summary: "A sensor-based monitoring system for heart rate, SpO₂, body temperature and ambient conditions, with wireless monitoring through Blynk IoT.",
    stack: ["ESP32", "MAX30102", "DS18B20", "Blynk IoT"],
  },
  "indoor-air-quality-robot": {
    number: "03",
    title: "Autonomous Mobile Robot for Indoor Air Quality Monitoring",
    category: "AUTONOMOUS ROBOTICS · IOT",
    summary: "An ESP32-based mobile robot combining line-following navigation, checkpoint recognition, obstacle avoidance and environmental sensing.",
    stack: ["ESP32", "MQ-2", "MQ-135", "DHT22"],
  },
  "hand-gesture-robotic-car": {
    number: "04",
    title: "Hand Gesture-Based Robotic Car",
    category: "ROBOTICS · WIRELESS CONTROL",
    summary: "A wireless gesture-controlled robotic car using dual ESP32 microcontrollers and MPU6050-based tilt sensing with variable-speed motor control.",
    stack: ["Dual ESP32", "MPU6050", "ESP-NOW"],
  },
  "industrial-engineering-calculator": {
    number: "05",
    title: "Industrial Engineering Calculator",
    category: "SOFTWARE ENGINEERING",
    summary: "An engineering calculation platform with formula calculations, unit conversion, a formula library and calculation history.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "SQLite"],
  },
  "plantorai": {
    number: "06",
    title: "PlantorAI – AI-Powered Plant Care Platform",
    category: "AI APPLICATIONS · FULL-STACK",
    summary: "A full-stack plant-care platform with a searchable catalogue, Gemini AI-powered assistant and role-based customer, seller and admin experiences.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
  },
};

type ProjectSlug = keyof typeof projects;

const detailSections = [
  { title: "Project overview", description: "A clear introduction to the project, its purpose, scope and final deliverable.", icon: BookOpen },
  { title: "Problem statement & objectives", description: "The problem being addressed, project motivation and measurable objectives.", icon: Lightbulb },
  { title: "System architecture & design", description: "Architecture diagrams, workflow, circuit diagrams, CAD designs and key design decisions.", icon: Workflow },
  { title: "Implementation & source code", description: "Hardware and software implementation, important code modules and repository access.", icon: Code2 },
  { title: "Testing, results & evaluation", description: "Test approach, results, performance evidence, validation and known limitations.", icon: CheckCircle2 },
  { title: "Documentation & report", description: "Project report, technical documentation, presentations and downloadable supporting files.", icon: FileText },
  { title: "Videos & visual evidence", description: "Demonstration videos, build photographs, screenshots and other project evidence.", icon: Images },
  { title: "Future improvements", description: "Potential extensions and improvements identified from the completed work.", icon: Wrench },
];

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#f6f8fb] pb-20">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="section-shell flex h-[72px] items-center justify-between">
          <Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"><ArrowLeft size={16}/> All projects</Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 py-16 text-white md:py-20">
        <div className="section-shell">
          <p className="text-xs font-black tracking-[.2em] text-white/70">PROJECT {project.number} / 06 · {project.category}</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50 md:text-lg">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold text-white">{item}</span>)}</div>
        </div>
      </section>

      <div className="section-shell">
        <section className="-mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-black tracking-[.18em] text-blue-700">PROJECT RESOURCE HUB</p>
          <h2 className="mt-2 text-2xl font-black text-[#142033]">Explore the complete project</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">This page is the dedicated home for the project story, technical work and supporting evidence. Detailed content and resource links will be added as the project information is provided and verified.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500"><Github size={17}/> GitHub repository · To be added</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500"><PlayCircle size={17}/> Demo video · To be added</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500"><FileText size={17}/> Project report · To be added</span>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <p className="eyebrow">Project contents</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#142033] md:text-4xl">From concept to evidence.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Each area will be filled with the actual project material: source code, diagrams, reports, videos, test evidence and links.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {detailSections.map((section, index) => {
              const Icon = section.icon;
              return <article key={section.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-4 text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15"><Icon size={20}/></span>
                  <span className="text-xs font-black tracking-[.18em] text-white/65">0{index + 1}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-[#142033]">{section.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{section.description}</p>
                  <p className="mt-4 text-xs font-bold text-blue-700">Project material to be added</p>
                </div>
              </article>;
            })}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#142033] p-6 text-white md:p-8">
          <div><p className="text-xs font-black tracking-[.18em] text-blue-300">KEEP EXPLORING</p><h2 className="mt-2 text-xl font-black">More engineering projects</h2></div>
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500">Back to portfolio <ArrowUpRight size={16}/></Link>
        </div>
      </div>
    </main>
  );
}
