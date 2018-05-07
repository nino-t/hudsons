import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

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
		position: 'absolute',
		right: 20, 
		bottom: 20,
  }
})

export default SplashScreen