import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import background from '../../assets/img/coffe_discover.jpg'
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
			          Discovery Coffee began with a love of coffee and has 
			          turned into a passionate exploration of what it takes to make only the best.
			        </Text>

			        <View style={styles.wrapFooter}>
				        <Text style={styles.textFooter}>
				        	Want to skip discover?   
				        </Text>
			        	<Text style={[styles.textFooter, { marginLeft: 5 }]}
			        		onPress={() => this.props.navigation.navigate('Main')}>
			        		 click here
			        	</Text>				        
			        </View>
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
    color: '#ecf0f1',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  textDesc: {
    color: '#ecf0f1',
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 15,
    lineHeight: 25,
    marginTop: 40,
  },    
  wrapFooter: {
  	width: '100%',
	position: 'absolute',
	bottom: 0,
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: 30,
	flexDirection: 'row',
  },
  textFooter: {
    color: '#ecf0f1',
    fontSize: 15,
  }
})

export default DiscoverInputScreen