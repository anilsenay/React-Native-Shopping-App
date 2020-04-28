import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../components/header';

const ProductView = ({item}) => {
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
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: -60, zIndex: -1}}>
        <View style={backgroundStyle} />
        <Image source={item.imageURL} style={styles.topImage} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  topImage: {
    width: 340,
    height: 340,
    marginTop: -15,
    transform: [{rotate: '-20deg'}],
  },
});

export default ProductView;
