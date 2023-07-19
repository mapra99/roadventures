import { SecondaryText } from 'components/text'
import NavigationLink from 'components/navigation-link'
import { StyledView } from './styled'

function LogInBanner() {
  return (
    <StyledView>
      <SecondaryText>
        Already a user?
      </SecondaryText>

      <NavigationLink to="Login">
        <SecondaryText>
          Sign in here
        </SecondaryText>
      </NavigationLink>
    </StyledView>
  )
}

export default LogInBanner
