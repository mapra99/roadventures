import { SecondaryText } from 'components/text'
import NavigationLink from 'components/navigation-link'
import { StyledView } from './styled'
import SCREENS from 'constants/screens'

function LogInBanner() {
  return (
    <StyledView>
      <SecondaryText>
        Already a user?
      </SecondaryText>

      <NavigationLink to={SCREENS.STACK.LOGIN}>
        <SecondaryText>
          Sign in here
        </SecondaryText>
      </NavigationLink>
    </StyledView>
  )
}

export default LogInBanner
