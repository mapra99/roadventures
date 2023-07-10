import { StatusBar } from 'expo-status-bar'
import Body from 'components/body'

import type { LayoutProps } from './types'

function Layout({ children }: LayoutProps) {
  return (
    <Body>
      { children }

      <StatusBar style="auto" />
    </Body>
  )
}

export default Layout
