import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../../navigation/navigation.header';
import cartHook from '../../hooks/cart.hook';
import BagList from './bag_list';

const BagView = () => {
  const {useCartState} = cartHook();
  const {items, total} = useCartState();

  const totalPrice = items
    .map(item => item.price * item.piece)
    .reduce((a, b) => a + b, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Bag" noIcons={true} itemNumber={total || 0} />
      <View style={styles.seperator} />
      <BagList bagItems={items} />
      <View style={styles.total_view}>
        <View style={[styles.seperator, {marginTop: 0}]} />
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.total_price}>
            Checkout {Math.round(totalPrice * 100) / 100} TL
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#f4f4f4',
    marginTop: 6,
  },
  scrollContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  total_view: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  checkoutBtn: {
    height: 45,
    backgroundColor: '#FA3D67',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 12,
  },
  total_price: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BagView;
