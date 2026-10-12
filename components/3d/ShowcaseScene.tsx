'use client';

// Scroll-driven 3D carousel: every piece spins a full 360° while its chapter is on screen,
// then hands over to the next one. Scroll progress comes in as a Framer Motion value.

import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import type { MotionValue } from 'framer-motion';
import type { ModelKind } from '@/data/materials';
import { FurnitureModel } from './models';
import Studio, { SoftShadow } from './Studio';

export interface ShowcasePiece {
  kind: ModelKind;
  wood: string;
  fabric: string;
}

const { damp, smoothstep } = THREE.MathUtils;

function Carousel({ progress, pieces }: { progress: MotionValue<number>; pieces: ShowcasePiece[] }) {
  const groups = useRef<(THREE.Group | null)[]>([]);
  const smooth = useRef(progress.get());
  const look = useMemo(() => new THREE.Vector3(0, 0.75, 0), []);

  useFrame((state, delta) => {
    smooth.current = damp(smooth.current, progress.get(), 7, delta);
    const n = pieces.length;
    const p = smooth.current * n;

    groups.current.forEach((g, i) => {
      if (!g) return;
      // d: -0.5 → 0.5 while this piece's chapter is on screen
      const d = p - (i + 0.5);
      const pinned = (i === 0 && d < 0) || (i === n - 1 && d > 0);
      const edge = pinned ? 0 : Math.max(0, Math.abs(d) - 0.34);
      const s = 1 - smoothstep(edge, 0, 0.22);
      g.visible = s > 0.002;
      g.scale.setScalar(s);
      g.position.x = -Math.sign(d) * edge * 9;
      g.position.y = edge * 2;
      g.rotation.y = -0.55 + d * Math.PI * 2;
    });

    const cam = state.camera;
    cam.position.x = damp(cam.position.x, state.pointer.x * 0.5, 2.5, delta);
    cam.position.y = damp(cam.position.y, 2.3 + state.pointer.y * 0.25, 2.5, delta);
    cam.lookAt(look);
  });

  return (
    <>
      {pieces.map((pc, i) => (
        <group key={pc.kind} ref={(el) => void (groups.current[i] = el)}>
          <FurnitureModel kind={pc.kind} wood={pc.wood} fabric={pc.fabric} size={2.1} />
        </group>
      ))}
      {/* Plinth */}
      <mesh position={[0, -0.04, 0]}>
        <cylinderGeometry args={[1.55, 1.6, 0.08, 96]} />
        <meshStandardMaterial color="#F4F2EE" roughness={0.6} />
      </mesh>
      <SoftShadow scale={3.2} opacity={0.5} />
    </>
  );
}

export default function ShowcaseScene({ progress, pieces }: { progress: MotionValue<number>; pieces: ShowcasePiece[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, 1.5]}
        camera={{ position: [0, 2.3, 7.6], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Studio />
        <Carousel progress={progress} pieces={pieces} />
      </Canvas>
    </div>
  );
}
