/** @format */

import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
	userPictures: {
		display: "flex",
		flexDirection: "row",
		// flex: 2
	},
	pictureLeftCol: {
		padding: 5,
		flex: 1,
	},
	pictureRightCol: {
		padding: 5,
		flex: 1,
	},
	pictureImage: {
		// borderWidth: 10,
		// alignSelf: 'stretch',
		borderRadius: 20,
		width: 120,
		height: 90,
		resizeMode: "stretch",
		marginBottom: 10,
	},

	scrollView: {
		marginTop: Constants.statusBarHeight,
	},
});
