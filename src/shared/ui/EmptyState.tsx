import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { theme } from '@/theme';

import { Button } from './Button';

import type { ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description?: string;
  action?: {
    label: string;
    onPress: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon = 'film-outline',
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <View className={`px-xl flex-1 items-center justify-center ${className}`}>
      <View className="mb-lg h-24 w-24 items-center justify-center rounded-full bg-surface-overlay">
        <Ionicons name={icon} size={40} color={theme.colors.text.tertiary} />
      </View>
      <Text className="text-center text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </Text>
      {description ? (
        <Text className="mt-sm max-w-xs text-center text-base text-text-tertiary">
          {description}
        </Text>
      ) : null}
      {action ? (
        <View className="mt-xl">
          <Button label={action.label} onPress={action.onPress} />
        </View>
      ) : null}
    </View>
  );
}
