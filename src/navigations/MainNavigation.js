import React from 'react'
import { DrawerNavigator } from "react-navigation";

import Sidebar from './Sidebar'
import {MenuStack} from './MenuStack'
import {DashboardStack} from './DashboardStack'

export const MainNavigation = DrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStack
    },
    Menu: {
      screen: MenuStack
    },
  },
  {
    initialRouteName: "Dashboard",
    contentComponent: ({ navigation }) => <Sidebar navigation={navigation} />
  }
);