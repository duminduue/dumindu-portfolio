"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ARM_MODEL = "https://files.innerscene.com/library/desktop-4-axis-robot-arm-with-gripper-7ce43bd6/2757c5e48e39b00cc8f3/desktop-4-axis-robot-arm-with-gripper.glb";
const ROVER_MODEL = "https://files.innerscene.com/library/4wd-robot-rover-kit-two-decks-73d71fb2/10ff92ee0068eccf6472/4wd-robot-rover-kit-two-decks.glb";

function Model({ url, position, scale, rotation = [0, 0, 0] }: {
  url: string;
  position: [number, number, number];
  scale: number;
  rotation?: [number, number, number];
}) {
  const { scene } = useGLTF(url);
  const clone = scene.clone(true);
  clone.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return <primitive object={clone} position={position} scale={scale} rotation={rotation} />;
}

function Processor() {
  const core = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (core.current) {
      core.current.rotation.y = clock.elapsedTime * 0.22;
      core.current.position.y = 0.72 + Math.sin(clock.elapsedTime * 1.3) * 0.035;
    }
  });
  return (
    <group ref={core} position={[1.05, 0.72, -0.42]}>
      <mesh castShadow>
        <boxGeometry args={[0.66, 0.18, 0.66]} />
        <meshStandardMaterial color="#172d4b" metalness={0.92} roughness={0.18} emissive="#075985" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0.105, 0]}>
        <boxGeometry args={[0.52, 0.035, 0.52]} />
        <meshStandardMaterial color="#0c749f" metalness={0.8} roughness={0.18} emissive="#22d3ee" emissiveIntensity={1.1} />
      </mesh>
      <mesh position={[0, 0.13, 0]}>
        <boxGeometry args={[0.28, 0.025, 0.28]} />
        <meshBasicMaterial color="#b8f4ff" />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 0.34, 0.01, Math.sin(i * Math.PI / 4) * 0.34]}>
          <boxGeometry args={[0.12, 0.1, 0.045]} />
          <meshStandardMaterial color="#8bdcff" metalness={0.85} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function HoloPanel({ position, title, subtitle }: { position: [number, number, number]; title: string; subtitle: string }) {
  return (
    <Float speed={1.15} rotationIntensity={0.035} floatIntensity={0.11}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[1.05, 0.58, 0.035]} />
          <meshPhysicalMaterial color="#0b3760" metalness={0.4} roughness={0.18} transmission={0.12} transparent opacity={0.88} emissive="#075985" emissiveIntensity={0.45} />
        </mesh>
        <mesh position={[0, 0.13, 0.025]}>
          <boxGeometry args={[0.74, 0.025, 0.012]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
        <mesh position={[0, -0.01, 0.025]}>
          <boxGeometry args={[0.56, 0.014, 0.012]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[-0.38, -0.16, 0.025]}>
          <boxGeometry args={[0.16, 0.1, 0.012]} />
          <meshBasicMaterial color="#0ea5e9" />
        </mesh>
      </group>
    </Float>
  );
}

function Platform() {
  return (
    <group>
      <mesh position={[0, -0.12, 0]} receiveShadow>
        <cylinderGeometry args={[2.55, 2.62, 0.24, 96]} />
        <meshStandardMaterial color="#101e32" metalness={0.9} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0.015, 0]} receiveShadow>
        <cylinderGeometry args={[2.51, 2.51, 0.035, 96]} />
        <meshStandardMaterial color="#123b68" metalness={0.78} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0.038, 0]}>
        <torusGeometry args={[2.49, 0.018, 12, 160]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.215, 96]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function SceneContents() {
  const rig = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (rig.current) rig.current.rotation.y = Math.sin(clock.elapsedTime * 0.14) * 0.055;
  });
  return (
    <>
      <color attach="background" args={["#0b1b31"]} />
      <fog attach="fog" args={["#0b1b31", 9, 17]} />
      <ambientLight intensity={1.05} />
      <hemisphereLight args={["#c5eaff", "#071426", 1.15]} />
      <directionalLight position={[3, 7, 5]} intensity={2.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-2, 2.5, 2]} color="#22d3ee" intensity={24} distance={8} />
      <pointLight position={[3, 2, -2]} color="#2563eb" intensity={20} distance={8} />
      <group ref={rig} position={[-0.1, -0.48, 0]}>
        <Platform />
        <Float speed={0.75} rotationIntensity={0.018} floatIntensity={0.025}>
          <Model url={ARM_MODEL} position={[-1.25, 0.07, 0.05]} scale={3.05} rotation={[0, 0.15, 0]} />
        </Float>
        <Float speed={0.85} rotationIntensity={0.025} floatIntensity={0.035}>
          <Model url={ROVER_MODEL} position={[0.1, 0.12, 0.7]} scale={3.5} rotation={[0, -0.35, 0]} />
        </Float>
        <Processor />
        <HoloPanel position={[-0.35, 1.85, -0.9]} title="ROBOTICS CONTROL" subtitle="MOTION SYSTEMS" />
        <HoloPanel position={[1.48, 1.55, -0.85]} title="AI PROCESSING" subtitle="INTELLIGENT SYSTEMS" />
        <Sparkles count={55} scale={[5.4, 2.8, 5]} size={2} speed={0.28} color="#8be7ff" />
      </group>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="3D engineering showcase with robotic arm, rover and AI processor">
      <Canvas shadows dpr={[1, 1.6]} camera={{ position: [5.2, 3.7, 7.2], fov: 36 }} gl={{ antialias: true, alpha: false }}>
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
      <div className="hero-webgl-labels" aria-hidden="true">
        <span>ROBOTICS</span><span>ARTIFICIAL INTELLIGENCE</span><span>INDUSTRIAL AUTOMATION</span><span>SOFTWARE ENGINEERING</span>
      </div>
    </div>
  );
}

useGLTF.preload(ARM_MODEL);
useGLTF.preload(ROVER_MODEL);
