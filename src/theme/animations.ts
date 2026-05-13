export const duration = {
  instant: 0,
  micro: 100,
  fast: 200,
  normal: 300,
  slow: 500,
  emphasized: 800,
  cinematic: 1200,
} as const;

export const easing = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
} as const;

export const bezier = {
  standard: [0.4, 0.0, 0.2, 1] as const,
  emphasized: [0.2, 0.0, 0, 1] as const,
  accelerate: [0.4, 0.0, 1, 1] as const,
  decelerate: [0.0, 0.0, 0.2, 1] as const,
  cinematic: [0.65, 0, 0.35, 1] as const,
} as const;

export const spring = {
  gentle: { damping: 18, stiffness: 100, mass: 1 },
  smooth: { damping: 15, stiffness: 120, mass: 1 },
  bouncy: { damping: 8, stiffness: 100, mass: 1 },
  snappy: { damping: 25, stiffness: 300, mass: 1 },
  cinematic: { damping: 22, stiffness: 80, mass: 1.2 },
} as const;

export const animation = {
  duration,
  easing,
  bezier,
  spring,
} as const;

export type DurationKey = keyof typeof duration;
export type EasingKey = keyof typeof easing;
export type BezierKey = keyof typeof bezier;
export type SpringKey = keyof typeof spring;
