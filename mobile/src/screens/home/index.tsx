import { useEffect } from 'react'
import Layout from 'components/layout'
import { BodyText } from 'components/text'

import { removeAccessToken } from 'services/auth'

function Home() {
  useEffect(() => {
    removeAccessToken()
  }, [])

  return (
    <Layout>
      <BodyText>HOLI USUARIO</BodyText>
    </Layout>
  )
}

export default Home
