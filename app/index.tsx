import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import DarkModeToggleButton from '../src/components/DarkModeToggleButton';

export default function Index() {
  return (
    <View style={{}}>

      <DarkModeToggleButton/>
      <Link href="/login" style={{}}>
        Go to About screen
      </Link>
      </View>
     
  );
}
