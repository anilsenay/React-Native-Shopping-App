import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation/root_navigation';
import {GlobalNavigator} from './navigation/navigator';
import {AppProvider} from './contexts/app.context';
import PopUp from './components/flash_message';

const Root = () => {
  return (
    <AppProvider>
      <NavigationContainer ref={navigationRef}>
        <GlobalNavigator />
        <PopUp />
      </NavigationContainer>
    </AppProvider>
  );
};

export default Root;
