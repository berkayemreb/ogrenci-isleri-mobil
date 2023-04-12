import React, { useState } from 'react';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase';

const AppNavigation = () => {

  const [isLogin, setIsLogin] = useState<boolean>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIsLogin(!!user);
    } else {

    }
  });

  return isLogin ? <BottomTabs /> : <AuthStack />;
}

export default AppNavigation;
