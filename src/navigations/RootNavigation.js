import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from '../scenes/SplashScreen'
import SwiperScreen from '../scenes/SwiperScreen'
import DiscoverScreen from '../scenes/DiscoverScreen'
import DiscoverInputScreen from '../scenes/DiscoverInputScreen'
import {MainNavigation} from "../navigations/MainNavigation";

export const RootNavigation = createStackNavigator({
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
    screen: MainNavigation
  },
},
{
  initialRouteName: 'SplashScreen',
  headerMode: 'none'
})