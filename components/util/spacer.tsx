import React from 'react'
import { StyleSheet, View } from 'react-native'
interface Props {
  children?: React.ReactElement
}

export default function Spacer({ children }: Props) {
  return (
    <View style={styles.spacer} >{children}</View>
  )
}

const styles = StyleSheet.create({
  spacer: {
    marginBottom: 80
  }
})