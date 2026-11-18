"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const silver = "#cbd5e1";
const dark = "#111827";
const blue = "#126bff";
const cyan = "#22d3ee";

function Joint({ radius = 0.27 }: { radius?: number }) {
  return (
    <group>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[radius, radius, 0.34, 48]} />
        <meshStandardMaterial color={dark} metalness={0.88} roughness={0.24} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[radius * 0.78, radius * 0.78, 0.37, 48]} />
        <meshStandardMaterial color={silver} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[radius * 0.57, radius * 0.57, 0.39, 48]} />
        <meshStandardMaterial color={dark} metalness={0.92} roughness={0.18} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0.205]}>
        <torusGeometry args={[radius * 0.48, 0.025, 10, 48]} />
        <meshBasicMaterial color={cyan} />
      </mesh>
    </group>
  );
}

function ArmLink({ length, width }: { length: number; width: number }) {
  return (
    <group>
      <mesh position={[0, length / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, length, width * 0.78]} />
        <meshStandardMaterial color={silver} metalness={0.82} roughness={0.27} />
      </mesh>
      <mesh position={[0, length / 2, width * 0.405]}>
        <boxGeometry args={[width * 0.48, length * 0.78, 0.025]} />
        <meshStandardMaterial color={dark} metalness={0.75} roughness={0.3} />
      </mesh>
      <mesh position={[0, length / 2, width * 0.425]}>
        <boxGeometry args={[width * 0.11, length * 0.56, 0.03]} />
        <meshBasicMaterial color={blue} />
      </mesh>
      <mesh position={[-width * 0.57, length / 2, 0]} castShadow>
        <boxGeometry args={[width * 0.12, length * 0.7, width * 0.92]} />
        <meshStandardMaterial color={dark} metalness={0.8} roughness={0.28} />
      </mesh>
    </group>
  );
}

function Gripper() {
  return (
    <group position={[0, 0.04, 0]}>
      <mesh position={[0, 0.13, 0]} castShadow>
        <boxGeometry args={[0.28, 0.25, 0.25]} />
        <meshStandardMaterial color={dark} metalness={0.85} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0.13, 0.14]}>
        <boxGeometry args={[0.19, 0.045, 0.025]} />
        <meshBasicMaterial color={cyan} />
      </mesh>
      {([-1, 1] as const).map((side) => (
        <group key={side} position={[side * 0.105, 0, 0]}>
          <mesh position={[side * 0.07, -0.19, 0]} rotation={[0, 0, side * -0.16]} castShadow>
            <boxGeometry args={[0.075, 0.42, 0.095]} />
            <meshStandardMaterial color={silver} metalness={0.88} roughness={0.22} />
          </mesh>
          <mesh position={[side * 0.095, -0.39, 0.015]} rotation={[0, 0, side * -0.16]}>
            <boxGeometry args={[0.07, 0.12, 0.08]} />
            <meshStandardMaterial color={dark} metalness={0.82} roughness={0.25} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function IndustrialRobotArm() {
  const shoulder = useRef<THREE.Group>(null);
  const elbow = useRef<THREE.Group>(null);
  const wrist = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (shoulder.current) shoulder.current.rotation.z = Math.sin(t * 0.62) * 0.12;
    if (elbow.current) elbow.current.rotation.z = Math.sin(t * 0.78 + 0.8) * 0.18;
    if (wrist.current) wrist.current.rotation.z = Math.sin(t * 0.9 + 1.4) * 0.1;
  });

  return (
    <group position={[0, -1.25, 0]}>
      {/* Floating shoulder joint: no display platform or floor */}
      <group ref={shoulder} position={[0, -0.48, 0]}>
        <Joint radius={0.31} />
        <group position={[0, 0.05, 0]}>
          <ArmLink length={1.05} width={0.34} />
          <group ref={elbow} position={[0, 1.08, 0]}>
            <Joint radius={0.25} />
            <group position={[0, 0.04, 0]}>
              <ArmLink length={0.82} width={0.27} />
              <group ref={wrist} position={[0, 0.86, 0]}>
                <Joint radius={0.19} />
                <group rotation={[0, 0, -0.18]} position={[0, 0.19, 0]}>
                  <Gripper />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      {/* Slim rear support and visible cable routing */}
      <mesh position={[0.22, -0.05, -0.17]} rotation={[0, 0, -0.22]} castShadow>
        <cylinderGeometry args={[0.045, 0.055, 0.92, 16]} />
        <meshStandardMaterial color={dark} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0.26, 0.4, -0.17]} rotation={[0, 0, -0.22]}>
        <cylinderGeometry args={[0.018, 0.018, 0.82, 12]} />
        <meshBasicMaterial color={blue} />
      </mesh>
    </group>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated silver and black industrial robotic arm with blue illuminated joints">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [3.8, 2.1, 6.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.15} />
        <hemisphereLight args={["#eaf6ff", "#18243a", 1.4]} />
        <directionalLight position={[4, 6, 5]} intensity={2.8} />
        <pointLight position={[-2, 1.5, 2]} color={cyan} intensity={18} distance={7} />
        <pointLight position={[2, 2, -2]} color={blue} intensity={15} distance={7} />
        <IndustrialRobotArm />
      </Canvas>
    </div>
  );
}
