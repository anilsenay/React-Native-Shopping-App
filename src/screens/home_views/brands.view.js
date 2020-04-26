import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {brands} from '../../data';

const BrandsView = () => {
  const [activeID, setActiveID] = useState(0);
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
              item.id === activeID
                ? [styles.brands, styles.brandActive]
                : styles.brands
            }
            onPress={() => setActiveID(item.id)}>
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
    height: 0,
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
