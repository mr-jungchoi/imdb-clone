Rails.application.routes.draw do
  resources :movies, only: [:index, :create, :show]

  root :to => 'movies#index'
end
