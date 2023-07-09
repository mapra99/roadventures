import { Image } from 'react-native'
import { SuperTitleText } from 'components/text'
import FlexCenterView from 'components/flex-center-view'

function Logo() {
  return (
    <FlexCenterView>
      <Image
        source={require('../../../assets/logo-dark-transparent.png')}
      />

      <SuperTitleText>roadify</SuperTitleText>
    </FlexCenterView>
  )
}

export default Logo
