Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/api/logout", to: "sessions#destroy"
  post "/api/users", to: "users#create"
  post "/api/login", to: "sessions#create"
end
