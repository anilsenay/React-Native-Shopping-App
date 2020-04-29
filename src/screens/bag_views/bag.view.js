import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../navigation/navigation.header';
import cartHook from '../../hooks/cart.hook';

const BagView = () => {
  const {useCartState} = cartHook();
  const {items} = useCartState();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Bag" noIcons={true} itemNumber={items.length || 0} />
      <View style={styles.seperator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  seperator: {
    height: 0.7,
    width: '100%',
    marginTop: 10,
    backgroundColor: 'grey',
    opacity: 0.7,
  },
  scrollContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default BagView;
