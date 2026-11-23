import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpen, Code2, FileText, Github, Images, PlayCircle, Workflow, CheckCircle2, Lightbulb, Cpu, Gauge, ShieldAlert } from "lucide-react";

const robot = {
  number:"01",
  title:"Self-Balancing Mobile Robot Using PID Control",
  category:"ROBOTICS · EMBEDDED SYSTEMS",
  summary:"A two-wheeled self-balancing mobile platform using MPU6050 sensing, encoder feedback and a real-time PID controller, with Wi-Fi web control and ultrasonic obstacle warnings.",
  stack:["Dual ESP32","MPU6050 IMU","Encoder DC Gear Motors","PID Control","Ultrasonic Sensor","Arduino Framework","HTML · CSS · JavaScript","FreeRTOS"],
  problem:"A two-wheeled mobile robot is inherently unstable and requires continuous real-time control to remain upright. Sensor inaccuracies, motor response delays, external disturbances, load changes and variations in surface friction can affect stability. This project develops a PID-based platform that continuously monitors its tilt and adjusts motor movement, while adding wireless remote control, real-time web monitoring and ultrasonic obstacle detection.",
  objectives:[
    "Design and construct a stable two-wheeled mobile platform with an optimized centre of gravity.",
    "Integrate ESP32 microcontrollers, MPU6050 IMU, encoder motors, motor drivers and power management.",
    "Develop a real-time PID control algorithm to maintain dynamic balance.",
    "Tune PID parameters to reduce oscillations, improve response time and enhance stability.",
    "Evaluate performance under external disturbances, varying loads and different surface conditions.",
    "Implement Wi-Fi control, web-based monitoring and ultrasonic obstacle detection."
  ],
  hardware:["ESP32 × 2","MPU6050 IMU","Encoder DC gear motors","High-power motor driver","Ultrasonic sensor","XL4016 buck converters","Battery power system","Two-wheel chassis","Dot board PCB"],
  software:["Embedded C/C++","Arduino Framework","HTML5","CSS3","JavaScript","PID control","FreeRTOS","Wi-Fi","Serial communication","MPU6050 libraries"],
  working:"The platform behaves like an inverted pendulum. When its body tilts away from the upright position, the PID controller calculates a corrective motor output. The wheels move to bring the body back towards equilibrium. This sensing, calculation and correction cycle repeats continuously while the robot is stationary or moving.",
  architecture:[
    ["Sensor acquisition","The MPU6050 measures tilt using its accelerometer and gyroscope. Encoders on the two DC gear motors provide wheel speed and position feedback."],
    ["Balance controller – ESP32 #1","ESP32 #1 runs the time-critical balance loop, reads the MPU6050 and encoder feedback, and calculates the difference between the target angle and measured tilt. The report appendix shows a 5 ms task delay in the control task."],
    ["PID and motor drive","The PID controller combines proportional, integral and derivative terms. Encoder-based speed damping and position holding supplement the angle controller; PWM signals command motor speed and direction through the motor driver."],
    ["Wireless interface – ESP32 #2","ESP32 #2 hosts a Wi-Fi access point and web server, handles the browser interface and ultrasonic sensing, then forwards F/B/L/R/S commands to ESP32 #1 over Serial2."],
    ["Obstacle warning","The ultrasonic distance readings are smoothed using a five-sample moving average and a stability check. The interface displays safe, caution and obstacle-near/close states; the buzzer activates below 15 cm in the appendix code."]
  ],
  results:[
    ["Settling time","Approximately 1.5 seconds"],
    ["Maximum overshoot","Approximately 5°"],
    ["Steady-state error","Within ±0.5°"],
    ["Disturbance recovery","Approximately 1–2 seconds"],
    ["Maximum additional load tested","250 g (PASS)"],
    ["Smooth-surface movement","PARTIAL — wheel slippage"],
    ["Rough-surface movement","PASS — good traction and control"]
  ],
  tests:[
    "Maintained upright position during continuous operation, with minimal oscillations after the initial settling period.",
    "Recovered to an upright position after manually applied external disturbances.",
    "Load tests at 0, 50, 100, 150, 200 and 250 g were recorded as stable; the 250 g test was marked PASS.",
    "The report marked rough-surface testing PASS (good traction and control) and smooth-surface movement PARTIAL because of wheel slippage.",
    "Maintained balance under tested inclination and supporting-surface movement conditions.",
    "Wi-Fi web controls for forward, backward, left, right and stop were tested with visual feedback.",
    "Ultrasonic sensing provided visual distance indicators and audible buzzer warnings."
  ],
  challenges:[
    ["Motor driver capacity","The initial driver overheated and could not supply sufficient current. It was replaced with a higher-power motor driver."],
    ["Power supply instability","A shared supply caused voltage drops and electrical noise. A dual power-supply arrangement with voltage regulation was introduced."],
    ["PID tuning","Initial tuning caused oscillation and slow response. Parameters were iteratively adjusted, with speed damping and position-holding techniques added."],
    ["Wheel traction","Wheel slippage on smooth surfaces affected mobility. Improved traction remains a future improvement."],
    ["Stopping behaviour","A short-duration braking method was introduced to reduce speed more quickly and improve stopping stability."],
    ["Sensor noise and motor delay","The report notes residual IMU noise/drift and minor motor response delays. These produced small behavioural variations and remain areas for further optimisation."],
    ["Tested load range","The documented load test covered 0–250 g. Loads beyond the tested range were not validated in the report."]
  ],
  future:[
    "Explore adaptive control, state-space control and model predictive control to improve response under changing conditions.",
    "Further improve sensor filtering and investigate sensor-fusion methods such as Kalman filtering to reduce residual IMU noise and drift.",
    "Improve wheel traction and braking for low-friction surfaces.",
    "Add infrared line-following and multiple ultrasonic sensors for autonomous navigation; investigate GPS for outdoor use.",
    "Optimise chassis weight distribution, centre of mass and structural materials.",
    "Develop a dedicated mobile application with richer visualisation, monitoring and control."
  ]
};

