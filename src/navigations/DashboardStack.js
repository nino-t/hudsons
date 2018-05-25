import React from 'react'
import { createStackNavigator } from 'react-navigation';

import DashboardScreen from '../scenes/DashboardScreen'

export const DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    }
  }
);
