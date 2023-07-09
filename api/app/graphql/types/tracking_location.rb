module Types
  class TrackingLocation < BaseObject
    description 'A tracking location'

    field :id, ID, null: false
    field :latitude, Float, null: false
    field :longitude, Float, null: false
    field :recorded_at, GraphQL::Types::ISO8601DateTime, null: false
    field :trip, Types::Trip, null: false
  end
end
