import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import SplashScreen from './src/scenes/SplashScreen'
import SwiperScreen from './src/scenes/SwiperScreen'
import DiscoverScreen from './src/scenes/DiscoverScreen'
import DiscoverInputScreen from './src/scenes/DiscoverInputScreen'
import MainScreen from "./src/scenes/Main";

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
  SwiperScreen: {
    screen: SwiperScreen,
  },
  Discover: {
    screen: DiscoverScreen,
  },
  DiscoverInput: {
    screen: DiscoverInputScreen,
  },
  Main: {
    screen: MainScreen
  },
},
{
  initialRouteName: 'SplashScreen',
  headerMode: 'none'
});