module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :trip, Types::Trip, null: false do
      argument :id, Int, required: true
    end

    field :trips, [Types::Trip], null: false do
      argument :status, Types::TripStatus, required: false
    end

    field :current_user, Types::User, null: true

    def trips(status: nil)
      trips = context[:current_user].trips
      trips = trips.where(status:) if status.present?

      trips
    end

    def trip(id:)
      context[:current_user].trips.find(id)
    end

    def current_user
      context[:current_user]
    end
  end
end
