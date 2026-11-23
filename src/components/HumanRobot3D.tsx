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

  // These are the actual node names in the supplied GLB model.
  const parts = useMemo(() => {
    const find = (name: string) => robot.getObjectByName(name);
    return {
      head: find("Head shell"),
      leftShoulder: find("Shoulder and elbow actuators left"),
      rightShoulder: find("Shoulder and elbow actuators right"),
      leftHand: find("Hand left"),
      rightHand: find("Hand right"),
    };
  }, [robot]);

  const rest = useMemo(() => ({
    head: parts.head?.rotation.clone(),
    leftShoulder: parts.leftShoulder?.rotation.clone(),
    rightShoulder: parts.rightShoulder?.rotation.clone(),
    leftHand: parts.leftHand?.rotation.clone(),
    rightHand: parts.rightHand?.rotation.clone(),
  }), [parts]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (group.current) {
      // A continuous idle performance, similar in feel to the animated robotic arm.
      group.current.rotation.y = Math.sin(t * 0.48) * 0.24;
      group.current.rotation.z = Math.sin(t * 0.7) * 0.018;
      group.current.position.y = Math.sin(t * 1.5) * 0.025;
    }

    if (parts.head && rest.head) {
      parts.head.rotation.set(
        rest.head.x + Math.sin(t * 0.8) * 0.035,
        rest.head.y + Math.sin(t * 0.55) * 0.2,
        rest.head.z
      );
    }

    if (parts.leftShoulder && rest.leftShoulder) {
      parts.leftShoulder.rotation.set(
        rest.leftShoulder.x + Math.sin(t * 1.1) * 0.06,
        rest.leftShoulder.y,
        rest.leftShoulder.z + Math.sin(t * 0.9) * 0.045
      );
    }
    if (parts.rightShoulder && rest.rightShoulder) {
      parts.rightShoulder.rotation.set(
        rest.rightShoulder.x + Math.sin(t * 1.1 + Math.PI) * 0.06,
        rest.rightShoulder.y,
        rest.rightShoulder.z + Math.sin(t * 0.9 + Math.PI) * 0.045
      );
    }

    if (parts.leftHand && rest.leftHand) {
      parts.leftHand.rotation.set(
        rest.leftHand.x,
        rest.leftHand.y + Math.sin(t * 1.25) * 0.08,
        rest.leftHand.z + Math.sin(t * 1.1) * 0.035
      );
    }
    if (parts.rightHand && rest.rightHand) {
      parts.rightHand.rotation.set(
        rest.rightHand.x,
        rest.rightHand.y + Math.sin(t * 1.25 + Math.PI) * 0.08,
        rest.rightHand.z + Math.sin(t * 1.1 + Math.PI) * 0.035
      );
    }
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
