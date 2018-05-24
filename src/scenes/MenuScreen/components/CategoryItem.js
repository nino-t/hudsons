import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

class CategoryItem extends React.Component{
	render(){
		const { category } = this.props
		return (
			<View style={styles.container}>
				<Image 
					style={styles.categoryBackground} 
					source={{uri: category.background}} />

				<View style={styles.containerAbsolute}>
					<Text style={styles.titleText}>{category.name}</Text>
					<Text style={styles.descText}>{category.short_desc}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 160,
	 	borderBottomWidth: 3,
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
		backgroundColor: 'rgba(0,0,0,0.7)',
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