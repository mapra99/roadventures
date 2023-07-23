module Mutations
  class FinishTrip < BaseMutation
    argument :trip_id, Int, loads: Types::Trip

    field :trip, Types::Trip, null: true
    field :errors, [String], null: false

    def resolve(trip:)
      return { trip:, errors: [] } if trip.update(status: ::Trip::FINISHED, finished_at: Time.zone.now)

      { errors: trip.errors.full_messages }
    end

    def load_trip(id)
      context[:current_user].trips.find(id)
    end
  end
end
