import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

