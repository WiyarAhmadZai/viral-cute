export const colors = {
  primary: '#FF2D55',
  secondary: '#5856D6',
  background: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  surface: {
    light: '#F2F2F7',
    dark: '#1C1C1E',
  },
  text: {
    primary: '#000000',
    secondary: '#8E8E93',
    inverse: '#FFFFFF',
    disabled: '#C7C7CC',
  },
  border: {
    light: '#E5E5EA',
    dark: '#3A3A3C',
  },
  status: {
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#007AFF',
  },
  overlay: {
    light: 'rgba(0, 0, 0, 0.4)',
    dark: 'rgba(255, 255, 255, 0.1)',
  },
} as const;

export type Colors = typeof colors;
