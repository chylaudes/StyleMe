Rails.application.routes.draw do
devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations" }

  root 'home#index'
  
  get 'styles/index'

  get 'styles/show'

  get 'styles/new'

  get 'styles/list'

end
