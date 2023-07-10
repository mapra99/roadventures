import {NavigationProp, ParamListBase} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { StyledTouchableOpacity } from './styled'
import type { NavigationLinkProps } from './types'

function NavigationLink({ children, to}: NavigationLinkProps) {
  const navigation = useNavigation() as NavigationProp<ParamListBase>

  const goToScreen = () => {
    navigation.navigate(to)
  }

  return (
    <StyledTouchableOpacity onPress={goToScreen}>
      {children}
    </StyledTouchableOpacity>
  )
}

export default NavigationLink
