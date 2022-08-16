import React, { useContext, useState } from "react"
import { Input, Button } from "@rneui/base"
import { View, StyleSheet, Image } from "react-native"
import Spacer from "../util/spacer"
import { ExpoImagePicker } from "../post-image"
import { ImageInfo, ImagePickerResult } from "expo-image-picker"
import { PostContext } from "../../context/post-context"
import Navigate from "../../root-navigation"

export const CreatePostForm = () => {
  const { createPost } = useContext(PostContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<ImageInfo>()
  const handleCreatePost = async () => {
    await createPost({ title, description, image })
  }
  return (
    <View style={style.container}>
      <Spacer />
      <>
        <Input
          label='Title'
          value={title}
          onChangeText={setTitle}
          autoCorrect={false}
        />
        <Input
          label="What happens today ?"
          value={description}
          onChangeText={setDescription}
          numberOfLines={3}
          autoCorrect={false}
        />
        <ExpoImagePicker
          onFileLoaded={setImage}
        />
        <Spacer>
          <Button
            title="Publish"
            onPress={handleCreatePost}
          />
        </Spacer>
      </>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  }
})

