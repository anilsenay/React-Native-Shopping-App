import {showMessage} from 'react-native-flash-message';

const favorited = () => {
  showMessage({
    message: 'Added to favorites',
    type: 'success',
  });
};

const removeFavorited = () => {
  showMessage({
    message: 'Remove from favorites',
    type: 'danger',
  });
};

const addBagMsg = number => {
  showMessage({
    message: `Item added to cart as number: ${number}`,
    type: 'success',
  });
};

const incrementMsg = number => {
  showMessage({
    message: `Item added to cart once again as number: ${number}`,
    type: 'success',
  });
};

const chooseNumberMsg = () => {
  showMessage({
    message: 'You have to choose a number to add!',
    type: 'danger',
  });
};

export {favorited, removeFavorited, addBagMsg, incrementMsg, chooseNumberMsg};
