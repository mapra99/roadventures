module Types
  class User < BaseObject
    description 'A user'

    field :id, Int, null: false
    field :email, String, null: false
    field :trips, [Types::Trip], null: false
  end
end
