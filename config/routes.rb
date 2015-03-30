Rails.application.routes.draw do

  devise_for :users
  root 'home#index'
  
  get 'styles/index'

  get 'styles/show'

  get 'styles/new'

  get 'styles/list'

end
