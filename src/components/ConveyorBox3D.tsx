"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Carton({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <RoundedBox args={[0.58, 0.72, 0.56]} radius={0.025} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color="#a97845" roughness={0.92} />
      </RoundedBox>
      {/* Packing tape over top and down the front face */}
      <mesh position={[0, 0.362, 0]}>
        <boxGeometry args={[0.105, 0.012, 0.565]} />
        <meshStandardMaterial color="#e5c58e" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.0, 0.285]}>
        <boxGeometry args={[0.105, 0.72, 0.009]} />
        <meshStandardMaterial color="#dfbd85" roughness={0.78} />
      </mesh>
      {/* Subtle folded carton seam */}
      <mesh position={[0, 0.365, 0]}>
        <boxGeometry args={[0.57, 0.008, 0.008]} />
        <meshStandardMaterial color="#80552f" roughness={0.95} />
      </mesh>
    </group>
  );
}

function ConveyorScene() {
  const packages = useRef<THREE.Group>(null);
  const rollers = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (packages.current) {
      packages.current.children.forEach((item, index) => {
        item.position.x = ((t * 0.48 + index * 2.15) % 9.2) - 4.6;
      });
    }
    if (rollers.current) {
      rollers.current.children.forEach((roller) => {
        roller.rotation.z = -t * 2.1;
      });
    }
  });

  return (
    <group position={[0, -0.02, 0]}>
      {/* Heavy-duty conveyor bed */}
      <RoundedBox args={[9.25, 0.22, 0.94]} radius={0.045} smoothness={4} position={[0, -0.08, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#263442" metalness={0.72} roughness={0.38} />
      </RoundedBox>
      {/* Continuous moving rubber conveyor belt */}
      <mesh position={[0, 0.045, 0]}>
        <boxGeometry args={[9.05, 0.055, 0.79]} />
        <meshStandardMaterial color="#111820" metalness={0.08} roughness={0.94} />
      </mesh>
      {/* Subtle transverse belt texture */}
      {Array.from({ length: 46 }, (_, i) => (
        <mesh key={i} position={[-4.48 + i * 0.199, 0.075, 0]}>
          <boxGeometry args={[0.012, 0.006, 0.77]} />
          <meshStandardMaterial color="#26313c" roughness={0.92} />
        </mesh>
      ))}

      {/* Roller shafts and metallic rollers */}
      <group ref={rollers}>
        {Array.from({ length: 31 }, (_, i) => (
          <group key={i} position={[-4.45 + i * 0.296, 0.065, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.052, 0.052, 0.79, 24]} />
              <meshStandardMaterial color="#aeb8c1" metalness={0.94} roughness={0.22} />
            </mesh>
            {[-0.41, 0.41].map((z) => (
              <mesh key={z} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.062, 0.062, 0.025, 20]} />
                <meshStandardMaterial color="#526273" metalness={0.85} roughness={0.3} />
              </mesh>
            ))}
          </group>
        ))}
      </group>

      {/* Stainless side channels with fixing bolts */}
      {[-0.49, 0.49].map((z) => (
        <group key={z}>
          <RoundedBox args={[9.3, 0.17, 0.075]} radius={0.018} smoothness={3} position={[0, 0.14, z]} castShadow>
            <meshStandardMaterial color="#aeb8c1" metalness={0.88} roughness={0.27} />
          </RoundedBox>
          {Array.from({ length: 16 }, (_, i) => (
            <mesh key={i} position={[-4.45 + i * 0.59, 0.235, z]}>
              <cylinderGeometry args={[0.025, 0.025, 0.012, 12]} />
              <meshStandardMaterial color="#596775" metalness={0.9} roughness={0.25} />
            </mesh>
          ))}
        </group>
      ))}

      {/* End rollers, bearing housings and drive motor */}
      {[-4.62, 4.62].map((x) => (
        <group key={x} position={[x, -0.02, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.11, 0.11, 0.92, 28]} />
            <meshStandardMaterial color="#b9c3cc" metalness={0.9} roughness={0.25} />
          </mesh>
          {[-0.52, 0.52].map((z) => (
            <mesh key={z} position={[0, 0, z]}>
              <boxGeometry args={[0.18, 0.22, 0.07]} />
              <meshStandardMaterial color="#526273" metalness={0.78} roughness={0.34} />
            </mesh>
          ))}
        </group>
      ))}
      <group position={[3.9, -0.19, 0.3]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <cylinderGeometry args={[0.16, 0.16, 0.42, 32]} />
          <meshStandardMaterial color="#315f86" metalness={0.76} roughness={0.34} />
        </mesh>
        <mesh position={[0, 0.24, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.08, 24]} />
          <meshStandardMaterial color="#8b9aa8" metalness={0.9} roughness={0.25} />
        </mesh>
      </group>

      {/* Four industrial support stands with cross-bracing and feet */}
      {[-3.9, -1.3, 1.3, 3.9].map((x) => (
        <group key={x} position={[x, -0.53, 0]}>
          {[-0.36, 0.36].map((z) => (
            <RoundedBox key={z} args={[0.085, 0.94, 0.085]} radius={0.012} smoothness={2} position={[0, 0, z]}>
              <meshStandardMaterial color="#8e9aa5" metalness={0.8} roughness={0.32} />
            </RoundedBox>
          ))}
          <mesh position={[0, -0.28, 0]}>
            <boxGeometry args={[0.07, 0.48, 0.68]} />
            <meshStandardMaterial color="#788693" metalness={0.8} roughness={0.35} />
          </mesh>
          <RoundedBox args={[0.48, 0.055, 0.82]} radius={0.015} smoothness={2} position={[0, -0.49, 0]}>
            <meshStandardMaterial color="#687887" metalness={0.8} roughness={0.34} />
          </RoundedBox>
          {[-0.17, 0.17].map((z) => (
            <mesh key={z} position={[0, -0.455, z]}>
              <cylinderGeometry args={[0.035, 0.035, 0.018, 12]} />
              <meshStandardMaterial color="#3e4b57" metalness={0.9} roughness={0.26} />
            </mesh>
          ))}
        </group>
      ))}

      <group ref={packages}>
        {Array.from({ length: 4 }, (_, i) => (
          <Carton key={i} position={[-4.6 + i * 2.15, 0.49, 0]} />
        ))}
      </group>
    </group>
  );
}

export default function ConveyorBox3D() {
  return (
    <div className="about-conveyor" aria-label="Detailed industrial conveyor with moving cardboard cartons">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.05, 13.2], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <hemisphereLight args={["#f4f7fa", "#536170", 0.8]} />
        <directionalLight position={[-2, 5, 6]} intensity={2.7} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <directionalLight position={[4, 2, -3]} intensity={1.1} color="#d9e6f4" />
        <ContactShadows position={[0, -1.06, 0]} opacity={0.2} scale={11} blur={2.8} far={3} />
        <ConveyorScene />
      </Canvas>
    </div>
  );
}
