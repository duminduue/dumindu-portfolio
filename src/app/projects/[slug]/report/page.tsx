import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Cpu, Gauge, Workflow, CheckCircle2, Lightbulb, FileText } from "lucide-react";

const objectives = [
  "Design and construct a stable two-wheeled mobile platform with an optimized centre of gravity.",
  "Integrate ESP32 microcontrollers, MPU6050 IMU, encoder motors, motor drivers and power management systems.",
  "Develop a real-time PID control algorithm to maintain dynamic balance.",
  "Tune PID parameters to minimize oscillations, improve response time and enhance stability.",
  "Evaluate performance under external disturbances, varying loads and different surface conditions.",
  "Implement Wi-Fi-based wireless control, web-based monitoring and ultrasonic obstacle detection."
];

const hardware = ["ESP32 × 2","MPU6050 IMU","Encoder DC gear motors","High-power motor driver","Ultrasonic sensor","XL4016 buck converters","Battery power system","Two-wheel chassis","Dot board PCB"];
const software = ["Embedded C/C++","ESP32","Arduino Framework","HTML5","CSS3","JavaScript","PID Control","FreeRTOS","Wi-Fi","Serial Communication","MPU6050 Libraries"];

const stages = [
  ["Sensor data acquisition","The MPU6050 IMU continuously measures the robot's tilt angle using its accelerometer and gyroscope. Motor encoders provide wheel speed and position feedback."],
  ["Balance processing – ESP32 #1","The first ESP32 processes sensor readings and calculates the difference between the desired upright angle and the measured tilt."],
  ["PID control and motor actuation","The PID controller calculates corrective output using proportional, integral and derivative terms. PWM signals drive the motors through the motor driver. Encoder feedback supports speed damping and position holding."],
  ["Wireless control – ESP32 #2","The second ESP32 manages Wi-Fi communication and the web interface. Forward, backward, left, right and stop commands are sent to the balancing controller through Serial2."],
  ["Obstacle detection","The ultrasonic sensor measures nearby objects. Distance status is shown on the web interface and a buzzer provides warnings when an object is within the configured range."]
];

const tests = [
  "Stability: the robot maintained an upright position during continuous operation, with minimal oscillations after the initial settling period.",
  "Disturbance recovery: following manually applied external forces, the PID control system restored the platform towards its upright position.",
  "Load testing: tests at 0, 50, 100, 150, 200 and 250 g were recorded as stable; the 250 g test was marked PASS.",
  "Surface testing: rough-surface movement was marked PASS. Smooth-surface movement was PARTIAL because wheel slippage affected mobility.",
  "Inclination and base movement: the platform maintained balance under the tested inclination and supporting-surface movement conditions.",
  "Wireless control: forward, backward, left, right and stop commands were tested through the Wi-Fi web interface, with visual feedback.",
  "Obstacle detection: ultrasonic distance indication and audible buzzer warnings were tested."
];

const results = [
  ["Settling time","Approximately 1.5 seconds"],
  ["Maximum overshoot","Approximately 5°"],
  ["Steady-state error","Within ±0.5°"],
  ["Disturbance recovery time","Approximately 1–2 seconds"],
  ["Maximum additional load tested","250 g"]
];

const challenges = [
  ["Motor driver overheating and insufficient current","The initial motor driver had limited current-handling capacity, overheated and could not supply sufficient current. It was replaced with a higher-power motor driver."],
  ["Power supply instability","A shared supply caused voltage drops and electrical noise. A dual power-supply arrangement with voltage regulation was implemented."],
  ["PID controller tuning","Initial PID values caused oscillations and slow response. Parameters were adjusted through practical testing, with speed damping and position-holding techniques introduced."],
  ["Wheel slippage on smooth surfaces","Reduced traction affected movement on smooth surfaces. Balance was maintained, but mobility was affected; improved wheel traction remains a future improvement."],
  ["Inconsistent stopping behaviour","A short-duration braking method was introduced to reduce speed more quickly and improve stabilisation."],
  ["Sensor noise and motor response delays","Minor sensor noise and motor response delays caused occasional behavioural variations and remain areas for further optimisation."]
];

