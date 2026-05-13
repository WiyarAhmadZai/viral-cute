import { cssInterop } from 'nativewind';
import { Modal as RNModal, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/theme';

import type { ReactNode } from 'react';

cssInterop(SafeAreaView, { className: 'style' });

type ModalVariant = 'dialog' | 'sheet' | 'fullscreen';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  variant?: ModalVariant;
  children: ReactNode;
  dismissOnBackdrop?: boolean;
}

export function Modal({
  visible,
  onClose,
  variant = 'dialog',
  children,
  dismissOnBackdrop = true,
}: ModalProps) {
  if (variant === 'fullscreen') {
    return (
      <RNModal
        visible={visible}
        onRequestClose={onClose}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <SafeAreaView className="flex-1 bg-bg-primary">{children}</SafeAreaView>
      </RNModal>
    );
  }

  if (variant === 'sheet') {
    return (
      <RNModal visible={visible} onRequestClose={onClose} animationType="slide" transparent>
        <View
          className="flex-1 justify-end"
          style={{ backgroundColor: theme.colors.overlay.backdrop }}
        >
          {dismissOnBackdrop ? (
            <Pressable
              className="absolute inset-0"
              onPress={onClose}
              accessibilityLabel="Dismiss"
            />
          ) : null}
          <View className="p-lg pb-2xl rounded-t-2xl bg-surface-raised">
            <View className="mb-md h-1 w-12 self-center rounded-full bg-border-strong" />
            {children}
          </View>
        </View>
      </RNModal>
    );
  }

  return (
    <RNModal visible={visible} onRequestClose={onClose} animationType="fade" transparent>
      <View
        className="px-xl flex-1 items-center justify-center"
        style={{ backgroundColor: theme.colors.overlay.backdrop }}
      >
        {dismissOnBackdrop ? (
          <Pressable className="absolute inset-0" onPress={onClose} accessibilityLabel="Dismiss" />
        ) : null}
        <View className="p-lg w-full max-w-sm rounded-2xl bg-surface-raised">{children}</View>
      </View>
    </RNModal>
  );
}
