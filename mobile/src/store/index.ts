import { create } from 'zustand'
import { createAuthSlice } from './slices'

import type { Store } from './types'

const store = create<Store>()((...a) => ({
  ...createAuthSlice(...a)
}))

export default store
