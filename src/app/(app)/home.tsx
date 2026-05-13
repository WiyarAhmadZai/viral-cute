import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { Button } from '@/shared/ui';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenContainer scrollable>
      <View className="px-xl pt-xl flex-1">
        <Text className="text-4xl font-black tracking-tightest text-text-primary">Home</Text>
        <Text className="mt-sm text-base text-text-tertiary">Welcome to ViralCut</Text>

        <View className="mt-2xl gap-md">
          <Button hero label="Import Media" onPress={() => router.push('/import')} />
          <Button
            variant="secondary"
            label="View Processing"
            onPress={() => router.push('/processing')}
          />
          <Button variant="ghost" label="Storage Manager" onPress={() => router.push('/storage')} />
        </View>
      </View>
    </ScreenContainer>
  );
}
