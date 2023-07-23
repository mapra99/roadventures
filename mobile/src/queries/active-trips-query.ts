import { graphql } from 'gql-client'

const activeTripsQuery = graphql(`
query ActiveTrips {
  trips(status: started) {
    id
    status
    startedAt
    finishedAt
  }
}
`)

export default activeTripsQuery
