Rails.application.routes.draw do
  resources :messages
  resources :user_trips
  resources :events
  resources :trips
  resources :users
  resources :register


  get 'user_info/:user_id'  => 'users#user_info'
  get 'messages_by_trip/:trip_id' => 'messages#messages_by_trip'
  get 'events_by_trip/:trip_id' => 'events#events_by_trip'
  get 'trips_by_user/:user_id' => 'trips#trips_by_user'
  get 'find_trip/:trip_id' => 'trips#find_trip'

  post 'user_token' => 'user_token#create'
  post 'join_trip' => 'trips#join'
  post 'trips_by_user' => 'trips#trips_by_user'

  patch 'trip' => 'trips#update'

  delete 'delete_event/:id' => 'events#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
