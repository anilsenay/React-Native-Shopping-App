import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {brands} from '../../data';
import appHook from '../../hooks/app.hook';

const BrandsView = () => {
  const {useAppState, changeBrand} = appHook();
  const {selectedBrand} = useAppState();

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {brands.map(item => {
        return (
          <Text
            key={item.id}
            style={
              item.name.toLowerCase() === selectedBrand.toLowerCase()
                ? [styles.brands, styles.brandActive]
                : styles.brands
            }
            onPress={() => changeBrand(item.name)}>
            {item.name}
          </Text>
        );
      })}
      <Text style={styles.brands} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  brands: {
    color: '#BCBCBC',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 24,
    marginRight: 2,
  },
  brandActive: {
    color: 'black',
    borderBottomWidth: 3,
    paddingHorizontal: 6,
    borderColor: '#F2F3F7',
  },
});

export default BrandsView;
