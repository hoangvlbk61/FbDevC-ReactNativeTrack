import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}/>
      <Image
      style={styles.logo}
      source={{
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
      }}
      resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {

  },
  container: {

  },
  logo: {
    flex: 1,
    height: 40,
    width: null,
  }
});
