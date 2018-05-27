import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getAll } from '../../actions/foodCategories'
import CategoryItem from './components/CategoryItem'

class MenuScreen extends React.Component{
	static navigationOptions = ({navigation}) => ({
    title: 'Menu',
    headerTitleStyle: { textAlign: 'center',alignSelf:'center', width: '100%', marginLeft: -20},
    headerStyle:{
        backgroundColor:'#ecf0f1'
    },
    headerLeft: <Icon 
    	name="navicon" 
    	size={20} 
    	color="#34495e" 
    	style={{ marginLeft: 18 }} 
    	onPress={() => navigation.openDrawer()} />
  });

  componentWillMount() {
  	this.props.dispatch(getAll());
  }

  toShop(category_id, title){
    this.props.navigation.navigate('Shop', {
      category_id: category_id,
      title: title
    });
  }

	render(){
		const { categories } = this.props			
		return (
      <View style={{ flex: 1 }}>
        <StatusBar 
          backgroundColor="#bdc3c7"
          barStyle="dark-content"
          translucent={false} />       

  			<ScrollView>
  				<View style={styles.container}>
  					{
  						categories.map((category, index) => 
  							<CategoryItem 
                  key={category.id} 
                  category={category}
                  handleClick={() => this.toShop(category.id, category.name)} /> 
  						)
  					}
  				</View>
  			</ScrollView>
      </View>
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