import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login-screen';
import SignupScreen from './screens/login/signup-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import ProfileScreen from './screens/profile/log-out';
import ProfilesScreen from './screens/profile/profile-screen';
import { AuthContext, AuthContextProvider } from './context/auth-context';
import { useContext, useEffect } from 'react';
import { navigationRef } from './root-navigation';
import { Home } from './screens/home/home-navigation-screnn';

import { PostContextProvider } from './context/post-context';
import { ProfileContextProvider } from './context/profile-context';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function App() {
  const { token, tryLocalLogin, isLoading } = useContext(AuthContext)
  useEffect(() => {
    tryLocalLogin()
  }, [])
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer ref={navigationRef}>
        {isLoading ?
          (null) :
          !token ? (
            <Stack.Navigator
              screenOptions={({ route, navigation }) => ({
                headerShown: false
              })}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={SignupScreen} />
            </Stack.Navigator>) : (
            <Tab.Navigator
              screenOptions={({ route }: any) => ({
                tabBarIcon: (({ color, size }) => {
                  switch (route.name) {
                    case 'Home':
                      return (<MaterialIcons name="home" size={size} color={color}></MaterialIcons>)
                    case 'Profiles':
                      return (<MaterialIcons name="groups" size={size} color={color}></MaterialIcons>)
                    case 'Profile':
                      return (<MaterialIcons name="account-circle" size={size} color={color}></MaterialIcons>)
                    default:
                      break;
                  }
                }),
                headerShown: false
              })}
            >
              <Tab.Screen name='Home' component={Home} />
              {/*  <Tab.Screen name='Post' component={PostDetailScreen} />
              <Tab.Screen name='Create Post' component={CreatePostsScreen} /> */}
              <Tab.Screen name='Profiles' component={ProfilesScreen} />
              <Tab.Screen name='Profile' component={ProfileScreen} />
            </Tab.Navigator>)
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <ProfileContextProvider>
        <App />
        </ProfileContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
