"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
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
    const targetHeight = 4.8;
    const factor = targetHeight / Math.max(size.x, size.y, size.z);
    clone.scale.setScalar(factor);
    clone.position.set(-center.x * factor, -bounds.min.y * factor, -center.z * factor);
    return clone;
  }, [scene]);

  const armRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (armRef.current) {
      armRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.22) * 0.22;
      armRef.current.position.y = Math.sin(clock.elapsedTime * 0.72) * 0.035;
    }
  });

  return (
    <group ref={armRef} position={[0, -1.12, 0]}>
      <primitive object={robot} />
    </group>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={1.65} />
      <hemisphereLight args={["#e8f6ff", "#182b49", 1.55]} />
      <directionalLight position={[4, 7, 5]} intensity={3.6} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <pointLight position={[-3, 2, 2]} color="#67dfff" intensity={38} distance={9} />
      <pointLight position={[3, 2, -3]} color="#6b9cff" intensity={30} distance={9} />
      <Float speed={0.7} rotationIntensity={0.015} floatIntensity={0.025}>
        <IndustrialRobotArm />
      </Float>
    </>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated 3D industrial robotic arm showcase">
      <Canvas shadows dpr={[1, 1.6]} camera={{ position: [3.6, 2.5, 5.2], fov: 31 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(ARM_MODEL);
