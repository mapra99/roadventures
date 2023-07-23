import Card from 'components/card'
import { BodyText } from '/components/text'
import type { TripCardProps } from './types'
import { CardWrapper, VerticalWrapper } from './styled'
import { format } from 'date-fns'
import ChevronRightIcon from 'icons/chevron-right-icon'

function TripCard({ trip }: TripCardProps) {

  return (
    <Card>
      <CardWrapper>
        <VerticalWrapper>
          <BodyText>Started at {trip.startedAt ? format(new Date(trip.startedAt), 'yyyy-LL-dd H:mm') : '-'}</BodyText>
          <BodyText>Finished at {trip.finishedAt ? format(new Date(trip.finishedAt), 'yyyy-LL-dd H:mm') : '-'}</BodyText>
        </VerticalWrapper>

        <VerticalWrapper>
          <ChevronRightIcon />
        </VerticalWrapper>
      </CardWrapper>
    </Card>
  )
}

export default TripCard
