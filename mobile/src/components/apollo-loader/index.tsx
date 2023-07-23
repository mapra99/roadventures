import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ROADIFY_API_URL } from 'react-native-dotenv'
import { loadAccessToken } from 'services/auth'

console.debug({ ROADIFY_API_URL })

import type { ApolloLoaderProps } from './types'

const httpLink = createHttpLink({
  uri: `${ROADIFY_API_URL}/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
  const token = await loadAccessToken()

  console.debug({ userToken: token })

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

function ApolloLoader({ children }: ApolloLoaderProps) {
  return (
    <ApolloProvider client={apolloClient}>
      { children }
    </ApolloProvider>
  )
}

export default ApolloLoader
