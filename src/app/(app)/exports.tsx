import { Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';

export default function ExportsScreen() {
  return (
    <ScreenContainer>
      <View className="px-xl pt-xl flex-1">
        <Text className="text-4xl font-black tracking-tightest text-text-primary">Exports</Text>
        <Text className="mt-sm text-base text-text-tertiary">Recent exports</Text>
      </View>
    </ScreenContainer>
  );
}
