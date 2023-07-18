import { useState } from 'react'
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
import InputGroup from 'components/input-group'
import { ErrorText } from 'components/text'
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
  const [serverError, setServerError] = useState<string | undefined>(undefined)
  const updateCurrentUser = useStore(state => state.updateCurrentUser)
  const client = useApolloClient()

  const handleSubmit = async (values: LoginInputs) => {
    const [success, result] = await loginUser(values.email, values.password)
    if (!success) {
      setServerError(result)
      return
    }

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
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <AuthForm title="Login">
              <SignUpBanner />
              { serverError && <ErrorText>{ serverError }</ErrorText> }

              <InputGroup>
                <InputField
                  autoComplete="email"
                  placeholder="Email Address"
                  autoCapitalize="none"
                  inputMode="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={!!(errors.email || serverError)}
                  editable
                />
                { errors.email && <ErrorText>{ errors.email }</ErrorText> }
              </InputGroup>

              <InputGroup>
                <InputField
                  autoComplete="password"
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={!!(errors.password || serverError)}
                  editable
                />
                { errors.password && <ErrorText>{ errors.password }</ErrorText> }
              </InputGroup>

              <Button
                onPress={handleSubmit as any} //eslint-disable-line
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
