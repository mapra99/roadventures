import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'Nunito Sans': require('../../../assets/fonts/nunito-sans.ttf'),
  })

  const hideSplash = useCallback(async () => {
    if (!fontsLoaded) return
    await SplashScreen.hideAsync()
  }, [fontsLoaded])

  return { fontsLoaded, hideSplash }
}