const projects = {
  "self-balancing-mobile-robot": { ...robot, detailed:true },
  "iot-health-monitoring": { number:"02", title:"IoT-Based Health Monitoring System", category:"IOT · EMBEDDED SYSTEMS", summary:"A sensor-based monitoring system for heart rate, SpO₂, body temperature and ambient conditions, with wireless monitoring through Blynk IoT.", stack:["ESP32","MAX30102","DS18B20","Blynk IoT"], detailed:false },
  "indoor-air-quality-robot": { number:"03", title:"Autonomous Mobile Robot for Indoor Air Quality Monitoring", category:"AUTONOMOUS ROBOTICS · IOT", summary:"An ESP32-based mobile robot combining line-following navigation, checkpoint recognition, obstacle avoidance and environmental sensing.", stack:["ESP32","MQ-2","MQ-135","DHT22"], detailed:false },
  "hand-gesture-robotic-car": { number:"04", title:"Hand Gesture-Based Robotic Car", category:"ROBOTICS · WIRELESS CONTROL", summary:"A wireless gesture-controlled robotic car using dual ESP32 microcontrollers and MPU6050-based tilt sensing with variable-speed motor control.", stack:["Dual ESP32","MPU6050","ESP-NOW"], detailed:false },
  "industrial-engineering-calculator": { number:"05", title:"Industrial Engineering Calculator", category:"SOFTWARE ENGINEERING", summary:"An engineering calculation platform with formula calculations, unit conversion, a formula library and calculation history.", stack:["React","TypeScript","Python","FastAPI","SQLite"], detailed:false },
  "plantorai": { number:"06", title:"PlantorAI – AI-Powered Plant Care Platform", category:"AI APPLICATIONS · FULL-STACK", summary:"A full-stack plant-care platform with a searchable catalogue, Gemini AI-powered assistant and role-based customer, seller and admin experiences.", stack:["React","TypeScript","Node.js","MongoDB","Gemini AI"], detailed:false }
};
type ProjectSlug = keyof typeof projects;
export function generateStaticParams() { return Object.keys(projects).map((slug) => ({ slug })); }

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug:string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) notFound();
  const detailed = project.detailed === true;
  return (
    <main className="min-h-screen bg-[#f6f8fb] pb-20">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl"><div className="section-shell flex h-[72px] items-center justify-between">
        <Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link>
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700"><ArrowLeft size={16}/> All projects</Link>
      </div></header>
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 py-14 text-white md:py-18"><div className="section-shell">
        <div className="flex flex-wrap items-center gap-3 text-xs font-black tracking-[.18em] text-white/75"><span>PROJECT {project.number} / 06</span><span>·</span><span>{project.category}</span><span className="rounded-full border border-white/25 bg-white/15 px-3 py-1">{detailed ? "COMPLETED" : "DETAILS IN PREPARATION"}</span></div>
        <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50 md:text-lg">{project.summary}</p>
        <div className="mt-7 flex flex-wrap gap-2">{project.stack.map(item=><span key={item} className="rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold text-white">{item}</span>)}</div>
      </div></section>
      <div className="section-shell">
        <section className="-mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-black tracking-[.18em] text-blue-700">PROJECT RESOURCE HUB</p><h2 className="mt-2 text-2xl font-black text-[#142033]">Code, documentation & evidence</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{detailed ? "Project information below has been checked against the supplied dissertation report and its appendices. Demo and evidence folders are available; a public PDF link and source repository link are still pending." : "This page is ready for verified project information, source code and supporting evidence. Content will be added as project details are provided."}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {detailed ? <a href="https://drive.google.com/drive/folders/1Q_SjpXY8f_gIwiQSwdlIv0e6uulrNMYT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><PlayCircle size={17}/> Demo videos <ArrowUpRight size={14}/></a> : <span className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-500">Demo video · To be added</span>}
            {detailed ? <a href="https://drive.google.com/drive/folders/1jfRQOUJCHwyAG0kI4ZFwOYZzXUMnJUNs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><Images size={17}/> Photos & evidence <ArrowUpRight size={14}/></a> : <span className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-500">Evidence · To be added</span>}
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500"><Github size={17}/> GitHub source · Not supplied yet</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500"><FileText size={17}/> PDF report reviewed · Public link pending</span>
          </div>
        </section>
        {detailed ? <>
          <section className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><BookOpen size={20}/><p className="text-xs font-black tracking-[.18em]">01 / PROJECT OVERVIEW</p></div>
              <h2 className="mt-4 text-2xl font-black text-[#142033]">The challenge</h2><p className="mt-3 text-sm leading-7 text-slate-600">{robot.problem}</p>
              <h3 className="mt-7 text-lg font-black text-[#142033]">Project objectives</h3><ol className="mt-3 space-y-3">{robot.objectives.map((x,i)=><li key={x} className="flex gap-3 text-sm leading-6 text-slate-600"><b className="text-blue-700">0{i+1}</b><span>{x}</span></li>)}</ol>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Cpu size={20}/><p className="text-xs font-black tracking-[.18em]">02 / TECHNOLOGY STACK</p></div>
              <h3 className="mt-5 text-lg font-black text-[#142033]">Hardware</h3><div className="mt-3 flex flex-wrap gap-2">{robot.hardware.map(x=><span key={x} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">{x}</span>)}</div>
              <h3 className="mt-7 text-lg font-black text-[#142033]">Software & tools</h3><div className="mt-3 flex flex-wrap gap-2">{robot.software.map(x=><span key={x} className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">{x}</span>)}</div>
            </article>
          </section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Workflow size={20}/><p className="text-xs font-black tracking-[.18em]">03 / SYSTEM ARCHITECTURE & WORKING</p></div>
            <h2 className="mt-4 text-2xl font-black text-[#142033]">How the platform works</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{robot.working}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{robot.architecture.map((x,i)=><article key={x[0]} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5"><p className="text-xs font-black tracking-[.16em] text-blue-700">STAGE 0{i+1}</p><h3 className="mt-2 font-black text-[#142033]">{x[0]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p></article>)}</div>
          </section>
          <section className="mt-5 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Gauge size={20}/><p className="text-xs font-black tracking-[.18em]">04 / KEY PERFORMANCE RESULTS</p></div>
              <div className="mt-5 space-y-3">{robot.results.map(x=><div key={x[0]} className="flex items-center justify-between gap-4 rounded-xl bg-[#f6f8fb] p-4"><span className="text-sm text-slate-600">{x[0]}</span><strong className="text-right text-sm font-black text-[#142033]">{x[1]}</strong></div>)}</div><p className="mt-4 text-xs leading-5 text-slate-400">Approximate experimental results as reported for this project.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><CheckCircle2 size={20}/><p className="text-xs font-black tracking-[.18em]">05 / TESTING & EVALUATION</p></div>
              <ul className="mt-5 space-y-3">{robot.tests.map(x=><li key={x} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600"/><span>{x}</span></li>)}</ul>
            </article>
          </section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><ShieldAlert size={20}/><p className="text-xs font-black tracking-[.18em]">06 / CHALLENGES & LIMITATIONS</p></div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{robot.challenges.map((x,i)=><article key={x[0]} className="rounded-xl border border-slate-200 p-5"><p className="text-xs font-black text-blue-700">CHALLENGE 0{i+1}</p><h3 className="mt-2 font-black text-[#142033]">{x[0]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p></article>)}</div>
          </section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Lightbulb size={20}/><p className="text-xs font-black tracking-[.18em]">07 / FUTURE DEVELOPMENT</p></div>
            <h2 className="mt-4 text-2xl font-black text-[#142033]">Where it can go next</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{robot.future.map((x,i)=><div key={x} className="flex gap-3 rounded-xl bg-[#f6f8fb] p-4"><b className="text-blue-700">0{i+1}</b><p className="text-sm leading-6 text-slate-600">{x}</p></div>)}</div>
          </section>
        </> : <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 md:p-9"><p className="eyebrow">Project details in progress</p><h2 className="mt-3 text-2xl font-black text-[#142033]">This project page is ready for its full story.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Project-specific content, source code, report, videos and evidence will be added after the details are reviewed. No unverified claims or resource links are shown.</p></section>}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#142033] p-6 text-white md:p-8"><div><p className="text-xs font-black tracking-[.18em] text-blue-300">KEEP EXPLORING</p><h2 className="mt-2 text-xl font-black">More engineering projects</h2></div><Link href="/#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500">Back to portfolio <ArrowUpRight size={16}/></Link></div>
      </div>
    </main>
  );
}
