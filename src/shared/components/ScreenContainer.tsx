import { StatusBar } from 'expo-status-bar';
import { cssInterop } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import type { ReactNode } from 'react';
import type { Edge } from 'react-native-safe-area-context';

cssInterop(RNSafeAreaView, { className: 'style' });

type ScreenVariant = 'screen' | 'modal' | 'full';

const EDGES: Record<ScreenVariant, Edge[]> = {
  screen: ['top'],
  modal: ['bottom'],
  full: ['top', 'bottom'],
};

interface ScreenContainerProps {
  children: ReactNode;
  variant?: ScreenVariant;
  className?: string;
}

export function ScreenContainer({
  children,
  variant = 'screen',
  className = '',
}: ScreenContainerProps) {
  return (
    <RNSafeAreaView edges={EDGES[variant]} className={`flex-1 bg-bg-primary ${className}`}>
      <StatusBar style="light" />
      {children}
    </RNSafeAreaView>
  );
}
