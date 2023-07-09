import { StatusBar } from 'expo-status-bar'
import Body from 'components/body'

import type { LayoutProps } from './types'

function Layout({ children, onLayout }: LayoutProps) {
  return (
    <Body onLayout={onLayout}>
      { children }

      <StatusBar style="auto" />
    </Body>
  )
}

export default Layout
