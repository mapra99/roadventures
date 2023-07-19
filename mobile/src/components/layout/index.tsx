import { StatusBar } from 'expo-status-bar'
import Body from 'components/body'
import { ActivityIndicator } from 'react-native'
import { GlobalLoaderContainer } from './styled'
import COLORS from 'constants/colors'
import useStore from 'store'

import type { LayoutProps } from './types'

function Layout({ children }: LayoutProps) {
  const { activeProcesses } = useStore()

  return (
    <Body>
      {activeProcesses.length !== 0 ? (
        <GlobalLoaderContainer>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </GlobalLoaderContainer>
      ) : (
        <>
          { children }
        </>
      )}
      <StatusBar style="auto" />
    </Body>
  )
}

export default Layout
