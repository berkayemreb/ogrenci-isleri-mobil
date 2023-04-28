import React from 'react';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";


const AppNavigation = () => {

  const user: any = useSelector<RootState>(state => state.user.user);

  return user.uid ? <BottomTabs /> : <AuthStack />;
}

export default AppNavigation;
