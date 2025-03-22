import { Pressable } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@contexts/ThemeProvider';
import { StyleSheet } from 'react-native';

export default function DarkModeToggleButton() {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const colors = theme.colors;

  const styles = StyleSheet.create({
    darkToggle: {
      color: colors.text,
      backgroundColor: colors.neutralLight,
      borderRadius: 12,
      padding: 5,
    },
  });

  return (
    <Pressable
      onPress={() => {
        toggleTheme();
      }}
    >
      <MaterialIcons
        name={isDarkMode ? 'sunny' : 'dark-mode'}
        size={35}
        style={styles.darkToggle}
      />
    </Pressable>
  );
}
