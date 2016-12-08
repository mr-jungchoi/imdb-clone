Rails.application.routes.draw do
  resources :movies, only: [:index, :create, :show]

  get '/movies/show' => 'movies#show'

  root :to => 'movies#index'
end
