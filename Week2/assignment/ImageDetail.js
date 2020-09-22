/** @format */

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

import NavBar from "./components/NavigationBar";
import ActionBar from "./components/ActionBar";
const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
	<View style={styles.container}>
		<ImageBackground
			source={require("./assets/r4.jpg")}
			style={styles.image}
		>
			<NavBar />
		</ImageBackground>
		<View style={{ margin: 20 }}>
			<View
				style={{
					justifyContent: "space-between",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<View>
					<Text style={{ fontSize: 24, fontWeight: 600 }}>
						{" "}
						Pika pika
					</Text>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<Entypo name="location-pin" size={16} color="gray" />
						<Text
							style={{
								fontSize: 14,
								opacity: 0.5,
								fontWeight: 600,
							}}
						>
							{" "}
							Hanoi, Vietnam
						</Text>
					</View>
				</View>
				<View
					style={{
						borderRadius: 15,
						borderTopLeftRadius: 5,
						backgroundColor: "#3B73FF",
						width: 40,
						height: 40,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Entypo name="download" size={20} color="white" />
				</View>
			</View>
			<View>
				<View style={{ marginTop: 10 }}>
					<Text style={{ fontSize: 12, fontWeight: "bold" }}>
						Lorem ipsum dolor sit amet, sit eu mucius propriae, eum
						ne malis novum consequuntur. Inani propriae adolescens
						per in, ad est etiam conceptam assueverit, quo at dicam
						admodum.
					</Text>
				</View>
				<View style={{flexDirection: "row", paddingTop: 10}}>
					<View style={styles.tag}>
						<Text style={{fontSize: 12, width: null}}>#photography</Text>
					</View>
					<View style={styles.tag}>
						<Text style={{fontSize: 12, width: null}}>#seo</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<AntDesign
						name="heart"
						size={24}
						color="gray"
						style={styles.icon}
					/>
					<FontAwesome
						name="comment"
						size={24}
						color="gray"
						style={styles.icon}
					/>
				</View>
				<View>
					<AntDesign
						name="book"
						size={24}
						color="gray"
						style={styles.icon}
					/>
				</View>
			</View>
			<ActionBar />
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 3,
		flexDirection: "column",
	},
	image: {
		// flex: 1,
		// resizeMode: "stretch",
		width: "100%",
		height: 300,
		// justifyContent: "center",
	},
	icon: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 0,
    },
    tag: {
        backgroundColor: "#F5F6FA",
        borderRadius: 10,
        padding: 3,
    }
});

export default App;
