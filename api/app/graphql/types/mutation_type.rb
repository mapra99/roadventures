module Types
  class MutationType < Types::BaseObject
    field :create_trip, mutation: Mutations::CreateTrip
  end
end
