import { isAxiosError } from 'axios'
import client from '../client'
import { UserSchema, type User } from '../schemas'
import  { LoginErrorsSchema, type LoginParams, type LoginErrors } from './types'

const LOGIN_ENDPOINT = '/auth/sign_in'

async function login(params: LoginParams): Promise<[true, User] | [false, LoginErrors['error']]> {
  try {
    const { data } = await client.post(LOGIN_ENDPOINT, { user: params })
    const user = UserSchema.parse(data)

    return [true, user]
  } catch (error) {
    if (!isAxiosError(error)) throw new Error('Something went really wrong')
    if (!error.response) throw new Error(error.message)
    if (error.response.status !== 401) throw new Error(`Unhandled status code: ${error.response.status}`)

    const { data } = error.response
    const errorData = LoginErrorsSchema.parse(data)

    return [false, errorData.error]
  }
}

export default login
