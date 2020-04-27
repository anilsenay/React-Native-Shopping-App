import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import RightArrow from '../../assets/home/right-arrow.svg';
import ItemBox from '../../components/item_box';

const MoreView = () => {
  const moreItems = [
    {
      brand: 'NIKE',
      model: 'AIR-270',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-zoom-red.png'),
      backgroundColor: '#EAA190',
      new: true,
    },
    {
      brand: 'NIKE',
      model: 'EPIC-REACT',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-zoom.png'),
      backgroundColor: '#527AD1',
      new: false,
    },
    {
      brand: 'NIKE',
      model: 'AIR-MAX',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-airmax-huarache.png'),
      backgroundColor: '#01A7B1',
      new: false,
    },
    {
      brand: 'NIKE',
      model: 'EPIC-REACT',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-airmax.png'),
      backgroundColor: '#EAA190',
      new: true,
    },
    {
      brand: 'NIKE',
      model: 'AIR-MAX',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-zoom-green.png'),
      backgroundColor: '#01A7B1',
      new: true,
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.moreTextView}>
        <Text style={styles.moreText}>More</Text>
        <RightArrow
          width={25}
          height={25}
          fill="black"
          style={styles.rightIcon}
        />
      </TouchableOpacity>
      <ScrollView
        style={styles.itemsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {moreItems.map(item => {
          return <ItemBox data={item} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
  },
  moreTextView: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
  },
  moreText: {
    flex: 1,
    fontSize: 22,
  },
  rightIcon: {
    alignSelf: 'flex-end',
    marginTop: -16,
    marginRight: 20,
  },
  itemsContainer: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MoreView;
