import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

