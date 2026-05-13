// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_APP_ENV: 'development' | 'preview' | 'production';
    EXPO_PUBLIC_API_URL: string;
    EXPO_PUBLIC_SENTRY_DSN?: string;
  }
}

export {};
