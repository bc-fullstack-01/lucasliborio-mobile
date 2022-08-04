import { Input } from "@rneui/base";
import React, { useReducer } from "react";
import { Button, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import Spacer from "../util/spacer";
import logo from '../../assets/logo.png'
import CustomInput from "../input/custom-input";

export interface InputProps {
  name: string
  label: string,

}
interface Props {
  handleSubmit: any
  navigation: any
  formArr: InputProps[]
  title: string,
  btnText: string,
  linkText: string,
  to: string
}

interface ActionType {
  type: string,
  payload: any
}
interface StateType {
  [x: string]: string
}
const reducer = (state: any, actions: ActionType) => {
  switch (actions.type) {
    case "changeState":
      return { ...state, [actions.payload.name]: actions.payload.value }
  }
}
export default function AuthForm({ title, formArr, handleSubmit, navigation, btnText, linkText, to}: Props) {
  const initialState = formArr.reduce((acc, value: InputProps) => ({ ...acc, [value.name]: '' }), {})
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChangeState = (name: string, value: string) => {
    dispatch({ type: 'changeState', payload: { name, value } })
  }
  console.log(state)
  return (
    <>
      <Spacer>
        <Image source={logo} style={style.image} />
      </Spacer>

      {formArr.map((inputs, index) => (
        <CustomInput
          key={index}
          name={inputs.name}
          label={inputs.label}
          handleChangeState={handleChangeState}
        />
      ))}
      <Button
        title={btnText}
        onPress={() => handleSubmit(state)}
      />
      <Spacer />
      <TouchableOpacity
        onPress={() => navigation.navigate(to)}>
        <Text style={style.link}>{linkText}</Text>

      </TouchableOpacity>
    </>
  )
}

const style = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginBottom: 5
  },
  link: {
    color: 'blue'
  }
})