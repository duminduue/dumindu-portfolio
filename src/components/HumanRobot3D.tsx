"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HumanoidRobot() {
  const root = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Group>(null);
  const rightLeg = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (root.current) root.current.position.y = Math.sin(t * 1.8) * 0.045;
    if (leftArm.current) leftArm.current.rotation.x = Math.sin(t * 1.7) * 0.22 - 0.12;
    if (rightArm.current) rightArm.current.rotation.x = -Math.sin(t * 1.7) * 0.22 - 0.12;
    if (leftLeg.current) leftLeg.current.rotation.x = Math.sin(t * 1.7) * 0.12;
    if (rightLeg.current) rightLeg.current.rotation.x = -Math.sin(t * 1.7) * 0.12;
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.65) * 0.16;
      head.current.rotation.x = Math.sin(t * 0.9) * 0.035;
    }
  });

  const metal = "#dce8f7";
  const blue = "#2563eb";
  const dark = "#14243b";

  return (
    <group ref={root} position={[0, -1.25, 0]} scale={0.92}>
      <mesh position={[0, -0.08, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.43, 0.58, 8]} />
        <meshStandardMaterial color={dark} metalness={0.72} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.42, 0]} castShadow>
        <boxGeometry args={[0.88, 0.92, 0.42]} />
        <meshStandardMaterial color={metal} metalness={0.72} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0.42, 0.225]}>
        <boxGeometry args={[0.42, 0.48, 0.035]} />
        <meshStandardMaterial color={blue} metalness={0.45} roughness={0.25} emissive={blue} emissiveIntensity={0.22} />
      </mesh>
      <mesh position={[0, 0.42, 0.25]}>
        <boxGeometry args={[0.12, 0.12, 0.025]} />
        <meshStandardMaterial color="#dff7ff" emissive="#60a5fa" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0, 0.98, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.22, 12]} />
        <meshStandardMaterial color={blue} metalness={0.7} roughness={0.22} />
      </mesh>
      <group ref={head} position={[0, 1.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.66, 0.58, 0.52]} />
          <meshStandardMaterial color={metal} metalness={0.7} roughness={0.22} />
        </mesh>
        <mesh position={[0, -0.02, 0.27]}>
          <boxGeometry args={[0.48, 0.22, 0.035]} />
          <meshStandardMaterial color={dark} metalness={0.35} roughness={0.25} />
        </mesh>
        {[-0.13, 0.13].map((x) => (
          <mesh key={x} position={[x, -0.01, 0.296]}>
            <sphereGeometry args={[0.045, 16, 12]} />
            <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={2.2} />
          </mesh>
        ))}
        <mesh position={[0, 0.32, 0]}>
          <boxGeometry args={[0.22, 0.08, 0.2]} />
          <meshStandardMaterial color={blue} metalness={0.55} roughness={0.24} />
        </mesh>
        <mesh position={[-0.37, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.1, 12]} />
          <meshStandardMaterial color={blue} metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0.37, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.1, 12]} />
          <meshStandardMaterial color={blue} metalness={0.7} roughness={0.25} />
        </mesh>
      </group>
      <group ref={leftArm} position={[-0.55, 0.76, 0]}>
        <mesh position={[0, -0.27, 0]} rotation={[0, 0, -0.12]} castShadow>
          <capsuleGeometry args={[0.13, 0.42, 5, 10]} />
          <meshStandardMaterial color={metal} metalness={0.68} roughness={0.26} />
        </mesh>
        <mesh position={[-0.02, -0.56, 0]}>
          <sphereGeometry args={[0.14, 16, 12]} />
          <meshStandardMaterial color={blue} metalness={0.65} roughness={0.24} />
        </mesh>
        <mesh position={[-0.02, -0.76, 0]}>
          <boxGeometry args={[0.22, 0.28, 0.22]} />
          <meshStandardMaterial color={dark} metalness={0.65} roughness={0.3} />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.55, 0.76, 0]}>
        <mesh position={[0, -0.27, 0]} rotation={[0, 0, 0.12]} castShadow>
          <capsuleGeometry args={[0.13, 0.42, 5, 10]} />
          <meshStandardMaterial color={metal} metalness={0.68} roughness={0.26} />
        </mesh>
        <mesh position={[0.02, -0.56, 0]}>
          <sphereGeometry args={[0.14, 16, 12]} />
          <meshStandardMaterial color={blue} metalness={0.65} roughness={0.24} />
        </mesh>
        <mesh position={[0.02, -0.76, 0]}>
          <boxGeometry args={[0.22, 0.28, 0.22]} />
          <meshStandardMaterial color={dark} metalness={0.65} roughness={0.3} />
        </mesh>
      </group>
      <group ref={leftLeg} position={[-0.23, -0.38, 0]}>
        <mesh position={[0, -0.39, 0]} castShadow>
          <capsuleGeometry args={[0.16, 0.52, 5, 10]} />
          <meshStandardMaterial color={metal} metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0, -0.77, 0.1]}>
          <boxGeometry args={[0.34, 0.18, 0.5]} />
          <meshStandardMaterial color={dark} metalness={0.68} roughness={0.3} />
        </mesh>
      </group>
      <group ref={rightLeg} position={[0.23, -0.38, 0]}>
        <mesh position={[0, -0.39, 0]} castShadow>
          <capsuleGeometry args={[0.16, 0.52, 5, 10]} />
          <meshStandardMaterial color={metal} metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0, -0.77, 0.1]}>
          <boxGeometry args={[0.34, 0.18, 0.5]} />
          <meshStandardMaterial color={dark} metalness={0.68} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

export default function HumanRobot3D() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-blue-100 bg-[radial-gradient(ellipse_at_50%_35%,#e8f2ff_0%,#f8fbff_55%,#edf4ff_100%)]">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(37,99,235,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-5 top-5 z-10">
        <p className="text-[10px] font-black tracking-[.2em] text-blue-700">HUMAN–ROBOTICS</p>
        <p className="mt-1 text-sm font-bold text-slate-700">Interactive 3D concept</p>
      </div>
      <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-[9px] font-bold tracking-[.12em] text-emerald-700">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> LIVE ANIMATION
      </div>
      <Canvas camera={{ position: [3.6, 2.3, 5.4], fov: 36 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.35} />
          <hemisphereLight args={["#eaf4ff", "#53657e", 1.4]} />
          <directionalLight position={[4, 6, 5]} intensity={2.6} />
          <pointLight position={[-2, 2, 2]} color="#38bdf8" intensity={12} distance={8} />
          <HumanoidRobot />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute bottom-5 left-0 right-0 text-center">
        <p className="text-[10px] font-black tracking-[.18em] text-slate-500">ROBOTICS · AI · HUMAN INTERACTION</p>
      </div>
    </div>
  );
}
