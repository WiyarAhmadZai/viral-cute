import { Redirect } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { useAuthGuard } from '@/shared/hooks/useAuthGuard';

export default function SplashScreen() {
  const { isInitialized, isAuthenticated } = useAuthGuard();

  if (isInitialized && isAuthenticated) {
    return <Redirect href="/home" />;
  }

  return (
    <ScreenContainer variant="full">
      <View className="flex-1 items-center justify-center">
        <Text className="text-5xl font-black tracking-tightest text-text-primary">VIRALCUT</Text>
        <Text className="mt-md text-sm tracking-widest text-text-tertiary">CINEMATIC EDITOR</Text>
        <ActivityIndicator color="#0A84FF" className="mt-2xl" />
      </View>
    </ScreenContainer>
  );
}
