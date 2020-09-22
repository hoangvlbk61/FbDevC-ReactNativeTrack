/** @format */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import styles from "./styles";

export default () => {
	return (
		<View style={styles.userFigure}>
			<View style={styles.figureContainer}>
				<Text style={styles.figureText}>210</Text>
				<Text style={styles.figureTitle}>Photos</Text>
			</View>

			<View style={styles.figureContainer}>
				<Text style={styles.figureText}>15k</Text>
				<Text style={styles.figureTitle}>Followers</Text>
			</View>

			<View style={styles.figureContainer}>
				<Text style={styles.figureText}>605</Text>
				<Text style={styles.figureTitle}>Following</Text>
			</View>
		</View>
	);
};
