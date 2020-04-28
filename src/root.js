import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigation/root_navigation';
import {GlobalNavigator} from './navigation/navigator';

//screens
import Home from './screens/home.screen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <GlobalNavigator />
    </NavigationContainer>
  );
};

export default Root;
