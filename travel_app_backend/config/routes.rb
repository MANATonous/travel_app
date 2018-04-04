Rails.application.routes.draw do
  resources :messages
  resources :user_trips
  resources :events
  resources :trips
  resources :users
  resources :register
  get 'trips_by_user/:user_id' => 'trips#trips_by_user'
  post 'user_token' => 'user_token#create'
  post 'join_trip' => 'trips#join'
  post 'find_trip' => 'trips#find_trip'
  post 'trips_by_user' => 'trips#trips_by_user'
  get '/messages', to: 'messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
