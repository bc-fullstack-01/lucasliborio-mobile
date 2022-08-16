import { getItemAsync } from "expo-secure-store";
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostList } from "../../components/post-list";
import { PostContext } from "../../context/post-context";

export default function FeedScreen({navigation}: {navigation: any}) {
  const { posts, getFeed, errorMessage, page} = useContext(PostContext)
  useEffect(() => {
    getFeed(page)

  }, [page])
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