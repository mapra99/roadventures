import { create } from 'zustand'
import { createAuthSlice, createGlobalLoaderSlice } from './slices'

import type { Store } from './types'

const useStore = create<Store>()((...a) => ({
  ...createAuthSlice(...a),
  ...createGlobalLoaderSlice(...a)
}))

export default useStore
