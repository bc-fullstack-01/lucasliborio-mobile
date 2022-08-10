import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import React, { useContext, useEffect, useState } from "react"
import { StyleSheet, Text } from "react-native"
import server from "../../../api/server"
import { AuthContext } from "../../../context/auth-context"
import { CustomIconButton } from "../../custom-button"

interface Props {
  liked: boolean,
  count: number,
  postId: string
}

export const FavoriteButton = ({ liked, count, postId }: Props) => {
  const [likeCount, setLikeCount] = useState(count)
  const [isLiked, setIsLiked] = useState<boolean>(liked)
  const { profileId, token } = useContext(AuthContext)

  const handleLike = async () => {
    try {
      await server.post(`/post/${postId}/like`, null, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setLikeCount((c) => isLiked ? c - 1 : c + 1  )
      setIsLiked((l) => !l)
      
    } catch (error) {
      console.log('cl on favorite button')
    }

  }
  return (
    <CustomIconButton
      handlePress={handleLike}
    >
      {isLiked ? (
        <>
          <MaterialIcons name="favorite" size={24} color="red" />
          <Text>{likeCount}</Text>
        </>
      ) : (
        <>
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <Text>{likeCount}</Text>
        </>
      )

      }
    </CustomIconButton>
  )
}

