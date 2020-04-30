import React, {useReducer} from 'react';

import PropTypes from 'prop-types';

import {appReducer, appInitialState} from '../reducers/app.reducer';
import {cartReducer, cartInitialState} from '../reducers/cart.reducer';
import {
  favoriteReducer,
  favoriteInitialState,
} from '../reducers/favorite.reducer';

const AppContext = React.createContext();
const AppContextDispatch = React.createContext();

const AppProvider = ({children}) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  const [favoriteState, favoriteDispatch] = useReducer(
    favoriteReducer,
    favoriteInitialState,
  );

  return (
    <AppContext.Provider
      value={{
        appState,
        cartState,
        favoriteState,
      }}>
      <AppContextDispatch.Provider
        value={{
          appDispatch,
          cartDispatch,
          favoriteDispatch,
        }}>
        {children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {AppProvider, AppContext, AppContextDispatch};
