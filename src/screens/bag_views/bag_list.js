import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {allItems} from '../../data';
import CartItem from '../../components/cart_item_box';

const BagList = ({bagItems}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {bagItems.map(item => {
        console.log(item);
        const piece = item.piece;
        const itemData = allItems.filter(x => x.id === item.id)[0];
        console.log(itemData);
        return (
          <CartItem
            key={item.id + item.number}
            item={itemData}
            number={item.number}
            piece={piece}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    marginBottom: 70,
  },
  card: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
  },
  modelImage: {
    marginTop: -15,
    marginBottom: -10,
    width: 140,
    height: 140,
    transform: [{rotate: '-12deg'}, {rotateY: '180deg'}],
  },
});

export default BagList;
