import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ROADIFY_API_URL } from 'react-native-dotenv'
import * as Auth from 'services/auth'
import MainNavigation from 'navigation/main-navigation'
import FontsLoader from 'components/fonts-loader'
import GlobalLoader from 'components/global-loader'

const httpLink = createHttpLink({
  uri: `${ROADIFY_API_URL}/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
  // const token = await Auth.loadAccessToken()
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg5NTUyOTI1LCJleHAiOjE2ODk1NTY1MjUsImp0aSI6Ijg5ODM1Y2NlLWVhOTAtNDMxYy1hNDMzLWZjNjZiNzdkNDI1MiJ9.n3BX9updirfJ8ZLsfqc-Q8czYm0Ts7EAg04fmBSG0ho"

  console.log({ token })

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

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalLoader>
        <FontsLoader>
          <MainNavigation />
        </FontsLoader>
      </GlobalLoader>
    </ApolloProvider>
  )
}
