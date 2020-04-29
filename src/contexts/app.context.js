import React, {useReducer} from 'react';

import PropTypes from 'prop-types';

import {appReducer, appInitialState} from '../reducers/app.reducer';
import {cartReducer, cartInitialState} from '../reducers/cart.reducer';

const AppContext = React.createContext();
const AppContextDispatch = React.createContext();

const AppProvider = ({children}) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <AppContext.Provider
      value={{
        appState,
        cartState,
      }}>
      <AppContextDispatch.Provider
        value={{
          appDispatch,
          cartDispatch,
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
