import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'
import Home from 'screens/home'
import SCREENS from 'constants/screens'
import useStore from 'store'

const Stack = createNativeStackNavigator()

function MainNavigation() {
  const { currentUser } = useStore()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { currentUser ? (
          <>
            <Stack.Screen name={SCREENS.STACK.HOME} component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name={SCREENS.STACK.LOGIN} component={Login} />
            <Stack.Screen name={SCREENS.STACK.SIGNUP} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
