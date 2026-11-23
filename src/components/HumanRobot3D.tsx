"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/humanoid-robot-standing.glb";

function RealHumanoidRobot() {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef<THREE.Group>(null);
  const robot = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        if (object.material instanceof THREE.MeshStandardMaterial) {
          object.material.envMapIntensity = 1.25;
        }
      }
    });
    return clone;
  }, [scene]);

  const joints = useMemo(() => {
    const find = (pattern: RegExp) => {
      const matches: THREE.Object3D[] = [];
      robot.traverse((node) => {
        if (pattern.test(node.name)) matches.push(node);
      });
      return matches;
    };
    return {
      head: find(/^Head$/i),
      upperArms: find(/^Upper_Arm/i),
      forearms: find(/^Forearm/i),
      hands: find(/^Hand/i),
    };
  }, [robot]);

  const baseRotations = useMemo(() => ({
    upperArms: joints.upperArms.map((node) => node.rotation.clone()),
    forearms: joints.forearms.map((node) => node.rotation.clone()),
    hands: joints.hands.map((node) => node.rotation.clone()),
    head: joints.head.map((node) => node.rotation.clone()),
  }), [joints]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (group.current) {
      // Make the idle motion clearly visible: a slow look-around, gentle body sway and breathing-like bob.
      group.current.rotation.y = Math.sin(t * 0.55) * 0.34;
      group.current.rotation.z = Math.sin(t * 0.8) * 0.025;
      group.current.position.y = Math.sin(t * 1.7) * 0.04;
    }
    joints.head.forEach((node, i) => {
      const base = baseRotations.head[i];
      node.rotation.set(base.x + Math.sin(t * 0.7) * 0.025, base.y + Math.sin(t * 0.45) * 0.12, base.z);
    });
    joints.upperArms.forEach((node, i) => {
      const base = baseRotations.upperArms[i];
      node.rotation.set(base.x + Math.sin(t * 0.9 + i) * 0.025, base.y, base.z + Math.sin(t * 0.8 + i * Math.PI) * 0.035);
    });
    joints.forearms.forEach((node, i) => {
      const base = baseRotations.forearms[i];
      node.rotation.set(base.x + Math.sin(t * 0.8 + i) * 0.018, base.y, base.z);
    });
    joints.hands.forEach((node, i) => {
      const base = baseRotations.hands[i];
      node.rotation.set(base.x, base.y + Math.sin(t * 0.65 + i) * 0.035, base.z);
    });
  });

  return (
    <group ref={group} scale={1.16}>
      <Center>
        <primitive object={robot} />
      </Center>
    </group>
  );
}

export default function HumanRobot3D() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden bg-transparent">
      <Canvas
        camera={{ position: [0, 1.05, 4.6], fov: 30 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <hemisphereLight args={["#eaf4ff", "#17243a", 1.15]} />
          <directionalLight position={[3, 5, 4]} intensity={2.8} castShadow />
          <directionalLight position={[-3, 2, -2]} intensity={1.2} color="#60a5fa" />
          <pointLight position={[0, 1.8, 1.5]} color="#22d3ee" intensity={3.5} distance={5} />
          <RealHumanoidRobot />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
