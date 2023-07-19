import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import useStore from 'store'
import type { FontsLoaderProps } from './types'


function FontsLoader({ children }: FontsLoaderProps) {
  const [fontsLoaded] = useFonts({
    'Nunito Sans Light': require('../../../assets/fonts/nunito-sans-light.ttf'),
    'Nunito Sans': require('../../../assets/fonts/nunito-sans-regular.ttf'),
    'Nunito Sans Semibold': require('../../../assets/fonts/nunito-sans-semibold.ttf'),
    'Nunito Sans Bold': require('../../../assets/fonts/nunito-sans-bold.ttf'),
  })
  const { removeProcess } = useStore()

  useEffect(() => {
    if(!fontsLoaded) return

    removeProcess('fonts-loader')
  }, [fontsLoaded])



  return (
    <>
      { children }
    </>
  )
}

export default FontsLoader
