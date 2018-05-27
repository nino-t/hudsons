import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native';

class DashboardScreen extends React.Component{
	static navigationOptions = {
        title: 'REGISTRATION',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
        headerRight: <Text>H</Text>
    };

	render(){
		return (
			<View style={{ flex: 1}}>
		        <StatusBar 
		          backgroundColor="#ecf0f1"
		          barStyle="dark-content"
		          translucent={false} />      

				<Text>Dashboard</Text>
			</View>
		)
	}
}

export default DashboardScreen