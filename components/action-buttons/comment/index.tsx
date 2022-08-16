import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import React from "react"
import { StyleSheet, Text } from "react-native"
import { CustomIconButton } from "../../custom-button"

interface Props {
  count: number
}

export const CommentButton = ({count}: Props) => {

  return (
    <CustomIconButton
      handlePress={() => {}}
    >
      <>
        <MaterialIcons name="chat-bubble-outline" size={24} />
        <Text>{count}</Text>
      </>

    </CustomIconButton>
  )
}

