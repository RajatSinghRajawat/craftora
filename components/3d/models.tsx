'use client';

// Procedural furniture models shared by every 3D view on the site.
// Everything is built from primitives — no model files to download, so 3D appears instantly.

import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import type { ModelKind } from '@/data/materials';
import { getWoodGrainTexture } from './woodTexture';

/* -------------------------------------------------------------------------- */
/*                                 Materials                                  */
/* -------------------------------------------------------------------------- */

export interface Mats {
  wood: THREE.MeshPhysicalMaterial;
  fabric: THREE.MeshPhysicalMaterial;
}

const BRASS = new THREE.MeshStandardMaterial({ color: '#C9A04A', metalness: 1, roughness: 0.28 });
const MARBLE = new THREE.MeshPhysicalMaterial({ color: '#F4F1EC', roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.1 });
const BLACK = new THREE.MeshStandardMaterial({ color: '#1A1816', roughness: 0.6 });
const SCREEN = new THREE.MeshPhysicalMaterial({ color: '#0D0D0E', roughness: 0.08, clearcoat: 1 });
const GLASS = new THREE.MeshPhysicalMaterial({ color: '#3A3530', roughness: 0.08, transparent: true, opacity: 0.45 });
const LINEN = new THREE.MeshPhysicalMaterial({ color: '#F7F5F0', roughness: 0.95, sheen: 0.6, sheenRoughness: 0.8 });
const LEATHER = new THREE.MeshPhysicalMaterial({ color: '#874B2A', roughness: 0.5, clearcoat: 0.3 });
const GLOW = new THREE.MeshBasicMaterial({ color: '#FFD9A0' });

/** Wood + fabric materials that recolour in place when the selected finish changes. */
export function useFurnitureMats(wood: string, fabric: string): Mats {
  const invalidate = useThree((s) => s.invalidate);
  const mats = useMemo(() => {
    const map = getWoodGrainTexture().clone();
    map.needsUpdate = true;
    map.repeat.set(1.5, 1);
    return {
      wood: new THREE.MeshPhysicalMaterial({ map, roughness: 0.45, clearcoat: 0.5, clearcoatRoughness: 0.3 }),
      fabric: new THREE.MeshPhysicalMaterial({ roughness: 0.95, sheen: 1, sheenRoughness: 0.8, sheenColor: new THREE.Color('#ffffff') }),
    };
  }, []);

  useEffect(() => {
    mats.wood.color.set(wood);
    mats.fabric.color.set(fabric);
    invalidate();
  }, [mats, wood, fabric, invalidate]);

  useEffect(
    () => () => {
      mats.wood.map?.dispose();
      mats.wood.dispose();
      mats.fabric.dispose();
    },
    [mats]
  );

  return mats;
}

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

type V3 = [number, number, number];

function Box({ args, position, rotation, material, radius = 0.02 }: {
  args: V3;
  position?: V3;
  rotation?: V3;
  material: THREE.Material;
  radius?: number;
}) {
  return (
    <RoundedBox args={args} radius={radius} smoothness={3} position={position} rotation={rotation} material={material} castShadow receiveShadow />
  );
}

function Leg({ position, rotation = [0, 0, 0], length, top = 0.04, bottom = 0.026, material }: {
  position: V3;
  rotation?: V3;
  length: number;
  top?: number;
  bottom?: number;
  material: THREE.Material;
}) {
  return (
    <mesh position={position} rotation={rotation} material={material} castShadow>
      <cylinderGeometry args={[top, bottom, length, 16]} />
    </mesh>
  );
}

const spread = (count: number, width: number) =>
  Array.from({ length: count }, (_, i) => -width / 2 + (width / (count - 1)) * i);

/* -------------------------------------------------------------------------- */
/*                                   Models                                   */
/* -------------------------------------------------------------------------- */

