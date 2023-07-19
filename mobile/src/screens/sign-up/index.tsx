import { useState } from 'react'
import { Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import invariant from 'tiny-invariant'
import { useApolloClient } from '@apollo/client'
import Layout from 'components/layout'
import Logo from 'components/logo'
import AuthForm from 'components/auth-form'
import InputField from 'components/input-field'
import COLORS from 'constants/colors'
import { BodyCenteredContent } from 'components/body'
import LogInBanner from 'components/log-in-banner'
import InputGroup from 'components/input-group'
import { ErrorText } from 'components/text'
import useStore from 'store'
import { signUpUser, loadAccessToken } from 'services/auth'

import type { SignUpErrors } from 'rest-client/auth/types'
import type { SignUpInputs } from './types'

const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required Field'),
  password: Yup.string().required('Required Field'),
  password_confirmation: Yup.string().required('Required Field').oneOf([Yup.ref('password')], 'Passwords must match')
})

function SignUp() {
  const [serverErrors, setServerErrors] = useState<SignUpErrors['errors'] | undefined>(undefined)
  const client = useApolloClient()
  const { addProcess, removeProcess, updateCurrentUser } = useStore()

  const handleSubmit = async (values: SignUpInputs) => {
    addProcess('signup')
    const [success, result] = await signUpUser(values)
    if (!success) {
      setServerErrors(result)
      removeProcess('signup')
      return
    }

    const accessToken = await loadAccessToken()
    invariant(accessToken, 'Access token should be defined')

    updateCurrentUser(result, accessToken)
    client.resetStore()
    removeProcess('signup')
  }

  return (
    <Layout>
      <BodyCenteredContent>
        <Logo />

        <Formik
          initialValues={{ email: '', password: '', password_confirmation: '' }}
          onSubmit={handleSubmit}
          validationSchema={SignUpValidationSchema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <AuthForm title="Sign up">
              <LogInBanner />

              <InputGroup>
                <InputField
                  autoComplete="email"
                  placeholder="Email Address"
                  autoCapitalize="none"
                  inputMode="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={!!(errors.email || serverErrors?.email)}
                  editable
                />
                { errors.email && <ErrorText>{ errors.email }</ErrorText> }
                { serverErrors?.email && <ErrorText>{ serverErrors?.email }</ErrorText> }
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
                  error={!!(errors.password || serverErrors)}
                  editable
                />
                { errors.password && <ErrorText>{ errors.password }</ErrorText> }
                { serverErrors?.password && <ErrorText>{ serverErrors?.password }</ErrorText> }
              </InputGroup>

              <InputGroup>
                <InputField
                  autoComplete="password"
                  placeholder="Confirm your password"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={handleChange('password_confirmation')}
                  onBlur={handleBlur('password_confirmation')}
                  value={values.password_confirmation}
                  error={!!(errors.password_confirmation || serverErrors)}
                  editable
                />
                { errors.password_confirmation && <ErrorText>{ errors.password_confirmation }</ErrorText> }
                { serverErrors?.password_confirmation && <ErrorText>{ serverErrors?.password_confirmation }</ErrorText> }
              </InputGroup>

              <Button
                onPress={handleSubmit as any} //eslint-disable-line
                title="Sign up"
                color={COLORS.PRIMARY}
              />
            </AuthForm>
          )}
        </Formik>
      </BodyCenteredContent>
    </Layout>
  )
}

export default SignUp
