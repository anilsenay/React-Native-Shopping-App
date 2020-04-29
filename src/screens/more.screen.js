import React from 'react';
import {View, Text} from 'react-native';
import MoreView from './more_views/more.view';

const MoreScreen = ({route}) => {
  return <MoreView items={route.params?.moreItems} />;
};

export default MoreScreen;
