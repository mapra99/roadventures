import { ActivityIndicator } from 'react-native'
import { ContainerView } from './styled'
import COLORS from 'constants/colors'
import useCurrentUser from 'hooks/use-current-user'

import type { GlobalLoaderProps } from './types'

function GlobalLoader({ children }: GlobalLoaderProps) {
  const { loading } = useCurrentUser()

  if (loading)  return (
    <ContainerView>
      <ActivityIndicator size="large" color={COLORS.PRIMARY} />
    </ContainerView>
  )

  return <>{ children }</>
}

export default GlobalLoader
