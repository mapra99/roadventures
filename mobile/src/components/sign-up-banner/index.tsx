import { SecondaryText } from 'components/text'
import NavigationLink from 'components/navigation-link'
import { StyledView } from './styled'

function SignUpBanner() {
  return (
    <StyledView>
      <SecondaryText>
        Not a user yet?
      </SecondaryText>

      <NavigationLink to="Sign Up">
        <SecondaryText>
          Register Here
        </SecondaryText>
      </NavigationLink>
    </StyledView>
  )
}

export default SignUpBanner