const future = [
  "Investigate adaptive control, state-space control and model predictive control to improve response under changing operating conditions.",
  "Improve sensor filtering and investigate sensor-fusion techniques such as Kalman filtering to reduce noise and improve tilt-angle measurements.",
  "Improve wheel traction and braking to reduce slippage on smooth or low-friction surfaces.",
  "Add infrared line-following and multiple ultrasonic sensors for improved autonomous navigation; GPS-based navigation could be explored for outdoor use.",
  "Optimise chassis weight distribution, lower the centre of mass and use stronger materials to improve mechanical stability and durability.",
  "Develop a dedicated mobile application with improved data visualisation, real-time monitoring and additional control features."
];

function Section({ id, number, title, children }: { id:string; number:string; title:string; children:React.ReactNode }) {
  return <section id={id} className="scroll-mt-8 border-b border-slate-200 py-9 last:border-0"><div className="mb-4 flex items-center gap-3"><span className="text-xs font-black tracking-[.18em] text-blue-700">{number}</span><h2 className="text-xl font-black tracking-tight text-[#142033] md:text-2xl">{title}</h2></div>{children}</section>;
}

export default function ProjectReportPage() {
  return (
    <main className="min-h-screen bg-[#eef2f7] pb-16 text-[#25344b]">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="section-shell flex h-[68px] items-center justify-between">
          <Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link>
          <Link href="/projects/self-balancing-mobile-robot" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700"><ArrowLeft size={16}/> Back to project</Link>
        </div>
      </header>

      <div className="section-shell pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,35,70,.09)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#142033] via-[#1d3d69] to-[#245ce5] px-7 py-12 text-white md:px-14 md:py-16">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10"/>
            <div className="absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10"/>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-black tracking-[.2em] text-blue-200"><FileText size={15}/> ENGINEERING PROJECT REPORT</div>
              <p className="mt-10 text-xs font-bold tracking-[.2em] text-blue-200">ROBOTICS · EMBEDDED CONTROL · PID</p>
              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">Self-Balancing Mobile Robot Using PID Control</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50">Design, implementation and experimental evaluation of a two-wheeled self-balancing mobile platform with wireless control and ultrasonic obstacle detection.</p>
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROJECT 01</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">COMPLETED PROJECT</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">ONLINE REPORT</span></div>
            </div>
          </div>

          <div className="grid gap-10 p-6 md:grid-cols-[210px_minmax(0,1fr)] md:p-12">
            <aside className="h-fit md:sticky md:top-24">
              <p className="text-xs font-black tracking-[.18em] text-blue-700">REPORT CONTENTS</p>
              <nav className="mt-4 grid gap-2 text-sm">
                {[
                  ["abstract","Abstract"],["introduction","01 · Introduction"],["objectives","02 · Objectives"],["design","03 · System design"],["methodology","04 · Methodology"],["implementation","05 · Implementation"],["testing","06 · Testing & results"],["limitations","07 · Challenges"],["future","08 · Future work"],["conclusion","09 · Conclusion"]
                ].map(([id,label])=><a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">{label}</a>)}
              </nav>
              <div className="mt-7 rounded-xl bg-[#f4f7fb] p-4">
                <p className="text-xs font-bold text-slate-500">RELATED RESOURCES</p>
                <a className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-700" href="https://drive.google.com/drive/folders/1Q_SjpXY8f_gIwiQSwdlIv0e6uulrNMYT" target="_blank" rel="noreferrer">Demo videos <ArrowUpRight size={14}/></a>
                <a className="mt-2 flex items-center gap-2 text-sm font-semibold text-blue-700" href="https://drive.google.com/drive/folders/1jfRQOUJCHwyAG0kI4ZFwOYZzXUMnJUNs" target="_blank" rel="noreferrer">Photos & evidence <ArrowUpRight size={14}/></a>
              </div>
            </aside>

            <article className="min-w-0">
              <Section id="abstract" number="ABSTRACT" title="Project summary">
                <p className="text-sm leading-8 text-slate-600">This project presents the development of a two-wheeled self-balancing mobile platform using a real-time Proportional–Integral–Derivative (PID) control system. An MPU6050 inertial measurement unit provides tilt measurements, while motor encoders supply wheel feedback. Two ESP32 microcontrollers divide the balancing and wireless interface functions. The platform also includes Wi-Fi-based web control, real-time status monitoring and ultrasonic obstacle warnings. Experimental evaluation covered stability, disturbance recovery, additional load, surface conditions, wireless control and obstacle detection. The recorded results indicate that the platform achieved its main balancing objectives, while wheel traction, sensor noise and motor response delays remained areas for improvement.</p>
                <p className="mt-4 text-sm leading-7 text-slate-500"><strong>Keywords:</strong> Self-balancing robot, inverted pendulum, PID control, ESP32, MPU6050, encoder feedback, wireless control, embedded systems.</p>
              </Section>

              <Section id="introduction" number="01" title="Introduction">
                <p className="text-sm leading-8 text-slate-600">A two-wheeled self-balancing robot is an inherently unstable system that requires continuous sensing and corrective action to remain upright. Its operation is comparable to an inverted pendulum: when the body tilts away from the equilibrium position, the wheels must move to restore balance. Sensor inaccuracies, motor response delays, external disturbances, variations in payload and surface friction can influence the performance of the balancing system.</p>
                <p className="mt-4 text-sm leading-8 text-slate-600">The project addresses these challenges through a PID-based balancing platform. In addition to dynamic balance, the design incorporates wireless remote operation, a browser-based monitoring interface and ultrasonic obstacle detection to extend its practical functionality.</p>
              </Section>

              <Section id="objectives" number="02" title="Project objectives">
                <ol className="space-y-3">{objectives.map((x,i)=><li key={x} className="flex gap-3 text-sm leading-7 text-slate-600"><span className="font-black text-blue-700">0{i+1}</span><span>{x}</span></li>)}</ol>
              </Section>

              <Section id="design" number="03" title="System design and technologies">
                <div className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5">
                  <div className="flex items-center gap-2 font-bold text-[#142033]"><Cpu size={18} className="text-blue-700"/> Hardware components</div>
                  <div className="mt-4 flex flex-wrap gap-2">{hardware.map(x=><span key={x} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">{x}</span>)}</div>
                </div>
                <div className="mt-4 rounded-xl border border-slate-200 bg-[#f7f9fc] p-5">
                  <div className="flex items-center gap-2 font-bold text-[#142033]"><BookOpen size={18} className="text-blue-700"/> Software and development technologies</div>
                  <div className="mt-4 flex flex-wrap gap-2">{software.map(x=><span key={x} className="rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-blue-800">{x}</span>)}</div>
                </div>
                <p className="mt-5 text-sm leading-8 text-slate-600">The design uses two ESP32 boards. The first is responsible for the real-time balancing loop, while the second handles wireless communication, the web interface and obstacle sensing. Both controllers exchange commands and status data through serial communication (Serial2).</p>
              </Section>

              <Section id="methodology" number="04" title="Methodology and working principle">
                <p className="text-sm leading-8 text-slate-600">The robot operates as an inverted pendulum under closed-loop feedback control. The measured tilt angle is compared with the desired upright reference. The resulting error is processed by the PID controller to generate corrective motor commands. Encoder feedback supports wheel-speed regulation and position holding. This cycle of measurement, calculation and actuation is repeated continuously.</p>
                <div className="mt-6 grid gap-3">{stages.map((x,i)=><div key={x[0]} className="flex gap-4 rounded-xl border border-slate-200 p-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-xs font-black text-blue-700">0{i+1}</span><div><h3 className="font-bold text-[#142033]">{x[0]}</h3><p className="mt-1 text-sm leading-7 text-slate-600">{x[1]}</p></div></div>)}</div>
              </Section>

              <Section id="implementation" number="05" title="System implementation">
                <p className="text-sm leading-8 text-slate-600">The MPU6050 supplies accelerometer and gyroscope readings for tilt estimation. Encoder feedback is used to monitor wheel movement. The balancing controller calculates the error between the target upright angle and the measured tilt, then applies PID correction through PWM motor commands.</p>
                <p className="mt-4 text-sm leading-8 text-slate-600">The second ESP32 provides a Wi-Fi access point and web server. The browser interface provides forward, backward, left, right and stop commands. The ultrasonic sensor supplies distance information for visual status indicators and buzzer alerts. The two ESP32 boards communicate through Serial2.</p>
              </Section>

              <Section id="testing" number="06" title="Testing and experimental results">
                <p className="mb-5 text-sm leading-8 text-slate-600">The developed platform was evaluated under different operating conditions to assess balance stability, response to disturbances, load handling, surface performance and additional functions.</p>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <div className="grid grid-cols-[1fr_1.1fr] bg-[#142033] px-4 py-3 text-xs font-bold tracking-wide text-white"><span>PERFORMANCE MEASURE</span><span>RECORDED RESULT</span></div>
                  {results.map((x,i)=><div key={x[0]} className={`grid grid-cols-[1fr_1.1fr] gap-3 px-4 py-4 text-sm ${i%2===0?"bg-white":"bg-[#f7f9fc]"}`}><span className="text-slate-600">{x[0]}</span><strong className="text-[#142033]">{x[1]}</strong></div>)}
                </div>
                <h3 className="mt-7 font-black text-[#142033]">Functional test observations</h3>
                <ul className="mt-4 space-y-3">{tests.map(x=><li key={x} className="flex gap-3 text-sm leading-7 text-slate-600"><CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-600"/><span>{x}</span></li>)}</ul>
                <p className="mt-5 text-xs leading-6 text-slate-400">Values are presented as approximate results from the supplied project report. They are not independently re-measured on this website.</p>
              </Section>

              <Section id="limitations" number="07" title="Challenges and limitations">
                <div className="space-y-4">{challenges.map((x,i)=><div key={x[0]} className="rounded-xl border border-slate-200 p-5"><p className="text-xs font-black tracking-[.16em] text-blue-700">CHALLENGE 0{i+1}</p><h3 className="mt-2 font-bold text-[#142033]">{x[0]}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{x[1]}</p></div>)}</div>
                <p className="mt-5 text-sm leading-8 text-slate-600">Most major hardware and control-related issues were addressed during development. Wheel traction, residual sensor noise and motor response delays remain potential areas for further improvement.</p>
              </Section>

              <Section id="future" number="08" title="Future development">
                <p className="mb-4 text-sm leading-8 text-slate-600">The next development stage could extend the remotely controlled balancing platform towards a more intelligent and autonomous robotic system. Potential improvements identified for future work include:</p>
                <ol className="space-y-3">{future.map((x,i)=><li key={x} className="flex gap-3 text-sm leading-7 text-slate-600"><span className="font-black text-blue-700">0{i+1}</span><span>{x}</span></li>)}</ol>
              </Section>

              <Section id="conclusion" number="09" title="Conclusion">
                <p className="text-sm leading-8 text-slate-600">The project developed and evaluated a two-wheeled self-balancing mobile platform based on PID control, dual ESP32 microcontrollers, MPU6050 sensing and encoder feedback. The tests documented in the project report demonstrate that the platform achieved its main objectives in balancing, disturbance recovery, the tested additional load range, wireless control and ultrasonic obstacle warning. The work also identified practical limitations associated with wheel traction, sensor noise and motor response delays. These findings provide a basis for future improvements in control, sensing, mechanical design and autonomous operation.</p>
              </Section>

              <div className="mt-8 rounded-xl bg-[#f4f7fb] p-5">
                <p className="text-xs font-black tracking-[.16em] text-blue-700">PROJECT MEDIA & EVIDENCE</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="https://drive.google.com/drive/folders/1Q_SjpXY8f_gIwiQSwdlIv0e6uulrNMYT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">Demo videos <ArrowUpRight size={14}/></a>
                  <a href="https://drive.google.com/drive/folders/1jfRQOUJCHwyAG0kI4ZFwOYZzXUMnJUNs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">Photos & evidence <ArrowUpRight size={14}/></a>
                </div>
              </div>
            </article>
          </div>
          <footer className="border-t border-slate-200 bg-[#f8fafc] px-6 py-7 text-center md:px-12">
            <p className="text-xs font-bold tracking-[.18em] text-slate-400">END OF PROJECT REPORT</p>
            <p className="mt-2 text-sm text-slate-500">Self-Balancing Mobile Robot Using PID Control · Project 01</p>
            <Link href="/projects/self-balancing-mobile-robot" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Return to project page <ArrowUpRight size={15}/></Link>
          </footer>
        </div>
      </div>
    </main>
  );
}
