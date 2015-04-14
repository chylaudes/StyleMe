# class RegistrationsController < Devise::RegistrationsController
#   def after_sign_in_path_for(resource)
#     if user_signed_in?
#     styles_path
#   else
#     render new_user_registration_path
#     end
#   end

# end