import '../../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AppProviders } from '@/providers/AppProviders';

export default function RootLayout() {
  return (
    <AppProviders>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#050505' },
          animation: 'slide_from_right',
          animationDuration: 250,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(app)" />
        <Stack.Screen
          name="import"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            animationDuration: 300,
          }}
        />
        <Stack.Screen name="processing" />
        <Stack.Screen name="storage" />
      </Stack>
    </AppProviders>
  );
}
