import { Button, ListItem } from "@rneui/base"
import { Input } from "@rneui/themed"
import { getItemAsync } from "expo-secure-store"
import React, { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import server from "../../api/server"
import { Comment } from "../../models/comment-model"
import { Post } from "../../models/post-model"
import { CustomAvatar } from "../custom-avatar"
import Spacer from "../util/spacer"

interface Props {
  comments: Comment[] | string[]
  postId: string
  onHandleComment: any
}
export const CommentList = ({ comments, postId, onHandleComment}: Props) => {
  const [comment, setCommment] = useState<string>('')
  const [commentCount, setCommentCount] = useState<number>(comments?.length)

  const handleComment = async () => {
    const token = await getItemAsync('accessToken')
    try {
      const response = await server.post(`/post/${postId}/comment`, {
        content: comment
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      onHandleComment((p: Post) => ({...p, comments: [...p.comments, response.data]}))
      setCommentCount(comments.length)
      setCommment('')
    } catch (error:any) {
      console.log(error.response)
    }
    
  }
  return (
    <View style={styles.container}>
      <Spacer />
      <Input
        placeholder="Comments"
        value={comment}
        onChangeText={setCommment}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
      />
      <Button
      onPress={handleComment}
        title='Publish'
      />
      {comments &&
        <FlatList
          keyExtractor={({ _id }) => _id}
          data={comments as Comment[]}
          renderItem={({ item }) => (
            <ListItem key={item._id} bottomDivider>
              <CustomAvatar
                name={item.profileId.username}
              />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>{item.profileId.username}</ListItem.Title>
                <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        />
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center'
  },
  content: {
    display: 'flex',
    alignContent: 'center'
  }
})