import { SecondaryText } from 'components/text'
import NavigationLink from 'components/navigation-link'
import { StyledView } from './styled'
import SCREENS from 'constants/screens'

function SignUpBanner() {
  return (
    <StyledView>
      <SecondaryText>
        Not a user yet?
      </SecondaryText>

      <NavigationLink to={SCREENS.STACK.SIGNUP}>
        <SecondaryText>
          Register Here
        </SecondaryText>
      </NavigationLink>
    </StyledView>
  )
}

export default SignUpBanner
