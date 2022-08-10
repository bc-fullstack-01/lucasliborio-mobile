
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Post } from "../../models/post-model"

import { PostCard } from "../post-card"

interface Props {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
    
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => (
          <PostCard
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