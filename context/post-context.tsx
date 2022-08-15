import { getItemAsync } from "expo-secure-store";
import React, { Children, createContext, ReactElement, useContext, useReducer } from "react";
import server from "../api/server";
import { Post } from "../models/post-model";
import { AuthContext } from "./auth-context";

interface Action {
  type: string
  payload?: any
}
interface CreatePostProps {
  title: string,
  description: string,
  image: any
}

interface IPostContext {
  posts: Post[]
  page: number
  errorMessage: string | null
  isLoading: boolean
  getFeed: (page: number) => Promise<any>
  loadMore: () => void
  resetFeed:  () => void
  onRefresh: () => void


}
const reducer = (state: any, actions: Action) => {
  const { page, posts } = state
  switch (actions.type) {
    case 'refresh': {
      return {...state, page: 0, posts: []}
    }
    case "show_posts":
      return { ...state, isLoading: false, posts: [...posts, ...actions.payload], }
    case "loadmore":
      return { ...state, page: page + 1 }
    default:
      break;
  }
}
const defaultValue = {
  posts: [] as Post[],
  page: 0,
  errorMessage: null,
  isLoading: true
} as IPostContext


export const PostContext = createContext(defaultValue)
export const PostContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue)

  const getFeed = async () => {
    try {
      const token = await getItemAsync('accessToken')
      const response = await server.get(`/feed?page=${state.page}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      dispatch({ type: 'show_posts', payload: response.data })
    } catch (error: any) {
      console.log(error.response)
    }
  }
  const loadMore = () => {
    dispatch({ type: 'loadmore' })
  }
  const onRefresh = async () => {
    dispatch({type: 'refresh'})
    await getFeed()
  }
  const createPost = async ({ title, description, image }: CreatePostProps) => {
    const token = await getItemAsync('accessToken')
    const data = new FormData();

  }

  return (
    <PostContext.Provider
      value={{ ...state, getFeed, loadMore, onRefresh}}
    >
      {children}
    </PostContext.Provider>)
}