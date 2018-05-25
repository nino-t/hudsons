import React from 'react'
import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../scenes/MenuScreen'

export const MenuStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen
    }
  }
);