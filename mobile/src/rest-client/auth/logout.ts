import { isAxiosError } from 'axios'
import client from '../client'

const LOGOUT_ENDPOINT = '/auth/sign_out'

async function logout(accessToken: string): Promise<boolean> {
  try {
    await client.delete(LOGOUT_ENDPOINT, { headers: { Authorization: `Bearer ${accessToken}` } })

    return true
  } catch (error) {
    if (!isAxiosError(error)) throw new Error('Something went really wrong')
    if (!error.response) throw new Error(error.message)

    return false
  }
}

export default logout
