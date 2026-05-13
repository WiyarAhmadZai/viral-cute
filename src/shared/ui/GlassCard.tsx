import { BlurView } from 'expo-blur';
import { cssInterop } from 'nativewind';

import type { ReactNode } from 'react';

cssInterop(BlurView, { className: 'style' });

interface GlassCardProps {
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  children: ReactNode;
  className?: string;
}

export function GlassCard({
  intensity = 60,
  tint = 'dark',
  children,
  className = '',
}: GlassCardProps) {
  return (
    <BlurView
      intensity={intensity}
      tint={tint}
      experimentalBlurMethod="dimezisBlurView"
      className={`p-lg overflow-hidden rounded-2xl border border-border ${className}`}
    >
      {children}
    </BlurView>
  );
}
