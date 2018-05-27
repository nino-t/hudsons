import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import logo from '../assets/img/logo.png'
import background from '../assets/img/coffe_back.jpg'
import BackgroundComponent from '../components/BackgroundComponent';

export default class SideBar extends React.Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <BackgroundComponent source={background} />
        <View style={styles.menuContainer}>
          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={logo} />
          </View>
          <Text style={styles.menuItem} onPress={() => navigation.navigate('Dashboard')}>Home</Text>
          <Text style={styles.menuItem} onPress={() => navigation.navigate('Menu')}>Menu</Text>
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
  menuItem: {
    color: '#ecf0f1',
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
});