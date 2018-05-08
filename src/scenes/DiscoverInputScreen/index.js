import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import background from '../../assets/img/coffe.jpg'
import BackgroundComponent from '../../components/BackgroundComponent'
import TextInputComponent from '../../components/TextInputComponent'

class DiscoverInputScreen extends React.Component{
	render(){
		return (
			<View style={{ flex: 1}}>
				<BackgroundComponent source={background} />
				<View style={styles.container}>
					<Text style={styles.textTitle}>DISCOVER</Text>
					<TextInputComponent
						placeholder="Find your favorite breakfast & coffee..."
						icon={<Icon name="search" size={20} color="#bdc3c7" />} />
			        <Text style={styles.textDesc}>
			          Redeye cup, single origin in java plunger pot viennese extraction filter wings. 
			          Steamed percolator galAo siphon.
			        </Text>

			        <Text style={styles.textFooter}>
			        	Want to skip Discover? Click here
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
  textTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  textDesc: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 15,
    lineHeight: 25,
    marginTop: 40,
  },    
  textFooter: {
  	width: '100%',
	position: 'absolute',
	bottom: 0,
	justifyContent: 'center',
	alignItems: 'center',
    color: '#fff',
    textAlign: 'center',	
    fontSize: 15,
    marginBottom: 30
  }
})

export default DiscoverInputScreen