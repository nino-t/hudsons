import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

import Discover from './components/Discover'
import SwiperComponent from './components/SwiperComponent'

class DiscoverScreen extends React.Component{
	render(){
		return (
			<View style={{ flex: 1, flexDirection: 'column'}}>
				<SwiperComponent />
				<Discover {...this.props} />
			</View>
		)
	}
}

export default DiscoverScreen