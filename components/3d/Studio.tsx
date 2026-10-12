'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Environment, Lightformer } from '@react-three/drei';

let blob: THREE.CanvasTexture | null = null;

function getBlobTexture() {
  if (blob) return blob;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(40,30,20,0.55)');
  g.addColorStop(0.5, 'rgba(40,30,20,0.22)');
  g.addColorStop(1, 'rgba(40,30,20,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  blob = new THREE.CanvasTexture(c);
  return blob;
}

/** Pre-drawn soft floor shadow — free to render, unlike a live shadow pass. */
export function SoftShadow({ scale = 3, opacity = 0.6 }: { scale?: number; opacity?: number }) {
  const map = useMemo(() => getBlobTexture(), []);
  return (
    <mesh rotation-x={-Math.PI / 2} position-y={0.004} scale={[scale, scale * 0.75, 1]} renderOrder={-1}>
      <planeGeometry />
      <meshBasicMaterial map={map} transparent opacity={opacity} depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

/** Bright, soft "photo studio" lighting tuned for a white page background. */
export default function Studio() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.7} color="#FFF4E6" />
      <directionalLight position={[-4, 3, -3]} intensity={0.5} color="#E8EEFF" />
      {/* Baked once — reflections cost nothing per frame */}
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={2.4} position={[0, 5, 2]} scale={[8, 3, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.1} position={[-5, 2, 1]} scale={[3, 5, 1]} rotation-y={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.1} position={[5, 2, -1]} scale={[3, 5, 1]} rotation-y={-Math.PI / 2} />
        <Lightformer form="ring" intensity={1.8} color="#F2D29B" position={[0, 2, -6]} scale={4} />
      </Environment>
    </>
  );
}
