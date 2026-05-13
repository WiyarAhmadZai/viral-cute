import { brand } from './colors';

import type { ViewStyle } from 'react-native';

type Shadow = Required<
  Pick<ViewStyle, 'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'>
>;

const BLACK = '#000000';

export const shadow = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.36,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.42,
    shadowRadius: 24,
    elevation: 12,
  },
  '2xl': {
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.48,
    shadowRadius: 32,
    elevation: 16,
  },
  glowBlue: {
    shadowColor: brand.royalBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 16,
    elevation: 10,
  },
  glowGold: {
    shadowColor: brand.darkGold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 18,
    elevation: 10,
  },
  glowNavy: {
    shadowColor: brand.darkNavy,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
} as const satisfies Record<string, Shadow>;

export type ShadowKey = keyof typeof shadow;
