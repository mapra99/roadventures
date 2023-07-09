module Mutations
  class CreateTrip < BaseMutation
    field :trip, Types::Trip, null: true
    field :errors, [String], null: false

    def resolve
      trip = context[:current_user].trips.build

      if trip.save
        { trip:, errors: [] }
      else
        { errors: trip.errors.full_messages }
      end
    end
  end
end
