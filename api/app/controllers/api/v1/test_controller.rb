module Api
  module V1
    class TestController < BaseController
      def index
        render json: { test: 'ok', user: current_user }
      end
    end
  end
end
