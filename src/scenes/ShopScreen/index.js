import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FoodItem from './components/FoodItem'
import { getByCategories } from '../../actions/Food'

class ShopScreen extends React.Component{
	static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title'),
    headerTitleStyle: { textAlign: 'center',alignSelf:'center', width: '100%', marginLeft: -20},
    headerStyle:{
        backgroundColor:'white'
    },
    headerLeft: <Icon 
    	name="navicon" 
    	size={20} 
    	color="#34495e" 
    	style={{ marginLeft: 18 }} 
    	onPress={() => navigation.openDrawer()} />
  });

  componentWillMount() {
    const { navigation } = this.props
    const category_id = navigation.getParam('category_id')

    this.props.dispatch(getByCategories(category_id));
  }  

	render(){
    const { foods } = this.props
    
		return (
			<ScrollView>
				<View style={styles.container}>
          {
            foods.map((food, index) => 
              <FoodItem
                key={food.id}
                food={food} />
            )
          }
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = state => {
  return {
    foods: state.foods
  }
}

const styles = StyleSheet.create({
  container: {
  		flex: 1,
  		flexDirection: 'row',
      flexWrap: 'wrap'
  }
})

export default connect(mapStateToProps)(ShopScreen)