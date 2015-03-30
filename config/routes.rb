Rails.application.routes.draw do
  devise_for :users
  root 'env_data#index'
end
