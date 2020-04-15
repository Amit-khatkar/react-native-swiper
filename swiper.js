import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import SwiperCard from "./components/swiperCard/swiperCard";

const { width } = Dimensions.get("screen");

const data = [
	{
		image: "https://bit.ly/3aHaIop",
		title: "React Native",
		subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		buttonText: "Submit",
		color: "#fcba03",
	},
	{
		image: "https://bit.ly/34gBZvu",
		title: "Showcase",
		subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		buttonText: "Download",
		color: "#12de59",
	},
	{
		image: "https://bit.ly/3aIJlu4",
		title: "Card Heading",
		subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		buttonText: "Message",
		color: "#5BC02D",
	},
];

const Swiper = () => {
	const scrollView = useRef();
	const [beginX, setBeginX] = useState(0);

	const onScrollEndDrag = (evt) => {
		const scrollX = evt.nativeEvent.contentOffset.x;
		const scrollPos = scrollX / width;
		const velocityX = evt.nativeEvent.velocity.x;
		const index = Math.trunc(scrollPos);
		const floatDigit = Number((scrollPos - index).toFixed(2));
		if (velocityX > 1 || (beginX > scrollX && floatDigit < 0.8)) {
			scrollView.current.scrollToIndex({ animated: true, index });
		} else if (floatDigit > 0.2 || velocityX < -1) {
			scrollView.current.scrollToIndex({ animated: true, index: index + 1 });
		} else {
			scrollView.current.scrollToIndex({ animated: true, index });
		}
	};

	return (
		<View style={[styles.container]}>
			<View style={{ height: 500 }}>
				<FlatList
					ref={scrollView}
					contentContainerStyle={{ alignItems: "center" }}
					horizontal
					onScrollBeginDrag={(evt) => setBeginX(evt.nativeEvent.contentOffset.x)}
					onScrollEndDrag={onScrollEndDrag}
					showsHorizontalScrollIndicator={false}
					data={data}
					renderItem={({ item }) => <SwiperCard {...item} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "#144fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Swiper;
