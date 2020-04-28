import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ArrowIcon from '../assets/home/right-arrow.svg';
import {FavoriteButton} from '../navigation/tabbar_icon';
import * as RootNavigation from '../navigation/root_navigation';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowIcon}
        onPress={() => RootNavigation.pop(1)}>
        <ArrowIcon width={24} height={24} fill="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <FavoriteButton
        width={24}
        height={24}
        fill="white"
        style={styles.favoriteIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'center',
    height: 60,
    width: '100%',
  },
  title: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
    letterSpacing: 0.8,
  },
  arrowIcon: {
    position: 'absolute',
    padding: 10,
    top: 10,
    left: 0,
    transform: [{rotate: '-180deg'}],
  },
  favoriteIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
});

export default Header;
