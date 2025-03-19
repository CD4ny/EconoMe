import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from './contexts/ThemeProvider';
import { Dark, Light } from './constants/Colors';
import Login from './pages/login';
export default function App() {
  return (
    <ThemeProvider>
      <Login/>
    </ThemeProvider>
  );
}
