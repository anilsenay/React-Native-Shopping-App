import React from 'react';
import FlashMessage from 'react-native-flash-message';

const PopUp = () => {
  const style = {alignItems: 'center', justifyContent: 'center'};
  const titleStyle = {fontSize: 16};
  return (
    <FlashMessage position="bottom" style={style} titleStyle={titleStyle} />
  );
};

export default PopUp;
