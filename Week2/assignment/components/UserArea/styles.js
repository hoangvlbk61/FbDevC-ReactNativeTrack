/** @format */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
	userArea: {
		display: "flex",
		flexDirection: "row",
		height: "15%",
		flex: 3,
		marginBottom: 20,
	},
	avatarContainer: {
		height: "100%",
		flex: 1,
		overflow: "hidden",
		width: 80,
		height: 80,
		borderRadius: "50%",
	},
	userAvatar: {
		width: 150,
		height: 150,
		// borderRadius: 1200,
		top: 0,
		borderWidth: 1,
		resizeMode: "cover",
	},
	userInfo: {
		width: "60%",
		flex: 2,
		padding: 5,
		paddingLeft: 20,
		// borderColor: "black",
		// borderWidth: 1,
		// borderRadius: 5,
	},
});
