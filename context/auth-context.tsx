import React, { createContext, ReactElement, useReducer } from "react";
import server from "../api/server";
import jwtDecode from 'jwt-decode'
import { SignupProps } from "../screens/login/signup-screen";
import { LoginProps } from "../screens/login/login-screen";
import SecureStore from 'expo-secure-store'
import Navigate from "../root-navigation";


interface IAuthContext {
  token: string
  username: string
  profileId: string
  errMessage?: string | null
  clearErrorMessage: () => void
  login: ({ email, password }: LoginProps) => Promise<void>
  signup: ({ username, email, password, passwordConfirmation }: SignupProps) => Promise<void>
}
interface TokenJWT {
  profileId: string,
  username: string
}
interface Action {
  type: string,
  payload?: any
}

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "login":
      return { ...state, ...action.payload, errMessage: null }
    case "signup":
      return { ...state, errMessage: null }
    case "add_error":
      return { ...state, errMessage: action.payload }
    case "clearErrMsg":
      return { ...state, errMessage: null }
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
      console.log(response.data)
      const { accessToken } = response.data
      const { profileId, username } = jwtDecode(accessToken) as TokenJWT

      await SecureStore.setItemAsync("token", accessToken)
      await SecureStore.setItemAsync("username", username)
      await SecureStore.setItemAsync("profileId", profileId)

      dispatch({ type: 'login', payload: { profileId, token: accessToken, username } })
    } catch (err: any) {
      console.log(err.response)
      dispatch({
        type: 'add_error',
        payload: 'We have a problem on login, try again'
      })
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
      dispatch({
        type: 'signup'
      })

      Navigate('Login')
    } catch (error: any) {

      dispatch({
        type: 'add_error',
        payload: 'Something go wrong, please try again'
      })
    }
  }
  const clearErrorMessage = () => {
    dispatch({
      type: 'clearErrMsg'
    })
  }
  const tryLocalLogin = () => {
    let items = {
      token: null,
      user: null,
      profile: null
    }
    try {

    } catch (error) {

    }
  }
  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      signup,
      clearErrorMessage
    }}>
      {children}
    </AuthContext.Provider >
  )
}

export { AuthContextProvider, AuthContext } 