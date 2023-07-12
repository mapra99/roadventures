import type { StateCreator } from 'zustand'
import type { User } from 'rest-client/schemas'
import type { Store } from '../../types'
import type { AuthSlice } from './types'

const createAuthSlice: StateCreator<Store, [], [], AuthSlice> = (set) => ({
  accessToken: null,
  currentUser: null,
  updateCurrentUser: (currentUser: User, accessToken: string) => set({ accessToken, currentUser })
})

export default createAuthSlice
