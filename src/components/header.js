import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ArrowIcon from '../assets/home/right-arrow.svg';
import {FavoriteButton, FavoritedButton} from '../navigation/tabbar_icon';
import * as RootNavigation from '../navigation/root_navigation';
import favoriteHook from '../hooks/favorite.hook';
import {favorited, removeFavorited} from '../consts/popup_messages';

const Header = ({
  title,
  favoriteIcon,
  iconColor,
  backgroundStyle,
  textStyle,
  id,
}) => {
  const {useFavoriteState, addToFavorite, removeFavorite} = favoriteHook();
  const {items} = useFavoriteState();

  const isFavorite = items.includes(id);

  const favoriteEvent = () => {
    if (isFavorite) {
      removeFavorite(id);
      removeFavorited(); // pop up message
    } else {
      addToFavorite(id);
      favorited(); // pop up message
    }
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <TouchableOpacity
        style={styles.arrowIcon}
        onPress={() => RootNavigation.pop(1)}>
        <ArrowIcon width={24} height={24} fill={iconColor} />
      </TouchableOpacity>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {favoriteIcon &&
        (isFavorite ? (
          <FavoritedButton
            width={24}
            height={24}
            fill={iconColor}
            style={styles.favoriteIcon}
            onPress={favoriteEvent}
          />
        ) : (
          <FavoriteButton
            width={24}
            height={24}
            fill={iconColor}
            style={styles.favoriteIcon}
            onPress={favoriteEvent}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    width: '100%',
  },
  title: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
    letterSpacing: 0.8,
  },
  arrowIcon: {
    position: 'absolute',
    padding: 10,
    top: 10,
    left: 5,
    transform: [{rotate: '-180deg'}],
  },
  favoriteIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
});

export default Header;
