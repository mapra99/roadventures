import invariant from 'tiny-invariant'
import { signUp, login, logout } from 'rest-client'
import * as ss from './secure-store'

import type { SignUpErrors, SignUpParams } from 'rest-client/auth/types'
import type { User } from 'rest-client/schemas'

const ACCESS_TOKEN_KEY = 'accessToken'

export async function signUpUser(params: SignUpParams): Promise<[true, User] | [false, SignUpErrors['errors']]> {
  const [signUpSuccess, signUpResult] = await signUp(params)
  if (!signUpSuccess) return [false, signUpResult]

  const [loginSuccess, loginResult] = await loginUser(params.email, params.password)
  if (!loginSuccess) throw new Error(`User created but could not login: ${loginResult}`)

  return [true, loginResult]
}

export async function loginUser(email: string, password: string): Promise<[true, User] | [false, string]> {
  const [success, result] = await login({ email, password })
  if (!success) return [false, result]

  const { accessToken, user } = result
  await ss.save(ACCESS_TOKEN_KEY, accessToken)

  return [true, user]
}

export async function logoutUser() {
  const accessToken = await loadAccessToken()
  invariant(accessToken, 'No access token found')

  await ss.remove(ACCESS_TOKEN_KEY)
  await logout(accessToken)
}

export async function loadAccessToken() {
  const [success, token] = await ss.load(ACCESS_TOKEN_KEY)
  if (success) return token

  return undefined
}
