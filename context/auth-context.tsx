import React, { createContext, ReactElement, useReducer } from "react";
import server from "../api/server";
import jwtDecode from 'jwt-decode'
import { SignupProps } from "../screens/login/signup-screen";
import { LoginProps } from "../screens/login/login-screen";
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
import Navigate from "../root-navigation";


interface IAuthContext {
  token: string
  username: string
  profileId: string
  errMessage?: string | null,
  isLoading: boolean
  clearErrorMessage: () => void
  login: ({ email, password }: LoginProps) => Promise<void>
  signup: ({ username, email, password, passwordConfirmation }: SignupProps) => Promise<void>
  tryLocalLogin(): any
  logout: () => any
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
      return { ...state, ...action.payload, errMessage: null, isLoading: false }
    case "signup":
      return { ...state, errMessage: null }
    case "add_error":
      return { ...state, errMessage: action.payload }
    case "clearErrMsg":
      return { ...state, errMessage: null }
    case "logout":
      return { ...state, token: null, username: null, profileId: null }
    default:
      return { ...state }
  }
}

const AuthContext = createContext({} as IAuthContext)

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const defaultValue = { token: null, username: null, profileId: null, isLoading: true }
  const [state, dispatch] = useReducer(reducer, defaultValue)


  const login = async ({ email, password }: LoginProps) => {
    try {

      const response = await server.post('/login', {
        email,
        password
      });

      const { accessToken } = response.data
      const { profileId, username } = await jwtDecode(accessToken) as TokenJWT

      Promise.all(
        Object.entries(
          Object.fromEntries([["accessToken", accessToken], ["profileId", profileId], ["username", username]]))
          .map(([k, v]) => setItemAsync(k, v)))

      /* await setItemAsync("token", accessToken)
      await setItemAsync("username", username)
      await setItemAsync("profileId", profileId) */

      dispatch({ type: 'login', payload: { profileId, token: accessToken, username } })
    } catch (err: any) {
      console.log('ERR_LOGIN', err.response.data)
      dispatch({
        type: 'add_error',
        payload: "something goes wrong on login, please try again"
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
    } catch (err: any) {
      console.log('ERR_LOGIN', err.response.data)
      dispatch({
        type: 'add_error',
        payload: "something goes wrong on signup, please try again"
      })
    }
  }
  const clearErrorMessage = () => {
    dispatch({
      type: 'clearErrMsg'
    })
  }
  const tryLocalLogin = async () => {
    let items = {
      token: null,
      user: null,
      profile: null
    }
    try {
      const logs = await Promise.all(['profileId', 'accessToken', 'username'].map(async (promise) => await getItemAsync(promise)))
      dispatch({ type: 'login', payload: { profileId: logs[0], token: logs[1], username: logs[2] } })

    } catch (err: any) {


    }
  }
  const logout = async () => {
    await deleteItemAsync('accessToken')
    await deleteItemAsync('profileId')
    await deleteItemAsync('username')
    dispatch({ type: 'logout' })
  }
  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      signup,
      clearErrorMessage,
      tryLocalLogin,
      logout
    }}>
      {children}
    </AuthContext.Provider >
  )
}

export { AuthContextProvider, AuthContext } 