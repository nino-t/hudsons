import React from 'react'
import { StackNavigator } from 'react-navigation';

import MenuScreen from '../scenes/MenuScreen'

export const MenuStack = StackNavigator(
  {
    Menu: {
      screen: MenuScreen
    }
  }
);