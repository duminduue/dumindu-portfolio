import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Cpu, Gauge, Workflow, CheckCircle2, Lightbulb, FileText, Code2, PlayCircle } from "lucide-react";

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


function HealthReportPage() {
  const sections = [
    ["abstract","Abstract"],
    ["introduction","01 · Introduction"],
    ["literature","02 · Literature review"],
    ["methodology","03 · Methodology"],
    ["architecture","04 · System architecture"],
    ["components","05 · Component working principles"],
    ["processing","06 · Data acquisition & processing"],
    ["iot","07 · IoT communication"],
    ["software","08 · Software implementation"],
    ["power","09 · Power management"],
    ["results","10 · Results & discussion"],
    ["conclusion","11 · Conclusion"],
    ["considerations","12 · Safety, ethics & environment"]
  ];
  return (
    <main className="min-h-screen bg-[#eef2f7] pb-16 text-[#25344b]">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl"><div className="section-shell flex h-[68px] items-center justify-between"><Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link><Link href="/projects/iot-health-monitoring" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700"><ArrowLeft size={16}/> Back to project</Link></div></header>
      <div className="section-shell pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,35,70,.09)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#142033] via-[#1d3d69] to-[#245ce5] px-7 py-12 text-white md:px-14 md:py-16"><div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10"/><div className="relative max-w-3xl"><div className="flex items-center gap-2 text-xs font-black tracking-[.2em] text-blue-200"><FileText size={15}/> ENGINEERING PROJECT REPORT</div><p className="mt-10 text-xs font-bold tracking-[.2em] text-blue-200">IOT · EMBEDDED SYSTEMS · HEALTH MONITORING</p><h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">IoT-Based Health Monitoring System</h1><p className="mt-6 max-w-2xl text-base leading-8 text-blue-50">Design and development of an ESP32-based prototype for monitoring heart rate, SpO₂, body temperature, room temperature and humidity, with local LCD guidance and Blynk IoT visualisation.</p><div className="mt-10 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROJECT 02</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">INDIVIDUAL PROJECT</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">ONLINE REPORT</span></div></div></div>
          <div className="grid gap-10 p-6 md:grid-cols-[210px_minmax(0,1fr)] md:p-12">
            <aside className="h-fit md:sticky md:top-24"><p className="text-xs font-black tracking-[.18em] text-blue-700">REPORT CONTENTS</p><nav className="mt-4 grid gap-2 text-sm">{sections.map(([id,label])=><a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">{label}</a>)}</nav><div className="mt-7 rounded-xl bg-[#f4f7fb] p-4"><p className="text-xs font-bold text-slate-500">PROJECT RESOURCES</p><a className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-700" href="https://docs.google.com/document/d/1uiBVSp9aEGZgSThKd2E4ZsPu9XX4HkU3Y7k-_ADCMWg/edit?usp=sharing" target="_blank" rel="noreferrer">Source code <ArrowUpRight size={14}/></a><a className="mt-2 flex items-center gap-2 text-sm font-semibold text-blue-700" href="https://drive.google.com/file/d/1SFngec9nSyvwI4O306smmKzn9PbCUcEe/view" target="_blank" rel="noreferrer">Demo video <ArrowUpRight size={14}/></a></div></aside>
            <article className="min-w-0">
              <Section id="abstract" number="ABSTRACT" title="Project summary"><p className="text-sm leading-8 text-slate-600">This individual project describes the design and development of an Internet of Things (IoT)-based health monitoring prototype using an ESP32 microcontroller. The system collects heart-rate and blood oxygen saturation (SpO₂) measurements using a MAX30102 sensor, body temperature using a DS18B20 sensor, and room temperature and humidity using a DHT11 sensor. A 20×4 LCD provides local readings and step-by-step guidance, while Wi-Fi connectivity sends processed measurements to the Blynk IoT platform for remote visualisation. The implementation uses a state-based workflow, data averaging and range validation. Indoor testing recorded sample readings for all five parameters. The report identifies low-cost sensor accuracy, environmental interference, Wi-Fi dependency and processing delay as limitations.</p><p className="mt-4 text-sm leading-7 text-slate-500"><b>Keywords:</b> Internet of Things, ESP32, MAX30102, SpO₂, health monitoring, Blynk, embedded systems.</p></Section>
              <Section id="introduction" number="01" title="Introduction"><p className="text-sm leading-8 text-slate-600">The report introduces IoT as a way for connected devices to collect, analyse and transmit sensor data over the internet. In healthcare contexts, remote monitoring can make selected measurements available without requiring a person to visit a healthcare facility for every check. The report identifies elderly people, people with health conditions and individuals living far from hospitals as groups who may benefit from convenient remote monitoring.</p><h3 className="mt-6 font-black text-[#142033]">Project aim</h3><p className="mt-2 text-sm leading-8 text-slate-600">To develop a low-cost, portable and user-friendly IoT-based health monitoring prototype that measures selected health and environmental parameters and presents the information locally and remotely.</p><h3 className="mt-6 font-black text-[#142033]">Objectives</h3><ol className="mt-3 space-y-2 text-sm leading-7 text-slate-600 list-decimal pl-5"><li>Measure heart rate and SpO₂ using MAX30102.</li><li>Measure body temperature using DS18B20.</li><li>Measure room temperature and humidity using DHT11.</li><li>Display readings and instructions on a 20×4 LCD.</li><li>Transmit collected data to Blynk through Wi-Fi.</li><li>Provide local and remote monitoring with real-time visualisation.</li></ol></Section>
              <Section id="literature" number="02" title="Literature review & proposed approach"><p className="text-sm leading-8 text-slate-600">The supplied report reviews IoT health-monitoring systems that combine sensors, microcontrollers and cloud platforms to collect physiological parameters such as heart rate, body temperature and SpO₂. It discusses Arduino- and Raspberry Pi-based implementations and wireless technologies including Wi-Fi and Bluetooth. The report also notes limitations in low-cost sensor accuracy, internet dependency and user interfaces that rely only on mobile applications.</p><p className="mt-4 text-sm leading-8 text-slate-600">The research gap identified in the report is the limited attention given to guided user interaction and combined local/remote operation. The proposed system addresses this by combining an interactive LCD workflow with Blynk remote monitoring and a temperature-unit interaction described in the report.</p></Section>
              <Section id="methodology" number="03" title="Methodology & development process"><p className="text-sm leading-8 text-slate-600">The report describes a modular design approach in which sensors collect physiological and environmental information, the ESP32 processes the readings, and the results are presented on the LCD and Blynk platform. Development proceeded through individual component testing, hardware integration, Arduino IDE programming, Wi-Fi and Blynk configuration, and final system testing.</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{[["01","Test components individually"],["02","Integrate the electronic hardware"],["03","Develop ESP32 firmware"],["04","Configure Wi-Fi and Blynk"],["05","Test, debug and assemble the prototype"]].map(x=><div key={x[0]} className="rounded-xl bg-[#f6f8fb] p-4"><b className="text-xs text-blue-700">{x[0]}</b><p className="mt-1 text-sm font-semibold text-slate-700">{x[1]}</p></div>)}</div><p className="mt-4 text-sm leading-7 text-slate-600">The report's Gantt chart (page 31) presents a four-week development plan covering planning and component selection, hardware design and integration, programming, IoT integration, testing and final assembly.</p></Section>
              <Section id="architecture" number="04" title="System architecture & circuit design"><p className="text-sm leading-8 text-slate-600">The system architecture has three main stages: sensor inputs, ESP32 processing, and local/remote outputs. MAX30102, DS18B20 and DHT11 supply readings to the ESP32. The controller processes the measurements and updates the 20×4 LCD and Blynk IoT platform.</p><div className="my-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-5"><p className="text-center text-xs font-black tracking-wider text-slate-500">SYSTEM DATA FLOW</p><div className="mt-4 grid gap-3 sm:grid-cols-3"><div className="rounded-lg bg-white p-4 text-center"><b className="text-sm text-[#142033]">INPUT SENSORS</b><p className="mt-2 text-xs leading-5 text-slate-500">MAX30102<br/>DS18B20<br/>DHT11</p></div><div className="rounded-lg bg-blue-50 p-4 text-center"><b className="text-sm text-blue-900">ESP32</b><p className="mt-2 text-xs leading-5 text-slate-600">Acquisition<br/>Processing<br/>Wi-Fi</p></div><div className="rounded-lg bg-white p-4 text-center"><b className="text-sm text-[#142033]">OUTPUTS</b><p className="mt-2 text-xs leading-5 text-slate-500">20×4 LCD<br/>Blynk IoT</p></div></div></div><p className="text-sm leading-8 text-slate-600">The circuit diagram on report page 14 shows the ESP32, sensors, LCD and power wiring. The power-system diagram on page 11 describes a 7.4V battery feeding a buck converter that regulates the supply to 5V for the system.</p><h3 className="mt-6 font-black text-[#142033]">Enclosure design</h3><p className="mt-2 text-sm leading-8 text-slate-600">The enclosure was designed using SolidWorks. The report describes openings for the LCD and sensors, with internal space intended to organise and protect the electronic components.</p></Section>
              <Section id="components" number="05" title="Working principles of the components"><div className="space-y-5">{[["MAX30102 – Heart rate & SpO₂","Uses red and infrared light and photoplethysmography (PPG). Changes in reflected light associated with blood-flow pulses are processed to estimate heart rate and oxygen saturation. The report notes that correct finger positioning is important."],["DS18B20 – Body temperature","A digital temperature sensor communicating with the ESP32 through the OneWire interface. The controller requests and reads the temperature value."],["DHT11 – Room temperature & humidity","Measures ambient temperature and humidity and sends digital readings to the ESP32 through a single data pin."],["ESP32 – Main controller","Collects sensor data, applies filtering and validation, updates the LCD and communicates wirelessly with Blynk."],["Power supply","Two 3.7V Li-ion cells are connected in series to provide approximately 7.4V. A buck converter regulates this to 5V for the system components."],["Input/output interfaces","I²C is used by the MAX30102 and LCD, OneWire by the DS18B20, and GPIO by the DHT11. The LCD provides local output and Blynk provides remote monitoring."]].map(x=><div key={x[0]}><h3 className="font-black text-[#142033]">{x[0]}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{x[1]}</p></div>)}</div></Section>
              <Section id="processing" number="06" title="Data acquisition & processing"><p className="text-sm leading-8 text-slate-600">The report describes continuous sensor data collection through I²C, OneWire and GPIO. MAX30102 processing uses multiple samples (the report mentions approximately 100 measurements) to calculate heart rate and SpO₂. The DHT11 provides updated measurements at approximately one-second intervals, while the DS18B20 requires a temperature-conversion interval.</p><h3 className="mt-5 font-black text-[#142033]">Filtering and validation</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600"><li>Averaging is used to smooth fluctuations.</li><li>Range validation rejects values outside configured limits.</li><li>The last valid reading is retained when a new value is invalid.</li><li>Multiple MAX30102 readings are processed to estimate heart rate and SpO₂.</li></ul><p className="mt-4 text-sm leading-7 text-slate-600">The report notes that all selected sensors provide digital outputs, so analogue-to-digital conversion is not required for these sensor interfaces.</p></Section>
              <Section id="iot" number="07" title="Data transmission & Blynk integration"><p className="text-sm leading-8 text-slate-600">The ESP32 connects to a Wi-Fi network using configured credentials and transmits processed readings to the Blynk cloud platform. The report describes device authentication and the use of virtual pins to associate sensor values with dashboard widgets such as gauges, graphs and indicators.</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{[["V0","Body temperature"],["V1","Heart rate"],["V2","SpO₂"],["V3","Room temperature"],["V4","Humidity"],["V5","Status indicator in supplied code"]].map(x=><div key={x[0]} className="flex items-center gap-3 rounded-lg bg-[#f6f8fb] p-3 text-sm"><b className="text-blue-700">{x[0]}</b><span className="text-slate-600">{x[1]}</span></div>)}</div><p className="mt-4 text-sm leading-7 text-slate-600">Figures 8 and 9 on report page 22 show Blynk dashboard views and graphs. The report also describes a temperature unit interaction between Celsius and Fahrenheit. That interaction is documented in the report; it is not visible in the code excerpt supplied separately.</p></Section>
              <Section id="software" number="08" title="Software & state-based implementation"><p className="text-sm leading-8 text-slate-600">The firmware was developed in C/C++ using Arduino IDE. The setup() function initialises the serial interface, LCD, sensors and Blynk connection. The loop() function repeatedly services Blynk, reads sensors, processes values, handles system states, updates the LCD and transmits data.</p><div className="mt-5 space-y-2">{["State 0 – Display welcome message","State 1 – Display room conditions and wait for user input","State 2 – Detect finger placement","State 3 – Measure heart rate and SpO₂","State 4 – Measure body temperature","State 5 – Display final results and send data"].map((x,i)=><div key={x} className="flex gap-3 rounded-lg bg-[#f6f8fb] p-3 text-sm"><b className="text-blue-700">0{i}</b><span className="text-slate-600">{x}</span></div>)}</div><p className="mt-4 text-sm leading-7 text-slate-600">The supplied firmware excerpt uses LiquidCrystal_I2C, DHT, OneWire, DallasTemperature, MAX30105 and the SpO₂ algorithm library. It sends body temperature, heart rate, SpO₂, room temperature and humidity to Blynk virtual pins V0–V4, and writes a three-colour status indication to V5.</p></Section>
              <Section id="power" number="09" title="Power management"><p className="text-sm leading-8 text-slate-600">The prototype uses two 3.7V lithium-ion cells in series, giving approximately 7.4V. A buck converter steps this down to a regulated 5V supply for the ESP32, LCD and sensors. The report highlights supply stability as important for reliable operation and notes that a buck converter can reduce heat generation compared with linear regulation.</p></Section>
              <Section id="results" number="10" title="Results & discussion"><p className="text-sm leading-8 text-slate-600">The report describes indoor testing under relatively constant room conditions, with the measured person remaining still during measurements. Multiple readings were collected. The report's main results table (page 27) contains the following recorded readings:</p><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[500px] text-left text-sm"><thead><tr className="border-b border-slate-200 text-xs text-slate-500"><th className="p-3">Parameter</th><th className="p-3">Recorded value</th><th className="p-3">Report reference range</th></tr></thead><tbody>{[["Heart rate","72 BPM","60–100 BPM"],["SpO₂","98%","95–100%"],["Body temperature","36.7°C","36.5–37.5°C"],["Room temperature","29°C","25–32°C"],["Humidity","65%","40–70%"]].map(x=><tr key={x[0]} className="border-b border-slate-100"><td className="p-3 font-semibold">{x[0]}</td><td className="p-3">{x[1]}</td><td className="p-3">{x[2]}</td></tr>)}</tbody></table></div><h3 className="mt-6 font-black text-[#142033]">Appendix C – Sample sensor readings</h3><div className="mt-3 overflow-x-auto"><table className="w-full min-w-[560px] text-left text-xs"><thead><tr className="border-b border-slate-200 text-slate-500">{["Test","Heart rate","SpO₂","Body temp.","Room temp.","Humidity"].map(x=><th key={x} className="p-2">{x}</th>)}</tr></thead><tbody>{[["1","70","97","36.6","29.1","64"],["2","72","98","36.7","29.0","65"],["3","74","99","36.8","29.2","66"],["4","71","98","36.7","29.1","65"],["5","73","97","36.6","29.3","64"]].map(row=><tr key={row[0]} className="border-b border-slate-100">{row.map((v,i)=><td key={i} className="p-2">{v}</td>)}</tr>)}</tbody></table></div><p className="mt-5 text-sm leading-8 text-slate-600">The report evaluates the prototype as satisfactory in its test conditions, while noting delays in heart-rate calculation and minor delays in Blynk data transfer. Filtering reduced unwanted fluctuations. The report's graph analysis is presented in Figures 12–14 on pages 28–29.</p><p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">The values above are prototype readings reported in the project document. The report explicitly states that the system does not provide medically accurate readings. It is an educational monitoring prototype, not a medical device or diagnostic tool.</p></Section>
              <Section id="conclusion" number="11" title="Conclusion & future improvements"><p className="text-sm leading-8 text-slate-600">The project report concludes that the ESP32-based prototype successfully monitored heart rate, SpO₂, body temperature, room temperature and humidity. The system processed sensor readings, displayed information on the 20×4 LCD and transmitted values to Blynk over Wi-Fi. The state-based workflow organised the measurement process into guided steps.</p><h3 className="mt-5 font-black text-[#142033]">Future improvements identified in the report</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600"><li>Integrate additional sensors such as ECG and blood-pressure sensors.</li><li>Introduce alerts and notifications for unusual readings.</li><li>Evaluate higher-quality sensors with improved measurement reliability.</li><li>Expand cloud data storage and develop a dedicated mobile application.</li><li>Explore artificial intelligence for analysis of collected health data.</li></ul></Section>
              <Section id="considerations" number="12" title="Safety, ethical & environmental considerations"><div className="space-y-4 text-sm leading-7 text-slate-600"><p><b className="text-[#142033]">Safety:</b> The report discusses correct electrical connections, regulated voltage, enclosure protection and careful handling of lithium-ion cells.</p><p><b className="text-[#142033]">Ethical:</b> Health-related information should be used only for monitoring purposes and should not be shared without the user's permission. Appropriate data transmission and storage protections are important.</p><p><b className="text-[#142033]">Environmental:</b> Rechargeable batteries and low-power components are identified as ways to reduce disposable battery use and energy consumption.</p></div></Section>
              <section className="border-b border-slate-200 py-9"><h2 className="text-xl font-black text-[#142033]">Project resources</h2><p className="mt-3 text-sm leading-7 text-slate-600">The full source-code document and working demonstration supplied for this project are available through the links below.</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://docs.google.com/document/d/1uiBVSp9aEGZgSThKd2E4ZsPu9XX4HkU3Y7k-_ADCMWg/edit?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"><Code2 size={17}/> View source code <ArrowUpRight size={14}/></a><a href="https://drive.google.com/file/d/1SFngec9nSyvwI4O306smmKzn9PbCUcEe/view" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"><PlayCircle size={17}/> Watch demo video <ArrowUpRight size={14}/></a></div></section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}


function Section({ id, number, title, children }: { id:string; number:string; title:string; children:React.ReactNode }) {
  return <section id={id} className="scroll-mt-8 border-b border-slate-200 py-9 last:border-0"><div className="mb-4 flex items-center gap-3"><span className="text-xs font-black tracking-[.18em] text-blue-700">{number}</span><h2 className="text-xl font-black tracking-tight text-[#142033] md:text-2xl">{title}</h2></div>{children}</section>;
}


function AMRReportPage() {
  const sections = [
    ["abstract","ABSTRACT","This project developed an autonomous mobile robot prototype for indoor air-quality monitoring. The robot used a designed and assembled mobile chassis, line-following navigation, environmental sensors and ultrasonic obstacle detection. Two ESP32 controllers were used to separate the main functions: one handled line following and the DHT11/MQ gas sensors, while the other handled ultrasonic obstacle detection and Blynk IoT communication. The robot successfully demonstrated line following and obstacle detection. However, reliable checkpoint/location identification and the association of separate sensor readings with each designated position remained unresolved."],
    ["introduction","01 · Introduction","Industrial environments may contain changing air-quality conditions across different areas. Fixed sensors only measure their installation points, while manual inspection can require people to enter potentially hazardous areas. A mobile monitoring platform can travel along a predefined route and collect environmental readings at different points. This prototype explored that approach using a low-cost ESP32-based mobile robot."],
    ["objectives","02 · Project objectives","The project aimed to design a mobile chassis, implement autonomous line following, integrate gas and temperature/humidity sensors, detect obstacles using an ultrasonic sensor, and provide remote monitoring through Blynk IoT. A further intended function was to identify route positions and associate measurements with those positions."],
    ["design","03 · Mechanical and electronic design","The robot was built around a small mobile car chassis with two driven wheels and a support wheel. The chassis provided the mounting platform for the controller boards, motor driver, battery, line sensors, environmental sensors and ultrasonic sensor. The design focused on arranging the components so that the robot could follow its route while carrying the sensing and communication hardware. The electronics included two ESP32 boards, an L298N motor driver, a five-channel infrared line sensor array, an HC-SR04 ultrasonic sensor, MQ-2 and MQ-135 gas sensors, and a DHT11 temperature and humidity sensor. A regulated supply was used for the low-voltage electronics."],
    ["architecture","04 · Dual-ESP32 system architecture","The system used two ESP32 controllers to divide the workload. This separation allowed the navigation and environmental-sensing functions to operate on one controller while the second controller handled obstacle detection and Blynk communication."],
    ["implementation","05 · Navigation and monitoring implementation","The line-following controller read the five-channel infrared sensor array and adjusted the motor outputs to keep the robot on the predefined track. The DHT11 measured temperature and humidity, while the MQ-2 and MQ-135 provided analogue responses associated with gas and smoke sensing. The second ESP32 read the HC-SR04 ultrasonic sensor to detect obstacles and managed the Wi-Fi connection and Blynk IoT data communication. The intended monitoring workflow was to collect readings at designated route positions and make the information available through the Blynk interface."],
    ["testing","06 · Functional testing and results","The project demonstrated the core movement and sensing functions. Line following operated on the predefined route, and the ultrasonic system detected obstacles. The two-controller arrangement was implemented to separate navigation/environmental sensing from obstacle detection and Blynk communication. The environmental sensors were integrated into the system. The main incomplete function was reliable location identification: the robot did not consistently identify each designated position, so recording and separating the sensor readings for every individual position could not be completed reliably."],
    ["limitations","07 · Challenges and limitations","The most significant limitation was checkpoint/location identification. Although the robot could follow the route, it did not consistently recognise each position well enough to tag the corresponding sensor measurements. This affected the intended location-by-location air-quality monitoring workflow. The prototype also followed a predefined route rather than performing general-purpose mapping or dynamic path planning. The gas sensors provided prototype analogue responses and were not a certified industrial gas-measurement instrument."],
    ["future","08 · Future development","Future work should prioritise reliable checkpoint detection and position tagging. A more robust marker-reading method, sensor filtering, and a clear state-based checkpoint sequence could be evaluated. The data workflow should be tested to confirm that each sensor reading is stored with the correct location identifier before expanding the dashboard. Further improvements could include better mechanical protection, improved power management, local data buffering during Wi-Fi interruptions, and more advanced navigation."],
    ["conclusion","09 · Conclusion","The project demonstrated an ESP32-based mobile robot that could follow a predefined line and detect obstacles. It combined a designed mobile chassis, two ESP32 controllers, DHT11 and MQ gas sensors, ultrasonic sensing and Blynk IoT communication. The work also identified an important limitation: checkpoint/location identification was not sufficiently reliable to support consistent position-specific measurement logging. This provides a clear direction for the next development stage."]
  ];
  const architecture = [
    ["ESP32 #1 · Line following and environmental sensing","Reads the five-channel IR array, controls the drive motors for line following, and acquires DHT11, MQ-2 and MQ-135 sensor readings."],
    ["ESP32 #2 · Obstacle detection and Blynk","Reads the HC-SR04 ultrasonic sensor for obstacle detection and manages Wi-Fi/Blynk IoT communication."],
    ["Mobile chassis and drive","Carries the two controllers, motor driver, battery and sensors along the predefined indoor route."]
  ];
  const results = [
    ["Line following","Demonstrated on the predefined route"],
    ["Ultrasonic obstacle detection","Implemented and demonstrated"],
    ["Chassis design","Designed and assembled as the robot platform"],
    ["Environmental sensors","DHT11, MQ-2 and MQ-135 integrated"],
    ["Blynk IoT","Integrated using the second ESP32"],
    ["Checkpoint/location identification","Not consistently reliable"],
    ["Separate readings per location","Not completed reliably because location identification was problematic"]
  ];
  return (
    <main className="min-h-screen bg-[#eef2f7] pb-16 text-[#25344b]">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="section-shell flex h-[68px] items-center justify-between">
          <Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link>
          <Link href="/projects/indoor-air-quality-robot" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700"><ArrowLeft size={16}/> Back to project</Link>
        </div>
      </header>
      <div className="section-shell pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,35,70,.09)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#142033] via-[#1d3d69] to-[#245ce5] px-7 py-12 text-white md:px-14 md:py-16">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10"/>
            <div className="absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10"/>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-black tracking-[.2em] text-blue-200"><FileText size={15}/> ENGINEERING PROJECT REPORT</div>
              <p className="mt-10 text-xs font-bold tracking-[.2em] text-blue-200">AUTONOMOUS ROBOTICS · INDUSTRIAL IOT</p>
              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">Autonomous Mobile Robot for Indoor Air Quality Monitoring</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50">Design and implementation of a line-following mobile platform with dual ESP32 control, environmental sensing, ultrasonic obstacle detection and Blynk IoT monitoring.</p>
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROJECT 03</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROTOTYPE</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">ONLINE REPORT</span></div>
            </div>
          </div>
          <div className="grid gap-10 p-6 md:grid-cols-[210px_minmax(0,1fr)] md:p-12">
            <aside className="h-fit md:sticky md:top-24">
              <p className="text-xs font-black tracking-[.18em] text-blue-700">REPORT CONTENTS</p>
              <nav className="mt-4 grid gap-2 text-sm">
                {sections.map(([id,title])=><a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">{title}</a>)}
              </nav>
            </aside>
            <article className="min-w-0">
              {sections.map(([id,title,body],i)=><Section key={id} id={id} number={i===0?"ABSTRACT":String(i).padStart(2,"0")} title={title}>
                <p className="text-sm leading-8 text-slate-600">{body}</p>
                {id==="architecture" && <div className="mt-5 space-y-3">{architecture.map(([heading,description])=><div key={heading} className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5"><h3 className="font-bold text-[#142033]">{heading}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div>)}</div>}
                {id==="testing" && <div className="mt-6 overflow-hidden rounded-xl border border-slate-200"><div className="grid grid-cols-[1fr_1.1fr] bg-[#142033] px-4 py-3 text-xs font-bold tracking-wide text-white"><span>FUNCTION</span><span>OUTCOME</span></div>{results.map(([name,outcome],j)=><div key={name} className={`grid grid-cols-[1fr_1.1fr] gap-3 px-4 py-4 text-sm ${j%2===0?"bg-white":"bg-[#f7f9fc]"}`}><span className="text-slate-600">{name}</span><strong className="text-[#142033]">{outcome}</strong></div>)}</div>}
              </Section>)}
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-black tracking-[.16em] text-amber-800">REPORTING NOTE</p>
                <p className="mt-2 text-sm leading-7 text-amber-900">This page describes the prototype and its demonstrated outcomes. Checkpoint/location identification and reliable position-specific data logging are explicitly recorded as limitations rather than presented as completed features. MQ-series sensors are treated as prototype analogue gas/smoke sensors, not certified industrial measurement instruments.</p>
              </div>
            </article>
          </div>
          <footer className="border-t border-slate-200 bg-[#f8fafc] px-6 py-7 text-center md:px-12">
            <p className="text-xs font-bold tracking-[.18em] text-slate-400">END OF PROJECT REPORT</p>
            <p className="mt-2 text-sm text-slate-500">Autonomous Mobile Robot for Indoor Air Quality Monitoring · Project 03</p>
            <Link href="/projects/indoor-air-quality-robot" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Return to project page <ArrowUpRight size={15}/></Link>
          </footer>
        </div>
      </div>
    </main>
  );
}


function GestureReportPage() {
  const sections = [
    ["abstract","ABSTRACT","This project presents a hand gesture-controlled robotic car developed using two ESP32 microcontrollers and an MPU6050 motion sensor. The MPU6050 detects the tilt of the user's hand, and the transmitter ESP32 sends control information to the receiver using ESP-NOW wireless communication. The receiving controller operates the car's motors according to the detected gesture. Forward, backward, left and right movements are controlled by hand tilt, while the amount of tilt determines the speed. Returning the hand to a level position commands the car to stop."],
    ["introduction","01 · Introduction","Conventional robotic cars are commonly operated using buttons, joysticks or wired control interfaces. A gesture-based interface provides an alternative in which physical hand movement is used as the control input. This project explores that approach by combining inertial motion sensing, wireless communication and embedded motor control."],
    ["objectives","02 · Project objectives","The main objectives were to interface an MPU6050 with an ESP32, detect hand-tilt movement, transmit gesture information wirelessly using ESP-NOW, and control the direction and speed of a robotic car using a second ESP32. The project also aimed to integrate the hardware and software subsystems into a functional prototype."],
    ["design","03 · Hardware and software design","The prototype uses two ESP32 microcontrollers, an MPU6050 accelerometer and gyroscope, a robotic car chassis, DC drive motors, a motor driver and a power supply. The MPU6050 is connected to the transmitter-side ESP32. The second ESP32 is installed on the car and interfaces with the motor-control circuit. Arduino IDE and embedded C/C++ are used for sensor interfacing, wireless communication and motor-control programming."],
    ["architecture","04 · System architecture","The design separates gesture sensing and motor actuation across two ESP32 boards. The transmitter reads the hand movement and sends control information wirelessly. The receiver interprets the received information and controls the motors."],
    ["implementation","05 · System implementation","The MPU6050 measures hand tilt using its accelerometer and gyroscope. The transmitter ESP32 processes the sensor information and sends the corresponding control data through ESP-NOW. The receiver ESP32 uses the received command to control motor direction. The degree of hand tilt is mapped to motor speed, allowing larger hand movements to produce faster car movement. A level hand position is mapped to a stop command."],
    ["testing","06 · Functional behaviour","The implemented control mapping includes forward, backward, left and right movement. Speed variation is linked to the degree of hand tilt, and a level hand position commands the car to stop. The project information confirms integration of the MPU6050, two ESP32 boards, ESP-NOW communication and motor direction/speed control. Quantitative measurements such as response time, wireless range, speed values and command accuracy were not available in the project information reviewed and are therefore not reported here."],
    ["contribution","07 · Individual contribution","The documented individual work included hardware assembly and circuit integration, MPU6050 programming, ESP-NOW wireless communication, motor direction and speed-control programming, subsystem integration and testing."],
    ["challenges","08 · Engineering considerations","The main engineering tasks involved translating motion-sensor readings into useful directional commands, transferring those commands between the two ESP32 boards, and ensuring the motor driver responded with the intended direction and speed. Gesture thresholds and sensor filtering are important considerations for reducing unintended movement, although specific calibration values were not available in the supplied project details."],
    ["future","09 · Future development","Potential improvements include calibrating gesture thresholds, filtering sensor noise, adding adjustable speed sensitivity, evaluating wireless response and operating distance, and improving the enclosure and ergonomics of the hand-held transmitter."]
  ];
  const architecture = [
    ["Hand movement and MPU6050","The motion sensor measures the user's hand tilt and provides motion data to the transmitter ESP32."],
    ["ESP32 transmitter and ESP-NOW","The transmitter interprets the gesture and sends the control information wirelessly to the car."],
    ["ESP32 receiver and motor control","The receiving ESP32 converts the wireless command into motor direction and speed outputs."]
  ];
  return (
    <main className="min-h-screen bg-[#eef2f7] pb-16 text-[#25344b]">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="section-shell flex h-[68px] items-center justify-between">
          <Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link>
          <Link href="/projects/hand-gesture-robotic-car" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700"><ArrowLeft size={16}/> Back to project</Link>
        </div>
      </header>
      <div className="section-shell pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,35,70,.09)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#142033] via-[#1d3d69] to-[#245ce5] px-7 py-12 text-white md:px-14 md:py-16">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10"/>
            <div className="absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10"/>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-black tracking-[.2em] text-blue-200"><FileText size={15}/> ENGINEERING PROJECT REPORT</div>
              <p className="mt-10 text-xs font-bold tracking-[.2em] text-blue-200">ROBOTICS · WIRELESS CONTROL</p>
              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">Hand Gesture-Based Robotic Car Using ESP32 and MPU6050</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50">A wireless gesture-control prototype using inertial sensing, ESP-NOW communication and variable-speed motor control.</p>
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROJECT 04</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROTOTYPE</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">ONLINE REPORT</span></div>
            </div>
          </div>
          <div className="grid gap-10 p-6 md:grid-cols-[210px_minmax(0,1fr)] md:p-12">
            <aside className="h-fit md:sticky md:top-24">
              <p className="text-xs font-black tracking-[.18em] text-blue-700">REPORT CONTENTS</p>
              <nav className="mt-4 grid gap-2 text-sm">{sections.map(([id,title])=><a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">{title}</a>)}</nav>
            </aside>
            <article className="min-w-0">
              {sections.map(([id,title,body],i)=><Section key={id} id={id} number={i===0?"ABSTRACT":String(i).padStart(2,"0")} title={title}>
                <p className="text-sm leading-8 text-slate-600">{body}</p>
                {id==="architecture" && <div className="mt-5 space-y-3">{architecture.map(([heading,description])=><div key={heading} className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5"><h3 className="font-bold text-[#142033]">{heading}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div>)}</div>}
                {id==="implementation" && <div className="mt-5 grid gap-2 sm:grid-cols-2"><p className="rounded-lg bg-[#f7f9fc] p-3 text-sm text-slate-700">Forward tilt → Forward movement</p><p className="rounded-lg bg-[#f7f9fc] p-3 text-sm text-slate-700">Backward tilt → Backward movement</p><p className="rounded-lg bg-[#f7f9fc] p-3 text-sm text-slate-700">Left/right tilt → Turning movement</p><p className="rounded-lg bg-[#f7f9fc] p-3 text-sm text-slate-700">Level hand → Stop</p></div>}
              </Section>)}
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-black tracking-[.16em] text-amber-800">REPORTING NOTE</p>
                <p className="mt-2 text-sm leading-7 text-amber-900">This report is based on the project details currently available. No quantitative test results, measured wireless range, response-time data, source-code link or demonstration media were supplied, so these have not been invented or presented as verified evidence.</p>
              </div>
            </article>
          </div>
          <footer className="border-t border-slate-200 bg-[#f8fafc] px-6 py-7 text-center md:px-12">
            <p className="text-xs font-bold tracking-[.18em] text-slate-400">END OF PROJECT REPORT</p>
            <p className="mt-2 text-sm text-slate-500">Hand Gesture-Based Robotic Car · Project 04</p>
            <Link href="/projects/hand-gesture-robotic-car" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Return to project page <ArrowUpRight size={15}/></Link>
          </footer>
        </div>
      </div>
    </main>
  );
}


function CalculatorReportPage() {
  const sections = [
    ["abstract","ABSTRACT","The Industrial Engineering Calculator is a full-stack engineering software application that brings formula-based calculations, unit conversion, a searchable formula library and calculation history into one platform. The repository includes a React and TypeScript frontend, a Python FastAPI backend, a Streamlit interface and SQLite storage. It also includes CSV export, input validation and automated tests using Pytest."],
    ["introduction","01 · Introduction","Engineering calculations are used across multiple technical disciplines. Repeatedly calculating values, converting units and looking up formulas can interrupt an engineering workflow. This application aims to provide a single interface for selected calculations and related tools, while retaining a history of previous calculations."],
    ["objectives","02 · Project objectives","The project objectives are to provide a usable engineering calculator, implement selected formula-based calculations, support unit conversion, provide a searchable formula library, store and export calculation history, separate frontend and backend responsibilities, and validate inputs and calculation logic with automated tests."],
    ["technology","03 · Technologies used","The repository includes a React and TypeScript frontend built with Vite, a Python FastAPI backend, and an additional Streamlit application interface. SQLite provides persistent storage for calculation history. Pytest is used for automated testing, while Ruff is configured for Python code quality checks."],
    ["features","04 · Main application features","The repository documents formula-based engineering calculations, unit conversion, a searchable formula library, calculation history, CSV export, educational formula information and input validation. Formula search can use formula names, categories, descriptions and keywords. The documented calculation topics include speed, force, pressure, torque, voltage, electrical power and kinetic energy. The precise full formula catalogue and supported unit list may be explored in the source repository."],
    ["architecture","05 · System architecture","The main web application follows a frontend/backend architecture. The React and TypeScript interface handles user interaction, while the Python FastAPI backend provides the API and calculation processing layer. SQLite persists calculation history. The repository also includes a separate Streamlit application interface. Pytest supports verification of calculation functions and application behaviour."],
    ["testing","06 · Testing and quality assurance","The repository includes dedicated Pytest modules for calculation functions, calculation edge cases, educational information, calculation history and the formula registry. The project README reports a development result of 104 tests passed. This is presented as the result recorded in the repository documentation; the tests were not rerun as part of this portfolio-page update."],
    ["limitations","07 · Scope and verification notes","A public live deployment URL is not listed in the repository README; the documented setup currently describes running the frontend and backend locally. The full formula catalogue and complete supported unit coverage should be checked in the application before relying on a specific calculation. The 104-test result is retained as documented in the repository and was not independently rerun for this portfolio update."],
    ["future","08 · Future development","Possible next steps include expanding the formula library, providing clearer formula explanations and worked examples, extending unit and input validation, improving calculation-history filtering and report exports, optimising frontend bundle size, and publishing a live deployment with API documentation."],
    ["conclusion","09 · Conclusion","The Industrial Engineering Calculator combines engineering calculations, unit conversion, formula search, calculation history and CSV export in a full-stack application. Its React/TypeScript frontend, Python/FastAPI backend, additional Streamlit interface, SQLite storage and Pytest test suite provide a foundation for further development as an engineering productivity tool."]
  ];
  const architecture = [
    ["Frontend · React and TypeScript","Presents the calculator interface and supporting application features to the user."],
    ["Backend · Python and FastAPI","Provides the application API and calculation processing layer."],
    ["Persistence · SQLite","Stores calculation history for later access."],
    ["Testing · Pytest","Supports automated checks of calculation and application logic."]
  ];
  return (
    <main className="min-h-screen bg-[#eef2f7] pb-16 text-[#25344b]">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="section-shell flex h-[68px] items-center justify-between">
          <Link href="/#home" className="text-lg font-black tracking-tight text-[#142033]">DUMINDU<span className="text-blue-600">.</span></Link>
          <Link href="/projects/industrial-engineering-calculator" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700"><ArrowLeft size={16}/> Back to project</Link>
        </div>
      </header>
      <div className="section-shell pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,35,70,.09)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#142033] via-[#1d3d69] to-[#245ce5] px-7 py-12 text-white md:px-14 md:py-16">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10"/>
            <div className="absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10"/>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-black tracking-[.2em] text-blue-200"><FileText size={15}/> SOFTWARE ENGINEERING PROJECT REPORT</div>
              <p className="mt-10 text-xs font-bold tracking-[.2em] text-blue-200">ENGINEERING SOFTWARE · FULL-STACK APPLICATION</p>
              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">Industrial Engineering Calculator</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50">A full-stack engineering calculation platform with unit conversion, a formula library and calculation history.</p>
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">PROJECT 05</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">FULL-STACK APPLICATION</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">ONLINE REPORT</span></div>
            </div>
          </div>
          <div className="grid gap-10 p-6 md:grid-cols-[210px_minmax(0,1fr)] md:p-12">
            <aside className="h-fit md:sticky md:top-24">
              <p className="text-xs font-black tracking-[.18em] text-blue-700">REPORT CONTENTS</p>
              <nav className="mt-4 grid gap-2 text-sm">{sections.map(([id,title])=><a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">{title}</a>)}</nav>
            </aside>
            <article className="min-w-0">
              {sections.map(([id,title,body],i)=><Section key={id} id={id} number={i===0?"ABSTRACT":String(i).padStart(2,"0")} title={title}>
                <p className="text-sm leading-8 text-slate-600">{body}</p>
                {id==="architecture" && <div className="mt-5 space-y-3">{architecture.map(([heading,description])=><div key={heading} className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5"><h3 className="font-bold text-[#142033]">{heading}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div>)}</div>}
                {id==="features" && <div className="mt-5 grid gap-3 sm:grid-cols-2">{["Formula-based engineering calculations","Unit conversion","Searchable formula library","Calculation history","CSV history export","Input validation"].map((x,i)=><div key={x} className="rounded-xl bg-[#f7f9fc] p-4"><p className="text-xs font-black text-blue-700">FEATURE 0{i+1}</p><p className="mt-2 text-sm font-semibold text-[#142033]">{x}</p></div>)}</div>}
                {id==="technology" && <div className="mt-5 flex flex-wrap gap-2">{["React","TypeScript","Python","FastAPI","Streamlit","SQLite","Vite","Pytest","Ruff"].map(x=><span key={x} className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">{x}</span>)}</div>}
              </Section>)}
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-black tracking-[.16em] text-amber-800">REPORTING NOTE</p>
                <p className="mt-2 text-sm leading-7 text-amber-900">The project repository and demonstration video are linked below. The reported 104 automated tests are not presented as a fresh test run.</p>
                <div className="mt-4 flex flex-wrap gap-3"><a href="https://github.com/duminduue/industrial-engineering-calculator" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700">View GitHub repository <ArrowUpRight size={14}/></a><a href="https://lnkd.in/p/giMm9J6w" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700">Watch demo video <ArrowUpRight size={14}/></a><a href="https://lnkd.in/p/gsiJbVTW" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700">Project post <ArrowUpRight size={14}/></a></div>
              </div>
            </article>
          </div>
          <footer className="border-t border-slate-200 bg-[#f8fafc] px-6 py-7 text-center md:px-12">
            <p className="text-xs font-bold tracking-[.18em] text-slate-400">END OF PROJECT REPORT</p>
            <p className="mt-2 text-sm text-slate-500">Industrial Engineering Calculator · Project 05</p>
            <Link href="/projects/industrial-engineering-calculator" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Return to project page <ArrowUpRight size={15}/></Link>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default async function ProjectReportPage({ params }: { params: Promise<{ slug:string }> }) {
  const { slug } = await params;
  if (slug === "iot-health-monitoring") return <HealthReportPage />;
  if (slug === "indoor-air-quality-robot") return <AMRReportPage />;
  if (slug === "hand-gesture-robotic-car") return <GestureReportPage />;
  if (slug === "industrial-engineering-calculator") return <CalculatorReportPage />;
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
