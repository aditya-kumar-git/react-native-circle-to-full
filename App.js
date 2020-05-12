import React from "react"
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Animated,
	StatusBar,
	SafeAreaView,
	Dimensions,
} from "react-native"

export default class App extends React.Component {
	state = {
		aniHeight: new Animated.Value(100),
		aniWidth: new Animated.Value(100),
		borderAnim: new Animated.Value(100),
		backCol: new Animated.Value(0),
	}
	componentDidMount() {
		console.log(Dimensions.get("screen").height, Dimensions.get("screen").width)
	}
	render() {
		var backBack = this.state.backCol.interpolate({
			inputRange: [0, 1, 2, 3],
			outputRange: ["lightskyblue", "lightgreen", "red", "pink"],
		})
		return (
			<View style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<TouchableOpacity
					onPress={() => {
						Animated.parallel([
							Animated.timing(this.state.aniHeight, {
								duration: 1000,
								toValue: Dimensions.get("screen").height,
							}),
							Animated.timing(this.state.aniWidth, {
								duration: 1000,
								toValue: Dimensions.get("screen").width,
							}),
							Animated.timing(this.state.borderAnim, {
								duration: 1000,
								toValue: 0,
							}),
							Animated.timing(this.state.backCol, {
								duration: 1000,
								toValue: 3,
							}),
						]).start()
					}}
				>
					<Animated.View
						style={{
							backgroundColor: backBack,
							height: this.state.aniHeight,
							width: this.state.aniWidth,
							borderRadius: this.state.borderAnim,
						}}
					></Animated.View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})
