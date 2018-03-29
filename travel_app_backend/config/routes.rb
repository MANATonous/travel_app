Rails.application.routes.draw do
  resources :user_trips
  resources :events
  resources :trips
  resources :users
  resources :register
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
