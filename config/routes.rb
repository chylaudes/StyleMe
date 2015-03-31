Rails.application.routes.draw do

  devise_for :users
  root 'home#index'

   resources :styles, shallow: true 

  
  # get 'styles/index'

  # get 'styles/show'

  # get 'styles/new'

  # get 'styles/list'

end
