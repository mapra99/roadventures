module Types
  class MutationType < Types::BaseObject
    field :create_trip, mutation: Mutations::CreateTrip
    field :track_location, mutation: Mutations::TrackLocation
    field :finish_trip, mutation: Mutations::FinishTrip
  end
end
