import { Button } from 'react-native'
import Layout from 'components/layout'
import Logo from 'components/logo'
import AuthForm from 'components/auth-form'
import InputField from 'components/input-field'
import COLORS from 'constants/colors'
import { BodyCenteredContent } from 'components/body'
import LogInBanner from 'components/log-in-banner'
import { signUp } from 'rest-client'

function SignUp() {
  const handleSignUp = async () => {
    const [success, result] = await signUp({ email: 'mapra99@gmail.com', password: '123456', password_confirmation: '123456' })

    if (success) {
      console.log(typeof result)
    } else {
      console.log(typeof result)
    }
  }

  return (
    <Layout>
      <BodyCenteredContent>
        <Logo />

        <AuthForm title="Sign up">
          <LogInBanner />

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

          <InputField
            autoComplete="password"
            placeholder="Confirm your password"
            autoCapitalize="none"
            secureTextEntry
            editable
          />

          <Button
            onPress={handleSignUp}
            title="Sign up"
            color={COLORS.PRIMARY}
            accessibilityLabel="Learn more about this purple button"
          />
        </AuthForm>
      </BodyCenteredContent>
    </Layout>
  )
}

export default SignUp
