"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Joint({ position, radius = 0.16 }: { position: [number, number, number]; radius?: number }) {
  return (
    <mesh position={position} castShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color="#9bdcff" metalness={0.85} roughness={0.2} emissive="#147acb" emissiveIntensity={0.35} />
    </mesh>
  );
}

function ArmSegment({ start, end, radius = 0.105 }: { start: [number, number, number]; end: [number, number, number]; radius?: number }) {
  const a = new THREE.Vector3(...start);
  const b = new THREE.Vector3(...end);
  const direction = new THREE.Vector3().subVectors(b, a);
  const midpoint = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
  return (
    <mesh position={midpoint.toArray()} quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize())} castShadow>
      <cylinderGeometry args={[radius, radius * 1.12, direction.length(), 24]} />
      <meshStandardMaterial color="#8ebde8" metalness={0.82} roughness={0.22} />
    </mesh>
  );
}

function RoboticArm() {
  const wrist = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (wrist.current) wrist.current.rotation.z = Math.sin(clock.elapsedTime * 0.8) * 0.16;
  });
  const p0: [number, number, number] = [-1.35, 0.32, 0.15];
  const p1: [number, number, number] = [-1.45, 1.05, 0.15];
  const p2: [number, number, number] = [-0.88, 1.72, 0.15];
  return (
    <group>
      <mesh position={[-1.35, 0.2, 0.15]} castShadow>
        <cylinderGeometry args={[0.38, 0.48, 0.25, 48]} />
        <meshStandardMaterial color="#173b66" metalness={0.8} roughness={0.25} />
      </mesh>
      <ArmSegment start={p0} end={p1} radius={0.14} />
      <ArmSegment start={p1} end={p2} radius={0.12} />
      <Joint position={p0} radius={0.22} />
      <Joint position={p1} radius={0.2} />
      <group ref={wrist} position={p2}>
        <Joint position={[0, 0, 0]} radius={0.16} />
        <ArmSegment start={[0, 0, 0]} end={[0.35, 0.28, 0]} radius={0.075} />
        <mesh position={[0.42, 0.3, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.28, 0.08, 0.12]} />
          <meshStandardMaterial color="#c5eaff" metalness={0.75} roughness={0.2} />
        </mesh>
        <mesh position={[0.54, 0.18, 0.05]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[0.07, 0.22, 0.08]} />
          <meshStandardMaterial color="#69c9ff" metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

function Rover() {
  const wheels = [-0.28, 0.28];
  return (
    <group position={[0.15, 0.3, 0.62]}>
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.34, 0.62]} />
        <meshStandardMaterial color="#b5d8f2" metalness={0.72} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.24, 0]} castShadow>
        <boxGeometry args={[0.38, 0.2, 0.34]} />
        <meshStandardMaterial color="#123b68" metalness={0.8} roughness={0.2} emissive="#0879be" emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[0, 0.39, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.16, 24]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.4} />
      </mesh>
      {wheels.flatMap((x) => [-0.34, 0.34].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, -0.18, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.12, 32]} />
          <meshStandardMaterial color="#07172b" metalness={0.4} roughness={0.6} />
        </mesh>
      )))}
    </group>
  );
}

function FloatingPanel({ position, label, sub }: { position: [number, number, number]; label: string; sub: string }) {
  return (
    <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.14}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[1.05, 0.62, 0.055]} />
          <meshStandardMaterial color="#12345b" metalness={0.55} roughness={0.24} transparent opacity={0.88} emissive="#075985" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <boxGeometry args={[0.88, 0.025, 0.012]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
        <Html center distanceFactor={5.5} transform position={[0, -0.02, 0.09]} style={{ pointerEvents: "none", whiteSpace: "nowrap" }}>
          <div style={{ color: "#dff6ff", fontSize: "8px", fontWeight: 800, letterSpacing: "1px", textAlign: "center" }}>
            {label}<div style={{ color: "#67cfff", fontSize: "6px", marginTop: "3px" }}>{sub}</div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function EngineeringScene() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.elapsedTime * 0.18) * 0.08;
  });
  return (
    <>
      <color attach="background" args={["#0b1b31"]} />
      <fog attach="fog" args={["#0b1b31", 9, 18]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 6, 5]} intensity={2.2} castShadow />
      <pointLight position={[-2, 3, 2]} color="#22d3ee" intensity={28} distance={8} />
      <pointLight position={[3, 2, -2]} color="#2563eb" intensity={22} distance={8} />
      <group ref={group} position={[-0.4, -0.6, 0]}>
        <mesh position={[0, -0.08, 0]} receiveShadow>
          <cylinderGeometry args={[2.5, 2.58, 0.22, 96]} />
          <meshStandardMaterial color="#102d50" metalness={0.82} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.045, 0]}>
          <cylinderGeometry args={[2.48, 2.48, 0.035, 96]} />
          <meshStandardMaterial color="#174a78" metalness={0.7} roughness={0.25} emissive="#075985" emissiveIntensity={0.35} />
        </mesh>
        <mesh position={[0, 0.07, 0]}>
          <torusGeometry args={[2.47, 0.018, 12, 120]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
        <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.22, 80]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
        </mesh>
        <RoboticArm />
        <Rover />
        <group position={[1.05, 0.25, -0.55]}>
          <mesh castShadow>
            <boxGeometry args={[0.48, 0.16, 0.42]} />
            <meshStandardMaterial color="#0d4774" metalness={0.8} roughness={0.2} emissive="#0284c7" emissiveIntensity={0.45} />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[0.32, 0.025, 0.28]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>
          <Html center position={[0, 0.23, 0]} distanceFactor={6} style={{ pointerEvents: "none" }}>
            <div style={{ color: "#67e8f9", fontSize: "8px", fontWeight: 900, letterSpacing: "2px" }}>AI CORE</div>
          </Html>
        </group>
        <FloatingPanel position={[-0.15, 1.55, -0.8]} label="ROBOTICS CONTROL" sub="LIVE SYSTEM STATUS" />
        <FloatingPanel position={[1.75, 1.35, -0.65]} label="SOFTWARE SYSTEMS" sub="CODE · BUILD · DEPLOY" />
        <Sparkles count={42} scale={[5.2, 2.2, 4.8]} size={2.2} speed={0.35} color="#67dfff" />
      </group>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Interactive 3D engineering visual">
      <Canvas shadows dpr={[1, 1.6]} camera={{ position: [4.8, 3.4, 6.2], fov: 38 }} gl={{ antialias: true, alpha: false }}>
        <EngineeringScene />
      </Canvas>
      <div className="hero-webgl-labels" aria-hidden="true">
        <span>ROBOTICS</span><span>ARTIFICIAL INTELLIGENCE</span><span>INDUSTRIAL AUTOMATION</span><span>SOFTWARE ENGINEERING</span>
      </div>
    </div>
  );
}
