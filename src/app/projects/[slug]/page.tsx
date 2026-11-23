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


const health = {
  number:"02",
  title:"IoT-Based Health Monitoring System",
  category:"IOT · EMBEDDED SYSTEMS",
  summary:"An individual ESP32-based monitoring prototype that measures heart rate, SpO₂, body temperature, room temperature and humidity, with local LCD guidance and remote Blynk visualisation.",
  stack:["ESP32","MAX30102","DS18B20","DHT11","20×4 I²C LCD","Blynk IoT","Arduino IDE","SolidWorks"],
  problem:"Traditional health monitoring often requires people to visit healthcare facilities for measurements. Continuous monitoring can be challenging for elderly people, people with health conditions and those living far from medical facilities. This project explores a low-cost, portable prototype that collects selected physiological and environmental measurements and presents them locally and remotely.",
  objectives:["Measure heart rate and SpO₂ using the MAX30102 sensor.","Measure body temperature using the DS18B20 sensor.","Measure room temperature and humidity using the DHT11 sensor.","Display measurements and step-by-step instructions on a 20×4 LCD.","Transmit sensor readings to Blynk IoT over Wi-Fi.","Provide local and remote monitoring with real-time visualisation."],
  hardware:["ESP32 microcontroller","MAX30102 optical heart-rate and SpO₂ sensor","DS18B20 digital temperature sensor","DHT11 temperature and humidity sensor","20×4 I²C LCD","Two 3.7V Li-ion cells in series (7.4V)","Buck converter (regulated 5V)","SolidWorks-designed enclosure"],
  software:["C/C++","Arduino IDE","ESP32 platform","Blynk IoT","Wi-Fi","I²C","OneWire","GPIO","LiquidCrystal_I2C","DHT library","DallasTemperature","MAX30105 / SpO₂ algorithm library","SolidWorks"],
  architecture:[
    ["Sensor inputs","MAX30102 collects red and infrared optical samples for heart-rate and SpO₂ calculation. DS18B20 measures body temperature. DHT11 measures room temperature and humidity."],
    ["ESP32 processing","The ESP32 coordinates sensor acquisition, validity checks, averaging, last-valid-value retention, LCD updates and wireless communication."],
    ["Local interaction","The 20×4 LCD displays a welcome message, room conditions, finger-placement guidance, measurement progress and final readings."],
    ["Remote monitoring","The ESP32 connects to Wi-Fi and sends body temperature, heart rate, SpO₂, room temperature and humidity to Blynk virtual pins V0–V4."],
    ["Status indication","The supplied code calculates a simple three-level status and sends a corresponding colour value to Blynk virtual pin V5."]
  ],
  results:[["Heart rate","72 BPM"],["SpO₂","98%"],["Body temperature","36.7°C"],["Room temperature","29.0°C"],["Humidity","65%"]],
  samples:[["1","70","97","36.6","29.1","64"],["2","72","98","36.7","29.0","65"],["3","74","99","36.8","29.2","66"],["4","71","98","36.7","29.1","65"],["5","73","97","36.6","29.3","64"]],
  tests:["MAX30102 heart-rate and SpO₂ readings were displayed on the LCD and transmitted to Blynk.","DS18B20 body-temperature readings were displayed locally and remotely.","DHT11 room temperature and humidity readings were checked under indoor conditions.","The 20×4 LCD was checked for measurement values and step-by-step user instructions.","Wi-Fi and Blynk communication were tested; the report notes minor transmission delays.","The report records five sample readings in Appendix C and dashboard screenshots in Figures 8–9."],
  challenges:[["Low-cost sensor limitations","The selected sensors do not provide the same accuracy as medical-grade equipment. Readings are affected by sensor quality and handling."],["Environmental interference","Movement, incorrect finger placement and external light can affect MAX30102 measurements."],["Wi-Fi dependency","Remote updates depend on network stability and may be delayed when connectivity is weak."],["Measurement latency","MAX30102 processing requires multiple samples, while DS18B20 temperature conversion also takes time."],["Filtering trade-off","Averaging and range validation reduce fluctuations but introduce additional response time."],["Power reliability","Stable regulated power is required for the ESP32, sensors and LCD to operate reliably."]],
  future:["Integrate ECG and blood-pressure sensors to monitor additional parameters.","Add configurable alerts and notifications for unusual readings; these should not be treated as a diagnosis.","Evaluate higher-quality or medically validated sensors to improve measurement reliability.","Add cloud-based historical data storage and develop a dedicated mobile application.","Explore AI techniques to analyse recorded measurements and identify unusual patterns."]
};

