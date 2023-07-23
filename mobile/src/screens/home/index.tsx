import Layout from 'components/layout'
import ActiveTrips from 'components/active-trips'
import { FullHeightScrollableBody, BodyWithPadding } from 'components/body'

function Home() {
  return (
    <Layout>
      <FullHeightScrollableBody>
        <BodyWithPadding>
          <ActiveTrips />
        </BodyWithPadding>
      </FullHeightScrollableBody>
    </Layout>
  )
}

export default Home
