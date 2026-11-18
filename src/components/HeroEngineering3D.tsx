"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ARM_MODEL = "https://files.innerscene.com/library/desktop-4-axis-robot-arm-with-gripper-7ce43bd6/2757c5e48e39b00cc8f3/desktop-4-axis-robot-arm-with-gripper.glb";

function IndustrialRobotArm() {
  const { scene } = useGLTF(ARM_MODEL);
  const robot = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if ("envMapIntensity" in material) material.envMapIntensity = 1.35;
        });
      }
    });

    // Normalize the downloaded model so it fills the hero scene consistently.
    const bounds = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);
    const targetHeight = 3.45;
    const factor = targetHeight / Math.max(size.x, size.y, size.z);
    clone.scale.setScalar(factor);
    clone.position.set(-center.x * factor, -bounds.min.y * factor, -center.z * factor);
    return clone;
  }, [scene]);

  const armRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (armRef.current) {
      armRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.24) * 0.16;
      armRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.025;
    }
  });

  return (
    <group ref={armRef} position={[0, -1.12, 0]}>
      <primitive object={robot} />
    </group>
  );
}

function DisplayBase() {
  return (
    <group position={[0, -1.12, 0]}>
      <mesh position={[0, -0.12, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.38, 1.48, 0.22, 96]} />
        <meshStandardMaterial color="#101c30" metalness={0.92} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.002, 0]}>
        <cylinderGeometry args={[1.34, 1.34, 0.025, 96]} />
        <meshStandardMaterial color="#123c68" metalness={0.86} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <torusGeometry args={[1.32, 0.018, 12, 128]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
}

function SceneContents() {
  return (
    <>
      <color attach="background" args={["#101c30"]} />
      <fog attach="fog" args={["#101c30", 8, 15]} />
      <ambientLight intensity={1.1} />
      <hemisphereLight args={["#d7efff", "#071426", 1.15]} />
      <directionalLight position={[4, 7, 5]} intensity={2.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <pointLight position={[-3, 2, 2]} color="#22d3ee" intensity={26} distance={8} />
      <pointLight position={[3, 2, -3]} color="#2563eb" intensity={22} distance={8} />
      <Float speed={0.7} rotationIntensity={0.015} floatIntensity={0.025}>
        <IndustrialRobotArm />
      </Float>
      <DisplayBase />
      <Sparkles count={38} scale={[4.8, 3.8, 4]} size={1.7} speed={0.2} color="#8be7ff" />
    </>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated 3D industrial robotic arm showcase">
      <Canvas shadows dpr={[1, 1.6]} camera={{ position: [4.4, 3.1, 6.2], fov: 34 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
      <div className="hero-webgl-labels" aria-hidden="true">
        <span>INDUSTRIAL ROBOTICS</span><span>PRECISION MOTION</span><span>MECHATRONICS</span>
      </div>
    </div>
  );
}

useGLTF.preload(ARM_MODEL);
