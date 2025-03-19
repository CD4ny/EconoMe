import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from './contexts/ThemeProvider';
import { Dark } from './constants/Colors';
export default function App() {
  return (
    <ThemeProvider>
      <View style={GlobalStyles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="inverted" backgroundColor={Dark.neutral} />
      </View>
    </ThemeProvider>
  );
}
