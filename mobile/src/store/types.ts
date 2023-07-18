import { AuthSlice } from './slices/auth/types'
import { GlobalLoaderSlice } from './slices/global-loader/types'

export type Store = AuthSlice & GlobalLoaderSlice
