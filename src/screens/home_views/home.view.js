import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import BrandsView from './brands.view';
import ProductsView from './products.view';

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BrandsView />
      <ProductsView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 50,
  },
});

export default HomeView;
