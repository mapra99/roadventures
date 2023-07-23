import { graphql } from 'gql-client'

const finishedTripsQuery = graphql(`
query FinishedTrips {
  trips(status: finished) {
    id
    status
    startedAt
    finishedAt
  }
}
`)

export default finishedTripsQuery
