import React, { ReactElement } from "react"
import { StyleSheet, Touchable, TouchableOpacity } from "react-native"

interface Props {
  children: ReactElement,
  handlePress: any
}
export const CustomIconButton = ({ children, handlePress}: Props) => <TouchableOpacity onPress={handlePress} style={style.iconContainer}>{children}</TouchableOpacity>
const style = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between'
  }
})

