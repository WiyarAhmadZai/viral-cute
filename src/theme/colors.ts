export const brand = {
  black: '#050505',
  white: '#FFFFFF',
  royalBlue: '#0A84FF',
  darkNavy: '#001F3F',
  darkGold: '#B68B2D',
} as const;

export const palette = {
  black: '#050505',
  ink: '#0A0A0A',
  graphite: '#121212',
  charcoal: '#1A1A1A',
  obsidian: '#262626',
  smoke: '#404040',
  ash: '#737373',
  silver: '#A3A3A3',
  pearl: '#D4D4D4',
  bone: '#E5E5E5',
  cream: '#F5F5F5',
  white: '#FFFFFF',

  blue50: '#E5F2FF',
  blue100: '#B8DCFF',
  blue200: '#7CC0FF',
  blue300: '#3FA3FF',
  blue400: '#0A84FF',
  blue500: '#0066D6',
  blue600: '#004FB0',
  blue700: '#003B85',
  blue800: '#002A5C',
  blue900: '#001F3F',

  gold50: '#FAF3DD',
  gold100: '#F0DDA5',
  gold200: '#E1C26C',
  gold300: '#C9A140',
  gold400: '#B68B2D',
  gold500: '#8F6D1F',
  gold600: '#6B5118',
  gold700: '#4A3810',

  success: '#34C759',
  warning: '#FF9500',
  error: '#FF453A',
  info: '#0A84FF',
} as const;

const darkSemantic = {
  background: {
    primary: brand.black,
    secondary: palette.ink,
    tertiary: palette.graphite,
    elevated: palette.charcoal,
    inverse: brand.white,
  },
  surface: {
    base: palette.ink,
    raised: palette.graphite,
    overlay: palette.charcoal,
    pressed: palette.obsidian,
    sunken: brand.black,
  },
  text: {
    primary: brand.white,
    secondary: palette.pearl,
    tertiary: palette.silver,
    disabled: palette.smoke,
    inverse: brand.black,
    accent: palette.gold400,
    link: palette.blue400,
  },
  border: {
    subtle: palette.charcoal,
    default: palette.obsidian,
    strong: palette.smoke,
    accent: palette.gold500,
    focus: palette.blue400,
  },
  accent: {
    primary: palette.blue400,
    primaryHover: palette.blue300,
    primaryPressed: palette.blue500,
    secondary: palette.gold400,
    secondaryHover: palette.gold300,
    secondaryPressed: palette.gold500,
    navy: palette.blue900,
  },
  status: {
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    info: palette.info,
  },
  overlay: {
    subtle: 'rgba(255, 255, 255, 0.04)',
    light: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.16)',
    strong: 'rgba(255, 255, 255, 0.24)',
    backdrop: 'rgba(0, 0, 0, 0.7)',
    scrim: 'rgba(5, 5, 5, 0.92)',
    cinematic: 'rgba(5, 5, 5, 0.6)',
  },
} as const;

const lightSemantic = {
  background: {
    primary: brand.white,
    secondary: palette.cream,
    tertiary: palette.bone,
    elevated: brand.white,
    inverse: brand.black,
  },
  surface: {
    base: brand.white,
    raised: palette.cream,
    overlay: palette.bone,
    pressed: palette.pearl,
    sunken: palette.cream,
  },
  text: {
    primary: brand.black,
    secondary: palette.smoke,
    tertiary: palette.ash,
    disabled: palette.silver,
    inverse: brand.white,
    accent: palette.gold500,
    link: palette.blue500,
  },
  border: {
    subtle: palette.bone,
    default: palette.pearl,
    strong: palette.silver,
    accent: palette.gold400,
    focus: palette.blue400,
  },
  accent: {
    primary: palette.blue500,
    primaryHover: palette.blue400,
    primaryPressed: palette.blue600,
    secondary: palette.gold500,
    secondaryHover: palette.gold400,
    secondaryPressed: palette.gold600,
    navy: palette.blue900,
  },
  status: {
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    info: palette.info,
  },
  overlay: {
    subtle: 'rgba(0, 0, 0, 0.03)',
    light: 'rgba(0, 0, 0, 0.06)',
    medium: 'rgba(0, 0, 0, 0.12)',
    strong: 'rgba(0, 0, 0, 0.24)',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    scrim: 'rgba(255, 255, 255, 0.92)',
    cinematic: 'rgba(0, 0, 0, 0.3)',
  },
} as const;

export const darkColors = { ...darkSemantic, brand, palette } as const;
export const lightColors = { ...lightSemantic, brand, palette } as const;

export const colors = darkColors;

export type Palette = typeof palette;
export type Brand = typeof brand;
export type ColorScheme = typeof darkColors;
