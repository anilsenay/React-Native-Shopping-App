import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import options from './navigation/navigation.options';

//screens
import Home from './screens/home.screen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
