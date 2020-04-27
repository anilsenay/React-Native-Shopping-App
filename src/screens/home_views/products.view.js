import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProductCarousel from '../../components/product_carousel';

const ProductsView = () => {
  const [activeID, setActiveID] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <Text
          style={
            activeID === 0
              ? [styles.filterText, styles.activeText]
              : styles.filterText
          }
          onPress={() => setActiveID(0)}>
          Upcoming
        </Text>
        <Text
          style={
            activeID === 1
              ? [styles.filterText, {marginBottom: -20}, styles.activeText]
              : [styles.filterText, {marginBottom: -20}]
          }
          onPress={() => setActiveID(1)}>
          Featured
        </Text>
        <Text
          style={
            activeID === 2
              ? [styles.filterText, styles.activeText]
              : styles.filterText
          }
          onPress={() => setActiveID(2)}>
          New
        </Text>
      </View>
      <View style={styles.products}>
        <ProductCarousel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'row',
    marginTop: 20,
  },
  filters: {
    marginTop: 45,
    marginRight: -25,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
  },
  products: {
    flex: 6,
  },
  filterText: {
    padding: 5,
    fontWeight: 'bold',
    color: '#BFBFBF',
    marginLeft: 0,
    marginRight: 20,
    transform: [{rotate: '-90deg'}],
  },
  activeText: {
    color: '#2B2B2B',
  },
});

export default ProductsView;
