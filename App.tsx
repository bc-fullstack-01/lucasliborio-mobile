import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login-screen';
import SignupScreen from './screens/login/signup-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/HomeScreen';
import PostDetailScreen from './screens/post/post-detail-screen';
import ProfileScreen from './screens/profile/ProfileScreen';
import ProfilesScreen from './screens/profile/ProfilesScreen';
import CreatePostsScreen from './screens/post/create-post-screen';
import { AuthContext, AuthContextProvider } from './context/auth-context';
import { useContext } from 'react';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  const { token } = useContext(AuthContext)
  console.log(token)
  return (
    <SafeAreaProvider>
      <StatusBar />
      <AuthContextProvider>
        <NavigationContainer>
          {!token ? (
            <Stack.Navigator
              screenOptions={({ route, navigation }) => ({
                headerShown: false
              })}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={SignupScreen} />
            </Stack.Navigator>) : (
            <Tab.Navigator>
              <Tab.Screen name='Home' component={HomeScreen} />
              <Tab.Screen name='Post' component={PostDetailScreen} />
              <Tab.Screen name='Create Post' component={CreatePostsScreen} />
              <Tab.Screen name='Profile' component={ProfileScreen} />
              <Tab.Screen name='Profiles' component={ProfilesScreen} />
            </Tab.Navigator>)
          }
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
