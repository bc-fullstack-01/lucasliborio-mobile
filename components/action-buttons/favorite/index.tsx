import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import React from "react"
import { StyleSheet, Text } from "react-native"
import { CustomIconButton } from "../../custom-button"

interface Props {
  liked: boolean
}

export const FavoriteButton = ({liked}: Props) => {

  return (
    <CustomIconButton>
      {liked ? (
        <>
          <MaterialIcons name="favorite" size={24} color="red" />
          <Text>{5}</Text>
        </>
      ) : (
        <>
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <Text>{5}</Text>
        </>
      )

      }
    </CustomIconButton>
  )
}

