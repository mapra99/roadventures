import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FontsLoader from 'components/fonts-loader'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <FontsLoader>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign up" component={SignUp} />
        </Stack.Navigator>
      </FontsLoader>
    </NavigationContainer>
  )
}
