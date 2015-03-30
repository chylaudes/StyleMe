Rails.application.routes.draw do
  get 'home/index'

  devise_for :users
  root 'env_data#index'
end
