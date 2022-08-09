import { MaterialIcons } from "@expo/vector-icons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { TouchableOpacity } from "react-native"
import CreatePostScreen from "../post/create-post-screen"
import PostDetailScreen from "../post/post-detail-screen"
import FeedScreen from "./feed-screen"

const Stack = createNativeStackNavigator()
export const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Feed'
        component={FeedScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity>
              <MaterialIcons name="edit" color='blue' size={24} onPress={() => navigation.navigate('PostCreate')} />
            </TouchableOpacity>
          )
        })
        }
      />
      <Stack.Screen
        name='PostDetail'
        component={PostDetailScreen}
        options={{title: 'Post'}}
      />
      <Stack.Screen
        name='PostCreate'
        component={CreatePostScreen}
        options={{title: 'New Post'}}
      />
    </Stack.Navigator>
  )
}