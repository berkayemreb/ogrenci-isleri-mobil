import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/Login';
import HomeScreen from '../pages/Home';
import { RootStackParamList } from './types';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {

  const [isLogin, setIsLogin] = useState<boolean>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIsLogin(!!user);
    } else {

    }
  });
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? <Stack.Screen name='Home' component={HomeScreen} /> : <Stack.Screen name='Login' component={LoginScreen} />}
    </Stack.Navigator>
  )
}

export default AppNavigation;
