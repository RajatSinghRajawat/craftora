'use client';

// Full 360° product viewer: drag to orbit, pinch / buttons to zoom, preset camera angles.
// Renders on demand only (when the camera or a material changes), so it idles at 0% GPU.

import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { AnimatePresence, motion } from 'framer-motion';
import { Hand, Maximize2, Minimize2, Minus, Pause, Play, Plus, RotateCcw } from 'lucide-react';
import type { ModelKind } from '@/data/materials';
import { FurnitureModel } from './models';
import Studio from './Studio';

const VIEWS = {
  '3/4': new THREE.Vector3(0.75, 0.45, 1),
  Front: new THREE.Vector3(0, 0.2, 1),
  Side: new THREE.Vector3(1, 0.2, 0),
  Back: new THREE.Vector3(-0.2, 0.3, -1),
  Top: new THREE.Vector3(0, 1, 0.02),
} as const;

type ViewName = keyof typeof VIEWS;
type Command = { type: 'view'; name: ViewName } | { type: 'zoom'; factor: number };

const HOME_DISTANCE = 5.4;

function Scene({
  kind,
  wood,
  fabric,
  autoRotate,
  zoomEnabled,
  command,
  onInteract,
}: {
  kind: ModelKind;
  wood: string;
  fabric: string;
  autoRotate: boolean;
  zoomEnabled: boolean;
  command: (Command & { nonce: number }) | null;
  onInteract: () => void;
}) {
  const controls = useRef<OrbitControlsImpl>(null);
  const fly = useRef<THREE.Vector3 | null>(null);
  const { camera, invalidate } = useThree();
  const [targetY, setTargetY] = useState(0.8);
  const onFit = useCallback((h: number) => setTargetY(h * 0.42), []);

  // Kick the render loop whenever auto-rotate turns back on
  useEffect(() => {
    if (autoRotate) invalidate();
  }, [autoRotate, invalidate]);

  useEffect(() => {
    const c = controls.current;
    if (!command || !c) return;
    const offset = camera.position.clone().sub(c.target);
    if (command.type === 'view') {
      offset.copy(VIEWS[command.name]).normalize().multiplyScalar(command.name === '3/4' ? HOME_DISTANCE : offset.length());
    } else {
      offset.multiplyScalar(command.factor);
      offset.clampLength(c.minDistance, c.maxDistance);
    }
    fly.current = c.target.clone().add(offset);
    invalidate();
  }, [command, camera, invalidate]);

  // Smooth camera flights between preset angles
  useFrame((_, delta) => {
    const c = controls.current;
    if (!fly.current || !c) return;
    camera.position.lerp(fly.current, 1 - Math.exp(-delta * 7));
    if (camera.position.distanceTo(fly.current) < 0.005) fly.current = null;
    c.update();
    invalidate();
  });

  return (
    <>
      <FurnitureModel kind={kind} wood={wood} fabric={fabric} onFit={onFit} />
      <ContactShadows key={kind} position={[0, 0.002, 0]} opacity={0.42} scale={6} blur={2.4} far={2.5} resolution={512} frames={1} />
      <OrbitControls
        ref={controls}
        makeDefault
        target={[0, targetY, 0]}
        enableDamping
        dampingFactor={0.08}
        enablePan={false}
        enableZoom={zoomEnabled}
        minDistance={2.6}
        maxDistance={9}
        maxPolarAngle={Math.PI * 0.53}
        autoRotate={autoRotate}
        autoRotateSpeed={1.4}
        onStart={() => {
          fly.current = null;
          onInteract();
        }}
      />
    </>
  );
}

interface ProductViewer3DProps {
  kind: ModelKind;
  /** Hex colours, see `woodHex` / `fabricHex`. */
  wood: string;
  fabric: string;
  className?: string;
  /** Hide the preset-angle bar (for small embeds). */
  compact?: boolean;
}

export default function ProductViewer3D({ kind, wood, fabric, className = 'h-[480px]', compact = false }: ProductViewer3DProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [touched, setTouched] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeView, setActiveView] = useState<ViewName | null>('3/4');
  const [command, setCommand] = useState<(Command & { nonce: number }) | null>(null);

  const send = (c: Command) => setCommand({ ...c, nonce: Date.now() });

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    const onFs = () => setFullscreen(document.fullscreenElement === el);
    document.addEventListener('fullscreenchange', onFs);
    return () => {
      io.disconnect();
      document.removeEventListener('fullscreenchange', onFs);
    };
  }, []);

  const handleInteract = useCallback(() => {
    setTouched(true);
    setAutoRotate(false);
    setActiveView(null);
  }, []);

  const toggleFullscreen = () => {
    const el = wrap.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  const iconBtn =
    'w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-[#E7E5E4] text-[#1C1917] flex items-center justify-center shadow-sm hover:bg-white hover:border-[#D6D3D1] active:scale-95 transition';

  return (
    <div
      ref={wrap}
      className={`relative w-full overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_50%_35%,#FFFFFF_0%,#F6F4F0_70%,#EFECE6_100%)] border border-[#ECEAE6] ${
        fullscreen ? '!h-screen !rounded-none' : className
      }`}
    >
      <Canvas
        frameloop={visible ? 'demand' : 'never'}
        dpr={[1, 1.75]}
        camera={{ position: VIEWS['3/4'].clone().normalize().multiplyScalar(HOME_DISTANCE).toArray(), fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="!touch-none cursor-grab active:cursor-grabbing"
      >
        <Studio />
        <Scene
          kind={kind}
          wood={wood}
          fabric={fabric}
          autoRotate={autoRotate && visible}
          zoomEnabled={fullscreen}
          command={command}
          onInteract={handleInteract}
        />
      </Canvas>

      {/* Hint */}
      <AnimatePresence>
        {!touched && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1C1917]/85 text-white text-xs font-medium backdrop-blur"
          >
            <motion.span animate={{ x: [-4, 4, -4] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
              <Hand className="w-3.5 h-3.5" />
            </motion.span>
            Drag to rotate 360°
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top-right tools */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button type="button" className={iconBtn} onClick={() => setAutoRotate((v) => !v)} aria-label={autoRotate ? 'Pause rotation' : 'Auto rotate'}>
          {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button type="button" className={iconBtn} onClick={() => send({ type: 'zoom', factor: 0.8 })} aria-label="Zoom in">
          <Plus className="w-4 h-4" />
        </button>
        <button type="button" className={iconBtn} onClick={() => send({ type: 'zoom', factor: 1.25 })} aria-label="Zoom out">
          <Minus className="w-4 h-4" />
        </button>
        <button
          type="button"
          className={iconBtn}
          onClick={() => {
            setActiveView('3/4');
            send({ type: 'view', name: '3/4' });
          }}
          aria-label="Reset view"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button type="button" className={iconBtn} onClick={toggleFullscreen} aria-label={fullscreen ? 'Exit full screen' : 'Full screen'}>
          {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Preset angles */}
      {!compact && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-full bg-white/90 backdrop-blur border border-[#E7E5E4] shadow-sm">
          {(Object.keys(VIEWS) as ViewName[]).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => {
                setActiveView(name);
                setAutoRotate(false);
                send({ type: 'view', name });
              }}
              className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeView === name ? 'text-white' : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              {activeView === name && (
                <motion.span layoutId={`view-pill-${kind}`} className="absolute inset-0 rounded-full bg-[#1C1917]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
