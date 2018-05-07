import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

import logo from '../../../assets/img/logo.png'
import background from '../../../assets/img/group_coffe.jpg'
import BackgroundComponent from '../../../components/BackgroundComponent'

class SlideTwo extends React.Component{
  render(){
    return (
      <View style={{ flex: 1}}>
        <BackgroundComponent source={background} />
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.textDesc}>
            Redeye cup, single origin in java plunger pot viennese extraction filter wings. 
            Steamed percolator galao.
          </Text>          
          <Text 
            style={styles.textBtn}
            onPress={() => this.props.navigation.navigate('Discover')}>
            Get Started!
          </Text>
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
    alignItems: 'center',  
    marginBottom: 200
  },
  textDesc: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 15,
    lineHeight: 27,
    marginBottom: 40
  },
  textBtn:{
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})

export default SlideTwo