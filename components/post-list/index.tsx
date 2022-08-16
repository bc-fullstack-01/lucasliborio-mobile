
import { FlatList, RefreshControl, StyleSheet, View } from "react-native"
import { Post } from "../../models/post-model"

import { PostCard } from "../post-card"
import React, { useContext } from "react"
import { PostContext } from "../../context/post-context"


interface Props {
  posts: Post[]
  navigation: any
}

export const PostList = ({ posts, navigation }: Props) => {
  const { loadMore, onRefresh, isLoading } = useContext(PostContext)
  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}></RefreshControl>}
        data={posts}
        keyExtractor={({ _id }) => _id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <PostCard
            handleClick={() => navigation.navigate('PostDetail', { postId: item._id })}
            post={item}
          />
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  cardHeaderStyle: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitleStyle: {
    marginLeft: 15,
    fontWeight: "bold",
  },
  cardImageStyle: {
    resizeMode: "contain",
    maxHeight: 600,
    marginBottom: 15
  },
  descriptionStyle: {
    fontSize: 12
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between'
  }
})