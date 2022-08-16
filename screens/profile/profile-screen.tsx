import { SearchBar } from "@rneui/base";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ProfilesList } from "../../components/profiles-list";
import { ProfileContext } from "../../context/profile-context";

export default function ProfilesScreen() {
  const {profiles, searchProfiles} = useContext(ProfileContext)
  const [query, setQuery] = useState('')
  useEffect(() => {
     searchProfiles(query)
  }, [query])
  return (
    <View style={styles.container}>
      <SearchBar
        platform="android"
        value={query}
        onChangeText={setQuery}
      />
      <ProfilesList
      profiles={profiles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:80,
    marginBottom:70
  }
})