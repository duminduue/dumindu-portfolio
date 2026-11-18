"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ARM_MODEL = "https://assets.stoicsoft.com/1designtool/3d/models/industrial-robot-arm/cd1566d1a2/model.glb";

function RealIndustrialArm() {
  const { scene, animations } = useGLTF(ARM_MODEL);
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
    animations.forEach((clip) => mixer.clipAction(clip).play());
    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  useFrame((_, delta) => mixer.update(Math.min(delta, 0.04)));

  return (
    <group position={[-1.65, -0.05, 0]} scale={1.38}>
      <primitive object={model} />
    </group>
  );
}

export default function HeroEngineering3D() {
  return (
    <div className="hero-webgl-wrap" aria-label="Animated silver and electric-blue six-axis industrial robotic arm">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [3.8, 2.7, 5.8], fov: 37 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.25} />
          <hemisphereLight args={["#eaf6ff", "#18243a", 1.35]} />
          <directionalLight position={[4, 7, 5]} intensity={3.1} />
          <pointLight position={[-2, 2, 2]} color="#22d3ee" intensity={22} distance={8} />
          <pointLight position={[3, 2, -2]} color="#126bff" intensity={18} distance={8} />
          <RealIndustrialArm />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(ARM_MODEL);
