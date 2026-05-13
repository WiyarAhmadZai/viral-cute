export const routes = {
  splash: '/',
  home: '/home',
  projects: '/projects',
  clips: '/clips',
  exports: '/exports',
  settings: '/settings',
  import: '/import',
  processing: '/processing',
  storage: '/storage',
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
