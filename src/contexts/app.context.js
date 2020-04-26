import React, {useReducer} from 'react';

import PropTypes from 'prop-types';

import {appReducer, appInitialState} from '../reducers/app.reducer';

const AppContext = React.createContext();
const AppContextDispatch = React.createContext();

const AppProvider = ({children}) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);

  return (
    <AppContext.Provider
      value={{
        appState,
      }}>
      <AppContextDispatch.Provider
        value={{
          appDispatch,
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
