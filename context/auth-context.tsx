import React, { createContext, ReactElement, useReducer } from "react";
import server from "../api/server";
import jwtDecode from 'jwt-decode'
import { SignupProps } from "../screens/login/signup-screen";
import { LoginProps } from "../screens/login/login-screen";


interface IAuthContext {
  token: string,
  username: string,
  profileId: string,
  login: any,
  signup: any
}
interface TokenJWT {
  profileId: string,
  username: string
}
interface Action {
  type: string,
  payload?: any
}

const reducer = (state: any, actions: Action) => {
  switch (actions.type) {
    case "login":
      return { ...state, ...actions.payload }
    default:
      return { ...state }
  }
}

const AuthContext = createContext({} as IAuthContext)

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const defaultValue = { token: null, username: null, profileId: null }
  const [state, dispatch] = useReducer(reducer, defaultValue)

  const login = async ({ email, password }: LoginProps) => {
    try {

      const response = await server.post('/login', {
        email,
        password
      });

      const { accessToken } = response.data
      const { profileId, username } = jwtDecode(accessToken) as TokenJWT
      dispatch({ type: 'login', payload: { profileId, token: accessToken, username } })
    } catch (error: any) {
      console.log(error.response)
    }
  }
  const signup = async ({ username, email, password, passwordConfirmation }: SignupProps) => {
    try {
      const response = await server.post('/signup', {
        username,
        email,
        password,
        passwordConfirmation
      })

      console.log(response.data)

    } catch (error: any) {
      console.log(error.response)
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, login, signup }}>
      {children}
    </AuthContext.Provider >
  )
}

export { AuthContextProvider, AuthContext } 