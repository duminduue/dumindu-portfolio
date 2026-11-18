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
  const productC = useRef<THREE.Group>(null);
  const sensorLight = useRef<THREE.Mesh>(null);
  const towerLight = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const travel = (t * 0.34) % 3.25;
    if (productA.current) productA.current.position.x = -1.35 + travel;
    if (productB.current) productB.current.position.x = -1.35 + ((travel + 1.08) % 3.25);
    if (productC.current) productC.current.position.x = -1.35 + ((travel + 2.16) % 3.25);
    if (sensorLight.current) {
      const material = sensorLight.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.45 + (Math.sin(t * 4.5) + 1) * 0.38;
    }
    if (towerLight.current) towerLight.current.rotation.y = Math.sin(t * 0.5) * 0.08;
  });

  const steel = "#a9b8c8";
  const dark = "#17243a";
  const blue = "#1768e8";
  const cyan = "#35d9f4";
  const beltLength = 3.55;

  return (
    <group position={[-0.95, -1.16, 0.15]} rotation={[0, -0.08, 0]}>
      {/* Main conveyor chassis */}
      <mesh position={[0.35, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[beltLength, 0.24, 0.94]} />
        <meshStandardMaterial color="#25364b" metalness={0.76} roughness={0.3} />
      </mesh>
      <mesh position={[0.35, 0.145, 0]} receiveShadow>
        <boxGeometry args={[beltLength - 0.18, 0.045, 0.72]} />
        <meshStandardMaterial color="#111c2c" metalness={0.24} roughness={0.78} />
      </mesh>
      {/* Individual metallic rollers */}
      {Array.from({ length: 17 }, (_, index) => (
        <group key={index} position={[-1.32 + index * 0.205, 0.12, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.052, 0.052, 0.78, 24]} />
            <meshStandardMaterial color={steel} metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.405]}>
            <cylinderGeometry args={[0.035, 0.035, 0.025, 16]} />
            <meshStandardMaterial color="#53677d" metalness={0.9} roughness={0.22} />
          </mesh>
        </group>
      ))}
      {/* Blue side rails and structural legs */}
      {([-1, 1] as const).map((side) => (
        <group key={side}>
          <mesh position={[0.35, 0.24, side * 0.46]} castShadow>
            <boxGeometry args={[beltLength + 0.05, 0.14, 0.075]} />
            <meshStandardMaterial color={blue} metalness={0.72} roughness={0.24} />
          </mesh>
          {([-1.05, 0.05, 1.35] as const).map((x) => (
            <group key={x} position={[x, -0.34, side * 0.34]}>
              <mesh castShadow>
                <boxGeometry args={[0.13, 0.48, 0.13]} />
                <meshStandardMaterial color={steel} metalness={0.86} roughness={0.24} />
              </mesh>
              <mesh position={[0, -0.25, 0]}>
                <boxGeometry args={[0.3, 0.055, 0.25]} />
                <meshStandardMaterial color={dark} metalness={0.78} roughness={0.3} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
      {/* Three moving workpieces */}
      {[productA, productB, productC].map((ref, index) => (
        <group key={index} ref={ref} position={[-1.35, 0.34, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color={index === 1 ? "#2875e8" : "#dce7f1"} metalness={0.55} roughness={0.27} />
          </mesh>
          <mesh position={[0, 0, 0.153]}>
            <boxGeometry args={[0.18, 0.11, 0.012]} />
            <meshBasicMaterial color={cyan} />
          </mesh>
          <mesh position={[0, 0.155, 0]}>
            <boxGeometry args={[0.2, 0.012, 0.2]} />
            <meshStandardMaterial color="#71869c" metalness={0.8} roughness={0.25} />
          </mesh>
        </group>
      ))}
      {/* Optical inspection sensor arch */}
      <mesh position={[-0.05, 0.68, -0.02]} castShadow>
        <boxGeometry args={[0.075, 1.05, 0.09]} />
        <meshStandardMaterial color={steel} metalness={0.88} roughness={0.22} />
      </mesh>
      <mesh position={[-0.05, 1.19, 0]}>
        <boxGeometry args={[0.13, 0.1, 0.92]} />
        <meshStandardMaterial color={dark} metalness={0.8} roughness={0.25} />
      </mesh>
      <mesh ref={sensorLight} position={[-0.05, 1.13, 0.48]}>
        <sphereGeometry args={[0.06, 20, 16]} />
        <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={0.8} />
      </mesh>
      {/* Pneumatic sorting station at the outfeed */}
      <group position={[1.9, 0.12, -0.05]}>
        <mesh position={[0, 0.25, 0]} castShadow>
          <boxGeometry args={[0.42, 0.48, 0.52]} />
          <meshStandardMaterial color="#c5d0dc" metalness={0.78} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.52, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.12, 24]} />
          <meshStandardMaterial color={blue} metalness={0.8} roughness={0.22} />
        </mesh>
        <mesh position={[0, 0.72, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.32, 20]} />
          <meshStandardMaterial color={steel} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.18, 0.08, 0.18]} />
          <meshStandardMaterial color={dark} metalness={0.78} roughness={0.28} />
        </mesh>
      </group>
      {/* Operator control cabinet with screen and push buttons */}
      <group position={[-2.25, 0.02, -0.7]}>
        <mesh position={[0, 0.48, 0]} castShadow>
          <boxGeometry args={[0.68, 1.02, 0.48]} />
          <meshStandardMaterial color="#aebdcb" metalness={0.68} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.67, 0.247]}>
          <boxGeometry args={[0.43, 0.28, 0.025]} />
          <meshStandardMaterial color="#10263b" metalness={0.5} roughness={0.22} />
        </mesh>
        <mesh position={[0, 0.67, 0.266]}>
          <boxGeometry args={[0.34, 0.19, 0.012]} />
          <meshBasicMaterial color="#31c8ee" />
        </mesh>
        {([-0.14, 0, 0.14] as const).map((x, index) => (
          <mesh key={x} position={[x, 0.25, 0.265]}>
            <cylinderGeometry args={[0.045, 0.045, 0.035, 20]} />
            <meshStandardMaterial color={index === 0 ? "#22c55e" : index === 1 ? "#f59e0b" : "#ef4444"} emissive={index === 0 ? "#16a34a" : "#000000"} emissiveIntensity={0.35} />
          </mesh>
        ))}
        <mesh position={[0, -0.055, 0]}>
          <boxGeometry args={[0.82, 0.08, 0.62]} />
          <meshStandardMaterial color={dark} metalness={0.8} roughness={0.28} />
        </mesh>
      </group>
      {/* Three-colour machine status beacon */}
      <group ref={towerLight} position={[-2.25, 1.12, -0.7]}>
        <mesh>
          <cylinderGeometry args={[0.035, 0.035, 0.22, 16]} />
          <meshStandardMaterial color={steel} metalness={0.9} roughness={0.2} />
        </mesh>
        {(["#22c55e", "#f59e0b", "#ef4444"] as const).map((color, index) => (
          <mesh key={color} position={[0, 0.14 + index * 0.105, 0]}>
            <sphereGeometry args={[0.065, 18, 14]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated 3D industrial robotic arm with conveyor, inspection sensor, pneumatic sorting station and operator control cabinet">
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
