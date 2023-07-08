module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField
    extend Authenticatable

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :trips, [Types::Trip], null: false

    def trips
      context[:current_user].trips
    end
  end
end
