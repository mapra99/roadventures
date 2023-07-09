import * as SplashScreen from 'expo-splash-screen'
import useCustomFonts from 'hooks/use-custom-fonts'
import Layout from 'components/layout'
// import Login from 'screens/login'
import SignUp from 'screens/sign-up'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const { fontsLoaded, hideSplash } = useCustomFonts()
  if (!fontsLoaded) return null

  return (
    <Layout onLayout={hideSplash}>
      <SignUp />
    </Layout>
  )
}
