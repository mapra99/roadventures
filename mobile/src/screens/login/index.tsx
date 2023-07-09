import { Button } from 'react-native'
import Logo from 'components/logo'
import AuthForm from 'components/auth-form'
import InputField from 'components/input-field'
import COLORS from 'constants/colors'
import { StyledFlexCenterView } from './styled'

function Login() {
  return (
    <StyledFlexCenterView>
      <Logo />

      <AuthForm title="Login">
        <InputField
          autoComplete="email"
          placeholder="Email Address"
          autoCapitalize="none"
          inputMode="email"
          editable
        />

        <InputField
          autoComplete="password"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          editable
        />

        <Button
          onPress={(e) => console.log(e)}
          title="Sign in"
          color={COLORS.PRIMARY}
          accessibilityLabel="Learn more about this purple button"
        />
      </AuthForm>
    </StyledFlexCenterView>
  )
}

export default Login
