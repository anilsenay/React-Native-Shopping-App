import {useContext} from 'react';

import {AppContext, AppContextDispatch} from '../contexts/app.context';

const cartHook = () => {
  const {cartState} = useContext(AppContext);
  const {cartDispatch} = useContext(AppContextDispatch);

  const useCartState = () => {
    return cartState;
  };

  const addToCart = value => {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: value,
    });
  };
  const removeFromCart = value => {
    cartDispatch({
      type: 'REMOVE_ITEM',
      payload: value,
    });
  };
  const incrementItem = value => {
    cartDispatch({
      type: 'INCREMENT_ITEM',
      payload: value,
    });
  };
  const decrementItem = value => {
    cartDispatch({
      type: 'DECREMENT_ITEM',
      payload: value,
    });
  };

  return {
    useCartState,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
  };
};

export default cartHook;
