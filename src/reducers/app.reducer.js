const appInitialState = {
  selectedBrand: 'Nike',
  selectedType: 'featured',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BRAND':
      return {
        ...state,
        selectedBrand: action.payload,
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
