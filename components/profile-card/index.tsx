import { Button, Card, Text } from "@rneui/base"
import React, { useContext, useState } from "react"
import { StyleSheet, View } from "react-native"
import { AuthContext } from "../../context/auth-context"
import { ProfileContext } from "../../context/profile-context"
import { Profile } from "../../models/profile-model"
import { CustomAvatar } from "../custom-avatar"

interface Props {
  profile: Profile,
  
}
export const ProfileCard = ({ profile }: Props) => {
  const [follow, setFollow] = useState<boolean>(profile.follow)
  const [numberFollowers, setNumberFollowers] = useState<number>(profile.followers.length)
  const { followUnfollow } = useContext(ProfileContext)
  const handleFollow = async () => {
    await followUnfollow(profile._id)
    setFollow(f => !f)
    follow ? setNumberFollowers((f) => f - 1) : setNumberFollowers((f) => f + 1)
  }
  return (
    <Card>
      <View style={styles.container}>
        <CustomAvatar name={profile.username} />
        <Text h4 style={{ marginLeft: 15 }}>
          {profile.username}
        </Text>
      </View>
      <View style={styles.textInfo}>
        <Text >
          Followers: {numberFollowers}

        </Text>
        <Text>
          Followings: {profile.following.length}
        </Text>
      </View>
      <Button
        title={follow ? 'Unfollow' : 'Follow'}
        onPress={handleFollow}
      ></Button>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  textInfo: {
    marginBottom: 20
  }
})