import type { AuthFormProps } from './types'
import { StyledView, StyledTitle } from './styled'

function AuthForm({ children, title }: AuthFormProps) {
  return (
    <StyledView>
      <StyledTitle>
        { title }
      </StyledTitle>

      { children }
    </StyledView>
  )
}

export default AuthForm
