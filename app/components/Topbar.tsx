import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../contexts/ThemeProvider';
const Topbar = () => {
  const { theme } = useTheme();
  return <StatusBar style="auto" backgroundColor={theme.colors.neutral} />;
};
export default Topbar;
