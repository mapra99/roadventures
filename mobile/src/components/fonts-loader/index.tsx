import * as SplashScreen from 'expo-splash-screen'
import useCustomFonts from 'hooks/use-custom-fonts'
import { StyledView } from './styled'
import type { FontsLoaderProps } from './types'

SplashScreen.preventAutoHideAsync()


function FontsLoader({ children }: FontsLoaderProps) {
  const { fontsLoaded, hideSplash } = useCustomFonts()
  if (!fontsLoaded) return null

  return (
    <StyledView onLayout={hideSplash}>
      { children }
    </StyledView>
  )
}

export default FontsLoader
