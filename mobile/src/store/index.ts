import { create } from 'zustand'
import { createAuthSlice } from './slices'

import type { Store } from './types'

const useStore = create<Store>()((...a) => ({
  ...createAuthSlice(...a)
}))

export default useStore
