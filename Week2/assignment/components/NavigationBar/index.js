/** @format */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
export default () => {
	return (
		<View style={styles.headerBar}>
			<AntDesign
				style={styles.icon}
				name="arrowleft"
				size={24}
				color="black"
			/>
			<MaterialCommunityIcons
				style={styles.icon}
				name="dots-horizontal"
				size={24}
				color="black"
			/>
		</View>
	);
};
