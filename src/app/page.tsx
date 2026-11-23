import Image from "next/image";
import Link from "next/link";
import HeroEngineering3D from "@/components/HeroEngineering3D";
import ConveyorBox3D from "@/components/ConveyorBox3D";
import DomainExplorer from "@/components/DomainExplorer";
import TechnicalSkills from "@/components/TechnicalSkills";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Workflow,
  Github,
  Linkedin,
  Code2,
  Bot,
  BrainCircuit,
  Database,
  Factory,
  Cloud,
  ShieldCheck,
  Wrench,
  Activity,
  Wind,
  Car,
  Calculator,
  Sprout,
  BookOpen,
  Award,
  BadgeCheck,
  Medal,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Self-Balancing Mobile Robot Using PID Control",
    visual: Cpu,
    category: "ROBOTICS · EMBEDDED SYSTEMS",
    summary: "Designed and developed an ESP32-based self-balancing robot using MPU6050 IMU sensing and PID control, with encoder feedback and wireless web-based control.",
    stack: ["ESP32", "MPU6050", "PID", "SOLIDWORKS"],
    image: "/images/projects/project-01.jpg",
  },
  {
    number: "02",
    title: "IoT-Based Health Monitoring System",
    visual: Activity,
    category: "IOT · EMBEDDED SYSTEMS",
    summary: "Developed a sensor-based monitoring system for heart rate, SpO₂, body temperature and ambient conditions, with wireless monitoring through Blynk IoT.",
    stack: ["ESP32", "MAX30102", "DS18B20", "Blynk"],
    image: "/images/projects/project-02.jpg",
  },
  {
    number: "03",
    title: "Autonomous Mobile Robot for Indoor Air Quality Monitoring",
    visual: Wind,
    category: "AUTONOMOUS ROBOTICS · IOT",
    summary: "Developed an ESP32-based mobile robot combining line-following navigation, checkpoint recognition, obstacle avoidance and environmental sensing.",
    stack: ["ESP32", "MQ-2", "MQ-135", "DHT22"],
    image: "/images/projects/project-03.png",
  },
  {
    number: "04",
    title: "Hand Gesture-Based Robotic Car",
    visual: Car,
    category: "ROBOTICS · WIRELESS CONTROL",
    summary: "Built a wireless gesture-controlled robotic car using dual ESP32 microcontrollers and MPU6050-based tilt sensing with variable-speed motor control.",
    stack: ["Dual ESP32", "MPU6050", "ESP-NOW"],
    image: "/images/projects/project-04.png",
  },
  {
    number: "05",
    title: "Industrial Engineering Calculator",
    visual: Calculator,
    category: "SOFTWARE ENGINEERING",
    summary: "Developed an engineering calculation platform with formula calculations, unit conversion, a formula library and calculation history. The CV records 104 passing automated tests.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "SQLite"],
    image: "/images/projects/project-05.png",
  },
  {
    number: "06",
    title: "PlantorAI – AI-Powered Plant Care Platform",
    visual: Sprout,
    category: "AI APPLICATIONS · FULL-STACK",
    summary: "Built a full-stack plant-care platform with a searchable catalogue, Gemini AI-powered assistant and role-based customer, seller and admin experiences. The CV records 55 passing backend tests.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
    image: "/images/projects/project-06.png",
  },
];

