import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {options, productOptions} from './navigation.options';

import Home from '../screens/home.screen';
import BagScreen from '../screens/bag.screen';
import FavoritesScreen from '../screens/favorites.screen';
import AccountScreen from '../screens/account.screen';
import ProductScreen from '../screens/product.screen';
import MoreScreen from '../screens/more.screen';

import {
  FavoriteButton,
  HomeButton,
  BagButton,
  AccountButton,
} from './tabbar_icon';

const Stack = createStackNavigator();

export const GlobalNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabScreens} options={options} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

function MyTabBar({state, descriptors, navigation}) {
  const tabBarStyle = {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  };
  const iconStyle = {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={tabBarStyle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={label} onPress={onPress} style={iconStyle}>
            {label === 'Home' && (
              <HomeButton
                height={24}
                width={24}
                fill={isFocused ? '#CB4D6A' : 'black'}
              />
            )}
            {label === 'Favorites' && (
              <FavoriteButton
                height={24}
                width={24}
                fill={isFocused ? '#CB4D6A' : 'black'}
              />
            )}
            {label === 'Bag' && (
              <BagButton
                height={28}
                width={28}
                fill={isFocused ? '#CB4D6A' : 'black'}
              />
            )}
            {label === 'Account' && (
              <AccountButton
                height={22}
                width={22}
                fill={isFocused ? '#CB4D6A' : 'black'}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
