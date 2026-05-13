import { Directory, File, Paths } from 'expo-file-system';

export const AppPaths = {
  get document() {
    return Paths.document;
  },
  get cache() {
    return Paths.cache;
  },
  get bundle() {
    return Paths.bundle;
  },
} as const;

export { Directory, File, Paths };
