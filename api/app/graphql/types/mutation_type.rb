module Types
  class MutationType < Types::BaseObject
    field :create_trip, mutation: Mutations::CreateTrip
    field :track_location, mutation: Mutations::TrackLocation
  end
end
