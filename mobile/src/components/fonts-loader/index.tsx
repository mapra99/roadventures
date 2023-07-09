import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'
import useCustomFonts from 'hooks/use-custom-fonts'
import type { FontsLoaderProps } from './types'

SplashScreen.preventAutoHideAsync()


function FontsLoader({ children }: FontsLoaderProps) {
  const { fontsLoaded, hideSplash } = useCustomFonts()
  if (!fontsLoaded) return null

  return (
    <View onLayout={hideSplash}>
      { children }
    </View>
  )
}

export default FontsLoader
