module Api
  module V1
    class BaseController < Api::BaseController
      before_action :authenticate_user!
    end
  end
end
