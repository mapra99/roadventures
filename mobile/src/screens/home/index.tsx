import Layout from 'components/layout'
import ActiveTrips from 'components/active-trips'
import { BodyWithPadding } from 'components/body'

function Home() {
  return (
    <Layout>
      <BodyWithPadding>
        <ActiveTrips />
      </BodyWithPadding>
    </Layout>
  )
}

export default Home
