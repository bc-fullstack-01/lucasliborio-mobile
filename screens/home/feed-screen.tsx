import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostList } from "../../components/post-list";
import { PostContext } from "../../context/post-context";

export default function FeedScreen({ navigation }: { navigation: any }) {
  const { posts, getFeed, errorMessage, page, clearPosts } = useContext(PostContext)
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && getFeed(page)
    return () => {
      clearPosts()
    }
  }, [page, isFocused])
  return (
    <View>
      {errorMessage
        ? (<Text>{errorMessage}</Text>)
        : (
          <PostList
            navigation={navigation}
            posts={posts}
          />
        )}

    </View>
  )
}

const style = StyleSheet.create({

})