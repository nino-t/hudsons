import React from 'react';
import { View, Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import SplashScreen from './src/scenes/SplashScreen'
import SwiperScreen from './src/scenes/SwiperScreen'
import DiscoverScreen from './src/scenes/DiscoverScreen'
import DiscoverInputScreen from './src/scenes/DiscoverInputScreen'
import DashboardScreen from './src/scenes/Dashboard'

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const RootStack = StackNavigator({
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
      screen: DrawerNavigator({
        Dashboard: { 
          screen: DashboardScreen, 
          navigationOptions: ({ navigation }) => ({ 
            headerStyle: { backgroundColor: '#344147' },
            headerTintColor: '#fff'
          })
        }
      },
      {
        contentComponent: ({ navigation }) => <SideBar navigation={navigation} />
      })    
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'
  }    
);

class SideBar extends React.Component {
  render(){
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}