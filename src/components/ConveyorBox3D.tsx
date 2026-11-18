"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function MovingBox() {
  const box = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!box.current) return;
    box.current.position.y = Math.sin(clock.elapsedTime * 1.05) * 0.62;
  });

  return (
    <group ref={box}>
      <mesh castShadow>
        <boxGeometry args={[0.78, 0.78, 0.78]} />
        <meshStandardMaterial color="#c98b4b" roughness={0.82} />
      </mesh>
      <mesh position={[0, 0, 0.394]}>
        <boxGeometry args={[0.14, 0.785, 0.012]} />
        <meshStandardMaterial color="#f0d3a0" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.394, 0]}>
        <boxGeometry args={[0.14, 0.012, 0.785]} />
        <meshStandardMaterial color="#f0d3a0" roughness={0.7} />
      </mesh>
    </group>
  );
}

export default function ConveyorBox3D() {
  return (
    <div className="about-conveyor" aria-label="A 3D package moving vertically">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 34 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 4, 5]} intensity={2.1} />
        <pointLight position={[-3, 1, 3]} color="#60a5fa" intensity={5} distance={8} />
        <MovingBox />
      </Canvas>
    </div>
  );
}
