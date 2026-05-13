import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { theme } from '@/theme';

import type { ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'];

type HeaderVariant = 'default' | 'transparent';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  leftIcon?: IconName;
  rightAction?: {
    icon?: IconName;
    label?: string;
    onPress: () => void;
  };
  variant?: HeaderVariant;
}

export function Header({
  title,
  subtitle,
  showBack,
  onBackPress,
  leftIcon,
  rightAction,
  variant = 'default',
}: HeaderProps) {
  const handleBack = () => {
    if (onBackPress) onBackPress();
    else router.back();
  };
  const bgClass = variant === 'transparent' ? 'bg-transparent' : 'bg-bg-primary';
  const borderClass = variant === 'transparent' ? '' : 'border-b border-border-subtle';

  return (
    <View className={`px-lg py-md flex-row items-center justify-between ${bgClass} ${borderClass}`}>
      <View className="gap-md flex-row items-center">
        {showBack ? (
          <Pressable onPress={handleBack} hitSlop={12} accessibilityRole="button">
            <Ionicons name="chevron-back" size={26} color={theme.colors.text.primary} />
          </Pressable>
        ) : leftIcon ? (
          <Ionicons name={leftIcon} size={24} color={theme.colors.text.primary} />
        ) : null}
        {title || subtitle ? (
          <View>
            {title ? (
              <Text className="text-xl font-bold tracking-tight text-text-primary">{title}</Text>
            ) : null}
            {subtitle ? (
              <Text className="text-xs tracking-wide text-text-tertiary">{subtitle}</Text>
            ) : null}
          </View>
        ) : null}
      </View>
      {rightAction ? (
        <Pressable
          onPress={rightAction.onPress}
          hitSlop={12}
          accessibilityRole="button"
          className="gap-xs flex-row items-center"
        >
          {rightAction.icon ? (
            <Ionicons name={rightAction.icon} size={22} color={theme.colors.accent.primary} />
          ) : null}
          {rightAction.label ? (
            <Text className="text-md font-semibold text-accent-primary">{rightAction.label}</Text>
          ) : null}
        </Pressable>
      ) : null}
    </View>
  );
}
