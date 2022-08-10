import { getItemAsync } from "expo-secure-store";
import React, { Children, createContext, ReactElement, useContext, useReducer } from "react";
import server from "../api/server";
import { Post } from "../models/post-model";
import { AuthContext } from "./auth-context";

interface Action {
  type: string
  payload: any
}

interface IPostContext {
  posts: Post[]
  errorMessage: string | null
  getFeed: () => any


}
const reducer = (state: any, actions: Action) => {
  switch (actions.type) {
    case "show_posts":
      return {...state, posts:[...state.posts, ...actions.payload]}
    default:
      break;
  }
}
const defaultValue = {
  posts: [] as Post[],
  errorMessage: null
} as IPostContext


export const PostContext = createContext(defaultValue)
export const PostContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue)
  
  const getFeed = async () => {
    try {
      const token = await getItemAsync('accessToken')
      console.log(token)
      const response = await server.get('/feed', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      dispatch({type: 'show_posts', payload: response.data})
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <PostContext.Provider
      value={{ ...state, getFeed }}
    >
      {children}
    </PostContext.Provider>)
}