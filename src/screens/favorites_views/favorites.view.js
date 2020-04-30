import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../navigation/navigation.header';
import favoriteHook from '../../hooks/favorite.hook';
import FavoriteList from './favorite_list';

const FavoritesView = () => {
  const {useFavoriteState} = favoriteHook();
  const {items} = useFavoriteState();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" />
      <FavoriteList items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    marginTop: 15,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default FavoritesView;
