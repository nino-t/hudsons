import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import FoodItem from './components/FoodItem'
import { getByCategories } from '../../actions/Food'

class ShopScreen extends React.Component{
	static navigationOptions = ({navigation}) => ({
    header: null
  });

  componentWillMount() {
    const { navigation } = this.props
    const category = JSON.parse(navigation.getParam('category'))
    const category_id = category.id

    this.props.dispatch(getByCategories(category_id));
  }   

	render(){
    const { foods, navigation } = this.props
    const category = JSON.parse(navigation.getParam('category'))
    
		return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent backgroundColor="rgba(255, 255, 255, 0)" />    

        <ParallaxScrollView
          backgroundColor="white"
          contentBackgroundColor="#ecf0f1"
          stickyHeaderHeight={75}
          parallaxHeaderHeight={250}
          renderForeground={() => (
            <View style={{ height: 250, flex: 1 }}>
              <Image 
                style={styles.categoryBackground} 
                source={{uri: category.background}} />

                <View style={styles.containerCategory}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name="ios-arrow-back" 
                        size={30} 
                        color="#fff"
                        onPress={() => navigation.goBack() } />                  

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.titleCategory}>{category.name}</Text>
                      <Text style={styles.descCategory}>{category.short_desc}</Text>
                    </View>
                  </View>
                </View>
            </View>
        )}
        renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name="ios-arrow-back" 
                        size={30} 
                        color="#fff"
                        onPress={() => navigation.goBack() } />                  

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.titleCategory}>{category.name}</Text>
                    </View>
                  </View>
              </View>
            )}>          
          <View style={styles.container}>
            {
              foods.map((food, index) => 
                <FoodItem
                  key={food.id}
                  food={food} />
              )
            }
          </View>
        </ParallaxScrollView>
      </View>
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
  },
  categoryBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  containerCategory: {
    position:'absolute', 
    top:0, 
    left: 0, 
    paddingHorizontal: 20, 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(204, 174, 98,0.6)', 
    paddingVertical: 40
  },
  titleCategory: {
    fontSize: 20,
    color: '#fff',
    fontWeight:'bold'  
  },
  descCategory: {
    fontSize: 23,
    color: '#fff',
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 30
  },
  stickySection: {
    height: 75,
    width: '100%',
    backgroundColor: '#ccae62', 
    paddingHorizontal: 20,
    paddingTop: 30
  },
})

export default connect(mapStateToProps)(ShopScreen)