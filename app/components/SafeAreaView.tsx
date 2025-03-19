import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface Props {
  children: ReactNode; // Define the children prop type
}

const AreaView = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default AreaView;
