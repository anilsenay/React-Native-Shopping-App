import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PhotosView = ({images, setImage}) => {
  return (
    <View style={styles.container}>
      {images.map(image => {
        return (
          <TouchableOpacity
            key={image}
            style={styles.photoContainer}
            onPress={() => setImage(images.indexOf(image))}>
            <Image style={{width: 50, height: 50}} source={{uri: image}} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  photoContainer: {
    width: 75,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginRight: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default PhotosView;
