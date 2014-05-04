class User < ActiveRecord::Base
 	belongs_to :household
 	validate :household_password_incorrect

 	before_create :create_or_join_to_household

    
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
    
    private

    def create_or_join_to_household
    	household = Household.find_by_name(self.household_name)
    	if household.present? and household.password.eql? self.household_password
    		# join existing household (keep entered household)
    		self.household_id = household.id
    	# elsif household.present? and household.password != self.household_password
    	# 	# if password doesn't match, try again
    	# 	errors.add_to_base("Password for household is incorrect. Try again")
    	else
    	    # create new household with given name and password
    		@new_household = Household.create(name: self.household_name, password: self.household_password)

    		self.household_id = @new_household.id
    	end
    end

    def household_password_incorrect
    	household = Household.find_by_name(self.household_name)
    	if household.present? and household.password != self.household_password
    		errors.add(:household_password, "is incorrect. Please try again")
    	end
    end

end
