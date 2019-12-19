Rails.application.routes.draw do
  namespace :api do
    resources :products do
      resources :reviews, only: [:index, :create]
    end
  end
end
