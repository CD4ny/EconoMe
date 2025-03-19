import { View, Text, Pressable } from 'react-native';
import { useTheme } from '../../contexts/ThemeProvider';
import { GlobalStyles } from '../../styles/global';
export default function Login() {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <View
      style={[
        GlobalStyles(theme).container,
        { backgroundColor: theme.colors.neutral },
      ]}
    >
      <Text style={{ color: 'black',fontSize:21 }}>asdasd</Text>
      <Pressable>
        <Text
          onPress={() => {
            toggleTheme();
            console.log("wacha");
          }}
        >
          asda
        </Text>
      </Pressable>
    </View>
  );
}
