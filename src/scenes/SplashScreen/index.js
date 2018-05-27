import React from 'react'
import { StyleSheet, View, Text, Image, StatusBar, ActivityIndicator } from 'react-native';

import logo from '../../assets/img/logo.png'
import background from '../../assets/img/background_1.jpg'
import BackgroundComponent from '../../components/BackgroundComponent'

class SplashScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			time: 2
		}
	}

	componentDidMount(){
		this.interval = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.setState((prevState) => ({
			time: prevState.time - 1
		}));	

    	if (this.state.time <= 0) {
    		clearInterval(this.interval);
      		return this.props.navigation.navigate('SwiperScreen');
    	}
	}		

	render(){
		return (
			<View style={{ flex: 1}}>
		        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" />    
				<BackgroundComponent source={background} />
				<View style={styles.container}>
					<Image style={styles.logo} source={logo} />
					<ActivityIndicator size="large" color="#ecf0f1" style={styles.loading} />
					<Text style={styles.textCopyRight}>Version 1.0 | Powered by Trisno Nino</Text>
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
  },  
  textCopyRight: {
  	position: 'absolute',
  	bottom: 0,
  	color: '#ecf0f1',
  	fontSize: 12,
  	marginBottom: 20
  },
  loading: {
  	marginTop: 100
  }
})

export default SplashScreen