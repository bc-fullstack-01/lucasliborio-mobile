import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button } from '@rneui/base'
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'
import Spacer from '../util/spacer'

interface Props {
  onFileLoaded(t: any): void
}

interface File {
  name: string,
  type: string,

}
export const ExpoImagePicker = ({ onFileLoaded }: Props) => {
  const [image, setImage] = useState<string>()
  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.cancelled) {
      const { uri } = result
      setImage(uri)
      onFileLoaded(result)
    }
  }
  return (
    <Spacer>
      <>
        <Button
          title="Anexar Imagem"
          onPress={pickImage} />
        {image && (
          <View style={style.imageContainer}>8u
            <Image source={{ uri: image }} style={{ width: 300, height: 200 }} />
          </View>
        )}
      </>
    </Spacer>
  )
}
const style = StyleSheet.create({
  imageStyle: {
    width: 720,
    heitgh: 540
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: 'center'
  }
})