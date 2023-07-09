import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import useCustomFonts from 'hooks/use-custom-fonts'
import styled from 'styled-components/native'

SplashScreen.preventAutoHideAsync()

const StyledText = styled.Text`
  font-family: 'Nunito Sans';
  font-weight: 700;
`

export default function App() {
  const { fontsLoaded, hideSplash } = useCustomFonts()
  if (!fontsLoaded) return null

  return (
    <View onLayout={hideSplash}>
      <StyledText>Open up App.js to sasdastart working on youasdadr app!</StyledText>
      <StatusBar style="auto" />
    </View>
  )
}
