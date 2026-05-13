import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { brand } from '@/theme';

type LoaderVariant = 'spinner' | 'dots' | 'pulse';
type LoaderSize = 'sm' | 'md' | 'lg';

interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  color?: string;
}

const SIZE_MAP: Record<LoaderSize, number> = {
  sm: 16,
  md: 24,
  lg: 36,
};

function Spinner({ size, color }: { size: number; color: string }) {
  const rotation = useSharedValue(0);
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 900, easing: Easing.linear }),
      -1,
      false,
    );
  }, [rotation]);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));
  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          borderWidth: 2,
          borderRadius: size / 2,
          borderColor: 'rgba(255,255,255,0.12)',
          borderTopColor: color,
        },
        animatedStyle,
      ]}
    />
  );
}

function Dot({ delay, size, color }: { delay: number; size: number; color: string }) {
  const opacity = useSharedValue(0.3);
  const scale = useSharedValue(0.8);
  useEffect(() => {
    opacity.value = withDelay(delay, withRepeat(withTiming(1, { duration: 500 }), -1, true));
    scale.value = withDelay(delay, withRepeat(withTiming(1.2, { duration: 500 }), -1, true));
  }, [delay, opacity, scale]);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));
  return (
    <Animated.View
      style={[
        { width: size, height: size, borderRadius: size / 2, backgroundColor: color },
        animatedStyle,
      ]}
    />
  );
}

function Dots({ size, color }: { size: number; color: string }) {
  const dotSize = Math.max(6, size / 3);
  return (
    <View className="gap-xs flex-row items-center">
      <Dot delay={0} size={dotSize} color={color} />
      <Dot delay={133} size={dotSize} color={color} />
      <Dot delay={266} size={dotSize} color={color} />
    </View>
  );
}

function Pulse({ size, color }: { size: number; color: string }) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.out(Easing.quad) }),
      -1,
      false,
    );
  }, [progress]);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    transform: [{ scale: 0.6 + progress.value * 0.8 }],
  }));
  return (
    <Animated.View
      style={[
        { width: size, height: size, borderRadius: size / 2, backgroundColor: color },
        animatedStyle,
      ]}
    />
  );
}

export function Loader({ variant = 'spinner', size = 'md', color = brand.darkGold }: LoaderProps) {
  const pixelSize = SIZE_MAP[size];
  switch (variant) {
    case 'dots':
      return <Dots size={pixelSize} color={color} />;
    case 'pulse':
      return <Pulse size={pixelSize} color={color} />;
    default:
      return <Spinner size={pixelSize} color={color} />;
  }
}
