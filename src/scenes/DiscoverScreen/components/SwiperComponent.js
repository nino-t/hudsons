import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper'

import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'


class SwiperComponent extends React.Component{
  render(){
    return (
      <View style={{ flex: 1}}>
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
          )}
          autoplay={true}>
          <SlideOne />
          <SlideTwo />
          <SlideThree />
        </Swiper>
      </View>
    )
  }
}

export default SwiperComponent