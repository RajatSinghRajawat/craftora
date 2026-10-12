'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Lightformer, RoundedBox } from '@react-three/drei';
import { getWoodGrainTexture } from './woodTexture';

function Plank({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);
  const target = useMemo(() => new THREE.Color(color), [color]);

  const material = useMemo(() => {
    const map = getWoodGrainTexture().clone();
    map.needsUpdate = true;
    map.repeat.set(1.6, 0.7);
    return new THREE.MeshPhysicalMaterial({
      color,
      map,
      roughness: 0.4,
      clearcoat: 0.7,
      clearcoatRoughness: 0.25,
    });
    // Created once; colour is eased in useFrame below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Small "pop" every time the timber changes
  const pop = useRef(0);
  useEffect(() => {
    pop.current = 1;
  }, [color]);

  useFrame((state, delta) => {
    material.color.lerp(target, 1 - Math.exp(-delta * 6));
    pop.current = THREE.MathUtils.damp(pop.current, 0, 4, delta);
    if (group.current) {
      group.current.rotation.y += delta * 0.45;
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        -0.35 + state.pointer.y * 0.25,
        3,
        delta
      );
      const s = 1 + pop.current * 0.12;
      group.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.6}>
        <RoundedBox args={[2.4, 0.28, 1]} radius={0.05} smoothness={5} material={material} castShadow />
        {/* Offset end-grain block for a joinery feel */}
        <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.04} smoothness={4} position={[0.9, 0.39, 0.1]} material={material} castShadow />
      </Float>
    </group>
  );
}

export default function WoodPlank3D({ color }: { color: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 1.0, 3.1], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <spotLight position={[3, 5, 3]} angle={0.5} penumbra={1} intensity={60} castShadow color="#FFF1DC" />
        <Plank color={color} />
        <ContactShadows position={[0, -0.9, 0]} opacity={0.4} scale={6} blur={2.6} far={2} resolution={256} />
        <Environment resolution={128}>
          <Lightformer form="rect" intensity={3} position={[0, 4, 2]} scale={[6, 2, 1]} rotation-x={Math.PI / 2} />
          <Lightformer form="rect" intensity={1.5} position={[-4, 1, 0]} scale={[2, 4, 1]} rotation-y={Math.PI / 2} />
          <Lightformer form="ring" intensity={4} color="#E0B84A" position={[4, 1, -2]} scale={3} rotation-y={-Math.PI / 2} />
        </Environment>
      </Canvas>
    </div>
  );
}
