import React from 'react';
import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ProductCarousel = () => {
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <Carousel
        layout={'default'}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={250}

      />
    </View>
  );
};

export default ProductCarousel;
