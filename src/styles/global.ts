import { StyleSheet } from 'react-native';

import { Theme } from '../contexts/ThemeProvider';

export const GlobalStyles = (theme: Theme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: { backgroundColor: colors.neutral },

  });
};
