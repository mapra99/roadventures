module Types
  class Trip < BaseObject
    description 'A trip'

    field :id, Int, null: false
    field :user, Types::User, null: false
    field :tracking_locations, [Types::TrackingLocation], null: false
    field :status, Types::TripStatus, null: false
  end
end
