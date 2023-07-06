Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }, path: 'api/v1/auth'

  namespace :api do
    namespace :v1 do
      post '/graphql', to: 'graphql#execute'
      mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/api/v1/graphql' if Rails.env.development?
      resources :test, only: [:index]
    end
  end
end
