import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import RightArrow from '../assets/home/right-arrow.svg';
import * as RootNavigation from '../navigation/root_navigation';
import appHook from '../hooks/app.hook';
import {products} from '../data';

const ProductCarousel = () => {
  const {useAppState} = appHook();
  const {selectedBrand, selectedType} = useAppState();

  const carouselItems = products[selectedBrand.toLowerCase()].filter(item =>
    item.type.includes(selectedType),
  );

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.card, {backgroundColor: item.backgroundColor}]}
        onPress={() => {
          RootNavigation.push('Product', {item});
        }}>
        <Text style={styles.brandText}>{item.brand.toUpperCase()}</Text>
        <Text style={styles.modelText}>{item.model.toUpperCase()}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <Image style={styles.modelImage} source={item.imageURL} />
        <RightArrow
          width={25}
          height={25}
          fill="white"
          style={styles.rightIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={250}
        itemWidth={230}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 4,
  },
  card: {
    backgroundColor: 'floralwhite',
    borderRadius: 20,
    height: 280,
    padding: 20,
    marginRight: 30,
  },
  activeText: {
    color: '#2B2B2B',
  },
  brandText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modelText: {
    color: 'white',
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceText: {
    color: 'white',
    marginTop: 5,
  },
  modelImage: {
    width: 250,
    height: 250,
    transform: [{rotate: '-28deg'}],
    marginTop: -90,
    marginLeft: -45,
  },
  rightIcon: {
    alignSelf: 'flex-end',
    marginTop: -16,
    marginRight: 4,
  },
});

export default ProductCarousel;
