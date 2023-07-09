module Types
  class User < BaseObject
    description 'A user'

    field :id, ID, null: false
    field :email, String, null: false
    field :trips, [Types::Trip], null: false
  end
end
