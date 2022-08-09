import { getItemAsync } from "expo-secure-store";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostList } from "../../components/post-list";

export default function FeedScreen() {
  (async () => {
    console.log('HOMESCREEN', await getItemAsync('accessToken'))
  })()
  
  return (
    <View>
      <PostList/>
    </View>
  )
}

const style = StyleSheet.create({
  
})