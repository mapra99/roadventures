module Types
  class BaseField < GraphQL::Schema::Field
    include Authenticatable

    argument_class Types::BaseArgument
  end
end
