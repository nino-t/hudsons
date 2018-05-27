import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class FoodItem extends React.Component{
	render(){
		const { food } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.wrapHead}>
					<Text style={styles.titleText}>{food.name}</Text>
					<Text style={styles.subTitleText}>Hudsons Coffe</Text>
				</View>
				<View style={styles.wrapThumbnail}>
					<Image 
						style={styles.thumbnailFood} 
						source={{uri: food.thumbnail}} />
				</View>				
				<View style={styles.wrapContent}>
					<View>
						<Text style={styles.textPrice}>$ {food.price}</Text>
					</View>
					<View></View>					
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '48%',
		height: 280,
		elevation: 1,
	    margin: 3,
	    padding: 10,
	    backgroundColor: '#fff'
	},
	wrapHead: {
		height: '20%'
	},
	wrapThumbnail:{
		height: '60%'
	},
	wrapContent: {
		height: '20%',
		flexDirection: 'row'
	},
	thumbnailFood: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
	titleText: {
		color: '#4b4b4b',
		fontSize: 20,
		fontWeight: 'bold'
	},
	subTitleText: {
		color: '#95a5a6',
		fontWeight: 'bold'
	},
	textPrice: {
		color: '#16a085',
		fontWeight: 'bold',
		fontSize: 20
	}
})

export default FoodItem