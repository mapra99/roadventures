import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import useCustomFonts from 'hooks/use-custom-fonts'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const { fontsLoaded, hideSplash } = useCustomFonts()
  if (!fontsLoaded) return null

  return (
    <View style={styles.container} onLayout={hideSplash}>
      <Text style={{fontFamily: 'Nunito Sans'}} >Open up App.js to sasdastart working on youasdadr app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
