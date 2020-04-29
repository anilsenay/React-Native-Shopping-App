import {useContext} from 'react';

import {AppContext, AppContextDispatch} from '../contexts/app.context';

const appHook = () => {
  const {appState} = useContext(AppContext);
  const {appDispatch} = useContext(AppContextDispatch);

  const useAppState = () => {
    return appState;
  };

  const changeBrand = value => {
    appDispatch({
      type: 'SET_BRAND',
      payload: value,
    });
  };
  const changeType = value => {
    appDispatch({
      type: 'SET_TYPE',
      payload: value,
    });
  };

  return {
    useAppState,
    changeBrand,
    changeType,
  };
};

export default appHook;
