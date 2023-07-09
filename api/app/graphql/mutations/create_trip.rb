module Mutations
  class CreateTrip < BaseMutation
    argument :status, Types::TripStatus, required: false, default_value: 'started'

    field :trip, Types::Trip, null: true
    field :errors, [String], null: false

    def resolve(status:)
      trip = context[:current_user].trips.build(status:)

      if trip.save
        { trip:, errors: [] }
      else
        { errors: trip.errors.full_messages }
      end
    end
  end
end
