import {useContext} from 'react';

import {AppContext, AppContextDispatch} from '../contexts/app.context';

const favoriteHook = () => {
  const {favoriteState} = useContext(AppContext);
  const {favoriteDispatch} = useContext(AppContextDispatch);

  const useFavoriteState = () => {
    return favoriteState;
  };

  const addToFavorite = value => {
    favoriteDispatch({
      type: 'ADD_FAVORITE',
      payload: value,
    });
  };
  const removeFavorite = value => {
    favoriteDispatch({
      type: 'DELETE_FAVORITE',
      payload: value,
    });
  };

  return {
    useFavoriteState,
    addToFavorite,
    removeFavorite,
  };
};

export default favoriteHook;
