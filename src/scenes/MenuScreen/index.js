import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getAll } from '../../actions/foodCategories'
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

    componentWillMount() {
    	this.props.dispatch(getAll());
    }

	render(){
		const { categories } = this.props			
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

const mapStateToProps = state => { 
  return {
    categories: state.foodCategories
  }
}

export default connect(mapStateToProps)(MenuScreen)

const styles = StyleSheet.create({
  container: {
  		flex: 1,
  		flexDirection: 'column'
  }
})