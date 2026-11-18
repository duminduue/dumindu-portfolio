"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ConveyorScene() {
  const packages = useRef<THREE.Group>(null);
  const rollers = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (packages.current) {
      packages.current.children.forEach((item, index) => {
        item.position.x = ((t * 0.62 + index * 1.42) % 7.1) - 3.55;
      });
    }
    if (rollers.current) {
      rollers.current.children.forEach((roller) => {
        roller.rotation.x = t * 2.8;
      });
    }
  });

  return (
    <group position={[0, -0.05, 0]}>
      {/* Long, straight conveyor viewed almost directly from the side */}
      <mesh position={[0, -0.08, 0]} castShadow>
        <boxGeometry args={[7.2, 0.2, 0.82]} />
        <meshStandardMaterial color="#9aa8b5" metalness={0.78} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.035, 0]}>
        <boxGeometry args={[7.05, 0.035, 0.72]} />
        <meshStandardMaterial color="#263545" metalness={0.28} roughness={0.78} />
      </mesh>

      {/* Visible rollers along the conveyor */}
      <group ref={rollers}>
        {Array.from({ length: 23 }, (_, i) => (
          <mesh key={i} position={[-3.38 + i * 0.307, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.76, 16]} />
            <meshStandardMaterial color="#d2d9df" metalness={0.92} roughness={0.22} />
          </mesh>
        ))}
      </group>

      {/* Long side rails */}
      {[-0.405, 0.405].map((z) => (
        <mesh key={z} position={[0, 0.17, z]}>
          <boxGeometry args={[7.2, 0.16, 0.055]} />
          <meshStandardMaterial color="#aab5bf" metalness={0.8} roughness={0.28} />
        </mesh>
      ))}

      {/* Repeating support frames and legs */}
      {[-3.15, -1.05, 1.05, 3.15].map((x) => (
        <group key={x} position={[x, -0.48, 0]}>
          {[-0.31, 0.31].map((z) => (
            <mesh key={z} position={[0, 0, z]}>
              <boxGeometry args={[0.095, 0.86, 0.095]} />
              <meshStandardMaterial color="#8796a4" metalness={0.78} roughness={0.32} />
            </mesh>
          ))}
          <mesh position={[0, -0.39, 0]}>
            <boxGeometry args={[0.56, 0.07, 0.76]} />
            <meshStandardMaterial color="#758493" metalness={0.75} roughness={0.35} />
          </mesh>
        </group>
      ))}

      {/* Several cartons moving left-to-right */}
      <group ref={packages}>
        {Array.from({ length: 4 }, (_, i) => (
          <group key={i} position={[-3.55 + i * 1.42, 0.55, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.58, 0.82, 0.58]} />
              <meshStandardMaterial color="#c99a62" roughness={0.86} />
            </mesh>
            <mesh position={[0, 0, 0.294]}>
              <boxGeometry args={[0.1, 0.825, 0.012]} />
              <meshStandardMaterial color="#e8c99c" roughness={0.78} />
            </mesh>
            <mesh position={[0, 0.414, 0]}>
              <boxGeometry args={[0.1, 0.012, 0.585]} />
              <meshStandardMaterial color="#e8c99c" roughness={0.78} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export default function ConveyorBox3D() {
  return (
    <div className="about-conveyor" aria-label="Side-view 3D industrial conveyor with moving boxes">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.25, 10], fov: 34 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.5} />
        <hemisphereLight args={["#edf6ff", "#455568", 1.1]} />
        <directionalLight position={[0, 5, 6]} intensity={2.2} />
        <pointLight position={[-3, 2, 4]} color="#dbeafe" intensity={5} distance={10} />
        <ConveyorScene />
      </Canvas>
    </div>
  );
}
