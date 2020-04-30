import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NewIcon from '../assets/home/new.svg';
import * as RootNavigation from '../navigation/root_navigation';

const ItemBox = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        RootNavigation.push('Product', {item});
      }}>
      {item.type.includes('new') && (
        <NewIcon width={50} height={50} fill="#F7446B" style={styles.newIcon} />
      )}
      <Image style={styles.modelImage} source={item.imageURL} />
      <Text numberOfLines={2} style={styles.title}>
        {item.brand} {item.model}
      </Text>
      <Text style={styles.price}>{item.price} TL</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 150,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  modelImage: {
    marginTop: -15,
    marginBottom: -10,
    width: 140,
    height: 140,
    transform: [{rotate: '-12deg'}, {rotateY: '180deg'}],
  },
  title: {
    marginHorizontal: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 5,
    fontSize: 12,
  },
  newIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    transform: [{rotate: '-90deg'}],
  },
});

export default ItemBox;
