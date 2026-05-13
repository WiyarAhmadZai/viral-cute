import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { theme } from '@/theme';

import { Card } from './Card';
import { ProgressBar } from './ProgressBar';

import type { ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface StorageCardProps {
  icon?: IconName;
  label: string;
  used: number;
  total: number;
  className?: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

export function StorageCard({
  icon = 'folder',
  label,
  used,
  total,
  className = '',
}: StorageCardProps) {
  const pct = total > 0 ? (used / total) * 100 : 0;

  return (
    <Card className={className}>
      <View className="mb-md flex-row items-center justify-between">
        <View className="gap-md flex-row items-center">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-surface-overlay">
            <Ionicons name={icon} size={18} color={theme.colors.accent.primary} />
          </View>
          <Text className="text-md font-semibold text-text-primary">{label}</Text>
        </View>
        <Text className="text-sm font-medium text-text-tertiary">
          {formatBytes(used)} / {formatBytes(total)}
        </Text>
      </View>
      <ProgressBar value={pct} />
    </Card>
  );
}
