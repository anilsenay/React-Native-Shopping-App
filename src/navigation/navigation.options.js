import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Search from '../assets/navigation/search.png';
import Notification from '../assets/navigation/notification.png';

const options = {
  title: 'Discover',
  headerTitleStyle: {
    fontSize: 28,
    letterSpacing: 0.8,
  },
  headerTitleAlign: 'left',
  headerTransparent: true,
  headerRight: () => (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionsButton}>
        <Image source={Search} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionsButton}>
        <Image source={Notification} style={styles.icon} />
      </TouchableOpacity>
    </View>
  ),
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  optionsButton: {
    padding: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
};

export default options;
