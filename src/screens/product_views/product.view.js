import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../components/header';
import PhotosView from './photos.view';
import {images} from '../../data';

import SizesView from './sizes_view';

const ProductView = ({item}) => {
  const [showMore, setShowMore] = useState(false);
  const [imageID, setImageID] = useState(0);

  const itemImages = images[item.id];

  const backgroundStyle = {
    position: 'absolute',
    marginTop: -230,
    marginLeft: -30,
    height: 500,
    width: 500,
    borderRadius: 300,
    backgroundColor: item.backgroundColor,
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={item.brand}
        favoriteIcon={true}
        iconColor="white"
        id={item.id}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}>
        <View style={backgroundStyle} />
        <Image
          source={{uri: itemImages[imageID]}}
          style={
            imageID === 0
              ? [styles.topImage, styles.imageRotate]
              : styles.topImage
          }
        />
        <PhotosView images={itemImages} setImage={setImageID} />
        <View style={styles.details}>
          <View
            style={[styles.seperator, {backgroundColor: item.backgroundColor}]}
          />
          <View style={styles.modelAndPrice}>
            <Text style={styles.modelText}>{item.model}</Text>
            <Text
              style={[styles.priceText, {borderColor: item.backgroundColor}]}>
              {item.price} TL
            </Text>
          </View>
          <Text numberOfLines={showMore ? 0 : 3} style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            gravida tortor eu augue congue ultricies. Aenean ut eros non elit
            ornare tincidunt ut ut velit. Etiam fermentum, nisi aliquet lacinia
            interdum, enim libero rutrum ipsum, ac maximus diam lectus venenatis
            diam. Maecenas tortor dui, interdum eget rutrum id, laoreet vel
            tortor.
          </Text>
          <Text
            style={styles.moreDetails}
            onPress={() => setShowMore(!showMore)}>
            {showMore ? 'LESS' : 'MORE'} DETAILS
          </Text>
          <SizesView item={item} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    marginTop: -60,
    zIndex: -1,
  },
  topImage: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    marginTop: 30,
  },
  imageRotate: {
    transform: [{rotate: '-20deg'}, {rotateY: '180deg'}],
  },
  details: {
    marginHorizontal: 15,
  },
  seperator: {
    height: 1.5,
    width: '100%',
    opacity: 0.7,
  },
  modelAndPrice: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
  },
  modelText: {
    flex: 1,
    fontSize: 23,
    fontWeight: 'bold',
  },
  priceText: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 3,
    borderRadius: 3,
  },
  description: {
    marginTop: 20,
    color: 'grey',
  },
  moreDetails: {
    marginTop: 10,
    fontSize: 14,
    textDecorationLine: 'underline',
    letterSpacing: 2,
  },
});

export default ProductView;
