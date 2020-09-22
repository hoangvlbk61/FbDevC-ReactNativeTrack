/** @format */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import styles from "./styles";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
export default () => {
	return (
		<View style={styles.userArea}>
			<View style={styles.avatarContainer}>
				<Image
					source={require("../../assets/avatar.jpg")}
					style={styles.userAvatar}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.userInfo}>
				<Text
					style={{
						height: 30,
						fontSize: 24,
						fontWeight: "bolder",
						paddingBottom: 10,
					}}
				>
					Floy Hayes
				</Text>
				<Text
					style={{
						height: 30,
						fontSize: 20,
						color: "gray",
						paddingBottom: 10,
					}}
				>
					Photographer
				</Text>
				<View
					style={{
						height: 30,
						display: "flex",
						flexDirection: "row",
						paddingBottom: 10,
					}}
				>
					<View
						style={{
							// padding: 5,
							paddingLeft: 15,
							paddingRight: 15,
							backgroundColor: "#3B73FF",
							borderRadius: 10,
							alignSelf: "flex-start",
							height: 24,
							display: "flex",
							justifyContent: "center",
							marginRight: 10,
						}}
					>
						<Text style={{ color: "white", fontSize: 12 }}>
							Follow
						</Text>
					</View>
					<View
						style={{
							// padding: 5,
							paddingLeft: 15,
							paddingRight: 15,
							backgroundColor: "#56D8FF",
							borderRadius: 10,
							alignSelf: "flex-start",
							height: 24,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<MaterialCommunityIcons
							name="send"
							size={16}
							color="white"
						/>
					</View>
				</View>
			</View>
		</View>
	);
};
