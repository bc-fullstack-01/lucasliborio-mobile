import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import React from "react"
import { StyleSheet, Text } from "react-native"
import { CustomIconButton } from "../../custom-button"

interface Props {
  liked: boolean
}

export const CommentButton = () => {

  return (
    <CustomIconButton>
      <>
        <MaterialIcons name="chat-bubble-outline" size={24} />
        <Text>{5}</Text>
      </>

    </CustomIconButton>
  )
}

