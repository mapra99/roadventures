import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'Nunito Sans Light': require('../../../assets/fonts/nunito-sans-light.ttf'),
    'Nunito Sans': require('../../../assets/fonts/nunito-sans-regular.ttf'),
    'Nunito Sans Semibold': require('../../../assets/fonts/nunito-sans-semibold.ttf'),
    'Nunito Sans Bold': require('../../../assets/fonts/nunito-sans-bold.ttf'),
  })

  const hideSplash = useCallback(async () => {
    if (!fontsLoaded) return
    await SplashScreen.hideAsync()
  }, [fontsLoaded])

  return { fontsLoaded, hideSplash }
}
