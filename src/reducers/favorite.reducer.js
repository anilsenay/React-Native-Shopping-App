const favoriteInitialState = {
  items: [],
  total: 0,
};

const favoriteReducer = (state, action) => {
  console.log('state ' + state);
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        items: state.items.concat(action.payload),
        total: state.total + 1,
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - 1,
      };
    default:
      return state;
  }
};

export {favoriteInitialState, favoriteReducer};