const projects = {
  "self-balancing-mobile-robot": { ...robot, detailed:true },
  "iot-health-monitoring": { ...health, detailed:true, kind:"health" },
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
  const isHealth = slug === "iot-health-monitoring";
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
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{detailed ? (isHealth ? "An individual project. The description and reported results have been prepared from the supplied project report and ESP32 code. The source-code document and working demonstration are linked below." : "Project information below has been checked against the supplied dissertation report and its appendices. Demo and evidence folders are available; a public PDF link and source repository link are still pending.") : "This page is ready for verified project information, source code and supporting evidence. Content will be added as project details are provided."}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {detailed && isHealth ? <a href="https://drive.google.com/file/d/1SFngec9nSyvwI4O306smmKzn9PbCUcEe/view" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><PlayCircle size={17}/> Watch demo video <ArrowUpRight size={14}/></a> : detailed ? <a href="https://drive.google.com/drive/folders/1Q_SjpXY8f_gIwiQSwdlIv0e6uulrNMYT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><PlayCircle size={17}/> Demo videos <ArrowUpRight size={14}/></a> : <span className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-500">Demo video · To be added</span>}
            {detailed && isHealth ? <a href="https://docs.google.com/document/d/1uiBVSp9aEGZgSThKd2E4ZsPu9XX4HkU3Y7k-_ADCMWg/edit?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><Code2 size={17}/> View source code <ArrowUpRight size={14}/></a> : detailed ? <a href="https://drive.google.com/drive/folders/1jfRQOUJCHwyAG0kI4ZFwOYZzXUMnJUNs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><Images size={17}/> Photos & evidence <ArrowUpRight size={14}/></a> : <span className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-500">Evidence · To be added</span>}
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500"><Github size={17}/> {isHealth ? "GitHub repository · Not published" : "GitHub source · Not supplied yet"}</span>
            <Link href={`/projects/${slug}/report`} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"><FileText size={17}/> View project report <ArrowUpRight size={14}/></Link>
          </div>
        </section>
        {isHealth ? <>
          <section className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><BookOpen size={20}/><p className="text-xs font-black tracking-[.18em]">01 / PROJECT OVERVIEW</p></div><h2 className="mt-4 text-2xl font-black text-[#142033]">Project background</h2><p className="mt-3 text-sm leading-7 text-slate-600">{health.problem}</p><h3 className="mt-7 text-lg font-black text-[#142033]">Project objectives</h3><ol className="mt-3 space-y-3">{health.objectives.map((x,i)=><li key={x} className="flex gap-3 text-sm leading-6 text-slate-600"><b className="text-blue-700">0{i+1}</b><span>{x}</span></li>)}</ol></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Cpu size={20}/><p className="text-xs font-black tracking-[.18em]">02 / TECHNOLOGY STACK</p></div><h3 className="mt-5 text-lg font-black text-[#142033]">Hardware components</h3><div className="mt-3 flex flex-wrap gap-2">{health.hardware.map(x=><span key={x} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">{x}</span>)}</div><h3 className="mt-7 text-lg font-black text-[#142033]">Software & technologies</h3><div className="mt-3 flex flex-wrap gap-2">{health.software.map(x=><span key={x} className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">{x}</span>)}</div></article>
          </section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Workflow size={20}/><p className="text-xs font-black tracking-[.18em]">03 / SYSTEM ARCHITECTURE & WORKING</p></div><h2 className="mt-4 text-2xl font-black text-[#142033]">How the system works</h2><p className="mt-3 text-sm leading-7 text-slate-600">The ESP32 coordinates sensor acquisition, filtering, the guided LCD workflow and Blynk communication. The report describes the project as a state-based process, progressing from initialisation and environmental readings to finger detection, heart-rate/SpO₂ measurement, body-temperature measurement, results display and return to the default state.</p><div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{health.architecture.map((x,i)=><article key={x[0]} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5"><p className="text-xs font-black tracking-[.16em] text-blue-700">STAGE 0{i+1}</p><h3 className="mt-2 font-black text-[#142033]">{x[0]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p></article>)}</div><div className="mt-6 rounded-xl bg-[#f6f8fb] p-5"><h3 className="font-black text-[#142033]">Blynk data mapping from supplied code</h3><div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2"><p><b>V0</b> · Body temperature</p><p><b>V1</b> · Heart rate</p><p><b>V2</b> · SpO₂</p><p><b>V3</b> · Room temperature</p><p><b>V4</b> · Humidity</p><p><b>V5</b> · Status indicator</p></div></div></section>
          <section className="mt-5 grid gap-5 lg:grid-cols-[.85fr_1.15fr]"><article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Gauge size={20}/><p className="text-xs font-black tracking-[.18em]">04 / REPORTED TEST READINGS</p></div><div className="mt-5 space-y-3">{health.results.map(x=><div key={x[0]} className="flex items-center justify-between gap-4 rounded-xl bg-[#f6f8fb] p-4"><span className="text-sm text-slate-600">{x[0]}</span><strong className="text-right text-sm font-black text-[#142033]">{x[1]}</strong></div>)}</div><p className="mt-4 text-xs leading-5 text-slate-400">Prototype readings transcribed from the supplied report; not a medical validation or diagnostic reference.</p></article><article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><CheckCircle2 size={20}/><p className="text-xs font-black tracking-[.18em]">05 / TESTING & EVALUATION</p></div><ul className="mt-5 space-y-3">{health.tests.map(x=><li key={x} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600"/><span>{x}</span></li>)}</ul></article></section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><h2 className="text-xl font-black text-[#142033]">Appendix C · Five sample readings</h2><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[560px] text-left text-sm"><thead><tr className="border-b border-slate-200 text-xs text-slate-500"><th className="p-3">Test</th><th className="p-3">Heart rate</th><th className="p-3">SpO₂</th><th className="p-3">Body temp.</th><th className="p-3">Room temp.</th><th className="p-3">Humidity</th></tr></thead><tbody>{health.samples.map(row=><tr key={row[0]} className="border-b border-slate-100"><td className="p-3 font-semibold">{row[0]}</td>{row.slice(1).map((v,i)=><td key={i} className="p-3">{v}{i===1?"%":i===2||i===3?"°C":i===4?"%":""}</td>)}</tr>)}</tbody></table></div></section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><ShieldAlert size={20}/><p className="text-xs font-black tracking-[.18em]">06 / LIMITATIONS & CHALLENGES</p></div><div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{health.challenges.map((x,i)=><article key={x[0]} className="rounded-xl border border-slate-200 p-5"><p className="text-xs font-black text-blue-700">LIMITATION 0{i+1}</p><h3 className="mt-2 font-black text-[#142033]">{x[0]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p></article>)}</div><p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">This is an educational prototype for general monitoring. The supplied report explicitly notes that it does not provide medically accurate readings and should not replace medical-grade equipment or professional diagnosis.</p></section>
          <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"><div className="flex items-center gap-3 text-blue-700"><Lightbulb size={20}/><p className="text-xs font-black tracking-[.18em]">07 / FUTURE DEVELOPMENT</p></div><div className="mt-5 grid gap-3 md:grid-cols-2">{health.future.map((x,i)=><div key={x} className="flex gap-3 rounded-xl bg-[#f6f8fb] p-4"><b className="text-blue-700">0{i+1}</b><p className="text-sm leading-6 text-slate-600">{x}</p></div>)}</div></section>
        </> : detailed ? <>
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
