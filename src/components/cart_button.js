import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CartButton = ({type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{type === 'increment' ? '+' : '–'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 30,
    backgroundColor: '#dfe4eb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#535353',
    fontSize: 18,
  },
});

export default CartButton;
