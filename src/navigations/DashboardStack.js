import React from 'react'
import { StackNavigator } from 'react-navigation';

import DashboardScreen from '../scenes/DashboardScreen'

export const DashboardStack = StackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    }
  }
);
