import { MaterialIcons } from "@expo/vector-icons"
import { Card } from "@rneui/base"
import React, { useContext } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { AuthContext } from "../../context/auth-context"
import { Post } from "../../models/post-model"
import ProfileScreen from "../../screens/profile/ProfileScreen"
import { CommentButton } from "../action-buttons/comment"
import { FavoriteButton } from "../action-buttons/favorite"
import { CustomAvatar } from "../custom-avatar"
interface Props {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const { profileId } = useContext(AuthContext)
  return (
    <TouchableOpacity>
      <Card>
        <View style={style.cardHeaderStyle}>
          <CustomAvatar
            name={post.profileId.username}
          />
          <Text style={style.cardTitleStyle}>{post.profileId.username}</Text>
        </View>
        {post.hasImage ? (
          <Card.Image source={{ uri: post.imageUrl }}></Card.Image>
        ) : null}
        <Text style={style.descriptionStyle}>{post.description}</Text>
        <Card.Divider />
        <View style={style.actionContainer}>
          <FavoriteButton
            postId={post._id}
            liked={post.likes.includes(profileId)}
            count={post.likes.length} />
          <CommentButton
            count={post.comments.length}
          />
        </View>
      </Card>
    </TouchableOpacity>
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
    justifyContent: 'space-between',
    width: '20%'
  }
})