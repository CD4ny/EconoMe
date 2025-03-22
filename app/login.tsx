import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { useTheme } from '../src/contexts/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginStyles } from '../src/pages/login/styles/loginStyles';
import { Image } from 'expo-image';

export default function Login() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const styles = LoginStyles(theme);
  const colors = theme.colors;
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.card}>

          <Image
            source={require('@assets/icon.svg')}
            contentFit='cover'
            style={{
              tintColor: colors.green.primary,
              width: 200,
              height: 200,
            }}
          ></Image>

        {/* <Text style={styles.title}>Login</Text> */}
        <TextInput
          placeholderTextColor={colors.text}
          textContentType="username"
          placeholder={'User name or Email'}
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={colors.text}
          textContentType="password"
          placeholder={'Password'}
          secureTextEntry
          style={styles.input}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            Alert.alert('asdasd', 'asdasd');
          }}
        >
          <Text style={styles.buttonText}>Autenticarse</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('asdasd', 'asdasd');
          }}
        >
          <Text style={styles.textline}>No te has registrado? </Text>
          <Text style={styles.registerText}>
            <Text style={styles.textline}> toca </Text>
            aqui
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
