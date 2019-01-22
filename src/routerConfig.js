import { View, Text } from 'react-native';
import React from 'react';
import Home from './pages/home';
import Content from './pages/content';
import BooKContent from './pages/library/booKContent';


const stackConfig = {
  Home: { screen: Home },
  Content: { screen: Content },
  BooKContent: { screen: BooKContent },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    // header: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#000000',
    },
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0,
      height: 30
    },
  },
  mode: 'card',
  headerMode: 'float',
};

export {
  stackConfig,
  stackNavigatorConfig,
};
