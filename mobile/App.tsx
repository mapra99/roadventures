import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FontsLoader from 'components/fonts-loader'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'
import SCREENS from 'constants/screens'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <FontsLoader>
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.STACK.LOGIN} component={Login} />
          <Stack.Screen name={SCREENS.STACK.SIGNUP} component={SignUp} />
        </Stack.Navigator>
      </FontsLoader>
    </NavigationContainer>
  )
}
