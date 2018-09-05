Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, path: "/api/users", only: [:create, :update]
  get "/api/logout", to: "sessions#destroy"
  post "/api/login", to: "sessions#create"
end
