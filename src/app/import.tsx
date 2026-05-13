import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';

export default function ImportScreen() {
  return (
    <ScreenContainer variant="modal">
      <View className="px-xl pt-xl flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold tracking-tight text-text-primary">Import</Text>
          <Pressable onPress={() => router.back()} accessibilityRole="button">
            <Text className="text-md font-semibold text-accent-primary">Close</Text>
          </Pressable>
        </View>
        <Text className="mt-sm text-base text-text-tertiary">Bring in your source media</Text>
      </View>
    </ScreenContainer>
  );
}
