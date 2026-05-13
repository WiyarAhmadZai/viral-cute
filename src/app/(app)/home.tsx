import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <View className="px-xl pt-xl flex-1">
        <Text className="text-4xl font-black tracking-tightest text-text-primary">Home</Text>
        <Text className="mt-sm text-base text-text-tertiary">Welcome to ViralCut</Text>

        <View className="mt-2xl gap-lg">
          <Link href="/import" className="text-md font-semibold text-accent-primary">
            Open Import (modal) →
          </Link>
          <Link href="/processing" className="text-md font-semibold text-text-link">
            Open Processing →
          </Link>
          <Link href="/storage" className="text-md font-semibold text-accent-secondary">
            Open Storage Manager →
          </Link>
        </View>
      </View>
    </ScreenContainer>
  );
}
