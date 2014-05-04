class Household < ActiveRecord::Base
	has_many :users
	accepts_nested_attributes_for :users

	validates :name, :presence => true
	validates :password, :presence => true
	validates_confirmation_of :password

end
