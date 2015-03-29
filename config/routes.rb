Rails.application.routes.draw do
  root 'styles#index'
  
  get 'styles/index'

  get 'styles/show'

  get 'styles/new'

  get 'styles/list'
end