const pillars = [
  { title: "Core Engineering", description: "Building a practical foundation in physical systems, robotics and industrial automation.", items: ["Mechatronics Engineering", "Robotics Engineering", "Industrial Automation"] },
  { title: "Intelligence & Data", description: "Developing capabilities to make engineering systems more adaptive, analytical and intelligent.", items: ["Artificial Intelligence", "Machine Learning", "Data Science"] },
  { title: "Digital Technology", description: "Extending engineering solutions through software, cloud infrastructure and secure systems.", items: ["Software Engineering", "Cloud Computing", "Cybersecurity"] },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="relative z-[200] border-b border-slate-200/80 bg-white/90 backdrop-blur-xl xl:sticky xl:top-0">
        <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="text-xl font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-blue-600" href="#about">About</a>
            <a className="transition hover:text-blue-600" href="#domains">Domains</a>
            <a className="transition hover:text-blue-600" href="#skills">Skills</a>
            <a className="transition hover:text-blue-600" href="#projects">Projects</a>
            <a className="transition hover:text-blue-600" href="#experience">Experience</a>
            <a className="transition hover:text-blue-600" href="#education">Education</a>
            <a className="transition hover:text-blue-600" href="#research">Research</a>
            <a className="transition hover:text-blue-600" href="#certifications">Achievements</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <MobileNav />
            <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#142033] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 md:inline-flex">
              Let&apos;s connect <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="hero-grid relative isolate bg-[#101c30] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-52 left-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="section-shell grid min-h-[560px] items-start gap-14 pt-6 pb-4 md:grid-cols-[1.25fr_.75fr] md:pt-8 md:pb-6">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> GRADUATE ENGINEER <span className="text-blue-300">·</span> SRI LANKA
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.3em] text-blue-300">Hello, I&apos;m</p>
            <h1 className="text-5xl font-black leading-[1.05] tracking-[-.045em] sm:text-6xl lg:text-[78px]">
              Dumindu<br /><span className="text-blue-400">Ekanayaka.</span>
            </h1>
            <h2 className="mt-7 text-xl font-semibold leading-snug text-slate-200 md:text-2xl">Graduate Mechatronics &amp; Robotics Engineer</h2>
            <p className="mt-6 max-w-[650px] text-base leading-8 text-slate-300 md:text-lg">
              I am a Mechatronics and Robotics Engineering graduate interested in robotics, industrial automation and software development.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">Discover my story <ArrowDown size={16} /></a>
              <a href="/Dumindu-Ekanayaka-CV.pdf" download="Dumindu-Ekanayaka-CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-400/10 px-7 py-4 text-sm font-bold text-blue-100 transition hover:bg-blue-400/20">Download CV <ArrowDown size={16} /></a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Sri Lanka</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> BEng (Hons), First Class</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[390px] isolate">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-blue-300/20 rotate-6" />
            <div aria-hidden="true" className="pointer-events-none absolute -inset-8 translate-x-3 translate-y-2 rounded-[2.7rem] border border-cyan-300/15 -rotate-[5deg]" />
            <div aria-hidden="true" className="pointer-events-none absolute -inset-11 -translate-x-1 translate-y-5 rounded-[3rem] border border-blue-400/10 rotate-[3deg]" />
            <div className="glass-card relative z-10 rounded-[2rem] p-8 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[.2em] text-blue-200">ENGINEERING × TECHNOLOGY</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="relative my-8 h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-slate-800 sm:h-[400px]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Dumindu Udakara Ekanayaka at his graduation ceremony"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 390px"
                  className="object-cover object-[center_24%]"
                />
              </div>
              <p className="text-xl font-bold">Dumindu Udakara Ekanayaka</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Mechatronics &amp; Robotics Engineering graduate</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-4"><p className="text-2xl font-black text-white">1st</p><p className="mt-1 text-xs text-slate-400">First Class Honours</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-2xl font-black text-white">09</p><p className="mt-1 text-xs text-slate-400">Engineering areas</p></div>
              </div>
              <div className="mt-6 flex gap-3 text-slate-300"><span className="rounded-full border border-white/10 px-3 py-1 text-xs">Robotics</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs">AI</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs">Automation</span></div>
            </div>
          </div>
        </div>
        <div className="hero-arm-overlay" aria-hidden="true"><HeroEngineering3D /></div>
        <div className="section-shell border-t border-white/10 py-5 text-center text-xs font-semibold tracking-[.18em] text-slate-400">DESIGNING · DEVELOPING · INTEGRATING · LEARNING</div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="section-shell grid grid-cols-2 gap-8 py-9 md:grid-cols-4">
          {[["1st", "First Class Honours"], ["2026", "BEng graduate"], ["6", "Featured projects"], ["3", "Education stages"]].map(([value, label]) => (
            <div key={label}><p className="text-3xl font-black tracking-tight text-blue-700">{value}</p><p className="mt-2 max-w-[170px] text-sm leading-5 text-slate-500">{label}</p></div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section pt-8 pb-4 md:pt-10 md:pb-8">
        <div className="section-shell">
          <div className="about-layout">
            <div className="about-left-column">
              <div className="about-heading">
                <p className="eyebrow">01 / About me</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-[#142033] md:text-5xl">About Me<span className="text-blue-600">.</span></h2>
                <div className="mt-4 h-1.5 w-20 rounded-full bg-blue-700" />
              </div>
              <div className="about-photo-panel">
                <Image
                  src="/images/about-graduation.jpeg"
                  alt="Dumindu at his graduation ceremony"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-[center_24%]"
                />
                <span className="about-photo-label">ABOUT ME</span>
              </div>
              <div className="about-credentials">
                <div className="about-credential-row">
                  <span className="about-credential-icon"><GraduationCap size={19} /></span>
                  <span>BEng (Hons) – Mechatronics &amp; Robotics Engineering</span>
                </div>
                <div className="about-credential-row">
                  <span className="about-credential-icon"><Workflow size={19} /></span>
                  <span>Anglia Ruskin University (UK)</span>
                </div>
                <div className="about-credential-row">
                  <span className="about-credential-icon"><MapPin size={19} /></span>
                  <span>CINEC Campus, Sri Lanka</span>
                </div>
                <div className="about-credential-row">
                  <span className="about-credential-icon"><GraduationCap size={19} /></span>
                  <span>First Class Honours</span>
                </div>
              </div>
            </div>

            <div className="about-content-column">
              <p className="about-intro">
                I am a Mechatronics and Robotics Engineering graduate of
                <strong className="text-[#142033]"> Anglia Ruskin University, United Kingdom</strong>,
                with the programme delivered at CINEC Campus, Sri Lanka. I completed my BEng (Hons)
                with <strong className="text-[#142033]">First Class Honours</strong>.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600">
                I studied mechanical engineering before completing my degree in Mechatronics and Robotics Engineering. I have experience with industrial maintenance, production systems, robotics, embedded systems and software development.
              </p>

              <div className="mt-9">
                <p className="text-xs font-black tracking-[.2em] text-slate-400">ABOUT ME</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {["Mechatronics Engineer", "Robotics", "Problem Solving", "Technology"].map((item) => (
                    <span key={item} className="rounded-full border border-slate-300 bg-white/90 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm">{item}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="about-info-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <GraduationCap size={22} />
                  </div>
                  <p className="mt-4 text-xs font-black tracking-[.16em] text-blue-700">EDUCATION</p>
                  <h3 className="mt-2 text-lg font-black text-[#142033]">My education</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Mechanical engineering, followed by mechatronics and robotics.
                  </p>
                </article>
                <article className="about-info-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Workflow size={22} />
                  </div>
                  <p className="mt-4 text-xs font-black tracking-[.16em] text-blue-700">HOW I WORK</p>
                  <h3 className="mt-2 text-lg font-black text-[#142033]">Learn by doing</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    I enjoy designing, building, testing and improving practical projects.
                  </p>
                </article>
              </div>
              <ConveyorBox3D />
            </div>

            <div className="about-vision">
              <div className="about-vision-mark"><Cpu size={38} /></div>
              <div className="about-vision-copy">
                <p className="text-xs font-black tracking-[.18em] text-blue-300">MY INTERESTS</p>
                <p className="mt-3 text-xl font-bold leading-8 md:text-2xl">
                  I am interested in robotics, artificial intelligence and industrial automation.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I want to gain more practical experience and continue learning in these areas.
                </p>
              </div>
            </div>
          </div>
          <a href="#experience" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 transition hover:gap-3 hover:text-blue-500">
            More about me <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <DomainExplorer />
      <TechnicalSkills />

      <section id="projects" className="section-shell pt-8 pb-6 md:pt-10 md:pb-8">
        <p className="eyebrow">04 / Selected work</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Projects &amp; practice.</h2>
          <p className="max-w-md text-sm leading-7 text-slate-500">Some engineering and software projects I have worked on.</p>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const ProjectIcon = project.visual;
            return (
              <Link id={`project-${project.number}`} key={project.number} href={`/projects/${["self-balancing-mobile-robot","iot-health-monitoring","indoor-air-quality-robot","hand-gesture-robotic-car","industrial-engineering-calculator","plantorai"][Number(project.number)-1]}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-6 md:p-8">
                  <div aria-hidden="true" className="absolute -left-12 -top-24 h-64 w-64 rounded-full border border-white/15" />
                  <div aria-hidden="true" className="absolute -bottom-36 -right-12 h-72 w-72 rounded-full border border-blue-200/70" />
                  <div aria-hidden="true" className="absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[1.4rem] border border-white/75 bg-white p-2 shadow-[0_12px_30px_rgba(8,24,60,0.18)] transition duration-300 group-hover:-translate-y-1 md:rounded-[1.7rem] md:p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 md:rounded-2xl">
                      {project.image ? (
                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 65vw, (max-width: 1280px) 35vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-300">
                          <ProjectIcon size={42} strokeWidth={1.4} />
                          <span className="text-[9px] font-bold tracking-[.18em] text-slate-400">IMAGE AREA</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="absolute bottom-5 right-6 text-xs font-black tracking-[.25em] text-white/60">{project.number}</span>
                </div>
                <div className="flex min-h-[150px] flex-col justify-center p-5 md:min-h-[164px] md:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-black tracking-[.15em] text-blue-700 md:text-xs">{project.category}</span>
                    <span className="text-xs font-bold text-slate-300">{project.number} / 06</span>
                  </div>
                  <h3 className="text-xl font-black leading-snug tracking-tight text-[#142033] md:text-2xl">{project.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:gap-3">Explore project <ArrowUpRight size={16}/></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="experience" className="bg-[#f6f8fb] pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="eyebrow">05 / Professional Experience</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Practical engineering experience.</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">Hands-on exposure to industrial maintenance, production support and engineering improvement in a manufacturing environment.</p>
            </div>
            <div className="mb-1 flex items-center gap-5 rounded-2xl border border-blue-100 bg-white/80 px-6 py-5 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl font-black text-blue-700">6</div>
              <div>
                <p className="text-[10px] font-black tracking-[.2em] text-blue-700">MONTHS OF EXPERIENCE</p>
                <p className="mt-1 text-lg font-black text-[#142033]">Rocell · Engineer Intern</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-slate-500">MAR 2025 — SEP 2025</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="about-info-card group flex min-h-[300px] flex-col justify-between p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm">
                    <Wrench size={27} strokeWidth={1.8} />
                  </div>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-black tracking-[.14em] text-blue-700">ON-SITE</span>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-2"><p className="text-xs font-black tracking-[.18em] text-blue-700">MAR 2025 – SEP 2025</p><span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black tracking-[.12em] text-emerald-700">6 MONTHS</span></div>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-[#142033]">Engineer Intern</h3>
                <a href="https://rocell.com/en" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-slate-700 transition hover:text-blue-700">Rocell <ArrowUpRight size={16} className="text-blue-600" /></a>
                <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-500"><MapPin size={14} /> Eheliyagoda, Sri Lanka</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">Industrial Manufacturing</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">Engineering</span>
              </div>
            </article>
            <article className="about-info-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Factory size={23} />
                </div>
                <div>
                  <p className="text-xs font-black tracking-[.16em] text-blue-700">ROLE HIGHLIGHTS</p>
                  <h3 className="mt-1 text-xl font-black text-[#142033]">Key responsibilities &amp; contributions</h3>
                </div>
              </div>
              <ul className="mt-7 space-y-4 text-sm leading-7 text-slate-600">
                <li className="flex gap-3"><span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700"><Wrench size={11} /></span><span>Supported mechanical maintenance for conveyors, electric motors, hydraulic systems, pumps and gearboxes.</span></li>
                <li className="flex gap-3"><span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700"><Activity size={11} /></span><span>Assisted with production-stoppage analysis, preventive and corrective maintenance, and process improvement.</span></li>
                <li className="flex gap-3"><span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700"><Workflow size={11} /></span><span>Prepared 3D machine models and engineering drawings using SOLIDWORKS.</span></li>
                <li className="flex gap-3"><span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700"><ArrowUpRight size={11} /></span><span>Contributed to a pallet-loading efficiency improvement initiative while following industrial safety practices.</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="education" className="bg-[#f6f8fb] pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="eyebrow">06 / Education &amp; Qualifications</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Academic foundation.</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">My education in engineering, from foundation studies to my BEng (Hons) degree.</p>
            </div>
            <div className="mb-1 flex items-center gap-5 rounded-2xl border border-blue-100 bg-white/80 px-6 py-5 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl font-black text-blue-700">3</div>
              <div>
                <p className="text-[10px] font-black tracking-[.2em] text-blue-700">EDUCATION STAGES</p>
                <p className="mt-1 text-lg font-black text-[#142033]">Education timeline</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-slate-500">2022 — 2026</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="about-info-card group flex min-h-[340px] flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm"><GraduationCap size={27} strokeWidth={1.8} /></div>
                <span className="rounded-full bg-emerald-50 px-3 py-2 text-[10px] font-black tracking-[.12em] text-emerald-700">FIRST CLASS</span>
              </div>
              <p className="mt-7 text-xs font-black tracking-[.16em] text-blue-700">SEP 2025 – SEP 2026</p>
              <h3 className="mt-3 text-xl font-black leading-snug text-[#142033]">BEng (Hons) Mechatronics and Robotics Engineering (Top-Up)</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">Anglia Ruskin University, UK</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">Delivered at CINEC Campus, Sri Lanka</p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                <a href="https://www.aru.ac.uk/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100">Anglia Ruskin University <ArrowUpRight size={14} /></a>
                <a href="https://www.cinec.edu/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200">CINEC Campus <ArrowUpRight size={14} /></a>
              </div>
            </article>

            <article className="about-info-card group flex min-h-[340px] flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm"><Wrench size={27} strokeWidth={1.8} /></div>
                <span className="rounded-full bg-blue-50 px-3 py-2 text-[10px] font-black tracking-[.12em] text-blue-700">MERIT PASS</span>
              </div>
              <p className="mt-7 text-xs font-black tracking-[.16em] text-blue-700">SEP 2023 – SEP 2025</p>
              <h3 className="mt-3 text-xl font-black leading-snug text-[#142033]">Pearson BTEC Higher National Diploma in Mechanical Engineering</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">CINEC Campus, Sri Lanka</p>
              <div className="mt-auto pt-6">
                <a href="https://www.cinec.edu/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100">CINEC Campus <ArrowUpRight size={14} /></a>
              </div>
            </article>

            <article className="about-info-card group flex min-h-[340px] flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm"><BookOpen size={27} strokeWidth={1.8} /></div>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-[10px] font-black tracking-[.12em] text-slate-600">FOUNDATION</span>
              </div>
              <p className="mt-7 text-xs font-black tracking-[.16em] text-blue-700">SEP 2022 – SEP 2023</p>
              <h3 className="mt-3 text-xl font-black leading-snug text-[#142033]">Engineering Foundation Year</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">University of Wolverhampton, UK</p>
              <div className="mt-auto pt-6">
                <a href="https://www.wlv.ac.uk/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100">University of Wolverhampton <ArrowUpRight size={14} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="research" className="bg-[#f6f8fb] pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="eyebrow">07 / Research Interests</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Exploring what comes next.</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">I am interested in applying robotics, AI and automation to practical engineering problems.</p>
            </div>
            <div className="mb-1 flex items-center gap-5 rounded-2xl border border-blue-100 bg-white/80 px-6 py-5 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl font-black text-blue-700">3</div>
              <div>
                <p className="text-[10px] font-black tracking-[.2em] text-blue-700">RESEARCH INTERESTS</p>
                <p className="mt-1 text-lg font-black text-[#142033]">Robotics, AI &amp; automation</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-slate-500">Robotics · AI · Automation</p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-700 bg-[#34445b] text-white shadow-[0_18px_45px_rgba(30,64,110,.10)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 bg-[#29384d] px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700"><Workflow size={17} /></span>
                <div><p className="text-[10px] font-black tracking-[.2em] text-blue-300">RESEARCH INTERESTS</p><p className="mt-0.5 text-sm font-bold text-white">Areas I am interested in</p></div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> INTERESTS</span>
            </div>
            <div className="relative px-5 py-8 md:px-9 md:py-10">
              <div className="mx-auto flex max-w-[430px] items-center gap-4 rounded-2xl border border-slate-600 bg-[#46566d] p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Workflow size={25} /></div>
                <div className="min-w-0"><p className="text-[10px] font-black tracking-[.16em] text-blue-300">FOUNDATION</p><h3 className="mt-1 text-base font-black text-white md:text-lg">Engineering challenges</h3><p className="mt-1 text-xs text-slate-200">Observe · Design · Build · Improve</p></div>
                <span className="ml-auto hidden rounded-lg border border-slate-400 px-2 py-1 text-[10px] font-bold text-slate-200 sm:inline">INPUT</span>
              </div>
              <div className="mx-auto h-9 w-px bg-gradient-to-b from-blue-300 to-sky-200" />
              <div className="mx-auto flex max-w-[500px] items-center gap-4 rounded-2xl border border-blue-400/70 bg-[#385b82] p-5 shadow-sm">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><BrainCircuit size={29} /></div>
                <div className="min-w-0"><p className="text-[10px] font-black tracking-[.18em] text-blue-200">CENTRAL RESEARCH FOCUS</p><h3 className="mt-1 text-lg font-black text-white md:text-xl">Intelligent Engineering Systems</h3><p className="mt-1 text-xs leading-5 text-slate-200">Integrating physical systems, data and intelligent technologies</p></div>
                <span className="ml-auto hidden rounded-lg border border-blue-300/50 px-2 py-1 text-[10px] font-bold text-blue-100 sm:inline">CORE</span>
              </div>
              <div className="relative mx-auto h-12 max-w-[900px]">
                <div className="absolute left-[16.66%] right-[16.66%] top-0 h-px bg-slate-500" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-slate-500" />
                <div className="absolute left-[16.66%] top-0 h-full w-px bg-slate-500" />
                <div className="absolute right-[16.66%] top-0 h-full w-px bg-slate-500" />
                <div className="absolute left-[16.66%] right-[16.66%] top-0 h-px bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400" />
                <div className="absolute left-[16.66%] top-0 h-3 w-px bg-blue-300" />
                <div className="absolute left-1/2 top-0 h-3 w-px bg-sky-300" />
                <div className="absolute right-[16.66%] top-0 h-3 w-px bg-blue-300" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-slate-500/80 bg-[#26364b] p-5 shadow-md shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-[#30465f]">
                  <div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200"><Bot size={22} /></span><span className="text-[10px] font-black tracking-[.14em] text-slate-300">DOMAIN 01</span></div>
                  <h4 className="mt-4 text-base font-black text-white">Robotics &amp; Autonomous Systems</h4>
                  <p className="mt-2 text-xs leading-6 text-slate-200">Mobile robots, sensing, embedded control and autonomy.</p>
                </article>
                <article className="rounded-2xl border border-slate-500/80 bg-[#26364b] p-5 shadow-md shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-[#30465f]">
                  <div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/15 text-violet-200"><BrainCircuit size={22} /></span><span className="text-[10px] font-black tracking-[.14em] text-slate-300">DOMAIN 02</span></div>
                  <h4 className="mt-4 text-base font-black text-white">AI &amp; Machine Learning</h4>
                  <p className="mt-2 text-xs leading-6 text-slate-200">Data-driven analysis, prediction and intelligent decision support.</p>
                </article>
                <article className="rounded-2xl border border-slate-500/80 bg-[#26364b] p-5 shadow-md shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-[#30465f]">
                  <div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-200"><Factory size={22} /></span><span className="text-[10px] font-black tracking-[.14em] text-slate-300">DOMAIN 03</span></div>
                  <h4 className="mt-4 text-base font-black text-white">Industrial Automation</h4>
                  <p className="mt-2 text-xs leading-6 text-slate-200">Connected equipment, monitoring and process improvement.</p>
                </article>
              </div>
              <p className="mt-6 text-center text-[10px] font-bold tracking-[.16em] text-slate-200">ROBOTICS · AI · INDUSTRIAL AUTOMATION</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <article className="about-info-card p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Database size={23} /></div>
                <div>
                  <p className="text-xs font-black tracking-[.16em] text-blue-700">CURRENT EXPLORATION</p>
                  <h3 className="mt-1 text-xl font-black text-[#142033]">Engineering data &amp; intelligent monitoring</h3>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-black text-[#142033]">BatteryMind AI</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Exploring battery health and degradation analysis using battery datasets and AI-based approaches.</p>
                  <a href="https://github.com/duminduue/BatteryMind-AI" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3">View GitHub repository <ArrowUpRight size={15} /></a>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-black text-[#142033]">Industrial Data Acquisition</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Exploring data acquisition and monitoring concepts for industrial and engineering systems.</p>
                </div>
              </div>
            </article>
            <article className="relative isolate overflow-hidden rounded-2xl bg-[#142033] p-7 text-white shadow-lg">
              <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
              <p className="text-xs font-black tracking-[.18em] text-blue-300">POSTGRADUATE PLANS</p>
              <h3 className="mt-4 text-2xl font-black leading-tight">Postgraduate study &amp; research</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">I plan to apply for a fully funded MSc or PhD, focusing on robotics, artificial intelligence and industrial automation.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold">MSc</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold">PhD</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold">Fully funded</span>
              </div>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500">Get in touch <ArrowUpRight size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section id="certifications" className="bg-[#f5f7fb] pt-10 pb-20 md:pt-12 md:pb-24">
        <div className="section-shell">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.25em] text-blue-600">08 / CERTIFICATIONS &amp; ACHIEVEMENTS</p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#142033] md:text-5xl">Courses &amp; achievements.</h2>
              <p className="mt-4 max-w-5xl text-base leading-7 text-slate-600">My academic results and courses in robotics, artificial intelligence, industrial automation and communication.</p>
            </div>
            <div className="flex justify-start lg:justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black tracking-[.12em] text-emerald-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                FIRST CLASS HONOURS
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
            <article className="achievement-panel about-info-card group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-[#f7faff] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm"><GraduationCap size={27} /></div>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-[10px] font-black tracking-[.15em] text-blue-700">ACADEMIC</span>
              </div>
              <p className="mt-8 text-xs font-black tracking-[.18em] text-blue-700">ACADEMIC HIGHLIGHTS</p>
              <h3 className="mt-2 text-2xl font-black text-[#142033]">Academic achievements</h3>
              <div className="mt-7 space-y-6">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><Award size={18} /></span>
                  <div><h4 className="font-bold text-[#142033]">First Class Honours</h4><p className="mt-1 text-sm leading-6 text-slate-600">BEng (Hons) Mechatronics and Robotics Engineering (Top-Up) — Anglia Ruskin University, UK.</p></div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700"><Medal size={18} /></span>
                  <div><h4 className="font-bold text-[#142033]">Merit Pass</h4><p className="mt-1 text-sm leading-6 text-slate-600">Pearson BTEC Higher National Diploma (HND) in Mechanical Engineering — CINEC Campus, Sri Lanka.</p></div>
                </div>
              </div>
              <div className="mt-auto pt-8 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">First Class Honours</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600">Merit Pass</span>
              </div>
            </article>

            <article className="professional-learning-panel about-info-card group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-[#f7faff] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
              <div className="professional-learning-topline absolute inset-x-0 top-0 h-1.5" />
              <div className="flex items-start justify-between gap-3">
                <div className="professional-learning-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm"><BadgeCheck size={27} /></div>
                <span className="professional-learning-badge rounded-full bg-blue-50 px-4 py-2 text-[10px] font-black tracking-[.15em] text-blue-700">PROFESSIONAL LEARNING</span>
              </div>
              <p className="professional-learning-eyebrow mt-8 text-xs font-black tracking-[.18em] text-blue-700">CERTIFICATIONS &amp; TRAINING</p>
              <h3 className="mt-2 text-2xl font-black text-[#142033]">Professional development</h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Bot size={21} /></span>
                  <div><h4 className="font-bold text-[#142033]">Robotics</h4><p className="mt-1 text-xs leading-5 text-slate-600">Southern IRAA Pvt Ltd</p></div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700"><BrainCircuit size={21} /></span>
                  <div><h4 className="font-bold text-[#142033]">Artificial Intelligence</h4><p className="mt-1 text-xs leading-5 text-slate-600">Southern IRAA Pvt Ltd</p></div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700"><Factory size={21} /></span>
                  <div><h4 className="font-bold text-[#142033]">Industrial Automation Engineering</h4><p className="mt-1 text-xs leading-5 text-slate-600">PLC &amp; HMI Programming · EPIC Campus</p></div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><BookOpen size={21} /></span>
                  <div><h4 className="font-bold text-[#142033]">Diploma in English</h4><p className="mt-1 text-xs leading-5 text-slate-600">English language qualification</p></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#101c30] py-20 text-white md:py-24">
        <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="section-shell">
          <p className="text-xs font-black tracking-[.25em] text-blue-300">09 / CONTACT</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Let&apos;s build something meaningful together.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">I&apos;m open to relevant engineering opportunities, collaborative projects, research discussions and professional connections across robotics, AI and industrial automation.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/10 backdrop-blur-sm md:p-7">
              <p className="text-xs font-black tracking-[.18em] text-blue-300">LET&apos;S CONNECT</p>
              <h3 className="mt-2 text-2xl font-black">Find me online</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href="https://www.linkedin.com/in/dumindu-ekanayaka/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-blue-400/60 hover:bg-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300"><Linkedin size={21} /></span>
                  <span className="min-w-0"><span className="block text-sm font-bold">LinkedIn</span><span className="mt-1 block text-xs text-slate-400">Professional profile</span></span>
                  <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" />
                </a>
                <a href="https://github.com/duminduue" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-blue-400/60 hover:bg-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-400/15 text-slate-200"><Github size={21} /></span>
                  <span className="min-w-0"><span className="block text-sm font-bold">GitHub</span><span className="mt-1 block text-xs text-slate-400">Projects &amp; repositories</span></span>
                  <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" />
                </a>
              </div>
              <a href="mailto:duminduudakara21@gmail.com" className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-blue-400/50 hover:bg-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200"><Mail size={19} /></span>
                <div className="min-w-0"><p className="text-sm font-bold">Email</p><p className="mt-1 break-all text-xs leading-5 text-slate-300">duminduudakara21@gmail.com</p></div>
                <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-400" />
              </a>
              <a href="tel:+94764124201" className="mt-3 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-blue-400/50 hover:bg-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-200"><Phone size={19} /></span>
                <div><p className="text-sm font-bold">Phone</p><p className="mt-1 text-xs leading-5 text-slate-300">+94 76 412 4201</p></div>
                <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-400" />
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
            <span className="text-[10px] font-black tracking-[.18em] text-slate-400">OPEN TO</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">Engineering opportunities</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">Research collaboration</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">Professional networking</span>
            <a href="/Dumindu-Ekanayaka-CV.pdf" download="Dumindu-Ekanayaka-CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/15 px-4 py-2 text-xs font-bold text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-500/25">Download CV <ArrowDown size={14} /></a>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a1423] text-slate-300">
        <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />
        <div className="section-shell relative py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-start">
            <div>
              <a href="#home" className="inline-flex items-center gap-3 transition hover:opacity-80">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-black tracking-tight text-white">DE</span>
                <span><span className="block text-base font-black tracking-wide text-white">DUMINDU UDAKARA EKANAYAKA</span><span className="mt-1 block text-[10px] font-bold tracking-[.2em] text-blue-300">ENGINEERING · TECHNOLOGY</span></span>
              </a>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">Building practical solutions through engineering, intelligent systems and continuous learning.</p>
            </div>
            <div className="md:justify-self-end">
              <p className="text-[10px] font-black tracking-[.2em] text-slate-500">CONNECT</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/dumindu-ekanayaka/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"><Linkedin size={18} /></a>
                <a href="https://github.com/duminduue" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"><Github size={18} /></a>
                <a href="mailto:duminduudakara21@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"><Mail size={18} /></a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-500">© 2026 Dumindu Udakara Ekanayaka. All rights reserved.</p>
            <p className="font-medium tracking-wide text-slate-400">Robotics <span className="px-1 text-blue-400">·</span> AI <span className="px-1 text-blue-400">·</span> Industrial Automation</p>
            <a href="https://vinish.dev/free-3d-models/robots" target="_blank" rel="noreferrer" className="text-[10px] text-slate-500 hover:text-slate-300">Humanoid 3D model by vinish.dev · CC BY 4.0</a>
            <a href="#home" className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-blue-300">Back to top <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
