import Layout from 'components/layout'
import ActiveTrips from 'components/active-trips'
import PastTrips from 'components/past-trips'
import { FullHeightScrollableBody, BodyWithPadding } from 'components/body'
import { Button } from 'react-native'
import COLORS from 'constants/colors'
import { TopBarWrapper } from './styled'

function Home() {
  return (
    <Layout>
      <FullHeightScrollableBody>
        <BodyWithPadding>
          <TopBarWrapper>
            <Button title="Start new trip" color={COLORS.PRIMARY} />
          </TopBarWrapper>
          <ActiveTrips />
          <PastTrips />
        </BodyWithPadding>
      </FullHeightScrollableBody>
    </Layout>
  )
}

export default Home
