import type { User } from 'rest-client/schemas'

export interface AuthSlice {
  accessToken: string | null
  currentUser: User | null
  updateCurrentUser: (currentUser: User, accessToken: string) => void
}
