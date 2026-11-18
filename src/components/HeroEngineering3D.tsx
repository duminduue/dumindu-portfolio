"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ARM_MODEL = "https://assets.stoicsoft.com/1designtool/3d/models/industrial-robot-arm/cd1566d1a2/model.glb";

function RealIndustrialArm() {
  const { scene, animations } = useGLTF(ARM_MODEL);
  const armGroup = useRef<THREE.Group>(null);
  const model = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((node) => {
      if (!(node instanceof THREE.Mesh)) return;
      const name = node.name.toLowerCase();
      if (name.includes("station") || name.includes("billet") || name.includes("floor")) {
        node.visible = false;
      }
      node.castShadow = true;
      node.receiveShadow = true;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((material) => {
        if (!(material instanceof THREE.MeshStandardMaterial)) return;
        const color = material.color;
        // Re-map the source orange/yellow industrial palette to the selected silver + electric-blue theme.
        if (color.r > color.g * 1.35 && color.r > color.b * 1.5) {
          color.set("#cbd5e1");
          material.metalness = 0.82;
          material.roughness = 0.24;
        } else if (color.r > 0.55 && color.g > 0.35 && color.b < 0.25) {
          color.set("#126bff");
          material.metalness = 0.58;
          material.roughness = 0.26;
          material.emissive = new THREE.Color("#073bba");
          material.emissiveIntensity = 0.32;
        }
        material.needsUpdate = true;
      });
    });
    return clone;
  }, [scene]);

  const mixer = useMemo(() => new THREE.AnimationMixer(model), [model]);
  useEffect(() => {
    animations.forEach((clip) => mixer.clipAction(clip).reset().play());
    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  useFrame(({ clock }, delta) => {
    mixer.update(Math.min(delta, 0.04));
    if (!armGroup.current) return;
    armGroup.current.rotation.y = clock.elapsedTime * 0.18 + Math.sin(clock.elapsedTime * 0.35) * 0.08;
    armGroup.current.position.y = -0.62 + Math.sin(clock.elapsedTime * 0.65) * 0.025;
  });

  return (
    <group ref={armGroup} position={[-1.65, -0.62, 0]} scale={2}>
      <primitive object={model} />
    </group>
  );
}

function ConveyorProductionCell() {
  const productA = useRef<THREE.Group>(null);
  const productB = useRef<THREE.Group>(null);
  const indicator = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const cycle = (t * 0.42) % 3.1;
    if (productA.current) productA.current.position.x = -0.95 + cycle;
    if (productB.current) productB.current.position.x = -0.95 + ((cycle + 1.55) % 3.1);
    if (indicator.current) {
      const material = indicator.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.45 + (Math.sin(t * 4) + 1) * 0.35;
    }
  });

  const steel = "#8fa3b8";
  const dark = "#17243a";
  const blue = "#126bff";
  const cyan = "#22d3ee";

  return (
    <group position={[1.55, -1.52, 0.15]}>
      {/* Conveyor frame and dark moving belt */}
      <mesh position={[0.55, 0, 0]} castShadow>
        <boxGeometry args={[3.35, 0.22, 0.82]} />
        <meshStandardMaterial color={dark} metalness={0.72} roughness={0.34} />
      </mesh>
      <mesh position={[0.55, 0.13, 0]}>
        <boxGeometry args={[3.12, 0.055, 0.68]} />
        <meshStandardMaterial color="#26384d" metalness={0.22} roughness={0.72} />
      </mesh>
      {Array.from({ length: 13 }, (_, index) => (
        <mesh key={index} position={[-0.98 + index * 0.255, -0.015, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.055, 0.74, 20]} />
          <meshStandardMaterial color={steel} metalness={0.88} roughness={0.22} />
        </mesh>
      ))}
      {([-1, 1] as const).map((side) => (
        <group key={side}>
          <mesh position={[0.55, 0.23, side * 0.39]}>
            <boxGeometry args={[3.3, 0.13, 0.07]} />
            <meshStandardMaterial color={blue} metalness={0.7} roughness={0.26} />
          </mesh>
          {([-0.72, 0.55, 1.82] as const).map((x) => (
            <mesh key={x} position={[x, -0.28, side * 0.29]}>
              <boxGeometry args={[0.12, 0.48, 0.12]} />
              <meshStandardMaterial color={steel} metalness={0.84} roughness={0.25} />
            </mesh>
          ))}
        </group>
      ))}
      {/* Sensor gantry at the inspection point */}
      <mesh position={[0.1, 0.72, -0.02]}>
        <boxGeometry args={[0.09, 1.05, 0.1]} />
        <meshStandardMaterial color={steel} metalness={0.85} roughness={0.24} />
      </mesh>
      <mesh position={[0.1, 1.22, 0]}>
        <boxGeometry args={[0.18, 0.12, 0.94]} />
        <meshStandardMaterial color={dark} metalness={0.78} roughness={0.28} />
      </mesh>
      <mesh ref={indicator} position={[0.1, 1.14, 0.49]}>
        <sphereGeometry args={[0.055, 18, 14]} />
        <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={0.7} />
      </mesh>
      {/* Moving products */}
      {[productA, productB].map((ref, index) => (
        <group key={index} ref={ref} position={[-0.95, 0.32, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.34, 0.34, 0.34]} />
            <meshStandardMaterial color={index === 0 ? "#d9e4ef" : "#2875e8"} metalness={0.42} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.176]}>
            <boxGeometry args={[0.2, 0.12, 0.012]} />
            <meshBasicMaterial color={index === 0 ? cyan : "#dbeafe"} />
          </mesh>
        </group>
      ))}
      {/* Compact sorting / reject actuator at the discharge end */}
      <mesh position={[2.32, 0.48, -0.08]} castShadow>
        <boxGeometry args={[0.22, 0.42, 0.25]} />
        <meshStandardMaterial color={dark} metalness={0.8} roughness={0.28} />
      </mesh>
      <mesh position={[2.32, 0.72, -0.08]}>
        <cylinderGeometry args={[0.09, 0.09, 0.12, 24]} />
        <meshStandardMaterial color={blue} metalness={0.78} roughness={0.24} />
      </mesh>
      <mesh position={[2.32, 0.42, 0.12]}>
        <boxGeometry args={[0.12, 0.22, 0.45]} />
        <meshStandardMaterial color={steel} metalness={0.85} roughness={0.22} />
      </mesh>
    </group>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated 3D robotic arm and compact automated conveyor production cell">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [4.5, 3.5, 7.2], fov: 58 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.25} />
          <hemisphereLight args={["#eaf6ff", "#18243a", 1.35]} />
          <directionalLight position={[4, 7, 5]} intensity={3.1} />
          <pointLight position={[-2, 2, 2]} color="#22d3ee" intensity={22} distance={8} />
          <pointLight position={[3, 2, -2]} color="#126bff" intensity={18} distance={8} />
          <RealIndustrialArm />
          <ConveyorProductionCell />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(ARM_MODEL);
