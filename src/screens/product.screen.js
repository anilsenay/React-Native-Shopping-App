import React from 'react';
import {View, Text} from 'react-native';
import ProductView from './product_views/product.view';

const ProductScreen = ({route, navigation}) => {
  return <ProductView item={route.params?.item} />;
};

export default ProductScreen;
