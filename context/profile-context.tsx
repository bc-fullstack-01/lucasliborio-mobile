import { getItemAsync } from "expo-secure-store"
import React, { Children, createContext, useReducer } from "react"
import server from "../api/server"
import { Profile } from "../models/profile-model"

interface IProfileContext {
  profiles: Profile[]
  searchProfiles(query: string): Promise<void>
  followUnfollow(profileId: string): Promise<void>
}
interface Action {
  type: string
  payload?: any
}
const defaultValue = {
  profiles: [] as Profile[],

} as IProfileContext
const reducer = (state: any, actions: Action) => {

  switch (actions.type) {
    case 'searchProfile': {
      return { ...state, profiles: actions.payload}
    }
    default:
      break;
  }
}
export const ProfileContext = createContext<IProfileContext>(defaultValue)
export const ProfileContextProvider = ({children}: {children: React.ReactElement}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue )
  
  const searchProfiles = async (query: string) => {
    const token = await getItemAsync('accessToken')
    const profileId = await getItemAsync('profileId') as string
    try {
      const response = await server.get(`/profile/search?q=${query}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      response.data.forEach((p: Profile) =>  {
         p.followers.indexOf(profileId) !== -1 ? p.follow = true : p.follow = false
      })
      dispatch({type: 'searchProfile', payload: response.data})
    } catch (error: any) {
      console.log(error.response)
    }
   
  }
  const followUnfollow = async (profileId: string) => {
    const token = await getItemAsync('accessToken')
    try {
      const response = await server.post(`/profile/${profileId}/follow`, null, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
    } catch (error: any) {
      console.log(error.response)
    }
  }
  return (
    <ProfileContext.Provider value={{
      ...state,
      searchProfiles,
      followUnfollow
    }}> 
      {children}
    </ProfileContext.Provider>
  )
}