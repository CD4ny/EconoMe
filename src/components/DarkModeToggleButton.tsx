import { Pressable } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeProvider';
import { StyleSheet } from 'react-native';

export default function DarkModeToggleButton() {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const colors = theme.colors;

  const styles = StyleSheet.create({
    darkToggle: {
      color: colors.neutralLight,
      backgroundColor: colors.primary,
      borderRadius: 12,
      padding: 10,
    },
  });

  return (
    <Pressable
      onPress={() => {
        toggleTheme();
      }}
    >
      <MaterialIcons
        name={isDarkMode ? 'dark-mode' : 'sunny'}
        size={25}
        style={styles.darkToggle}
      />
    </Pressable>
  );
}
