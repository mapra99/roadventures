import axios from 'axios'
import { ROADIFY_API_URL } from 'react-native-dotenv'

console.log({ ROADIFY_API_URL })

const client = axios.create({
  baseURL: ROADIFY_API_URL,
  timeout: 5000,
})

client.defaults.headers.common['Content-Type'] = 'application/json'
client.defaults.headers.common['Accept'] = 'application/json'

export default client
