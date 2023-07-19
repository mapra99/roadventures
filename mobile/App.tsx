import MainNavigation from 'navigation/main-navigation'
import FontsLoader from 'components/fonts-loader'
import AuthLoader from 'components/auth-loader'
import ApolloLoader from 'components/apollo-loader'

export default function App() {
  return (
    <ApolloLoader>
      <AuthLoader>
        <FontsLoader>
          <MainNavigation />
        </FontsLoader>
      </AuthLoader>
    </ApolloLoader>
  )
}
