import { graphql } from 'gql-client'

const currentUserQuery = graphql(`
query CurrentUser {
  currentUser {
    id
    email
  }
}
`)

export default currentUserQuery
