import { Input } from "@rneui/base";
import React, { useContext, useReducer } from "react";
import { Button, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import Spacer from "../util/spacer";
import logo from '../../assets/logo.png'
import CustomInput from "../input/custom-input";
import { AuthContext } from "../../context/auth-context";

export interface InputProps {
  name: string
  label: string,

}
interface Props {
  handleSubmit: any
  navigation: any
  formArr: InputProps[]
  btnText: string,
  linkText: string,
  to: string
}

interface ActionType {
  type: string,
  payload: any
}

const reducer = (state: any, actions: ActionType) => {
  switch (actions.type) {
    case "changeState":
      return { ...state, [actions.payload.name]: actions.payload.value }
  }
}
export default function AuthForm({ formArr, handleSubmit, navigation, btnText, linkText, to }: Props) {
  const initialState = formArr.reduce((acc, value: InputProps) => ({ ...acc, [value.name]: '' }), {})

  const [state, dispatch] = useReducer(reducer, initialState)

  const { errMessage, clearErrorMessage } = useContext(AuthContext)

  const handleChangeState = (name: string) => {
    return (value: string) => {
      dispatch({ type: 'changeState', payload: { name, value } })
    }
  }
  return (
    <>
      <View style={style.container}>
        <Image source={logo} style={style.image} />
        <Spacer />
        {formArr.map((inputs, index) => (
          <CustomInput
            key={index}
            name={inputs.name}
            label={inputs.label}
            handleChangeState={handleChangeState(inputs.name)}
          />
        ))}
        <Spacer>
          <Button
            title={btnText}
            onPress={() => handleSubmit(state)}
          />
        </Spacer>
      </View>
      <TouchableOpacity
        onPress={() => { clearErrorMessage(); navigation.navigate(to) }}>
        <Text style={style.link}>{linkText}</Text>
      </TouchableOpacity>
      <Spacer />
      {errMessage && (<Text style={style.errorText}>{errMessage}</Text>)}

    </>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 100
  },
  errorText: {
    textAlign: 'center',
    color: 'red'
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 5
  },
  link: {
    textAlign: 'center',
    color: 'blue'
  }
})