import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { shadow } from '@/theme';

import type { ReactNode } from 'react';

cssInterop(LinearGradient, { className: 'style' });

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  haptic?: boolean | Haptics.ImpactFeedbackStyle;
  hero?: boolean;
  fullWidth?: boolean;
  onPress?: () => void;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-md',
  md: 'h-12 px-lg',
  lg: 'h-14 px-xl',
};

const labelClasses: Record<ButtonSize, string> = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
};

const variantClasses: Record<ButtonVariant, { bg: string; text: string; border: string }> = {
  primary: { bg: 'bg-accent-primary', text: 'text-text-inverse', border: 'border-transparent' },
  secondary: { bg: 'bg-accent-navy', text: 'text-accent-primary', border: 'border-transparent' },
  ghost: { bg: 'bg-transparent', text: 'text-accent-primary', border: 'border-accent-primary' },
  destructive: {
    bg: 'bg-status-error',
    text: 'text-text-inverse',
    border: 'border-transparent',
  },
};

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  haptic = true,
  hero,
  fullWidth,
  onPress,
  className = '',
}: ButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  const isInteractive = !disabled && !loading;

  const handlePress = () => {
    if (!isInteractive) return;
    if (haptic) {
      const style = haptic === true ? Haptics.ImpactFeedbackStyle.Medium : haptic;
      Haptics.impactAsync(style).catch(() => undefined);
    }
    onPress?.();
  };

  const handlePressIn = () => {
    if (isInteractive) scale.value = withSpring(0.96, { damping: 18, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 18, stiffness: 300 });
  };

  const variantStyle = variantClasses[variant];
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-40' : '';
  const useGradient = hero && variant === 'primary';
  const bgClass = useGradient ? 'bg-transparent' : variantStyle.bg;
  const shadowStyle = variant === 'primary' && isInteractive ? shadow.glowGold : undefined;
  const spinnerColor = variant === 'primary' || variant === 'destructive' ? '#050505' : '#B68B2D';

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={!isInteractive}
      accessibilityRole="button"
      accessibilityState={{ disabled: !isInteractive, busy: !!loading }}
    >
      <Animated.View
        style={[animatedStyle, shadowStyle]}
        className={`${sizeClasses[size]} ${widthClass} ${disabledClass} items-center justify-center overflow-hidden rounded-xl border ${variantStyle.border} ${bgClass} ${className}`}
      >
        {useGradient ? (
          <LinearGradient
            colors={['#B68B2D', '#8F6D1F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        ) : null}
        <View className="gap-sm flex-row items-center justify-center">
          {loading ? (
            <ActivityIndicator color={spinnerColor} />
          ) : (
            <>
              {leftIcon}
              {label ? (
                <Text
                  className={`${labelClasses[size]} font-semibold tracking-wide ${variantStyle.text}`}
                >
                  {label}
                </Text>
              ) : null}
              {rightIcon}
            </>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
}
