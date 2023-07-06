class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  respond_to :json

  private

  def authenticate_user!
    return head :unauthorized unless user_signed_in?
  end
end
