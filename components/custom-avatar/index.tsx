import { Avatar } from "@rneui/base"
import { StyleSheet, Text, View } from "react-native"

interface Props {
  name: string
}
export const CustomAvatar = ({name}: Props) => {
  const initials = name.split(' ').map(x => x[0]).join()
  return (
    <Avatar
      size='medium'
      rounded
      title={initials}
      containerStyle={style.avatarStyle}
    />

  )
}

const style = StyleSheet.create({
  avatarStyle: {
    backgroundColor:'red'
  }
})