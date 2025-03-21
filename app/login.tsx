import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../src/contexts/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginStyles } from '../src/pages/login/styles/loginStyles';
import DarkModeToggleButton from '../src/components/DarkModeToggleButton';

export default function Login() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const styles = LoginStyles(theme);
  
  return (
    <View style={{flex:1}}>
      <View>
      
      </View>
      <SafeAreaView style={[styles.safeContainer,]}>

      <DarkModeToggleButton/>

      </SafeAreaView>
    </View>
  );

}
