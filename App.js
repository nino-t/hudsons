import React from 'react';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './src/scenes/SplashScreen'
import SwiperScreen from './src/scenes/SwiperScreen'
import DiscoverScreen from './src/scenes/DiscoverScreen'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    SwiperScreen: {
      screen: SwiperScreen,
    },
    Discover: {
      screen: DiscoverScreen,
    }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'
  }
);