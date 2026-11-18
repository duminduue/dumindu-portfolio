import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  GraduationCap,
  Mail,
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
} from "lucide-react";

const domains = [
  { number: "01", title: "Mechatronics Engineering", detail: "Integrated mechanical, electrical and electronic systems", icon: Wrench },
  { number: "02", title: "Robotics Engineering", detail: "Robot design, embedded systems and intelligent control", icon: Bot },
  { number: "03", title: "Artificial Intelligence", detail: "AI-enabled applications and intelligent systems", icon: BrainCircuit },
  { number: "04", title: "Machine Learning", detail: "Learning algorithms, modelling and prediction", icon: Cpu },
  { number: "05", title: "Data Science", detail: "Data analysis, insights and evidence-based decisions", icon: Database },
  { number: "06", title: "Industrial Automation", detail: "PLC, HMI, control and smart manufacturing", icon: Factory },
  { number: "07", title: "Cloud Computing", detail: "Cloud platforms, infrastructure and deployment", icon: Cloud },
  { number: "08", title: "Cybersecurity", detail: "Secure-by-design systems and digital infrastructure", icon: ShieldCheck },
  { number: "09", title: "Software Engineering", detail: "Full-stack development and reliable software systems", icon: Code2 },
];

const projects = [
  {
    number: "01",
    title: "Self-Balancing Mobile Robot Using PID Control",
    category: "ROBOTICS · EMBEDDED SYSTEMS",
    summary: "Designed and developed an ESP32-based self-balancing robot using MPU6050 IMU sensing and PID control, with encoder feedback and wireless web-based control.",
    stack: ["ESP32", "MPU6050", "PID", "SOLIDWORKS"],
  },
  {
    number: "02",
    title: "IoT-Based Health Monitoring System",
    category: "IOT · EMBEDDED SYSTEMS",
    summary: "Developed a sensor-based monitoring system for heart rate, SpO₂, body temperature and ambient conditions, with wireless monitoring through Blynk IoT.",
    stack: ["ESP32", "MAX30102", "DS18B20", "Blynk"],
  },
  {
    number: "03",
    title: "Autonomous Mobile Robot for Indoor Air Quality Monitoring",
    category: "AUTONOMOUS ROBOTICS · IOT",
    summary: "Developed an ESP32-based mobile robot combining line-following navigation, checkpoint recognition, obstacle avoidance and environmental sensing.",
    stack: ["ESP32", "MQ-2", "MQ-135", "DHT22"],
  },
  {
    number: "04",
    title: "Hand Gesture-Based Robotic Car",
    category: "ROBOTICS · WIRELESS CONTROL",
    summary: "Built a wireless gesture-controlled robotic car using dual ESP32 microcontrollers and MPU6050-based tilt sensing with variable-speed motor control.",
    stack: ["Dual ESP32", "MPU6050", "ESP-NOW"],
  },
  {
    number: "05",
    title: "Industrial Engineering Calculator",
    category: "SOFTWARE ENGINEERING",
    summary: "Developed an engineering calculation platform with formula calculations, unit conversion, a formula library and calculation history. The CV records 104 passing automated tests.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "SQLite"],
  },
  {
    number: "06",
    title: "PlantorAI – AI-Powered Plant Care Platform",
    category: "AI APPLICATIONS · FULL-STACK",
    summary: "Built a full-stack plant-care platform with a searchable catalogue, Gemini AI-powered assistant and role-based customer, seller and admin experiences. The CV records 55 passing backend tests.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="text-xl font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-blue-600" href="#about">About</a>
            <a className="transition hover:text-blue-600" href="#domains">Domains</a>
            <a className="transition hover:text-blue-600" href="#projects">Projects</a>
            <a className="transition hover:text-blue-600" href="#experience">Experience</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#142033] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
            Let&apos;s connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section id="home" className="hero-grid relative isolate bg-[#101c30] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-52 left-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="section-shell grid min-h-[680px] items-start gap-14 py-16 md:grid-cols-[1.25fr_.75fr] md:py-20">
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
              I am a Mechatronics and Robotics Engineering graduate passionate about designing and developing practical engineering solutions through robotics, intelligent systems, industrial automation and software technology.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">Discover my story <ArrowDown size={16} /></a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Sri Lanka</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> BEng (Hons), 2:1</span>
            </div>
            <div className="hero-3d-stage" aria-hidden="true">
              <div className="hero-3d-caption"><span /> INTELLIGENT SYSTEMS · ENGINEERING IN MOTION</div>
              <div className="hero-3d-scene">
                <div className="hero-3d-ring hero-3d-ring-one"><i /></div>
                <div className="hero-3d-ring hero-3d-ring-two"><i /></div>
                <div className="hero-3d-ring hero-3d-ring-three"><i /></div>
                <div className="hero-3d-core"><div className="hero-3d-core-shine" /></div>
                <span className="hero-3d-node hero-3d-node-one" />
                <span className="hero-3d-node hero-3d-node-two" />
                <span className="hero-3d-node hero-3d-node-three" />
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-blue-300/20 rotate-6" />
            <div className="glass-card relative rounded-[2rem] p-8 shadow-2xl shadow-black/30">
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
                <div className="rounded-xl bg-white/5 p-4"><p className="text-2xl font-black text-white">2:1</p><p className="mt-1 text-xs text-slate-400">Honours degree</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-2xl font-black text-white">09</p><p className="mt-1 text-xs text-slate-400">Professional domains</p></div>
              </div>
              <div className="mt-6 flex gap-3 text-slate-300"><span className="rounded-full border border-white/10 px-3 py-1 text-xs">Robotics</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs">AI</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs">Automation</span></div>
            </div>
          </div>
        </div>
        <div className="section-shell border-t border-white/10 py-5 text-center text-xs font-semibold tracking-[.18em] text-slate-400">DESIGNING · DEVELOPING · INTEGRATING · LEARNING</div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="section-shell grid grid-cols-2 gap-8 py-9 md:grid-cols-4">
          {[["2:1", "Upper Second Class Honours"], ["2026", "BEng graduate"], ["6", "Featured projects"], ["3", "Education stages"]].map(([value, label]) => (
            <div key={label}><p className="text-3xl font-black tracking-tight text-blue-700">{value}</p><p className="mt-2 max-w-[170px] text-sm leading-5 text-slate-500">{label}</p></div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section py-16 md:py-24">
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
                  className="object-cover object-[center_24%] grayscale"
                />
                <span className="about-photo-label">THE JOURNEY CONTINUES</span>
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
                  <span>Upper Second Class Honours (2:1)</span>
                </div>
              </div>
            </div>

            <div className="about-content-column">
              <p className="about-intro">
                I am a Mechatronics and Robotics Engineering graduate of
                <strong className="text-[#142033]"> Anglia Ruskin University, United Kingdom</strong>,
                with the programme delivered at CINEC Campus, Sri Lanka. I completed my BEng (Hons)
                with <strong className="text-[#142033]">Upper Second Class Honours (2:1)</strong>.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600">
                My journey combines an academic foundation in mechanical engineering with practical
                exposure to industrial maintenance, production systems, robotics, embedded systems
                and software development. I enjoy understanding how things work, solving practical
                problems and turning ideas into working systems.
              </p>

              <div className="mt-9">
                <p className="text-xs font-black tracking-[.2em] text-slate-400">CORE IDENTITY</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {["Mechatronics Engineer", "Robotics", "Practical Problem Solver", "Technology Enthusiast"].map((item) => (
                    <span key={item} className="rounded-full border border-slate-300 bg-white/90 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm">{item}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="about-info-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <GraduationCap size={22} />
                  </div>
                  <p className="mt-4 text-xs font-black tracking-[.16em] text-blue-700">ACADEMIC FOUNDATION</p>
                  <h3 className="mt-2 text-lg font-black text-[#142033]">Built on engineering</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Mechanical engineering foundations developed further through mechatronics and robotics.
                  </p>
                </article>
                <article className="about-info-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Workflow size={22} />
                  </div>
                  <p className="mt-4 text-xs font-black tracking-[.16em] text-blue-700">ENGINEERING PHILOSOPHY</p>
                  <h3 className="mt-2 text-lg font-black text-[#142033]">Make ideas work</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Learn by designing, building, testing and improving practical solutions.
                  </p>
                </article>
              </div>
            </div>

            <div className="about-vision">
              <div className="about-vision-mark"><Cpu size={38} /></div>
              <div className="about-vision-copy">
                <p className="text-xs font-black tracking-[.18em] text-blue-300">MY CAREER VISION</p>
                <p className="mt-3 text-xl font-bold leading-8 md:text-2xl">
                  To contribute to intelligent engineering systems at the intersection of robotics,
                  artificial intelligence and industrial automation.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I aim to keep growing as a multidisciplinary engineer through hands-on development,
                  continuous learning and research-led problem solving.
                </p>
              </div>
            </div>
          </div>
          <a href="#experience" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 transition hover:gap-3 hover:text-blue-500">
            Explore my background <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section id="domains" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <p className="eyebrow">02 / Professional direction</p>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-xl text-4xl font-black tracking-tight md:text-5xl">Nine domains.<br />One connected vision.</h2><p className="max-w-md text-base leading-7 text-slate-500">Three complementary pillars describe the professional direction I am building across engineering, intelligence and digital technology.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-[#f7f9fc] p-7">
                <p className="text-xs font-black tracking-[.2em] text-blue-700">PILLAR 0{index + 1}</p><h3 className="mt-5 text-2xl font-black">{pillar.title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">{pillar.description}</p>
                <div className="mt-7 space-y-3">{pillar.items.map((item) => <div key={item} className="flex items-center gap-3 border-t border-slate-200 pt-3 text-sm font-semibold text-slate-700"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />{item}</div>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => { const Icon = domain.icon; return <div key={domain.number} className="flex gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon size={21} /></div><div><p className="text-[10px] font-black tracking-widest text-blue-600">{domain.number}</p><h3 className="mt-1 text-sm font-bold">{domain.title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{domain.detail}</p></div></div>; })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell py-24 md:py-32">
        <p className="eyebrow">03 / Selected work</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="text-4xl font-black tracking-tight md:text-5xl">Projects &amp; practice.</h2><p className="max-w-md text-sm leading-7 text-slate-500">A selection of engineering and software projects demonstrating practical development across connected disciplines.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:p-9">
              <div className="flex items-center justify-between"><span className="text-xs font-black tracking-[.15em] text-blue-700">{project.category}</span><span className="text-sm font-bold text-slate-300">{project.number}</span></div>
              <h3 className="mt-7 max-w-lg text-2xl font-black leading-snug tracking-tight">{project.title}</h3><p className="mt-4 text-sm leading-7 text-slate-500">{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{tech}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-xs leading-6 text-slate-400">Project descriptions are based on the current CV. Detailed photographs, repositories, demonstrations and verified outcomes can be added as evidence is prepared.</p>
      </section>

      <section id="experience" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <p className="eyebrow">04 / Background</p><h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Education &amp; experience.</h2>
          <div className="mt-12 grid gap-14 md:grid-cols-2">
            <div><h3 className="mb-7 text-xl font-black">Education</h3><div className="space-y-8 border-l-2 border-blue-100 pl-6">
              <div className="relative"><span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-blue-600 bg-white" /><p className="text-xs font-bold tracking-wider text-blue-700">SEP 2025 – SEP 2026</p><h4 className="mt-2 font-bold">BEng (Hons) Mechatronics and Robotics Engineering (Top-Up)</h4><p className="mt-2 text-sm text-slate-500">Anglia Ruskin University, UK · Delivered at CINEC Campus, Sri Lanka</p><p className="mt-2 text-sm font-bold text-slate-800">Upper Second Class Honours (2:1)</p></div>
              <div className="relative"><span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-blue-600 bg-white" /><p className="text-xs font-bold tracking-wider text-blue-700">SEP 2023 – SEP 2025</p><h4 className="mt-2 font-bold">Pearson BTEC Higher National Diploma in Mechanical Engineering</h4><p className="mt-2 text-sm text-slate-500">CINEC Campus, Sri Lanka</p><p className="mt-2 text-sm font-bold text-slate-800">Merit Pass</p></div>
              <div className="relative"><span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-blue-600 bg-white" /><p className="text-xs font-bold tracking-wider text-blue-700">SEP 2022 – SEP 2023</p><h4 className="mt-2 font-bold">Engineering Foundation Year</h4><p className="mt-2 text-sm text-slate-500">University of Wolverhampton, UK</p></div>
            </div></div>
            <div><h3 className="mb-7 text-xl font-black">Industrial experience</h3><div className="rounded-2xl border border-slate-200 p-7"><p className="text-xs font-bold tracking-wider text-blue-700">MAR 2025 – SEP 2025 · ON-SITE</p><h4 className="mt-3 text-2xl font-black">Engineer Intern</h4><p className="mt-1 font-semibold text-slate-600">Rocell · Eheliyagoda, Sri Lanka</p><ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600"><li>Supported mechanical maintenance for conveyors, electric motors, hydraulic systems, pumps and gearboxes.</li><li>Assisted with production-stoppage analysis, preventive and corrective maintenance, and process improvement.</li><li>Prepared 3D machine models and engineering drawings using SOLIDWORKS.</li><li>Contributed to a pallet-loading efficiency improvement initiative while following industrial safety practices.</li></ul></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#101c30] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="section-shell">
          <p className="text-xs font-black tracking-[.25em] text-blue-300">05 / GET IN TOUCH</p><h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Let&apos;s connect engineering with possibility.</h2><p className="mt-6 max-w-xl leading-8 text-slate-300">Open to relevant engineering opportunities, research conversations and professional connections.</p>
          <div className="mt-10 flex flex-wrap gap-4"><a href="mailto:" className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold transition hover:bg-blue-500"><Mail size={17} /> Email me</a><a href="https://github.com/duminduue" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:bg-white/10"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/dumindu-ekanayaka/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:bg-white/10"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <footer className="bg-[#0a1423] py-7 text-slate-400"><div className="section-shell flex flex-col justify-between gap-3 text-xs sm:flex-row"><p>© 2026 Dumindu Udakara Ekanayaka. All rights reserved.</p><p>Engineering · Intelligence · Digital Technology</p></div></footer>
    </main>
  );
}
