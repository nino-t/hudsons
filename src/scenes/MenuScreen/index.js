import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CategoryItem from './components/CategoryItem'

class MenuScreen extends React.Component{
	static navigationOptions = ({navigation}) => ({
        title: 'Menu',
        headerTitleStyle: { textAlign: 'center',alignSelf:'center', width: '100%', marginLeft: -20},
        headerStyle:{
            backgroundColor:'white'
        },
        headerLeft: <Icon 
        	name="navicon" 
        	size={20} 
        	color="#34495e" 
        	style={{ marginLeft: 15 }} 
        	onPress={() => navigation.openDrawer()} />
    });

	constructor(props){
		super(props);
		this.state = { 
			categories: []
		}
	}

	componentWillMount() {
		fetch('http://192.168.0.102:8000/api/vtn/food-categories')
		.then(response => response.json())
		.then(json => this.setState({
			categories: json
		}))
	}

	render(){
		const { categories } = this.state	
		return (
			<ScrollView>
				<View style={styles.container}>
					{
						categories.map((category, index) => 
							<CategoryItem key={category.id} category={category} /> 
						)
					}
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  		flex: 1,
  		flexDirection: 'column'
  }
})

export default MenuScreen