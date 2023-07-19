import { useEffect } from 'react'
import useCurrentUser from 'hooks/use-current-user'
import useStore from 'store'

import type { AuthLoaderProps } from './types'

function AuthLoader({ children }: AuthLoaderProps) {
  const { loading } = useCurrentUser()
  const { removeProcess } = useStore()

  useEffect(() => {
    if(loading) return

    removeProcess('current-user')
  }, [loading])

  return <>{ children }</>
}

export default AuthLoader
