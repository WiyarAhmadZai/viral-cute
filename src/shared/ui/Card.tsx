import * as Haptics from 'expo-haptics';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { shadow } from '@/theme';

import type { ReactNode } from 'react';

type CardVariant = 'elevated' | 'flat' | 'outlined';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  onPress?: () => void;
  haptic?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-surface-raised',
  flat: 'bg-surface-base',
  outlined: 'bg-transparent border border-border',
};

const variantShadows: Record<CardVariant, (typeof shadow)[keyof typeof shadow] | undefined> = {
  elevated: shadow.md,
  flat: undefined,
  outlined: undefined,
};

export function Card({
  variant = 'elevated',
  children,
  className = '',
  onPress,
  haptic = true,
}: CardProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  const handlePress = () => {
    if (haptic) Haptics.selectionAsync().catch(() => undefined);
    onPress?.();
  };

  const inner = (
    <Animated.View
      style={[onPress ? animatedStyle : undefined, variantShadows[variant]]}
      className={`p-lg rounded-2xl ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Animated.View>
  );

  if (!onPress) return inner;

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={() => {
        scale.value = withSpring(0.98, { damping: 18, stiffness: 300 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 18, stiffness: 300 });
      }}
      accessibilityRole="button"
    >
      {inner}
    </Pressable>
  );
}
