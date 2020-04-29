import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ArrowIcon from '../assets/home/right-arrow.svg';
import {FavoriteButton} from '../navigation/tabbar_icon';
import * as RootNavigation from '../navigation/root_navigation';
import Search from '../assets/navigation/search.png';
import Notification from '../assets/navigation/notification.png';

const Header = ({title, noIcons, itemNumber}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {!noIcons && (
        <View style={styles.icons}>
          <TouchableOpacity style={styles.rightPadding}>
            <Image source={Search} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightPadding}>
            <Image source={Notification} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
      {itemNumber >= 0 && (
        <Text style={[styles.rightPadding, styles.rightText]}>
          Total {itemNumber} items
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    padding: 10,
    paddingLeft: 15,
  },
  title: {
    flex: 1,
    fontSize: 28,
    letterSpacing: 0.8,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  rightPadding: {
    padding: 12,
    paddingBottom: 0,
  },
  rightText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
