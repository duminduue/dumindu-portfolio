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

function HumanoidRobot() {
  const robot = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (robot.current) robot.current.position.y = -0.92 + Math.sin(t * 0.9) * 0.025;
    if (head.current) head.current.rotation.y = Math.sin(t * 0.55) * 0.16;
    if (leftArm.current) leftArm.current.rotation.z = -0.12 + Math.sin(t * 0.8) * 0.08;
    if (rightArm.current) rightArm.current.rotation.z = 0.12 + Math.sin(t * 0.8 + 1) * 0.08;
  });

  const silver = "#cbd5e1";
  const dark = "#17243a";
  const blue = "#126bff";
  const cyan = "#22d3ee";

  return (
    <group ref={robot} position={[5.45, 0.35, 0]} scale={1.12}>
      {/* torso and chest armour */}
      <mesh position={[0, 0.02, 0]} castShadow>
        <capsuleGeometry args={[0.28, 0.62, 8, 16]} />
        <meshStandardMaterial color={silver} metalness={0.82} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0.12, 0.285]}>
        <boxGeometry args={[0.3, 0.28, 0.035]} />
        <meshStandardMaterial color={dark} metalness={0.72} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.1, 0.31]}>
        <boxGeometry args={[0.19, 0.035, 0.025]} />
        <meshBasicMaterial color={cyan} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.22, 0.26, 0.22, 32]} />
        <meshStandardMaterial color={blue} metalness={0.7} roughness={0.25} />
      </mesh>
      {/* neck and articulated head */}
      <mesh position={[0, 0.48, 0]}>
        <cylinderGeometry args={[0.09, 0.11, 0.18, 24]} />
        <meshStandardMaterial color={dark} metalness={0.85} roughness={0.22} />
      </mesh>
      <group ref={head} position={[0, 0.76, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.22, 32, 24]} />
          <meshStandardMaterial color={silver} metalness={0.86} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.015, 0.185]}>
          <boxGeometry args={[0.34, 0.13, 0.09]} />
          <meshStandardMaterial color={dark} metalness={0.8} roughness={0.24} />
        </mesh>
        <mesh position={[-0.07, -0.015, 0.225]}>
          <sphereGeometry args={[0.035, 16, 12]} />
          <meshBasicMaterial color={cyan} />
        </mesh>
        <mesh position={[0.07, -0.015, 0.225]}>
          <sphereGeometry args={[0.035, 16, 12]} />
          <meshBasicMaterial color={cyan} />
        </mesh>
      </group>
      {/* shoulder joints and articulated arms */}
      {([-1, 1] as const).map((side) => (
        <group key={side} ref={side === -1 ? leftArm : rightArm} position={[side * 0.35, 0.28, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.12, 24, 18]} />
            <meshStandardMaterial color={blue} metalness={0.82} roughness={0.22} />
          </mesh>
          <mesh position={[0, -0.25, 0]} castShadow>
            <capsuleGeometry args={[0.09, 0.34, 6, 12]} />
            <meshStandardMaterial color={silver} metalness={0.82} roughness={0.24} />
          </mesh>
          <mesh position={[0, -0.49, 0]}>
            <sphereGeometry args={[0.11, 20, 16]} />
            <meshStandardMaterial color={dark} metalness={0.85} roughness={0.22} />
          </mesh>
          <mesh position={[0, -0.68, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.27, 6, 12]} />
            <meshStandardMaterial color={silver} metalness={0.82} roughness={0.24} />
          </mesh>
          <mesh position={[0, -0.85, 0.02]}>
            <boxGeometry args={[0.14, 0.1, 0.16]} />
            <meshStandardMaterial color={blue} metalness={0.7} roughness={0.25} />
          </mesh>
        </group>
      ))}
      {/* hips and two mechanical legs */}
      <mesh position={[0, -0.48, 0]}>
        <boxGeometry args={[0.38, 0.18, 0.28]} />
        <meshStandardMaterial color={dark} metalness={0.8} roughness={0.26} />
      </mesh>
      {([-1, 1] as const).map((side) => (
        <group key={side} position={[side * 0.13, -0.72, 0]}>
          <mesh position={[0, -0.24, 0]} castShadow>
            <capsuleGeometry args={[0.095, 0.38, 6, 12]} />
            <meshStandardMaterial color={silver} metalness={0.84} roughness={0.23} />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <sphereGeometry args={[0.095, 20, 16]} />
            <meshStandardMaterial color={blue} metalness={0.8} roughness={0.22} />
          </mesh>
          <mesh position={[0, -0.72, 0.07]} castShadow>
            <boxGeometry args={[0.21, 0.11, 0.34]} />
            <meshStandardMaterial color={dark} metalness={0.82} roughness={0.24} />
          </mesh>
          <mesh position={[0, -0.72, 0.27]}>
            <boxGeometry args={[0.14, 0.035, 0.025]} />
            <meshBasicMaterial color={cyan} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated silver and electric-blue six-axis industrial robotic arm">
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
          <RealIndustrialArm />\n          <HumanoidRobot />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(ARM_MODEL);
