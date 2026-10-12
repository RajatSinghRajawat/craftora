import * as THREE from 'three';

// Procedural wood-grain texture drawn on a canvas — no image assets needed.
// Grain is rendered in greyscale so the material colour can tint it per timber.

let cached: THREE.CanvasTexture | null = null;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function getWoodGrainTexture(): THREE.CanvasTexture {
  if (cached) return cached;

  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const rand = seededRandom(42);

  ctx.fillStyle = '#d9d9d9';
  ctx.fillRect(0, 0, size, size);

  // Long flowing grain lines
  for (let i = 0; i < 140; i++) {
    const y = rand() * size;
    const amp = 4 + rand() * 14;
    const freq = 0.004 + rand() * 0.01;
    const phase = rand() * Math.PI * 2;
    const shade = 150 + Math.floor(rand() * 90);
    ctx.strokeStyle = `rgba(${shade},${shade},${shade},${0.25 + rand() * 0.45})`;
    ctx.lineWidth = 0.6 + rand() * 2.4;
    ctx.beginPath();
    for (let x = 0; x <= size; x += 4) {
      const yy = y + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 3.1 + phase) * amp * 0.25;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  // A few darker knots / cathedral arcs
  for (let k = 0; k < 3; k++) {
    const cx = rand() * size;
    const cy = rand() * size;
    for (let r = 4; r < 40; r += 3) {
      ctx.strokeStyle = `rgba(120,120,120,${0.35 - r / 140})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 2.6, r, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  cached = tex;
  return tex;
}
