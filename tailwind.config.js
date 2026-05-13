// Brand tokens. Mirrors src/theme/colors.ts — keep them in sync.
// (Tailwind runs at build time in Node, so it cannot import the TS theme directly.)

const brand = {
  black: '#050505',
  white: '#FFFFFF',
  'royal-blue': '#0A84FF',
  'dark-navy': '#001F3F',
  'dark-gold': '#B68B2D',
};

const blue = {
  50: '#E5F2FF',
  100: '#B8DCFF',
  200: '#7CC0FF',
  300: '#3FA3FF',
  400: '#0A84FF',
  500: '#0066D6',
  600: '#004FB0',
  700: '#003B85',
  800: '#002A5C',
  900: '#001F3F',
};

const gold = {
  50: '#FAF3DD',
  100: '#F0DDA5',
  200: '#E1C26C',
  300: '#C9A140',
  400: '#B68B2D',
  500: '#8F6D1F',
  600: '#6B5118',
  700: '#4A3810',
};

const ink = {
  0: '#050505',
  50: '#0A0A0A',
  100: '#121212',
  200: '#1A1A1A',
  300: '#262626',
  400: '#404040',
  500: '#737373',
  600: '#A3A3A3',
  700: '#D4D4D4',
  800: '#E5E5E5',
  900: '#F5F5F5',
  1000: '#FFFFFF',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/features/**/*.{js,jsx,ts,tsx}',
    './src/shared/**/*.{js,jsx,ts,tsx}',
    './src/providers/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand,
        blue,
        gold,
        ink,
        bg: {
          primary: '#050505',
          secondary: '#0A0A0A',
          tertiary: '#121212',
          elevated: '#1A1A1A',
        },
        surface: {
          base: '#0A0A0A',
          raised: '#121212',
          overlay: '#1A1A1A',
          pressed: '#262626',
          sunken: '#050505',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D4D4D4',
          tertiary: '#A3A3A3',
          disabled: '#404040',
          inverse: '#050505',
          accent: '#B68B2D',
          link: '#0A84FF',
        },
        border: {
          subtle: '#1A1A1A',
          DEFAULT: '#262626',
          strong: '#404040',
          accent: '#8F6D1F',
          focus: '#0A84FF',
        },
        accent: {
          primary: '#0A84FF',
          secondary: '#B68B2D',
          navy: '#001F3F',
        },
        status: {
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF453A',
          info: '#0A84FF',
        },
      },
      fontFamily: {
        display: ['System'],
        sans: ['System'],
        mono: ['Menlo'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '17px' }],
        sm: ['13px', { lineHeight: '20px' }],
        base: ['15px', { lineHeight: '24px' }],
        md: ['17px', { lineHeight: '27px' }],
        lg: ['19px', { lineHeight: '24px' }],
        xl: ['22px', { lineHeight: '28px' }],
        '2xl': ['26px', { lineHeight: '33px' }],
        '3xl': ['32px', { lineHeight: '36px' }],
        '4xl': ['40px', { lineHeight: '44px' }],
        '5xl': ['52px', { lineHeight: '58px' }],
        '6xl': ['68px', { lineHeight: '75px' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        tightest: '-1.2px',
        tighter: '-0.6px',
        tight: '-0.3px',
        normal: '0px',
        wide: '0.3px',
        wider: '0.6px',
        widest: '1.2px',
      },
      spacing: {
        '4xl': '64px',
        '5xl': '96px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.18)',
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.24)',
        md: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px 0 rgba(0, 0, 0, 0.36)',
        xl: '0 16px 24px 0 rgba(0, 0, 0, 0.42)',
        '2xl': '0 24px 32px 0 rgba(0, 0, 0, 0.48)',
        'glow-blue': '0 0 16px 0 rgba(10, 132, 255, 0.55)',
        'glow-gold': '0 0 18px 0 rgba(182, 139, 45, 0.5)',
        'glow-navy': '0 4px 20px 0 rgba(0, 31, 63, 0.6)',
      },
    },
  },
  plugins: [],
};
