/** @format */

import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

const userPictureLeft = new Array(7).fill().map((e, i) => (
	<Image
		source={require(`../../assets/l${i+1}.jpg`)}
		style={styles.pictureImage}
		resizeMode="contain"
	/>
));

const userPictureRight = new Array(7).fill().map((e, i) => (
	<Image
		source={require(`../../assets/r${i+1}.jpg`)}
		style={styles.pictureImage}
		resizeMode="contain"
	/>
));

export default () => {
	return (
		<ScrollView 
		contentContainerStyle={{
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<View style={styles.pictureLeftCol}>
				{userPictureLeft}
			</View>
			<View style={styles.pictureRightCol}>
				{userPictureRight}
			</View>
		</ScrollView>
	);
};
