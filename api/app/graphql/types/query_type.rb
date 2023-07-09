module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :trip, Types::Trip, null: false do
      argument :id, ID, required: true
    end

    field :trips, [Types::Trip], null: false

    def trips
      context[:current_user].trips
    end

    def trip(id:)
      context[:current_user].trips.find(id)
    end
  end
end
