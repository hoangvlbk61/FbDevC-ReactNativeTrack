/** @format */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { AntDesign, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import styles from "./styles";
export default () => {
	return (
		<View style={{
			// display: "flex",
			// justifyContent: "space-around",
			// width: "100%",
			alignContent: "center"
		}}>
			<View style={styles.headerBar}>
				<MaterialIcons name="dashboard" size={20} color="#8C95BF" />
				<AntDesign name="pluscircleo" size={20} color="#8C95BF" />
				<SimpleLineIcons name="user" size={20} color="#8C95BF" />
			</View>
		</View>
	);
};
