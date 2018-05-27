import React from 'react'
import { StyleSheet, View, Text, Image, Animated, Button, Easing} from 'react-native';

class DevAnimation extends React.Component{
	render(){
	    const progress = new Animated.Value(0);
	    const translateX = progress.interpolate({
	      inputRange: [0, 1],
	      outputRange: [-200, 200],
	    });
	    const width = progress.interpolate({
	      inputRange:  [0, 0.5, 1],
	      outputRange: [50, 150, 150],
	    });
	    const height = width;
	    const onPress = () => {
	      Animated.timing(progress, {
	        toValue: 1,
	        duration: 2000,
	        easing: Easing.bezier(0.4, 0, 0.2, 1),
	      }).start();
	    };

		return (
			<View style={styles.container}>
				<Animated.View style={[styles.box, { width, height, transform: [{ translateX }] } ]}></Animated.View>
				<Button onPress={onPress} title="Click Me" />

				<LoadingBar />
			</View>
		)
	}
}

class LoadingBar extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	widthAnimation: new Animated.Value(0)
	  }
	}

	componentWillMount() {
      Animated.timing(this.state.widthAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }).start();
	}

	render(){
		let { widthAnimation } = this.state
	    const width = widthAnimation.interpolate({
	      inputRange:  [0, 0.5, 1],
	      outputRange: [50, 150, 150],
	    });

		return (
			<View style={styles.loadingBar}>
				<Animated.View style={[styles.loadingBarProcess, { width, transform: [{ widthAnimation }] } ]}></Animated.View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	box: {
		width: 50,
		height: 50,
		backgroundColor: '#ffaf05',
	},
	loadingBar: {
		marginTop: 20,
		width: 200,
		height: 10,
		borderWidth: 2,
		borderColor: '#ffaf05'

	},
	loadingBarProcess: {
		height: '100%',
		backgroundColor: '#000000'
	}
})

export default DevAnimation