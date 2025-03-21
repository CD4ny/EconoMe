import { StyleSheet } from 'react-native';

import { Theme } from '../../../contexts/ThemeProvider';

export const LoginStyles = (theme: Theme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: colors.neutral,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
  });
};
