import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import BottomNavBar from './src/navigation/BottomNavBar';

function App() {

  return (
    <SafeAreaProvider>
      <BottomNavBar />
    </SafeAreaProvider>
  );
}


export default App;
