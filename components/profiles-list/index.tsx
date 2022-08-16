import React, { useContext } from "react"
import { FlatList } from "react-native"
import { AuthContext } from "../../context/auth-context"
import { Profile } from "../../models/profile-model"
import { ProfileCard } from "../profile-card"


interface Props {
  profiles: Profile[]
}

export const ProfilesList = ({ profiles }: Props): JSX.Element => {
  const {profileId} = useContext(AuthContext)
  const profileFilter = profiles.filter(x => x._id !== profileId)
  return (
    <FlatList
      data={profileFilter}
      keyExtractor={({ _id }) => _id}
      renderItem={({ item }) => (
        <ProfileCard
          profile={item}
        />
      )}
    />
  )
}