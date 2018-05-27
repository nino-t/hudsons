import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

class Discover extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>DISCOVER</Text>
        <Text style={styles.textDesc}>
          Discovery Coffee began with a love of coffee and has 
          turned into a passionate exploration of what it takes to make only the best.
        </Text>
        <Text style={styles.btnBottom} onPress={() => this.props.navigation.navigate('DiscoverInput')}>
          Get Started!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#000',
    paddingTop: 50
  },
  textTitle: {
    color: '#16a085',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40

  },
  textDesc: {
    color: '#7f8c8d',
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 40
  },  
  btnBottom: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#16a085',
    color: '#ecf0f1',
    fontSize: 16,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default Discover