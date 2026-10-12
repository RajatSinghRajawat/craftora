'use client';

// Craftora Motion Primitives
// Reusable Framer Motion building blocks shared across every page.

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
  type MotionValue,
} from 'framer-motion';

export const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const directionOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    default:
      return {};
  }
};

/* -------------------------------------------------------------------------- */
/*                                   Reveal                                   */
/* -------------------------------------------------------------------------- */

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView'> {
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  scale?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  direction = 'up',
  distance = 40,
  delay = 0,
  duration = 0.9,
  scale,
  blur = false,
  once = true,
  amount = 0.2,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset(direction, distance),
        ...(scale ? { scale } : {}),
        ...(blur ? { filter: 'blur(10px)' } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        ...(blur ? { filter: 'blur(0px)' } : {}),
      }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_LUXE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Stagger Container                             */
/* -------------------------------------------------------------------------- */

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_LUXE } },
};

export const scaleInItem: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: EASE_LUXE } },
};

export const flip3dItem: Variants = {
  hidden: { opacity: 0, rotateX: -65, y: 60, transformPerspective: 1100 },
  show: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1100, transition: { duration: 1, ease: EASE_LUXE } },
};

export const slideLeftItem: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_LUXE } },
};

interface StaggerProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'variants'> {
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  /** Animate on mount instead of when scrolled into view. */
  onMount?: boolean;
}

export function Stagger({
  children,
  stagger = 0.12,
  delay = 0,
  once = true,
  amount = 0.15,
  onMount = false,
  ...rest
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const trigger = onMount
    ? { animate: 'show' as const }
    : { whileInView: 'show' as const, viewport: { once, amount } };

  return (
    <motion.div variants={variants} initial="hidden" {...trigger} {...rest}>
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  variant?: 'fadeUp' | 'scale' | 'slideLeft' | 'flip3d';
}

export function StaggerItem({ variant = 'fadeUp', children, ...rest }: StaggerItemProps) {
  const variants = { fadeUp: fadeUpItem, scale: scaleInItem, slideLeft: slideLeftItem, flip3d: flip3dItem }[variant];
  return (
    <motion.div variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Word-by-word Text Reveal                           */
/* -------------------------------------------------------------------------- */

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of when scrolled into view. */
  onMount?: boolean;
  as?: 'span' | 'div';
  /** Classes applied to every word (e.g. gradient text, which must sit on the animated span itself). */
  wordClassName?: string;
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  onMount = false,
  as = 'span',
  wordClassName = '',
}: TextRevealProps) {
  const words = text.split(' ');
  const Wrapper = as === 'div' ? motion.div : motion.span;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: '110%', rotate: 4 },
    show: { y: '0%', rotate: 0, transition: { duration: 0.9, ease: EASE_LUXE } },
  };

  const trigger = onMount
    ? { animate: 'show' as const }
    : { whileInView: 'show' as const, viewport: { once: true, amount: 0.5 } };

  return (
    <Wrapper className={className} variants={container} initial="hidden" {...trigger} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span className={`inline-block will-change-transform ${wordClassName}`} variants={word}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Count Up                                  */
/* -------------------------------------------------------------------------- */

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ to, prefix = '', suffix = '', duration = 2, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE_LUXE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Magnetic Wrapper                              */
/* -------------------------------------------------------------------------- */

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.3, className = 'inline-block' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               3D Tilt Card                                 */
/* -------------------------------------------------------------------------- */

const TiltContext = createContext<{ px: MotionValue<number>; py: MotionValue<number> } | null>(null);

/** Layer inside a <Tilt> that drifts with the pointer — larger `depth` feels closer to the viewer. */
export function Depth({
  children,
  depth = 20,
  className = '',
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  const ctx = useContext(TiltContext);
  const fallback = useMotionValue(0.5);
  const x = useSpring(useTransform(ctx?.px ?? fallback, [0, 1], [-depth, depth]), { stiffness: 150, damping: 18 });
  const y = useSpring(useTransform(ctx?.py ?? fallback, [0, 1], [-depth, depth]), { stiffness: 150, damping: 18 });
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

interface TiltProps extends Omit<HTMLMotionProps<'div'>, 'style'> {
  max?: number;
  style?: React.CSSProperties;
}

export function Tilt({ children, max = 8, className = '', style, ...rest }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.22), transparent 55%)`
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <TiltContext.Provider value={{ px, py }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
        className={`relative ${className}`}
        {...rest}
      >
        {children as React.ReactNode}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{ background: glare }}
        />
      </motion.div>
    </TiltContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Parallax                                  */
/* -------------------------------------------------------------------------- */

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 60, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Image wrapper that zooms out slightly and drifts as it scrolls through the viewport. */
export function ParallaxImage({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.08, 1.18]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}

/** Section that swings up from a tilted 3D plane as it scrolls into view. */
export function Perspective3D({
  children,
  className = '',
  tilt = 18,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 35%'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [tilt, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 1]);

  return (
    <div ref={ref} className="[perspective:1400px]">
      <motion.div style={{ rotateX, scale, opacity, transformOrigin: 'center bottom' }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Marquee                                   */
/* -------------------------------------------------------------------------- */

interface MarqueeProps {
  items: React.ReactNode[];
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({ items, speed = 30, className = '', reverse = false }: MarqueeProps) {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={reduce ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="inline-flex shrink-0" aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Floating (idle bobbing)                            */
/* -------------------------------------------------------------------------- */

export function Float({
  children,
  amplitude = 10,
  duration = 5,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
