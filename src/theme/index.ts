import { animation } from './animations';
import { colors } from './colors';
import { radius } from './radius';
import { shadow } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export * from './animations';
export * from './colors';
export * from './helpers';
export * from './radius';
export * from './shadows';
export * from './spacing';
export * from './typography';

export const theme = {
  colors,
  spacing,
  typography,
  radius,
  shadow,
  animation,
} as const;

export type Theme = typeof theme;
