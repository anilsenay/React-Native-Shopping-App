import React from 'react';

const appInitialState = {
  selectedBranch: 'Nike',
  selectedType: 'featured',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BRANCH':
      return {
        ...state,
        selectedBranch: action.payload,
      };
    case 'SET_TYPE':
      return {
        ...state,
        selectedType: action.payload,
      };
    default:
      return state;
  }
};

export {appInitialState, appReducer};
