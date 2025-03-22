import { StyleSheet } from 'react-native';
import { Theme } from '@contexts/ThemeProvider';

export const LoginStyles = (theme: Theme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    // Safe Area Container
    safeContainer: {
      flex: 1,
      backgroundColor: colors.neutral,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Main Container
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.neutral,
    },

    // Keyboard Avoiding View
    keyboardAvoidingContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },

    // Card View
    card: {
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      backgroundColor: colors.neutralLight,
      padding: 20,
      borderRadius: 15,
      elevation: 4, // Shadow for Android
      shadowColor: colors.textSecondary, // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      marginHorizontal: 10,
    },

    // Title
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: colors.textPrimary, // Ensure text color matches theme
    },

    // Input Fields
    input: {
      height: 50,
      borderColor: colors.green.primary,
      borderWidth: 1,
      borderRadius: 15,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: colors.neutralLight,
      color: colors.textPrimary, // Ensure input text color matches theme
    },

    // Button
    button: {
      backgroundColor: colors.green.primary,
      paddingVertical: 12,
      borderRadius: 15,
      alignItems: 'center',
      marginTop: 10,
    },

    // Button Text
    buttonText: {
      color: colors.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },

    // Text Line (e.g., "OR" or other separators)
    textline: {
      textAlign: 'center',
      marginTop: 15,
      color: colors.textSecondary, // Use secondary text color for muted text
    },

    // Register Link
    registerText: {
      textAlign: 'center',
      marginTop: 15,
      color: colors.red.primary, // Accent color for links
      fontWeight: 'bold', // Make it stand out
    },
  });
};