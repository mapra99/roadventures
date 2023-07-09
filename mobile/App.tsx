import FontsLoader from 'components/fonts-loader'
import Login from 'screens/login'
import SignUp from 'screens/sign-up'

export default function App() {
  return (
    <FontsLoader>
      <Login />
    </FontsLoader>
  )
}
