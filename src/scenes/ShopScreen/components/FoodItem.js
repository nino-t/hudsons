import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class FoodItem extends React.Component{
	render(){
		const { food } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.wrapHead}>
					<Text>{food.name}</Text>
				</View>
				<View style={styles.wrapThumbnail}>
					<Image 
						style={styles.thumbnailFood} 
						source={{uri: food.thumbnail}} />
				</View>				
				<View style={styles.wrapContent}>
					<Text>$ {food.price}</Text>
					<Text>One morning, when Gregor Samsa woke.</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '48%',
		height: 320,
	 	borderWidth: 1,
	    borderColor: '#d1ccc0',
	    marginVertical: 3,
	    marginHorizontal: 3,
	    paddingVertical: 8,
	    paddingHorizontal: 8,
	    backgroundColor: '#fff'
	},
	wrapHead: {
		height: '20%'
	},
	wrapThumbnail:{
		height: '50%'
	},
	wrapContent: {
		height: '30%'
	},
	thumbnailFood: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	}
})

export default FoodItem