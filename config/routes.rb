Dwell::Application.routes.draw do

  resources :events

  mount Ckeditor::Engine => '/ckeditor'
  root to: "home#index"
  resources :households

  resources :confessions
  devise_for :users, :controllers => {:registrations => "registerhousehold"}
  resources :dashboard
  
  #get "contact_about_pages/about"
  #get "contact_about_pages/contact"
  match 'about',       to: 'contact_about_pages#about',    via: 'get'
  match 'contact',       to: 'contact_about_pages#contact',    via: 'get'
  match 'make_payment_path', to: 'dashboard#make_payment_path', via: 'post'

  #match '/about'     to: 'contact_about_pages/about'   via: 'get'
  #match '/contact'   to: 'contact_about_pages/contact'  via: 'get'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
