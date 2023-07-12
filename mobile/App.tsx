import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ROADIFY_API_URL } from 'react-native-dotenv'
import FontsLoader from 'components/fonts-loader'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'
import SCREENS from 'constants/screens'
import * as Auth from 'services/auth'
import { currentUserQuery } from 'queries'
import useStore from 'store'

const Stack = createNativeStackNavigator()

const httpLink = createHttpLink({
  uri: `${ROADIFY_API_URL}/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
  const token = await Auth.loadAccessToken()

  return {
    headers: {
      ...headers,
      'Authorization': token ? `Bearer ${token}` : '',
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

console.log({ ROADIFY_API_URL })

export default function App() {
  const { data } = useQuery(currentUserQuery)
  // const updateCurrentUser = useStore(store => store.updateCurrentUser)



  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <FontsLoader>
          <Stack.Navigator>
            <Stack.Screen name={SCREENS.STACK.LOGIN} component={Login} />
            <Stack.Screen name={SCREENS.STACK.SIGNUP} component={SignUp} />
          </Stack.Navigator>
        </FontsLoader>
      </NavigationContainer>
    </ApolloProvider>
  )
}
