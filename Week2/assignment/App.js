/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import NagivationBar from "./components/NavigationBar";
import UserArea from "./components/UserArea";
import UserFigure from "./components/UserFigure";
import UserPictures from "./components/UserPictures";
import ActionBar from "./components/ActionBar";

import ImageDetail from "./ImageDetail";
export default function App() {
	return (
		<ImageDetail />

	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
});

/* 
		
*/