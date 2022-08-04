
import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import AuthForm from "../../components/form/auth-form";

import { AuthContext } from "../../context/auth-context";
export interface LoginProps {
  email: string,
  password: string
}

export default function LoginScreen({ navigation }: any) {
  const { login, token } = useContext(AuthContext)

  const handleSubmit = async ({ email, password }: LoginProps) => {
    try {
      await login({email, password})
      navigation.navigate('Home')
    } catch (error) {
      
    }
  }
  return (
    <View style={style.container}>
      <AuthForm
        handleSubmit={handleSubmit}
        title=""
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
    alignItems: "center",
    marginBottom: 150
  }
})