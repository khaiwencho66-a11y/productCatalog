import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
