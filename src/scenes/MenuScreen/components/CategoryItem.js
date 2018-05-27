import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class CategoryItem extends React.Component{
	render(){
		const { category, handleClick } = this.props
		return (
			<TouchableOpacity 
				style={styles.container} 
				onPress={handleClick}
				activeOpacity={0.5}>
				<Image 
					style={styles.categoryBackground} 
					source={{uri: category.background}} />

				<View style={styles.containerAbsolute}>
					<Text style={styles.titleText}>{category.name}</Text>
					<Text style={styles.descText}>{category.short_desc}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 160,
	 	borderBottomWidth: 1,
	    borderBottomColor: '#ecf0f1',		
	},	
	categoryBackground: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
	containerAbsolute: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0, 
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 25
	},
	titleText: {
		color: '#ecf0f1',
		fontSize: 25,
		fontWeight: 'bold'
	},
	descText: {
		color: '#ecf0f1',
		fontSize: 14,
		textAlign: 'center'
	}
})

export default CategoryItem