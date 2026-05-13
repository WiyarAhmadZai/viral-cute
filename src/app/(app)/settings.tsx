import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <View className="px-xl pt-xl flex-1">
        <Text className="text-4xl font-black tracking-tightest text-text-primary">Settings</Text>
        <Text className="mt-sm text-base text-text-tertiary">App preferences</Text>

        <View className="mt-2xl">
          <Link href="/storage" className="text-md font-semibold text-accent-primary">
            Storage Manager →
          </Link>
        </View>
      </View>
    </ScreenContainer>
  );
}
