import { Button } from 'react-native'
import Layout from 'components/layout'
import Logo from 'components/logo'
import AuthForm from 'components/auth-form'
import InputField from 'components/input-field'
import COLORS from 'constants/colors'
import { BodyCenteredContent } from 'components/body'
import SignUpBanner from 'components/sign-up-banner'

function Login() {
  return (
    <Layout>
      <BodyCenteredContent>
        <Logo />

        <AuthForm title="Login">
          <SignUpBanner />

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
      </BodyCenteredContent>
    </Layout>
  )
}

export default Login
