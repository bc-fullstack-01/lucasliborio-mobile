import React, { useState } from "react"
import { Input, Button } from "@rneui/base"
import { View, StyleSheet, Image } from "react-native"
import Spacer from "../util/spacer"
import { ExpoImagePicker } from "../post-image"
import { ImageInfo, ImagePickerResult } from "expo-image-picker"

export const CreatePostForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<ImageInfo>()
  console.log(image)
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
            onPress={() => { }}
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

