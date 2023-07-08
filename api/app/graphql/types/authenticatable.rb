module Types
  module Authenticatable
    def authorized?(_object, context)
      return true if skip_authorization?
      return true if context[:current_user].present?

      raise GraphQL::ExecutionError, 'User is not authenticated'
    end

    def skip_authorization?
      false
    end
  end
end
