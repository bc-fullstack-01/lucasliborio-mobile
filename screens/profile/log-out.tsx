import { Button } from "@rneui/base";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "../../components/util/spacer";
import { AuthContext } from "../../context/auth-context";

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Spacer />
      <Button
      onPress={logout}
        title='Log out'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})