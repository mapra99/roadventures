import { isAxiosError } from 'axios'
import client from '../client'
import { UserSchema, type User } from '../schemas'
import  { SignUpErrorsSchema, type SignUpParams, type SignUpErrors } from './types'

const SIGN_UP_ENDPOINT = '/auth'

async function signUp(params: SignUpParams): Promise<[true, User] | [false, SignUpErrors['errors']]> {
  try {
    const { data } = await client.post(SIGN_UP_ENDPOINT, { user: params })
    const user = UserSchema.parse(data)

    return [true, user]
  } catch (error) {
    if (!isAxiosError(error)) throw new Error('Something went really wrong')
    if (!error.response) throw new Error(error.message)
    if (error.response.status !== 422) throw new Error(`Unhandled status code: ${error.response.status}`)

    const { data } = error.response
    const { errors } = SignUpErrorsSchema.parse(data)

    return [false, errors]
  }
}

export default signUp
