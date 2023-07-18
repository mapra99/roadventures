import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { ContainerView } from './styled'
import COLORS from 'constants/colors'
import useCurrentUser from 'hooks/use-current-user'
import useStore from 'store'

import type { GlobalLoaderProps } from './types'

function GlobalLoader({ children }: GlobalLoaderProps) {
  const { loading } = useCurrentUser()
  const { activeProcesses, removeProcess } = useStore()

  useEffect(() => {
    if(loading) return

    removeProcess('current-user')
  }, [loading])

  if (activeProcesses.length !== 0)  return (
    <ContainerView>
      <ActivityIndicator size="large" color={COLORS.PRIMARY} />
    </ContainerView>
  )

  return <>{ children }</>
}

export default GlobalLoader
