import SectionContainer from 'components/section-container'
import { HeadingText } from 'components/text'
import TripsList from 'components/trips-list'
import TripCard from 'components/trip-card'
import { useQuery } from '@apollo/client'
import { activeTripsQuery } from 'queries'

function ActiveTrips() {
  const { data: result } = useQuery(activeTripsQuery)

  if (!result) return null

  return (
    <SectionContainer>
      <HeadingText>Active Trips</HeadingText>

      <TripsList>
        { result.trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </TripsList>
    </SectionContainer>
  )
}

export default ActiveTrips
