import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';

import { useAuthGuard } from '@/shared/hooks/useAuthGuard';

export default function AppLayout() {
  const { isInitialized, isAuthenticated } = useAuthGuard();

  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0A0A0A',
          borderTopColor: '#1A1A1A',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#0A84FF',
        tabBarInactiveTintColor: '#737373',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 0.3,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color, size }) => <Ionicons name="folder" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="clips"
        options={{
          title: 'Clips',
          tabBarIcon: ({ color, size }) => <Ionicons name="film" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="exports"
        options={{
          title: 'Exports',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-upload" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
