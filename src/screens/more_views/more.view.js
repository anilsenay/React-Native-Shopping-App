import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/header';
import ItemBox from '../../components/item_box';

const MoreView = ({items}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={items[0].brand}
        iconColor={'black'}
        backgroundStyle={{backgroundColor: 'white'}}
        textStyle={{color: 'black'}}
        favoriteIcon={false}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {items.map(item => {
          return <ItemBox key={item.id} item={item} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 20,
    marginHorizontal: 10,
  },
});

export default MoreView;
