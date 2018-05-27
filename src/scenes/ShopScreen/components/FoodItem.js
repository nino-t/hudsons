import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FoodItem extends React.Component{
	strLimit(text){
		if(text.length > 20){
			text = text.substring(0,20);
		}

		return text
	}

	render(){
		const { food } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.wrapHead}>
					<Text style={styles.titleText}>{this.strLimit(food.name)}</Text>
					<Text style={styles.subTitleText}>Hudsons Coffe</Text>
				</View>
				<View style={styles.wrapThumbnail}>
					<Image 
						style={styles.thumbnailFood} 
						source={{uri: food.thumbnail}} />
				</View>				
				<View style={styles.wrapContent}>
					<View style={{ width: '50%' }}>
						<Text style={styles.textPrice}>$ {food.price}</Text>
					</View>
					<View style={{ width: '50%' }}>
						<Icon 
					    	name="heart" 
					    	size={20} 
					    	color="#fc5c65"
					    	style={styles.favoriteIcon} />
					</View>					
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '47%',
		height: 280,
		elevation: 1,
	    margin: 5,
	    padding: 10,
	    backgroundColor: '#fff'
	},
	wrapHead: {
		height: '30%'
	},
	wrapThumbnail:{
		height: '60%'
	},
	wrapContent: {
		height: '10%',
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
		fontSize: 20,
		letterSpacing: 0
	},
	favoriteIcon:{
		marginTop: 5,
		position: 'absolute',
		bottom: 0,
		right: 0
	}
})

export default FoodItem