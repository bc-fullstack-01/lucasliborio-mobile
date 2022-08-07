import { getItemAsync } from "expo-secure-store";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  (async () => {
    console.log('HOMESCREEN', await getItemAsync('accessToken'))
  })()
  
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
  
})