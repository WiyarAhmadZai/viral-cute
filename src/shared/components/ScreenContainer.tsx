import { StatusBar } from 'expo-status-bar';
import { cssInterop } from 'nativewind';
import { ScrollView } from 'react-native';
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
  scrollable?: boolean;
  className?: string;
}

export function ScreenContainer({
  children,
  variant = 'screen',
  scrollable = false,
  className = '',
}: ScreenContainerProps) {
  return (
    <RNSafeAreaView edges={EDGES[variant]} className={`flex-1 bg-bg-primary ${className}`}>
      <StatusBar style="light" />
      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </RNSafeAreaView>
  );
}
