import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NewIcon from '../assets/home/new.svg';

const ItemBox = ({data}) => {
  return (
    <View style={styles.container}>
      {data.type.includes('new') && (
        <NewIcon width={50} height={50} fill="#F7446B" style={styles.newIcon} />
      )}
      <Image style={styles.modelImage} source={data.imageURL} />
      <Text style={styles.title}>
        {data.brand} {data.model}
      </Text>
      <Text style={styles.price}>{data.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
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
    transform: [{rotate: '-10deg'}],
  },
  title: {
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
