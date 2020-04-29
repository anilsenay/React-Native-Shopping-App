const cartInitialState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  const {id, number} = action.payload;
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat(action.payload),
        total: state.total + 1,
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - 1,
      };
    case 'INCREMENT_ITEM':
      state.items.find(x => x.id === id && x.number === number).piece++;
      return {
        ...state,
        items: [...state.items],
        total: state.total + 1,
      };
    case 'DECREMENT_ITEM':
      if (state.items.find(x => x.id === id && x.number === number) !== 1) {
        state.items.find(x => x.id === id && x.number === number).piece--;
      } else if (
        state.items.find(x => x.id === id && x.number === number) === 1
      ) {
        const index = state.items.find(x => x.id === id && x.number === number);
        state.items.splice(index, 1);
      }
      return {
        ...state,
        items: [...state.items],
        total: state.total - 1,
      };
    default:
      return state;
  }
};

export {cartInitialState, cartReducer};
