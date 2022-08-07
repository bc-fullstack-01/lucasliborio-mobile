
import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import AuthForm from "../../components/form/auth-form";

import { AuthContext } from "../../context/auth-context";
export interface SignupProps {
  username: string
  email: string,
  password: string,
  passwordConfirmation: string
}

export default function SignupScreen({ navigation }: any) {
  const { signup, clearErrorMessage } = useContext(AuthContext)

  const handleSubmit = async ({ username, email, password, passwordConfirmation }: SignupProps) => {
    clearErrorMessage()
    try {
      await signup({ username, email, password, passwordConfirmation })
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={style.container}>
      <AuthForm
        handleSubmit={handleSubmit}
        formArr={[{
          label: 'Username',
          name: 'username'
        }, {
          label: 'Email',
          name: 'email'
        }, {
          label: 'Password',
          name: 'password'
        }, {
          label: 'Password Confirmation',
          name: 'passwordConfirmation'
        }]
        }
        btnText='SignUp'
        linkText="Already have an Account, Login Here"
        to='Login'
        navigation={navigation}
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