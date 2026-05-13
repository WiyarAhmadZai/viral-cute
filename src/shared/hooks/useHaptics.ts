import * as Haptics from 'expo-haptics';

type ImpactStyle = Haptics.ImpactFeedbackStyle;
type NotificationType = Haptics.NotificationFeedbackType;

interface HapticsApi {
  impact: (style?: ImpactStyle) => void;
  notify: (type?: NotificationType) => void;
  select: () => void;
}

const swallow = () => undefined;

export function useHaptics(): HapticsApi {
  return {
    impact: (style = Haptics.ImpactFeedbackStyle.Medium) => {
      Haptics.impactAsync(style).catch(swallow);
    },
    notify: (type = Haptics.NotificationFeedbackType.Success) => {
      Haptics.notificationAsync(type).catch(swallow);
    },
    select: () => {
      Haptics.selectionAsync().catch(swallow);
    },
  };
}
