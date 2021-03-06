import React from 'react'
import Swiper from 'react-native-swiper'
import { StyleSheet, View, Text } from 'react-native'

import SlideOne from './components/SlideOne'
import SlideTwo from './components/SlideTwo'
import SlideThree from './components/SlideThree'

class SwiperScreen extends React.Component{
  render(){
    return (
      <Swiper 
        showsButtons={false}
        dot={(
          <View style={{
              backgroundColor:'rgba(245, 246, 250,0.5)', 
              width: 8, 
              height: 8,
              borderRadius: 4, 
              marginLeft: 3, 
              marginRight: 3, 
              marginTop: 3, 
              marginBottom: 3,
            }} />
        )}
        activeDot={(
          <View style={{
              backgroundColor:'rgba(245, 246, 250,1.0)', 
              width: 8, 
              height: 8,
              borderRadius: 4, 
              marginLeft: 3, 
              marginRight: 3, 
              marginTop: 3, 
              marginBottom: 3,
            }} />
        )}>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Swiper>
    )
  }
}

export default SwiperScreen