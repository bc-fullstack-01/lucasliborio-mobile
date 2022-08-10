import { getItemAsync } from "expo-secure-store";
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostList } from "../../components/post-list";
import { PostContext } from "../../context/post-context";

export default function FeedScreen() {
  const { posts, getFeed, errorMessage } = useContext(PostContext)
  console.log("Error MSG", errorMessage)
  console.log(posts)
  useEffect(() => {
    getFeed()
  }, [])
  return (
    <View>
      {errorMessage
        ? (<Text>{errorMessage}</Text>)
        : (
          <PostList
            posts={posts}
          />
        )}

    </View>
  )
}

const style = StyleSheet.create({

})