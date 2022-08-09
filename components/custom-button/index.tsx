import React, { ReactElement } from "react"
import { StyleSheet, Touchable, TouchableOpacity } from "react-native"

interface Props {
  children: ReactElement
}
export const CustomIconButton = ({ children }: Props) => <TouchableOpacity style={style.iconContainer}>{children}</TouchableOpacity>
const style = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between'
  }
})

