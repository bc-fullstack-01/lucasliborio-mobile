
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import AuthForm from "../../components/form/auth-form";

import { AuthContext } from "../../context/auth-context";
export interface LoginProps {
  email: string,
  password: string
}
type NavigationProp = {
  navigation: NativeStackNavigationProp<any, any>

}

export default function LoginScreen({ navigation }: NavigationProp) {
  const { login, clearErrorMessage } = useContext(AuthContext)


  const handleSubmit = async ({ email, password }: LoginProps) => {
    clearErrorMessage()
    try {
      await login({ email, password })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={style.container}>
      <AuthForm
        handleSubmit={handleSubmit}
        formArr={[{
          label: 'Email',
          name: 'email'
        }, {
          label: 'Password',
          name: 'password'
        }]}
        btnText='Login'
        linkText="Dont Have an Account? Click Here"
        navigation={navigation}
        to='Register'
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  }
})