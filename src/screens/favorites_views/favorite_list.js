import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ItemBox from '../../components/item_box';
import {allItems} from '../../data';

const FavoriteList = ({items}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      {items.map(id => {
        const itemData = allItems.filter(x => x.id === id)[0];
        return <ItemBox key={itemData.id} item={itemData} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 15,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 20,
    marginHorizontal: 10,
  },
});

export default FavoriteList;
