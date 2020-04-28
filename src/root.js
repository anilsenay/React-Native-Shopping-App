import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigation/root_navigation';
import {GlobalNavigator} from './navigation/navigator';
import {AppProvider} from './contexts/app.context';

//screens
import Home from './screens/home.screen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <AppProvider>
      <NavigationContainer ref={navigationRef}>
        <GlobalNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default Root;