function Armchair({ m }: { m: Mats }) {
  return (
    <group>
      <Leg position={[-0.62, 0.23, 0.46]} rotation={[0.1, 0, 0.1]} length={0.5} material={m.wood} />
      <Leg position={[0.62, 0.23, 0.46]} rotation={[0.1, 0, -0.1]} length={0.5} material={m.wood} />
      <Leg position={[-0.62, 0.23, -0.46]} rotation={[-0.1, 0, 0.1]} length={0.5} material={m.wood} />
      <Leg position={[0.62, 0.23, -0.46]} rotation={[-0.1, 0, -0.1]} length={0.5} material={m.wood} />

      <Box args={[1.44, 0.08, 1.12]} position={[0, 0.5, 0]} material={m.wood} radius={0.035} />
      <Box args={[1.28, 0.22, 1.02]} position={[0, 0.65, 0.02]} material={m.fabric} radius={0.1} />

      {[-0.68, 0.68].map((x) => (
        <Leg key={x} position={[x, 1.0, -0.6]} rotation={[-0.2, 0, 0]} length={1.05} top={0.04} bottom={0.045} material={m.wood} />
      ))}
      {/* Top rail capping the back posts */}
      <Box args={[1.5, 0.07, 0.1]} position={[0, 1.53, -0.71]} rotation={[-0.2, 0, 0]} material={m.wood} radius={0.03} />
      <Box args={[1.26, 0.82, 0.2]} position={[0, 1.08, -0.5]} rotation={[-0.2, 0, 0]} material={m.fabric} radius={0.09} />
      <Box args={[0.56, 0.28, 0.16]} position={[0, 0.9, -0.3]} rotation={[-0.25, 0, 0]} material={LEATHER} radius={0.07} />

      {[-0.74, 0.74].map((x) => (
        <group key={x}>
          <Box args={[0.12, 0.07, 1.08]} position={[x, 0.9, -0.04]} material={m.wood} radius={0.03} />
          <Leg position={[x, 0.7, 0.42]} length={0.38} top={0.035} bottom={0.035} material={m.wood} />
          <mesh position={[x, 0.94, 0.46]} material={BRASS}>
            <sphereGeometry args={[0.035, 16, 16]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function DiningChair({ m, position, rotation }: { m: Mats; position?: V3; rotation?: V3 }) {
  return (
    <group position={position} rotation={rotation}>
      {[
        [-0.19, 0.2],
        [0.19, 0.2],
        [-0.19, -0.18],
        [0.19, -0.18],
      ].map(([x, z]) => (
        <Leg key={`${x}${z}`} position={[x, 0.21, z]} rotation={[z > 0 ? 0.06 : -0.06, 0, x > 0 ? -0.05 : 0.05]} length={0.42} top={0.022} bottom={0.016} material={m.wood} />
      ))}
      <Box args={[0.48, 0.045, 0.46]} position={[0, 0.44, 0]} material={m.wood} />
      <Box args={[0.44, 0.06, 0.42]} position={[0, 0.49, 0.01]} material={m.fabric} radius={0.028} />
      {[-0.19, 0.19].map((x) => (
        <Leg key={x} position={[x, 0.62, -0.18]} length={0.36} top={0.018} bottom={0.02} material={m.wood} />
      ))}
      {/* Half-moon backrest */}
      <mesh position={[0, 0.8, -0.02]} rotation={[-Math.PI / 2, 0, 0]} material={m.wood} castShadow>
        <torusGeometry args={[0.23, 0.035, 10, 32, Math.PI]} />
      </mesh>
    </group>
  );
}

function Sofa({ m }: { m: Mats }) {
  return (
    <group>
      {/* Plinth base */}
      <Box args={[2.3, 0.16, 0.95]} position={[0, 0.16, 0]} material={m.wood} radius={0.03} />
      <Box args={[2.18, 0.08, 0.85]} position={[0, 0.04, 0]} material={BLACK} radius={0.01} />
      {/* Seat + back cushions */}
      {[-0.7, 0, 0.7].map((x) => (
        <group key={x}>
          <Box args={[0.68, 0.2, 0.8]} position={[x, 0.34, 0.05]} material={m.fabric} radius={0.08} />
          <Box args={[0.68, 0.5, 0.2]} position={[x, 0.66, -0.32]} rotation={[-0.12, 0, 0]} material={m.fabric} radius={0.09} />
        </group>
      ))}
      {/* Back + arms */}
      <Box args={[2.3, 0.42, 0.16]} position={[0, 0.45, -0.4]} material={m.fabric} radius={0.07} />
      {[-1.08, 1.08].map((x) => (
        <Box key={x} args={[0.16, 0.36, 0.95]} position={[x, 0.42, 0]} material={m.fabric} radius={0.07} />
      ))}
      {/* Accent cushions */}
      <Box args={[0.42, 0.36, 0.12]} position={[-0.7, 0.68, -0.18]} rotation={[-0.2, 0.15, 0.05]} material={LEATHER} radius={0.06} />
      <Box args={[0.42, 0.36, 0.12]} position={[0.75, 0.68, -0.18]} rotation={[-0.2, -0.15, -0.05]} material={LINEN} radius={0.06} />
    </group>
  );
}

function DiningTable({ m }: { m: Mats }) {
  return (
    <group>
      <Box args={[2.0, 0.07, 0.95]} position={[0, 0.74, 0]} material={m.wood} radius={0.03} />
      {/* Splayed trestle legs */}
      {[-0.72, 0.72].map((x) => (
        <group key={x} position={[x, 0, 0]}>
          <Box args={[0.08, 0.72, 0.08]} position={[0, 0.36, 0.28]} rotation={[0.18, 0, 0]} material={m.wood} />
          <Box args={[0.08, 0.72, 0.08]} position={[0, 0.36, -0.28]} rotation={[-0.18, 0, 0]} material={m.wood} />
          <Box args={[0.07, 0.06, 0.62]} position={[0, 0.66, 0]} material={m.wood} />
        </group>
      ))}
      <Box args={[1.44, 0.05, 0.06]} position={[0, 0.22, 0]} material={m.wood} />
      {/* Brass inlay */}
      <mesh position={[0, 0.776, 0]} material={BRASS}>
        <boxGeometry args={[1.7, 0.004, 0.02]} />
      </mesh>
      <DiningChair m={m} position={[-0.5, 0, 0.7]} rotation={[0, Math.PI, 0]} />
      <DiningChair m={m} position={[0.5, 0, 0.7]} rotation={[0, Math.PI, 0]} />
      <DiningChair m={m} position={[-0.5, 0, -0.7]} />
      <DiningChair m={m} position={[0.5, 0, -0.7]} />
    </group>
  );
}

function Bed({ m }: { m: Mats }) {
  return (
    <group>
      <Box args={[1.55, 0.1, 1.95]} position={[0, 0.05, 0.05]} material={BLACK} radius={0.01} />
      <Box args={[1.76, 0.2, 2.15]} position={[0, 0.2, 0.05]} material={m.wood} radius={0.03} />
      <Box args={[1.62, 0.22, 2.0]} position={[0, 0.41, 0.08]} material={LINEN} radius={0.08} />
      <Box args={[1.68, 0.05, 1.25]} position={[0, 0.53, 0.42]} material={m.fabric} radius={0.025} />
      {[-0.38, 0.38].map((x) => (
        <Box key={x} args={[0.6, 0.14, 0.34]} position={[x, 0.6, -0.7]} rotation={[-0.35, 0, 0]} material={LINEN} radius={0.06} />
      ))}
      {/* Fluted headboard */}
      <Box args={[1.9, 0.98, 0.07]} position={[0, 0.72, -1.06]} material={m.wood} radius={0.02} />
      {spread(15, 1.76).map((x) => (
        <mesh key={x} position={[x, 0.74, -1.015]} material={m.wood} castShadow>
          <cylinderGeometry args={[0.032, 0.032, 0.9, 10]} />
        </mesh>
      ))}
      {/* Cantilevered nightstands with brass pulls + lamps */}
      {[-1.28, 1.28].map((x) => (
        <group key={x} position={[x, 0, -0.86]}>
          <Box args={[0.52, 0.26, 0.42]} position={[0, 0.48, 0]} material={m.wood} />
          <mesh position={[0, 0.48, 0.215]} material={BRASS}>
            <boxGeometry args={[0.2, 0.012, 0.01]} />
          </mesh>
          <Leg position={[0, 0.72, 0]} length={0.22} top={0.012} bottom={0.03} material={BRASS} />
          <mesh position={[0, 0.88, 0]} material={GLOW}>
            <sphereGeometry args={[0.08, 20, 20]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function TVUnit({ m }: { m: Mats }) {
  return (
    <group>
      {/* Acoustic slat backdrop */}
      <Box args={[2.5, 2.0, 0.03]} position={[0, 1.0, -0.3]} material={BLACK} radius={0.005} />
      {spread(22, 2.38).map((x) => (
        <Box key={x} args={[0.055, 1.96, 0.04]} position={[x, 1.0, -0.265]} material={m.wood} radius={0.008} />
      ))}
      <Box args={[1.36, 0.78, 0.035]} position={[0, 1.36, -0.22]} material={SCREEN} radius={0.01} />
      {/* Floating console */}
      <Box args={[2.4, 0.36, 0.42]} position={[0, 0.42, -0.02]} material={m.wood} radius={0.02} />
      <Box args={[2.42, 0.03, 0.44]} position={[0, 0.615, -0.02]} material={MARBLE} radius={0.008} />
      {[-0.6, 0, 0.6].map((x) => (
        <mesh key={x} position={[x, 0.42, 0.2]} material={BLACK}>
          <boxGeometry args={[0.006, 0.32, 0.006]} />
        </mesh>
      ))}
      {/* Warm under-glow */}
      <mesh position={[0, 0.235, 0]} material={GLOW}>
        <boxGeometry args={[2.2, 0.01, 0.3]} />
      </mesh>
    </group>
  );
}

function Wardrobe({ m }: { m: Mats }) {
  return (
    <group>
      <Box args={[1.8, 0.08, 0.55]} position={[0, 0.04, 0]} material={BLACK} radius={0.005} />
      <Box args={[1.9, 2.1, 0.6]} position={[0, 1.13, 0]} material={m.wood} radius={0.02} />
      {/* Fluted outer doors */}
      {[-0.62, 0.62].map((x) => (
        <group key={x} position={[x, 1.13, 0.31]}>
          {spread(9, 0.5).map((fx) => (
            <mesh key={fx} position={[fx, 0, 0]} material={m.wood} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 2.0, 10]} />
            </mesh>
          ))}
          <mesh position={[x > 0 ? -0.29 : 0.29, 0.1, 0.035]} material={BRASS}>
            <boxGeometry args={[0.018, 0.5, 0.018]} />
          </mesh>
        </group>
      ))}
      {/* Smoked glass centre with lit shelves */}
      {[0.45, 0.95, 1.45].map((y) => (
        <Box key={y} args={[0.56, 0.03, 0.5]} position={[0, y, 0.02]} material={m.wood} radius={0.005} />
      ))}
      <mesh position={[0, 1.9, 0.1]} material={GLOW}>
        <boxGeometry args={[0.5, 0.01, 0.2]} />
      </mesh>
      <mesh position={[0, 1.13, 0.31]} material={GLASS}>
        <boxGeometry args={[0.6, 2.0, 0.012]} />
      </mesh>
    </group>
  );
}

function Desk({ m }: { m: Mats }) {
  return (
    <group>
      <Box args={[1.7, 0.05, 0.8]} position={[0, 0.75, 0]} material={m.wood} radius={0.015} />
      <mesh position={[0, 0.776, 0.35]} material={BRASS}>
        <boxGeometry args={[1.66, 0.004, 0.02]} />
      </mesh>
      {/* Drawer pedestal */}
      <Box args={[0.46, 0.7, 0.72]} position={[-0.58, 0.37, 0]} material={m.wood} />
      {[0.55, 0.3].map((y) => (
        <group key={y}>
          <mesh position={[-0.58, y + 0.11, 0.362]} material={BLACK}>
            <boxGeometry args={[0.44, 0.005, 0.005]} />
          </mesh>
          <mesh position={[-0.58, y, 0.37]} material={BRASS}>
            <boxGeometry args={[0.16, 0.014, 0.014]} />
          </mesh>
        </group>
      ))}
      {/* Waterfall panel leg + modesty panel */}
      <Box args={[0.05, 0.73, 0.78]} position={[0.82, 0.37, 0]} material={m.wood} radius={0.01} />
      <Box args={[1.2, 0.36, 0.03]} position={[0.2, 0.52, -0.3]} material={m.wood} radius={0.01} />
      {/* Leather desk pad + lamp */}
      <Box args={[0.7, 0.01, 0.42]} position={[0.15, 0.78, 0.05]} material={LEATHER} radius={0.004} />
      <group position={[0.62, 0.775, -0.2]}>
        <Leg position={[0, 0.02, 0]} length={0.03} top={0.08} bottom={0.08} material={BRASS} />
        <Leg position={[0, 0.2, 0]} length={0.36} top={0.01} bottom={0.01} material={BRASS} />
        <mesh position={[0, 0.4, 0]} material={m.fabric}>
          <cylinderGeometry args={[0.07, 0.12, 0.12, 24, 1, true]} />
        </mesh>
      </group>
    </group>
  );
}

const MODELS: Record<ModelKind, React.FC<{ m: Mats }>> = {
  armchair: Armchair,
  sofa: Sofa,
  dining: DiningTable,
  'dining-chair': ({ m }) => <DiningChair m={m} />,
  bed: Bed,
  tv: TVUnit,
  wardrobe: Wardrobe,
  desk: Desk,
};

/* -------------------------------------------------------------------------- */
/*                                 Public API                                 */
/* -------------------------------------------------------------------------- */

/** Bounding box of `root`'s meshes, measured in `root`'s own space (ignores parent transforms). */
function localBounds(root: THREE.Object3D) {
  root.updateWorldMatrix(true, true);
  const inv = root.matrixWorld.clone().invert();
  const box = new THREE.Box3();
  const part = new THREE.Box3();
  const rel = new THREE.Matrix4();
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    part.copy(mesh.geometry.boundingBox!).applyMatrix4(rel.multiplyMatrices(inv, mesh.matrixWorld));
    box.union(part);
  });
  return box;
}

interface FurnitureModelProps {
  kind: ModelKind;
  wood: string;
  fabric: string;
  /** Largest dimension after normalising — keeps every piece the same visual size. */
  size?: number;
  /** Called with the normalised height, e.g. to aim the camera at the piece's centre. */
  onFit?: (height: number) => void;
}

/** A furniture piece centred on the origin, standing on y = 0 and scaled to `size`. */
export function FurnitureModel({ kind, wood, fabric, size = 2, onFit }: FurnitureModelProps) {
  const m = useFurnitureMats(wood, fabric);
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const Model = MODELS[kind];

  useLayoutEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    i.position.set(0, 0, 0);
    const box = localBounds(i);
    const dims = box.getSize(new THREE.Vector3());
    const scale = size / Math.max(dims.x, dims.y, dims.z);
    const center = box.getCenter(new THREE.Vector3());
    i.position.set(-center.x, -box.min.y, -center.z);
    o.scale.setScalar(scale);
    onFit?.(dims.y * scale);
  }, [kind, size, onFit]);

  return (
    <group ref={outer}>
      <group ref={inner}>
        <Model m={m} />
      </group>
    </group>
  );
}
