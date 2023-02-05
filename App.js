import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet} from 'react-native';

import Home from './src/telas/Home';

export default function App() {
  return (
      <SafeAreaView style={estilos.tela}>
        <Home />
        <StatusBar/>
      </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  },
})