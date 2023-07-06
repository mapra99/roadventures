class TestController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: { test: 'ok', user: current_user }
  end
end
