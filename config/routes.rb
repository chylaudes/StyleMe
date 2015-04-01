Rails.application.routes.draw do
  get 'outfits/index'

  get 'outfits/show'

devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations" }

  root 'home#index'

   resources :styles, shallow: true


  # get 'styles/index'

  # get 'styles/show'

  # get 'styles/new'

  # get 'styles/list'

end
