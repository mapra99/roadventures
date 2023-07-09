module Mutations
  class TrackLocation < BaseMutation
    argument :trip_id, ID, loads: Types::Trip
    argument :latitude, Float, required: true
    argument :longitude, Float, required: true
    argument :recorded_at, GraphQL::Types::ISO8601DateTime, required: true

    field :tracking_location, Types::TrackingLocation, null: true
    field :errors, [String], null: false

    def resolve(trip:, latitude:, longitude:, recorded_at:)
      location = trip.tracking_locations.build(
        latitude:,
        longitude:,
        recorded_at:
      )

      if location.save
        { tracking_location: location, errors: [] }
      else
        { errors: location.errors.full_messages }
      end
    end

    def authorized?(trip:, **args)
      return true if trip.user == context[:current_user]

      raise GraphQL::ExecutionError, 'You are not the owner of this trip.'
    end

    def load_trip(id)
      ::Trip.find(id)
    end
  end
end
