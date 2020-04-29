import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import BrandsView from './brands.view';
import ProductsView from './products.view';
import MoreView from './more.view';
import Header from '../../navigation/navigation.header';

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Discover" />
        <BrandsView />
        <ProductsView />
        <MoreView />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default HomeView;
