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
      id: 0,
      brand: 'NIKE',
      model: 'ZOOM RED',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-zoom-red.png'),
      backgroundColor: '#EAA190',
      new: true,
    },
    {
      id: 1,
      brand: 'NIKE',
      model: 'EPIC-REACT',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-zoom.png'),
      backgroundColor: '#527AD1',
      new: false,
    },
    {
      id: 2,
      brand: 'NIKE',
      model: 'AIR-MAX',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-airmax-huarache.png'),
      backgroundColor: '#01A7B1',
      new: false,
    },
    {
      id: 3,
      brand: 'NIKE',
      model: 'AIRMAX',
      price: '129.00 TL',
      imageURL: require('../../assets/products/nike/nike-airmax.png'),
      backgroundColor: '#EAA190',
      new: true,
    },
    {
      id: 4,
      brand: 'NIKE',
      model: 'ZOOM-GREEN',
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
          return <ItemBox key={item.id} data={item} />;
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
