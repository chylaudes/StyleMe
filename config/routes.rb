Rails.application.routes.draw do
  # get 'outfits/index'

  # get 'outfits/show'

devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations" }

  root 'home#index'
  resources :styles, shallow: true
  resources :outfits, shallow: true
  delete '/outfits/:id', to: 'outfits#delete', as:'outfits_delete'


  # get 'styles/index'

  # get 'styles/show'

  # get 'styles/new'

  # get 'styles/list'

end
