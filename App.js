import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import SplashScreen from './src/scenes/SplashScreen'
import SwiperScreen from './src/scenes/SwiperScreen'
import DiscoverScreen from './src/scenes/DiscoverScreen'
import DiscoverInputScreen from './src/scenes/DiscoverInputScreen'
import DashboardScreen from './src/scenes/Dashboard'

import logo from './src/assets/img/logo.png'
import background from './src/assets/img/coffe_back.jpg'
import BackgroundComponent from './src/components/BackgroundComponent'

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
      screen: createDrawerNavigator({
        Dashboard: { 
          screen: DashboardScreen
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
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <BackgroundComponent source={background} />
        <View style={styles.menuContainer}>
          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={logo} />
          </View>
          <Text style={styles.menuItem} onPress={() => navigation.navigate('Dashboard') }>Home</Text>
          <Text style={styles.menuItem}>Menu</Text>
          <Text style={styles.menuItem}>Favorites</Text>
          <Text style={styles.menuItem}>Shop</Text>
          <Text style={styles.menuItem}>Profile</Text>
          <Text style={styles.menuItem}>Settings</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  menuItem:{
    color: '#fff',
    fontSize: 17,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
  },
  logo: {
    width: 140,
    height: 85
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  }
})