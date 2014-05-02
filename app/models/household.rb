class Household < ActiveRecord::Base
	has_many :users
	validates :name, :presence => true
	validates :password, :presence => true
end
