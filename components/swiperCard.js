import React from "react";
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("screen");

const SwiperCard = ({ title, subtitle, buttonText, image, color }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: image }} />
				<Text style={styles.heading}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
				<TouchableOpacity activeOpacity={1} style={[styles.button, { backgroundColor: color }]}>
					<Text style={styles.buttonText}>{buttonText}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width,
		justifyContent: "center",
		alignItems: "center",
		height: 500,
	},
	image: {
		width: "100%",
		height: 250,
		borderRadius: 16,
	},
	heading: {
		fontSize: 22,
		color: "#263238",
		margin: 8,
		marginHorizontal: 16,
		textAlign: "center",
		fontWeight: "700",
	},
	subtitle: {
		fontSize: 15,
		color: "#737C91",
		textAlign: "center",
		margin: 8,
		marginHorizontal: 16,
		fontWeight: "600",
	},
	container: {
		borderRadius: 16,
		width: "80%",
		// overflow: "hidden",
		marginHorizontal: 16,
		alignItems: "center",
		paddingBottom: 50,
		// height: 400,
		backgroundColor: "white",
	},
	buttonText: {
		color: "white",
		fontSize: 19,
		fontWeight: "600",
	},
	button: {
		width: 200,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		bottom: -20,
		position: "absolute",
	},
});

export default SwiperCard;
