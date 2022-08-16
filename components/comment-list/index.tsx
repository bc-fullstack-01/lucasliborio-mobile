import { Button, ListItem } from "@rneui/base"
import { Input } from "@rneui/themed"
import React, { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Comment } from "../../models/comment-model"
import { CustomAvatar } from "../custom-avatar"
import Spacer from "../util/spacer"

interface Props {
  comments: Comment[] | undefined | string[]
}
export const CommentList = ({ comments }: Props) => {
  const [comment, setCommment] = useState('')
  console.log(comment)
  return (
    <View style={styles.container}>

      <Input
        label="Comments"
        value={comment}
        onChangeText={setCommment}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
      />

      <Button
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
    alignItems: 'center'
  }
})