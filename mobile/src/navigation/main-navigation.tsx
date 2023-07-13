import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'
import SCREENS from 'constants/screens'

const Stack = createNativeStackNavigator()

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.STACK.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.STACK.SIGNUP} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
