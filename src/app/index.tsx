import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { useAuthGuard } from '@/shared/hooks/useAuthGuard';
import { Loader } from '@/shared/ui';

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
        <View className="mt-2xl">
          <Loader variant="dots" size="lg" />
        </View>
      </View>
    </ScreenContainer>
  );
}
