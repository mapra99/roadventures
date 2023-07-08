module Types
  class MutationType < Types::BaseObject
    extend Authenticatable

    field :create_trip, mutation: Mutations::CreateTrip
  end
end
