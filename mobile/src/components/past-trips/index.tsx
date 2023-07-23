import SectionContainer from 'components/section-container'
import { HeadingText } from 'components/text'
import TripsList from 'components/trips-list'
import TripCard from 'components/trip-card'
import { useQuery } from '@apollo/client'
import { finishedTripsQuery } from 'queries'

function PastTrips() {
  const { data: result } = useQuery(finishedTripsQuery)

  if (!result) return null

  return (
    <SectionContainer>
      <HeadingText>Past Trips</HeadingText>

      <TripsList>
        { result.trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </TripsList>
    </SectionContainer>
  )
}

export default PastTrips
