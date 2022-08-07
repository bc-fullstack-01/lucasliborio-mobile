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

  console.log(state)
  return (
    <>
      <View style={style.container}>
        <Spacer>
          <Image source={logo} style={style.image} />
        </Spacer>

        {formArr.map((inputs, index) => (
          <CustomInput
            key={index}
            name={inputs.name}
            label={inputs.label}
            handleChangeState={handleChangeState(inputs.name)}
          />
        ))}
      </View>
      <Button
        title={btnText}
        onPress={() => handleSubmit(state)}
      />
      <Spacer />
      <TouchableOpacity
        onPress={() => { clearErrorMessage(); navigation.navigate(to) }}>
        <Text style={style.link}>{linkText}</Text>
      </TouchableOpacity>
      { errMessage && (
        <Spacer>
          <Text style={style.errorText}>{errMessage}</Text>
        </Spacer>
      )}

    </>
  )
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
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
    color: 'blue'
  }
})