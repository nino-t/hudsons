import React from 'react'
import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../scenes/MenuScreen'
import ShopScreen from '../scenes/ShopScreen'

export const MenuStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen
    },
    Shop: {
    	screen: ShopScreen
    }
  }
);