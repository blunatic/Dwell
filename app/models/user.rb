class User < ActiveRecord::Base
 	belongs_to :household
 	accepts_nested_attributes_for :household

 	before_create :create_or_join_to_household

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
    
    private

    def create_or_join_to_household
    	household = Household.find_by_name(self.household_id)
    	if household.present? and household.password.eql? self.household_password
    		# join existing household (keep entered household)
    	else
    		# create new household with given name and password
    		Household.create(name: self.household_id, password: self.household_password)
    	end
    end

end
