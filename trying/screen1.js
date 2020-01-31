import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList
} from "react-native";
export default class screen extends React.Component {
	render() {
		console.log("hi hi", this.props.navigation.getParam("uri"));
		return (
			<View>
				<Text>{this.props.navigation.getParam("uri")}</Text>
			</View>
		);
	}
}
