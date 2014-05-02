class RegisterhouseholdController < Devise::RegistrationsController
	def new
		super
	end

	def update
		super
	end

  private

	def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :household_id)
  	end
 
  	def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :household_id)
  	end
end
