import { isAxiosError } from 'axios'
import client from '../client'
import { UserSchema } from '../schemas'
import  { LoginErrorsSchema, type LoginParams, type LoginErrors, type LoginResult } from './types'

const LOGIN_ENDPOINT = '/auth/sign_in'

async function login(params: LoginParams): Promise<[true, LoginResult] | [false, LoginErrors['error']]> {
  try {
    const { data, headers } = await client.post(LOGIN_ENDPOINT, { user: params })
    const user = UserSchema.parse(data)

    console.log({ headers })
    const authHeader = headers['authorization']
    const accessToken = authHeader.split('Bearer ')[1]

    return [true, { accessToken, user }]
  } catch (error) {
    if (!isAxiosError(error)) throw error
    if (!error.response) throw new Error(error.message)
    if (error.response.status !== 401) throw new Error(`Unhandled status code: ${error.response.status}`)

    const { data } = error.response
    const errorData = LoginErrorsSchema.parse(data)

    return [false, errorData.error]
  }
}

export default login
