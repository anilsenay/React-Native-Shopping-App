import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CartButton from './cart_button';
import cartHook from '../hooks/cart.hook';

const CartItem = ({piece, item, number}) => {
  const {incrementItem, decrementItem} = cartHook();

  const incrementEvent = () => {
    incrementItem({id: item.id, number: number});
  };

  const decrementEvent = () => {
    decrementItem({id: item.id, number: number});
  };

  if (piece === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.modelImage} source={item.imageURL} />
        <Text style={styles.numberStyle}>{number}</Text>
      </View>
      <View style={styles.details}>
        <Text>{item.model.toUpperCase()}</Text>
        <Text style={styles.priceText}>{item.price} TL</Text>
        <View style={styles.buttonView}>
          <CartButton type="decrement" onPress={decrementEvent} />
          <Text style={styles.pieceText}>{piece}</Text>
          <CartButton type="increment" onPress={incrementEvent} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 110,
    width: '100%',
    marginVertical: 20,
    marginLeft: 20,
  },
  imageContainer: {
    width: 110,
    backgroundColor: '#dfe4eb',
    borderRadius: 30,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 50,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 6,
  },
  numberStyle: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    fontWeight: 'bold',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  pieceText: {
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  modelImage: {
    marginTop: -30,
    marginLeft: -5,
    width: 140,
    height: 140,
    transform: [{rotate: '-32deg'}, {rotateY: '180deg'}],
  },
});

export default CartItem;
