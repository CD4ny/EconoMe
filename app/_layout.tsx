import { Stack } from 'expo-router';
import { ThemeProvider, useTheme } from '../src/contexts/ThemeProvider';
import DarkModeToggleButton from '../src/components/DarkModeToggleButton';
import { View, Text, Pressable, StyleSheet, StatusBar } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MainStack />
    </ThemeProvider>
  );
}
function MainStack() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;

  useEffect(() => {
    if (isDarkMode) {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(colors.neutralLight); // Ensure this matches your theme
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(colors.neutralLight);
    }
  }, [isDarkMode, colors.neutralLight]);

  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        navigationBarColor: colors.neutral,
        statusBarBackgroundColor: colors.neutralLight,
        headerStyle: {
          backgroundColor: colors.neutralLight,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: '100',
        },
        headerRight: () => <DarkModeToggleButton />,
        headerLeft: () => <></>
      }}
    >
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen
        name="index"
        options={{
          title: 'My Home',
        }}
      />
    </Stack>
  );
}
