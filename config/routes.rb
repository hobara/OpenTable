Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource  :session, only: [:create, :destroy, :show]
    resources :cities, only: [:show, :index]
    resources :restaurants, only: [:create, :show, :index, :edit, :destroy]
  end

  root to: "static_pages#root"
end
