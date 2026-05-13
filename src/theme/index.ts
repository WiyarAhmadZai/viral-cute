import { colors } from './colors';
import { radius } from './radius';
import { spacing } from './spacing';
import { typography } from './typography';

export * from './colors';
export * from './radius';
export * from './spacing';
export * from './typography';

export const theme = {
  colors,
  spacing,
  typography,
  radius,
} as const;

export type Theme = typeof theme;
