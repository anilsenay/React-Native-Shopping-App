import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ArrowIcon from '../assets/home/right-arrow.svg';
import {FavoriteButton} from '../navigation/tabbar_icon';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <ArrowIcon width={24} height={24} fill="white" style={styles.arrowIcon} />

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
    top: 20,
    left: 10,
    transform: [{rotate: '-180deg'}],
  },
  favoriteIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
});

export default Header;
