import { signUp, login, logout } from 'rest-client'
import * as ss from './secure-store'

import type { SignUpParams } from 'rest-client/auth/types'

const ACCESS_TOKEN_KEY = 'accessToken'

export async function signUpUser(params: SignUpParams) {
  const [success, result] = await signUp(params)
  if (!success) return [false, result]

  return result
}

export async function loginUser(email: string, password: string) {
  const [success, result] = await login({ email, password })
  if (!success) return [false, result]

  const { accessToken } = result
  await ss.save(ACCESS_TOKEN_KEY, accessToken)

  return [true, result]
}

export async function logoutUser() {
  const accessToken = await loadAccessToken()
  await ss.remove(ACCESS_TOKEN_KEY)
  await logout(accessToken)
}

export async function loadAccessToken() {
  const token = await ss.load(ACCESS_TOKEN_KEY)
  return token
}
