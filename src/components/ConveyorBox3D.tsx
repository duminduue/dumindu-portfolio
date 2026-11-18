"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ConveyorScene() {
  const box = useRef<THREE.Group>(null);
  const rollers = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (box.current) box.current.position.x = Math.sin(t * 0.55) * 1.05;
    if (rollers.current) rollers.current.children.forEach((roller) => {
      roller.rotation.z = t * 2.4;
    });
  });

  return (
    <group position={[0, -0.12, 0]}>
      {/* Conveyor frame and belt */}
      <mesh position={[0, -0.22, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 0.18, 1.18]} />
        <meshStandardMaterial color="#18375b" metalness={0.72} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.105, 0]}>
        <boxGeometry args={[3.32, 0.045, 1.04]} />
        <meshStandardMaterial color="#111c2c" roughness={0.86} />
      </mesh>
      <group ref={rollers}>
        {Array.from({ length: 9 }, (_, i) => (
          <mesh key={i} position={[-1.48 + i * 0.37, -0.105, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.075, 0.075, 1.04, 20]} />
            <meshStandardMaterial color="#9db7d1" metalness={0.85} roughness={0.24} />
          </mesh>
        ))}
      </group>
      {/* Side rails */}
      {[-0.57, 0.57].map((z) => (
        <mesh key={z} position={[0, 0.005, z]}>
          <boxGeometry args={[3.5, 0.12, 0.07]} />
          <meshStandardMaterial color="#2876c7" metalness={0.55} roughness={0.32} />
        </mesh>
      ))}
      {/* Four support legs */}
      {[-1.25, 1.25].flatMap((x) => [-0.42, 0.42].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, -0.68, z]}>
          <boxGeometry args={[0.12, 0.82, 0.12]} />
          <meshStandardMaterial color="#607b98" metalness={0.7} roughness={0.34} />
        </mesh>
      )))}
      {/* Moving parcel */}
      <group ref={box} position={[-1, 0.38, 0]}>
        <Float speed={1.3} rotationIntensity={0.015} floatIntensity={0.035}>
          <mesh castShadow>
            <boxGeometry args={[0.62, 0.62, 0.62]} />
            <meshStandardMaterial color="#d69a55" roughness={0.78} />
          </mesh>
          <mesh position={[0, 0, 0.314]}>
            <boxGeometry args={[0.12, 0.625, 0.012]} />
            <meshStandardMaterial color="#f3d6a6" roughness={0.65} />
          </mesh>
          <mesh position={[0, 0.314, 0]}>
            <boxGeometry args={[0.12, 0.012, 0.625]} />
            <meshStandardMaterial color="#f3d6a6" roughness={0.65} />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export default function ConveyorBox3D() {
  return (
    <div className="about-conveyor" aria-label="Small animated 3D conveyor carrying a package">
      <div className="about-conveyor-label"><span /> INDUSTRIAL AUTOMATION · CONVEYOR SYSTEM</div>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [4.4, 2.9, 5.2], fov: 37 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.35} />
        <hemisphereLight args={["#eaf6ff", "#26364c", 1.1]} />
        <directionalLight position={[3, 5, 4]} intensity={2.3} castShadow />
        <pointLight position={[-2, 2, 2]} color="#38bdf8" intensity={8} distance={7} />
        <ConveyorScene />
      </Canvas>
    </div>
  );
}
