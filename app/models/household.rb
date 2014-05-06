class Household < ActiveRecord::Base
	has_many :users
	has_many :events
	accepts_nested_attributes_for :users
	accepts_nested_attributes_for :events


	validates :name, :presence => true
	validates :password, :presence => true

end
