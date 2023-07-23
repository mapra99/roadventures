import Layout from 'components/layout'
import ActiveTrips from 'components/active-trips'
import PastTrips from 'components/past-trips'
import { FullHeightScrollableBody, BodyWithPadding } from 'components/body'

function Home() {
  return (
    <Layout>
      <FullHeightScrollableBody>
        <BodyWithPadding>
          <ActiveTrips />
          <PastTrips />
        </BodyWithPadding>
      </FullHeightScrollableBody>
    </Layout>
  )
}

export default Home
