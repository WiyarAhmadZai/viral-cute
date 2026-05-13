import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';

export default function StorageScreen() {
  return (
    <ScreenContainer>
      <View className="px-xl pt-xl flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold tracking-tight text-text-primary">
            Storage Manager
          </Text>
          <Pressable onPress={() => router.back()} accessibilityRole="button">
            <Text className="text-md font-semibold text-accent-primary">Back</Text>
          </Pressable>
        </View>
        <Text className="mt-sm text-base text-text-tertiary">Local files, caches, exports</Text>
      </View>
    </ScreenContainer>
  );
}
