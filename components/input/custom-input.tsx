import { Input } from "@rneui/base";
import React from "react";
import { InputProps } from "../form/auth-form";

type Props = InputProps & {
  handleChangeState: any
}

export default function CustomInput({ name, label, handleChangeState }: Props) {
  return (
    <>
      <Input
        onChangeText={(text) => handleChangeState(text)}
        label={label}
        secureTextEntry={name.includes('password') ? true : false}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </>
  )
}