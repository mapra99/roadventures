Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }, path: 'api/v1/auth'

  namespace :api do
    namespace :v1 do
      resources :test, only: [:index]
    end
  end
end
