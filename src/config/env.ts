import Constants from 'expo-constants';

export type AppEnv = 'development' | 'preview' | 'production';

interface Env {
  appEnv: AppEnv;
  apiUrl: string;
  sentryDsn: string | undefined;
}

function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function readEnv(): Env {
  const extra = (Constants.expoConfig?.extra ?? {}) as Partial<Env>;

  const appEnv = (process.env.EXPO_PUBLIC_APP_ENV ?? extra.appEnv ?? 'development') as AppEnv;
  const apiUrl = required(process.env.EXPO_PUBLIC_API_URL ?? extra.apiUrl, 'EXPO_PUBLIC_API_URL');
  const sentryDsn = process.env.EXPO_PUBLIC_SENTRY_DSN ?? extra.sentryDsn ?? undefined;

  return { appEnv, apiUrl, sentryDsn };
}

export const env: Env = readEnv();
