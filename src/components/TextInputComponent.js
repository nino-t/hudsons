import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class TextInputComponent extends React.Component {
	render() {
		const { placeholder, icon } = this.props
		return (
			<View style={{flexDirection: 'row', width: '90%'}}>
				<View style={styles.inputIcon}>
					{icon}
				</View>
				<TextInput 
					style={styles.InputWhite} 
					underlineColorAndroid='transparent'
					placeholder={placeholder} />			
			</View>
		)
	}
}

const styles = StyleSheet.create({
  InputWhite: {
  	backgroundColor: '#fff',
  	width: '88%',
  	borderWidth: 0,
  	height: 40
  },
  inputIcon: {
	backgroundColor: '#fff',
	width: '12%',
	paddingHorizontal: 10,
	paddingVertical: 8,
  }
})