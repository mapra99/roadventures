import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'
import Home from 'screens/home'
import useStore from 'store'

const Stack = createNativeStackNavigator()

function MainNavigation() {
  const { currentUser } = useStore()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { currentUser ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign Up" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
