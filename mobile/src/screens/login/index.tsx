import { Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Layout from 'components/layout'
import Logo from 'components/logo'
import AuthForm from 'components/auth-form'
import InputField from 'components/input-field'
import COLORS from 'constants/colors'
import { BodyCenteredContent } from 'components/body'
import SignUpBanner from 'components/sign-up-banner'
import { loginUser, loadAccessToken } from 'services/auth'
import useStore from 'store'
import invariant from 'tiny-invariant'
import { useApolloClient } from '@apollo/client'

import type { LoginInputs } from './types'
 
const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required Field'),
  password: Yup.string().required('Required Field')
})

function Login() {
  const updateCurrentUser = useStore(state => state.updateCurrentUser)
  const currentUser = useStore(state => state.currentUser)

  const client = useApolloClient()

  const handleSubmit = async (values: LoginInputs) => {
    const [success, result] = await loginUser(values.email, values.password)
    if (!success) throw new Error(result) // TODO: Handle this better
    if (result.id === currentUser?.id) return

    const accessToken = await loadAccessToken()
    invariant(accessToken, 'Access token should be defined')

    updateCurrentUser(result, accessToken)
    client.resetStore()
  }

  return (
    <Layout>
      <BodyCenteredContent>
        <Logo />

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={LoginValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <AuthForm title="Login">
              <SignUpBanner />

              <InputField
                autoComplete="email"
                placeholder="Email Address"
                autoCapitalize="none"
                inputMode="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                editable
              />

              <InputField
                autoComplete="password"
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                editable
              />

              <Button
                onPress={handleSubmit as any}
                title="Sign in"
                color={COLORS.PRIMARY}
                accessibilityLabel="Learn more about this purple button"
              />
            </AuthForm>
          )}
        </Formik>
      </BodyCenteredContent>
    </Layout>
  )
}

export default Login
