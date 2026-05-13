import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

cssInterop(LinearGradient, { className: 'style' });

interface ProgressBarProps {
  value?: number;
  indeterminate?: boolean;
  height?: number;
  showLabel?: boolean;
  gradient?: boolean;
  label?: string;
  className?: string;
}

export function ProgressBar({
  value = 0,
  indeterminate = false,
  height = 6,
  showLabel,
  gradient = true,
  label,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const progress = useSharedValue(0);

  useEffect(() => {
    if (indeterminate) {
      progress.value = 0;
      progress.value = withRepeat(withTiming(1, { duration: 1400 }), -1, false);
    } else {
      progress.value = withTiming(clamped / 100, { duration: 400 });
    }
  }, [clamped, indeterminate, progress]);

  const fillStyle = useAnimatedStyle(() => {
    if (indeterminate) {
      return {
        width: '40%' as const,
        transform: [{ translateX: (progress.value - 0.4) * 250 }],
      };
    }
    return { width: `${progress.value * 100}%` as `${number}%` };
  });

  return (
    <View className={className}>
      {showLabel ? (
        <View className="mb-xs flex-row justify-between">
          <Text className="text-xs font-medium text-text-secondary">{label ?? 'Progress'}</Text>
          {!indeterminate ? (
            <Text className="text-xs font-semibold text-text-primary">{Math.round(clamped)}%</Text>
          ) : null}
        </View>
      ) : null}
      <View className="overflow-hidden rounded-full bg-surface-overlay" style={{ height }}>
        <Animated.View style={[{ height: '100%' }, fillStyle]}>
          {gradient ? (
            <LinearGradient
              colors={['#B68B2D', '#C9A140']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            />
          ) : (
            <View className="flex-1 bg-accent-primary" />
          )}
        </Animated.View>
      </View>
    </View>
  );
}
