import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';

const ProductView = ({item}) => {
  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState();

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
      <Header title={item.brand} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}>
        <View style={backgroundStyle} />
        <Image source={item.imageURL} style={styles.topImage} />

        <View style={styles.details}>
          <View
            style={[styles.seperator, {backgroundColor: item.backgroundColor}]}
          />
          <View style={styles.modelAndPrice}>
            <Text style={styles.modelText}>{item.model}</Text>
            <Text
              style={[styles.priceText, {borderColor: item.backgroundColor}]}>
              {item.price}
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
          <View style={styles.sizesView}>
            <Text style={styles.sizeText}>Size</Text>
            <ScrollView
              style={styles.sizeScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {item.sizes.map(size => {
                return (
                  <TouchableOpacity
                    style={
                      selected === size
                        ? [styles.sizeBox, {backgroundColor: 'black'}]
                        : styles.sizeBox
                    }
                    onPress={() => setSelected(size)}>
                    <Text
                      style={
                        selected === size
                          ? [styles.sizeNumber, {color: 'white'}]
                          : styles.sizeNumber
                      }>
                      {size}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>ADD TO BAG</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scrollViewStyle: {
    marginTop: -60,
    zIndex: -1,
  },
  topImage: {
    width: 340,
    height: 340,
    marginTop: -15,
    transform: [{rotate: '-20deg'}],
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
  sizesView: {
    marginVertical: 30,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizeScroll: {
    height: 70,
    width: '100%',
  },
  sizeBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
  },
  sizeNumber: {
    fontSize: 18,
  },
  addButton: {
    height: 50,
    backgroundColor: '#fa3d67',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 30,
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductView;
