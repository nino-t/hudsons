import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

import logo from '../../../assets/img/logo.png'
import background from '../../../assets/img/cafe_1.jpg'
import BackgroundComponent from '../../../components/BackgroundComponent'

class SlideOne extends React.Component{
  render(){
    return (
      <View style={{ flex: 1}}>
        <BackgroundComponent source={background} />
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SlideOne